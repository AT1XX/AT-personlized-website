import React, { useState, useEffect } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { 
  HiOutlineHome, 
  HiOutlineUser, 
  HiOutlineHeart,
  HiOutlineCode, 
  HiOutlineMail, 
  HiOutlineDocumentText 
} from 'react-icons/hi';
import logo from '../../assets/ATto.png';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">About Me</a></p>
    <p><a href="#features">Hobbies</a></p>
    <p><a href="#blog">Projects</a></p>
    <p>
      <a 
        href="#" 
        className="info-icon"
        title="Compatibility warning: Best viewed on a fullscreen desktop browser. Mobile optimization in progress."
        onClick={(e) => e.preventDefault()}
      >
        i
      </a>
    </p>
  </>
);

const CR = () => (
  <>
    <p><a href="#footer">Contact</a></p>
    <a 
      href="https://drive.google.com/file/d/1cTk_nYJnDJRcJoY70hi63mr28wCw-ZU1/view?usp=drive_link" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <button type="button">Resume</button>
    </a>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Intersection Observer for active section detection
  useEffect(() => {
    const sections = ['home', 'wgpt3', 'features', 'blog', 'footer'];
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // section considered active when 50% visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Existing scroll logic for hiding navbar
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('home');
      if (header) {
        const headerTop = header.offsetTop;
        const threshold = window.innerWidth > 2000 ? 200 : -5;
        setHideNavbar(window.scrollY > headerTop + threshold);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const closeMenu = () => setToggleMenu(false);

  return (
    <>
      <div className={`at__navbar ${hideNavbar ? 'navbar-hidden' : ''}`} id="navbar">
        <div className="at__navbar-links">
          <div className="at__navbar-links_logo">
            <a href="#home">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="at__navbar-links_container">
            <Menu />
          </div>
        </div>

        <div className="at__navbar-sign">
          <CR />
        </div>

        <div className="at__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          ) : (
            <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
          )}
          {toggleMenu && (
            <div className="at__navbar-menu_container scale-up-center">
              <div className="at__navbar-menu_container-links" onClick={closeMenu}>
                <Menu />
              </div>
              <div className="at__navbar-menu_container-links-sign" onClick={closeMenu}>
                <CR />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar with active highlighting */}
      <div className={`sidebar ${!hideNavbar ? 'sidebar-hidden' : ''}`}>
        <a 
          href="#home" 
          className={`sidebar-icon ${activeSection === 'home' ? 'active' : ''}`} 
          title="Home"
        >
          <HiOutlineHome />
        </a>
        <a 
          href="#wgpt3" 
          className={`sidebar-icon ${activeSection === 'wgpt3' ? 'active' : ''}`} 
          title="About Me"
        >
          <HiOutlineUser />
        </a>
        <a 
          href="#features" 
          className={`sidebar-icon ${activeSection === 'features' ? 'active' : ''}`} 
          title="Hobbies"
        >
          <HiOutlineHeart />
        </a>
        <a 
          href="#blog" 
          className={`sidebar-icon ${activeSection === 'blog' ? 'active' : ''}`} 
          title="Projects"
        >
          <HiOutlineCode />
        </a>
        <a 
          href="#footer" 
          className={`sidebar-icon ${activeSection === 'footer' ? 'active' : ''}`} 
          title="Contact"
        >
          <HiOutlineMail />
        </a>
        <a 
          href="https://drive.google.com/file/d/1cTk_nYJnDJRcJoY70hi63mr28wCw-ZU1/view?usp=drive_link" 
          target="_blank" 
          rel="noopener noreferrer"
          className="sidebar-icon" 
          title="Resume"
        >
          <HiOutlineDocumentText />
        </a>
        <br/>
        <br/>
      </div>
    </>
  );
};

export default Navbar;