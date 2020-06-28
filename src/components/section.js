import React, {useCallback} from 'react';
import {useRecoilState} from 'recoil';
import {Card, FormGroup, InputGroup, TextArea} from '@blueprintjs/core';
import {set, cloneDeep} from 'lodash-es';

import {resumeState} from '../atoms';

const Section = ({sectionIndex}) => {
  const [resume, setResume] = useRecoilState(resumeState);
  const {name, description} = resume.sections[sectionIndex];
  const onNameChange = useCallback((event) => {
    const updatedResume = cloneDeep(resume);

    set(updatedResume, `sections.${sectionIndex}.name`, event.target.value);

    setResume(updatedResume);
  }, [resume, sectionIndex, setResume]);
  const onDescriptionChange = useCallback((event) => {
    const updatedResume = cloneDeep(resume);

    set(updatedResume, `sections.${sectionIndex}.name`, event.target.value);

    setResume(updatedResume);
  }, [resume, sectionIndex, setResume]);

  return (
    <Card style={{marginBottom: 20}}>
      <FormGroup label="Name">
        <InputGroup
          value={name}
          onChange={onNameChange} />
      </FormGroup>
      <FormGroup label="Description">
        <TextArea
          fill
          value={description}
          onChange={onDescriptionChange} />
      </FormGroup>
    </Card>
  );
};

export {Section as default};
