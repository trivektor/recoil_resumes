import React, {Fragment, useState, useCallback} from 'react';
import {FormGroup, InputGroup, TextArea, Button} from '@blueprintjs/core';
import {useHistory} from 'react-router-dom';

const NewResume = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const onSubmit = useCallback(async (event) => {
    event.preventDefault();

    if (!name) return;

    const response = await fetch('/api/resumes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, description}),
    });

    const json = await response.json();

    history.push(`/resume/${json._id}`);
  }, [name, description, history]);

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <FormGroup label="Name">
          <InputGroup
            autoFocus
            value={name}
            onChange={(event) => setName(event.target.value)} />
        </FormGroup>
        <FormGroup label="Description">
          <TextArea
            fill
            value={description}
            onChange={(event) => setDescription(event.target.value)} />
        </FormGroup>
        <Button
          type="submit"
          text="Create" />
      </form>
    </Fragment>
  );
};

export {NewResume as default};
