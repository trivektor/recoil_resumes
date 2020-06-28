import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Button, Intent} from '@blueprintjs/core';

const Resumes = () => {
  return (
    <Fragment>
      <Link to="/resumes/new">
        <Button
          text="New Resume"
          intent={Intent.SUCCESS} />
      </Link>
    </Fragment>
  );
};

export {Resumes as default};
