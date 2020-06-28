import React, {Fragment, useState, useCallback} from 'react';
import {FormGroup, InputGroup, TextArea, Button} from '@blueprintjs/core';

const NewResume = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const onSubmit = useCallback((event) => {
    event.preventDefault();

    if (!name) return;

    // TO BE IMPLEMENTED
  }, [name]);

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <FormGroup label="Name">
          <InputGroup
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
