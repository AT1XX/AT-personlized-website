import React from 'react';
import { google, linkin, github, discord, instagram } from './imports';
import './socials.css';

const Brand = () => (
  <div className="at__brand section__padding" id="socials">
    <div data-tooltip="LinkedIn">
      <a 
        href="https://www.linkedin.com/in/abel-abraham-thomas-921bab251/" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <img src={linkin} alt="LinkedIn" />
      </a>
    </div>
    <div data-tooltip="GitHub">
      <a 
        href="https://github.com/AT1XX" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <img src={github} alt="GitHub" />
      </a>
    </div>
    <div data-tooltip="Email">
      <a 
        href="mailto:abelcna2002@gmail.com" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Email"
      >
        <img src={google} alt="Email" />
      </a>
    </div>
    <div data-tooltip="Discord">
      <a 
        href="https://discordapp.com/users/598562180916445222" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Discord"
      >
        <img src={discord} alt="Discord" />
      </a>
    </div>
    <div data-tooltip="Instagram">
      <a 
        href="https://www.instagram.com/abel.thoms1/" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <img src={instagram} alt="Instagram" />
      </a>
    </div>
  </div>
);

export default Brand;