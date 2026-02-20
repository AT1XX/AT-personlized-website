import React, { useRef } from 'react';
import './blog.css';
import ProjectCard from '../../components/project/ProjectCard';
import Contact from '../../components/contact/Contact';
import { pic0, pic1, pic2, pic3, pic4 } from './imports';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

const Blog = () => {
  const scrollContainer = useRef(null);

  const projects = [
    {
      id: 1,
      imgUrl: pic1,
      date: 'Winter 2022',
      title: 'BookStore Application',
      description: 'A full-stack web app for managing books, users, and orders with authentication and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubLink: 'https://github.com/AT1XX/Bookstore-App',
      demoLink: 'https://bookstore-demo.com' // optional
    },
    {
      id: 2,
      imgUrl: pic2,
      date: 'Fall 2022',
      title: 'Library Database',
      description: 'A SQL-based library management system with advanced querying, user roles, and reporting features.',
      technologies: ['Java', 'SQL', 'Spring Boot', 'Thymeleaf'],
      githubLink: 'https://github.com/AT1XX/Library-database'
    },
    {
      id: 3,
      imgUrl: pic3,
      date: 'Spring 2023',
      title: 'Personalized Website',
      description: 'A responsive portfolio website built with React, featuring dynamic content and smooth animations.',
      technologies: ['React', 'CSS', 'Framer Motion'],
      githubLink: 'https://github.com/AT1XX/AT-personlized-website'
    },
    {
      id: 4,
      imgUrl: pic4,
      date: 'Fall 2019',
      title: 'Snake and Ladder',
      description: 'A classic board game implemented in Java with a graphical user interface and multiplayer support.',
      technologies: ['Java', 'Swing', 'OOP'],
      githubLink: 'https://github.com/AT1XX/Snake-and-ladder'
    },
    {
      id: 5,
      imgUrl: pic4,
      date: 'Fall 2019',
      title: 'Snake and Ladder',
      description: 'A classic board game implemented in Java with a graphical user interface and multiplayer support.',
      technologies: ['Java', 'Swing', 'OOP'],
      githubLink: 'https://github.com/AT1XX/Snake-and-ladder'
    },
    {
      id: 6,
      imgUrl: pic4,
      date: 'Fall 2019',
      title: 'Snake and Ladder',
      description: 'A classic board game implemented in Java with a graphical user interface and multiplayer support.',
      technologies: ['Java', 'Swing', 'OOP'],
      githubLink: 'https://github.com/AT1XX/Snake-and-ladder'
    },
  ];

  const scroll = (direction) => {
  if (scrollContainer.current) {
    const scrollAmount = scrollContainer.current.clientWidth;
    scrollContainer.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  }
};

  return (
    <div className="at__blog section__padding" id="blog">
      <div className="at__blog-heading">
        <h1 className="gradient__text">A lot is happening, <br /> Here are some of my projects</h1>
      </div>

      <div className="at__blog-container">
        {/* Featured project (left column) */}
        <div className="at__blog-container_groupC">
          <ProjectCard
            imgUrl={pic0}
            date="2018-PRESENT"
            title="Want to see all my projects? Let us explore..."
            description="Visit my GitHub to explore all my repositories, including personal projects, academic work, and contributions."
            technologies={['GitHub', 'Open Source']}
            githubLink="https://github.com/AT1XX"
          />
        </div>

        {/* Horizontal scrollable projects (right column) */}
        <div className="at__blog-container_groupB">
          <div className="carousel-header">
            <h3 className="carousel-title">More Projects</h3>
            <div className="carousel-controls">
              <button onClick={() => scroll('left')} className="carousel-btn" aria-label="Previous projects">
                <HiOutlineChevronLeft />
              </button>
              <button onClick={() => scroll('right')} className="carousel-btn" aria-label="Next projects">
                <HiOutlineChevronRight />
              </button>
            </div>
          </div>
          <div className="projects-carousel" ref={scrollContainer}>
            {projects.map(project => (
              <div key={project.id} className="carousel-item">
                <ProjectCard
                  imgUrl={project.imgUrl}
                  date={project.date}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  githubLink={project.githubLink}
                  demoLink={project.demoLink}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

     {/* GitHub Contributions Section */}
    <div className="at__github-contributions">
      <div className="contributions-text">
        <h2 className="gradient__text">GitHub Activity</h2>
        <p className="subtitle">My contributions in the last year</p>
      </div>
      <div className="contributions-card">
        <div className="github-chart">
          <img 
            src="https://github-contributions-api.deno.dev/AT1XX.svg?theme=dark" 
            alt="GitHub contributions chart"
            loading="lazy"
            onError={(e) => {
              e.target.src = "https://github-contributions-api.deno.dev/AT1XX.svg";
            }}
          />
        </div>
      </div>
    </div>

      <div className="at__blog-contact">
        <p><a href="#footer"><br />Impressed? Contact me by clicking here.</a></p>
      </div>

      <div className="at__footer1 section__padding" id="footer">
        <div className="at__footer-heading">
          <h1 className="gradient__text">Get in touch with me</h1>
        </div>
        <Contact />
        <div className="at__footer-linksa"></div>
        <div className="at__blog-contact">
          <p><a href="#home">Back to the top</a></p>
        </div>
      </div>
    </div>
  );
};

export default Blog;