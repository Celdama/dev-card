import React from 'react';
import TwitterIcon from '../twitter.svg';
import FacebookIcon from '../facebook.svg';
import InstagramIcon from '../instagram.svg';
import LinkedinIcon from '../linkedin.svg';
import GithubIcon from '../github.svg';

const Footer = () => {
  return (
    <div className='social'>
      <img src={TwitterIcon} alt='twitter-icon' />
      <img src={FacebookIcon} alt='facebook-icon' />
      <img src={InstagramIcon} alt='instagram-icon' />
      <img src={LinkedinIcon} alt='linkedin-icon' />
      <img src={GithubIcon} alt='github-icon' />
    </div>
  );
};

export default Footer;
