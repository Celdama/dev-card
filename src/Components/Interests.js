import React from 'react';

const Interests = (props) => {
  return (
    <div className='interests'>
      <h2>{props.title}</h2>
      <p>
        I am a frontend developer with a particular interest in making things
        simple and automating daily tasks. I try to keep up with security and
        best practices, and am always looking for new things to learn.
      </p>
    </div>
  );
};

export default Interests;
