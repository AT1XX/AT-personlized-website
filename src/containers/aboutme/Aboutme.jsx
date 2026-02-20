import React from 'react';
import Feature from '../../components/feature/Feature';
import Coding from '../../assets/coding.gif';
import { 
  DiJava, 
  DiPython,
  DiMysql,
  DiReact,
  DiNodejsSmall,
  DiAngularSimple,
  DiDjango,
  DiDocker,
  DiGit,
  DiMongodb,
  DiAws,
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiDatabase,
  DiCode,
  DiVisualstudio,
  DiTerminal
} from 'react-icons/di';
import { 
  SiC,
  SiTypescript,
  SiTensorflow,
  SiPytorch,
  SiFlask,
  SiLinux,
  SiDjango,
  SiGithub,
  SiFirebase,
  SiOpencv,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiGooglecolab,
  SiJson,
  SiMicrosoftazure,
  SiKeras,
  SiPowershell
} from 'react-icons/si';
import { 
  FaCode, 
  FaNetworkWired,
  FaFileCode,
  FaChartLine,
  FaCalculator,
  FaRProject,
  FaMicrochip
} from 'react-icons/fa';
// Replace with your actual image import, e.g.:
// import profilePic from '../../assets/me.jpg';
import './aboutme.css';

const Aboutme = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Java', icon: <DiJava /> },
        { name: 'Python', icon: <DiPython /> },
        { name: 'C', icon: <SiC /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'SQL', icon: <DiDatabase /> },
        { name: 'HTML5', icon: <DiHtml5 /> },
        { name: 'CSS3', icon: <DiCss3 /> },
        { name: 'JavaScript', icon: <DiJavascript1 /> },
        { name: 'XML', icon: <FaFileCode /> },
        { name: 'JSON', icon: <SiJson /> },
        { name: 'Bash', icon: <DiTerminal /> },
        { name: 'PowerShell', icon: <SiPowershell /> }
      ]
    },
    {
      title: 'Frameworks & Tools',
      skills: [
        { name: 'React', icon: <DiReact /> },
        { name: 'Node.js', icon: <DiNodejsSmall /> },
        { name: 'Angular', icon: <DiAngularSimple /> },
        { name: 'Django', icon: <SiDjango /> },
        { name: 'Flask', icon: <SiFlask /> },
        { name: 'Docker', icon: <DiDocker /> },
        { name: 'Git', icon: <DiGit /> },
        { name: 'MongoDB', icon: <DiMongodb /> },
        { name: 'MySQL', icon: <DiMysql /> },
        { name: 'REST APIs', icon: <FaCode /> },
        { name: 'Microservices', icon: <FaNetworkWired /> },
        { name: 'gRPC', icon: <FaNetworkWired /> }
      ]
    },
    {
      title: 'ML & Cloud',
      skills: [
        { name: 'PyTorch', icon: <SiPytorch /> },
        { name: 'TensorFlow', icon: <SiTensorflow /> },
        { name: 'scikit-learn', icon: <SiScikitlearn /> },
        { name: 'Pandas', icon: <SiPandas /> },
        { name: 'NumPy', icon: <SiNumpy /> },
        { name: 'SciPy', icon: <FaCalculator /> },
        { name: 'Matplotlib', icon: <FaChartLine /> },
        { name: 'OpenCV', icon: <SiOpencv /> },
        { name: 'Google Colab', icon: <SiGooglecolab /> },
        { name: 'AWS', icon: <DiAws /> },
        { name: 'Azure', icon: <SiMicrosoftazure /> },
        { name: 'MATLAB', icon: <FaRProject /> },
        { name: 'Keras', icon: <SiKeras /> }
      ]
    }
  ];

  return (
    <div className="at__about section__margin" id="wgpt3">
      <div className="at__about-feature">
        <Feature 
          title="About me" 
          text="'When you have a dream, you've got to grab it and never let go.' – Carol Burnett" 
          showBar={true}
        />
      </div>

      {/* Heading with profile image */}
      <div className="at__about-heading">
        <h1 className="gradient__text">
          Software Engineering Graduate from Toronto Metropolitan University (formerly Ryerson) 
          in May 2025, achieving a 3.60 GPA and Dean's List honours.  
          My experience spans machine learning research at St. Michael's Hospital, 
          full-stack development at a startup, and over 3500 hours of retail leadership.
        </h1>
        <img 
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWp2M3J4MTYzZXEzbGZ1eDc3dzR5YWRwamg3NTI1b2gwYmI4YjUxNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RbtJJPft2P7rcpbBdb/giphy.gif" 
          alt="Abel Thomas"
          className="profile-gif"
        />
      </div>
            {/* Languages and Frameworks side by side */}
      <div className="categories-row">
        <div className="at__about-category">
          <h2 className="category-title gradient__text">{skillCategories[0].title}</h2>
          <div className="at__about-container">
            {skillCategories[0].skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-title">{skill.name}</h3>
                <div className="skill-bar"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="at__about-category">
          <h2 className="category-title gradient__text">{skillCategories[1].title}</h2>
          <div className="at__about-container">
            {skillCategories[1].skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-title">{skill.name}</h3>
                <div className="skill-bar"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ML & Cloud below */}
      <div className="at__about-category full-width">
        <h2 className="category-title gradient__text">{skillCategories[2].title}</h2>
        <div className="at__about-container">
          {skillCategories[2].skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-title">{skill.name}</h3>
              <div className="skill-bar"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="at__about-hobbies">
        <p>
          <a href="#features">Explore my hobbies →</a>
        </p>
      </div>
    </div>
  );
};

export default Aboutme;