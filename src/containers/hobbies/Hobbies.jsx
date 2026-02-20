import React from 'react';
import './hobbies.css';
import Feature from '../../components/feature/Feature';

const featuresData = [
  {
    title: 'Basketball',
    text: "Basketball is one my favourite outdoor sports with my 6'3 height going hand in hand with the game. While I might not be an allstar NBA player, I was part of my highschool basketball team. Although I coudn't bring that passion to university due to the busy engineering schedule but I do play casually during the summer time.",
    icon: '🏀',
    hobbyType: 'basketball',
  },
  {
    title: 'Ping Pong',
    text: 'While outdoor activities are great during summer time, table tennis or also called ping pong is one my favourite indoor sport with it being available all seasons whenever I want in my basement.',
    icon: '🏓',
    hobbyType: 'pingpong',
  },
  {
    title: 'Video Games',
    text: 'During the covid times, video games were my best distraction and entertainment during those outrageous lockdowns. I have played different FPS, RPG, MMO and storymode games but my all time favourte is a FPS game called Valorant with a lifetime peak of Diamond 1. Protip: Delete Valorant if you prefer life :)',
    icon: '🎮',
    hobbyType: 'videogames',
  },
  {
    title: 'Working Out',
    text: 'As a result of video games and the lockdowns, I gained a lot of weight with my weight skyrocketing about 35 pounds. Eventually, with self-realization I decided to make a lifestyle change with some external activites. This included walking and working out at my local community parks due to the lockdowns. It worked, I lost about 50 pounds and currently working on to get leaner and muscular. After the lockdowns, I am currently working out at a local gym hopng to keep the journey going.',
    icon: '🏋️',
    hobbyType: 'workout',
  },
  {
    title: 'Biking',
    text: "Biking is my way of exploring the outdoors and staying active. I enjoy long rides through trails and countryside, feeling the wind and freedom. It's both a workout and a mental reset, and I try to go on at least a 20‑km ride every weekend.",
    icon: '🚴',
    hobbyType: 'biking',
  },
  {
    title: 'Music',
    text: 'Music is my constant companion – I play piano (still learning!), listen to everything from classical to hip‑hop, and enjoy discovering new artists. It fuels my creativity and keeps me focused while working on projects. I also attend local gigs whenever possible and love exploring how music and technology intersect.',
    icon: '🎵',
    hobbyType: 'music',
  },
];

const Features = () => (
  <div className="at__features section__padding" id="features">
    <div className="at__features-heading">
      <h1 className="gradient__text">My Hobbies</h1>
      <p>My hobbies are essentially an active pursuit of my personal interest.</p>
    </div>
    <div className="at__features-container">
      {featuresData.map((item, index) => (
        <Feature
          key={index}
          title={item.title}
          text={item.text}
          icon={item.icon}
          hobbyType={item.hobbyType}
        />
      ))}
      <p><a href="#blog">Explore my projects →</a></p>
    </div>
  </div>
);

export default Features;