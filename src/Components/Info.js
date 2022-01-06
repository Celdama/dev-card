import React from 'react';
import Avatar from '../celdama.png';

const Info = () => {
  return (
    <div className='info'>
      <img src={Avatar} alt='celdama-avatar' />
      <h3>Celdama Dev</h3>
      <h5>Frontend Developer</h5>
      <p>celdama.dev.website</p>
      <button>Email</button>
    </div>
  );
};

export default Info;
