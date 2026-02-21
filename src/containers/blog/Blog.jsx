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
      imgUrl: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWJkc3hsbWhwMXB6MjQwc3hwZTRjZWhwZDc1YnZvZjcxMDk2eDl5YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4PLVKYah7HvOoLNBQW/giphy.gif", 
      date: 'Jan 2025 – Apr 2025',
      title: 'Real‑Time Smart Parking System',
      description: 'A cloud‑based smart parking system with real‑time availability, reservations, and dynamic pricing using Azure gRPC services.',
      technologies: ['React', 'TypeScript', 'Firebase', 'gRPC', 'Docker', 'Azure'],
      githubLink: 'https://github.com/dylanccli/Smart-Parking-System',
    },
    {
      id: 2,
      imgUrl: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExams5N2EzOXNyeXV2OWJxYXB5d3FkNWZ4azNhNGZrbzN6cGY3cGh2eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XV1BW1VggErnucTVMp/giphy.gif",
      date: 'Sep 2024 – Apr 2025',
      title: 'Deep Learning Gesture Sync & Engagement',
      description: 'Built a real‑time computer vision system for body‑pose synchronization and engagement detection with 93% accuracy.',
      technologies: ['Python', 'MediaPipe', 'OpenCV', 'TensorFlow', 'Flask', 'MobileNetV2'],
      githubLink: 'https://github.com/AT1XX/sync',
    },
    {
      id: 3,
      imgUrl: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2ljNWZwbG5oaDFjZmVoMGZqOTd3MDNpanU4dXRmODlld213aHF1NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fGCdJutwQwtmvqVNza/giphy.gif",
      date: 'Sep 2024 – Dec 2024',
      title: 'ASL Hand Sign Translator',
      description: 'Created a real‑time ASL translator using transfer learning on ResNet‑50, reaching 94% accuracy across 24 hand signs.',
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'ResNet-50', 'Transfer Learning'],
      githubLink: 'https://github.com/AT1XX/CV-ASL',
    },
    {
      id: 4,
      imgUrl: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWVzajlmZnhteTZuY2ptamFwNG41OWZ1bnB5MHJ6dW4xeXZnYzZqdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YWUvOugDNUBS0MTqkv/giphy.gif",
      date: 'Sep 2023 – Dec 2023',
      title: 'Drone Simulation (JavaFX)',
      description: 'Led drone control implementation in a 12‑person Scrum team, reducing integration issues by 30% through cross‑team coordination.',
      technologies: ['JavaFX', 'Java', 'Python', 'HTML', 'C++', 'Scrum'],
      githubLink: 'https://github.com/AT1XX/Drone-mission',
    },
  {
      id: 5,
      imgUrl: pic1,
      date: 'Winter 2022',
      title: 'BookStore Application',
      description: 'A full-stack web app for managing books, users, and orders with authentication and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubLink: 'https://github.com/AT1XX/Bookstore-App',
      //demoLink: 'https://bookstore-demo.com' // optional
    },
    {
      id: 6,
      imgUrl: pic2,
      date: 'Fall 2022',
      title: 'Library Database',
      description: 'A SQL-based library management system with advanced querying, user roles, and reporting features.',
      technologies: ['Java', 'SQL', 'Spring Boot', 'Thymeleaf'],
      githubLink: 'https://github.com/AT1XX/Library-database'
    },
    {
      id: 7,
      imgUrl: pic3,
      date: 'Spring 2023',
      title: 'Personalized Website',
      description: 'A responsive portfolio website built with React, featuring dynamic content and smooth animations.',
      technologies: ['React', 'CSS', 'Framer Motion'],
      githubLink: 'https://github.com/AT1XX/AT-personlized-website'
    },
    {
      id: 8,
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
            imgUrl="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGp0cXo1eTE0dW9xYzg3NmhxdWptZjNtOGR0bjA5ODlkNTQ3Y2p5eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26tn33aiTi1jkl6H6/giphy.gif"
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