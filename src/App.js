import React from 'react';
import { Footer, Blog, Possibility,Hobbies, Aboutme, Header} from './containers';
import { CTA, Socials, Navbar, Contact} from './components';
import './App.css';

const App = () => (
    <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
      
      {/* <h1>Hello</h1> */}
    </div>
    
    <Aboutme />
    <Socials />
    <Hobbies />
    
    {/* <Possibility />
    <CTA /> */}
    <Blog />
    <Footer />
    {/* <Contact /> */}
  </div>
  
  );


export default App
