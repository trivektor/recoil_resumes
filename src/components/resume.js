import React, {Fragment, useEffect, useCallback} from 'react';
import {useParams} from 'react-router-dom';
import {useRecoilState} from 'recoil';
import {H1, Spinner, Button, Intent} from '@blueprintjs/core';
import {cloneDeep} from 'lodash-es';

import {resumeState} from '../atoms';
import Section from './section';

const Resume = () => {
  const [resume, setResume] = useRecoilState(resumeState);
  const {id} = useParams();
  const onAddSection = useCallback(() => {
    const updatedResume = cloneDeep(resume);

    updatedResume.sections.push({});

    setResume(updatedResume);
  }, [resume, setResume]);
  const onSave = useCallback(() => {
    fetch(`/api/resume/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(resume),
    });
  }, [resume, id]);

  useEffect(() => {
    const fetchResume = async () => {
      const response = await fetch(`/api/resume/${id}`);
      const json = await response.json();

      setResume(json);
    };

    fetchResume();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  if (resume.loading) return <Spinner />;

  const {name, description} = resume;

  return (
    <Fragment>
      <H1>{name}</H1>
      <p>{description}</p>
      {
        resume.sections.length > 0 && (
          <Fragment>
            {resume.sections.map(
              (_, index) => <Section key={index} sectionIndex={index} />
            )}
          </Fragment>
        )
      }
      <div style={{textAlign: "right"}}>
        <Button
          text="Add section"
          onClick={onAddSection} />
        {" "}
        <Button
          intent={Intent.PRIMARY}
          text="Save"
          onClick={onSave} />
      </div>
    </Fragment>
  );
};

export {Resume as default};
