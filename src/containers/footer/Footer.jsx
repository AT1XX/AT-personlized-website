import React from 'react'
import './footer.css';
import atLogo from '../../assets/ATto.png';
//import  Contact from './components/contact/Contact';
import Contact from '../../components/contact/Contact';

const Footer = () => (
  <div className="at__footer section__padding" id="footer">
    <div className="at__footer-heading">     
        </div>
        <div className="at__footer-linksa">
        </div>     
    <div className="at__footer-links">
      <div className="at__footer-links_logo">
        <img src={atLogo} alt="at_logo" />
        <p>Resides in <br /> Mississauga/Welland,</p>
      </div>
      <div className="at__footer-links_div">
        <h4>Quick Links</h4>
        <p><a href="#home">Home</a></p>
        <p><a href="#wgpt3">About Me</a></p>
        <p><a href="#blog">Projects</a></p>
        <p><a href="https://drive.google.com/file/d/1cTk_nYJnDJRcJoY70hi63mr28wCw-ZU1/view?usp=drive_link" target="_blank" >Resume</a></p>
      </div>
      <div className="at__footer-links_div">
        <h4>AT Social Media</h4>
        <p><a href= "https://discordapp.com/users/598562180916445222" target = "blank">Discord </a></p>
        <p><a href= "https://www.instagram.com/abel.thoms1/" target = "blank">Instagram </a></p>
        <p><a href= "https://t.snapchat.com/8MIVp5Ko" target = "blank">Snapchat</a> </p>
        <p><a href= "https://www.facebook.com/abel.thomas.944023/" target = "blank">Facebook </a></p>
        
      </div>
      <div className="at__footer-links_div">
        <h4>Get in touch</h4>
        <p><a href= "mailto:a10thomas@torontomu.ca" target = "blank">a10thomas@torontomu.ca</a></p>
        <p><a href= "Tel: 647-807-4707" target = "blank">(647)-807-4707</a></p>
        <p><a href= "mailto:abelcna2002@gmail.com" target = "blank">Personal email</a></p>
        <p><a href= "https://www.linkedin.com/in/abel-abraham-thomas-921bab251/" target = "blank">LinkedIn</a></p>
        {/* < Contact ></Contact> */}
      </div>
    </div>

    <div className="at__footer-copyright">
      <p>@2023 AT. All rights reserved.</p>
    </div>
    
  </div>
  
);
export default Footer