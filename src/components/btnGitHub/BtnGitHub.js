import './style.css'
import React from 'react';
import gitHubIcon from './gitHub-black.svg';

const BtnGitHub = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="btn-outline">
      <img src={gitHubIcon} alt="" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
