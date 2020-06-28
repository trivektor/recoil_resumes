import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

const Resume = () => {
  const [resume, setResume] = useState({});
  const {id} = useParams();

  useEffect(() => {
    const fetchResume = async () => {
      const response = await fetch(`/api/resume/${id}`);
      const json = await response.json();

      setResume(json);
    };

    fetchResume();
  }, []);

  return (
    <div />
  );
};

export {Resume as default};
