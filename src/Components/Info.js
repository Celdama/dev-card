import React from 'react';
import Avatar from '../celdama.png';
import MailIcon from '../mail.svg';

const Info = () => {
  return (
    <div className='info'>
      <img src={Avatar} alt='celdama-avatar' />
      <h3>Celdama Dev</h3>
      <h5>Frontend Developer</h5>
      <p>celdama.dev@gmail.com</p>
      <button>
        <img src={MailIcon} alt='mail-icon' />
        Email
      </button>
    </div>
  );
};

export default Info;
