import React, { useState, useEffect } from 'react';
import people from '../../assets/people.png';
import DslayerTest from '../../assets/ATPNG.png';
import TypingText from '../../components/typingText/TypingText';
import './header.css';


const Header = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch a random quote from the camperbot quotes collection
  const fetchQuote = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
      );
      if (!response.ok) {
        throw new Error('Failed to fetch quotes');
      }
      const data = await response.json();
      const quotes = data.quotes; // array of {quote: "...", author: "..."}
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];
      setQuote(randomQuote.quote);
      setAuthor(randomQuote.author);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching quote:', err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch a quote when component mounts
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <>
      <div className="at__header section__padding" id="home">
        <div className="at__header-content">
          <h1 className="gradient__text">
            <TypingText 
              text={"Hello, I am Abel.\nWelcome to my Website."}
              speed={60} 
              delay={500} 
            />
          </h1>
          {/*<h1 className="gradient__text"> Welcome to my Website.</h1>*/}
          <p>
            Software Engineering graduate from Toronto Metropolitan University with a strong passion for building scalable and user-focused applications. 
            Experienced in Java, C, SQL, React.js, REST APIs, and modern web technologies. 
            Continuously expanding my skill set through real-world projects, research work, and hands-on development.
          </p>
          <p>Quote of the Day:</p>

          {/* Always show the current quote (if it exists) */}
          <div className="quote-container">
            {quote && !error && (
              <>
                <p>"{quote}"</p>
                <p>- {author}</p>
              </>
            )}

            {/* Loading indicator – always in DOM, but hidden when not loading */}
            <p className={`loading-message ${loading ? 'visible' : 'hidden'}`}>
              Fetching new quote...
            </p>

            {/* Error message – only shown when there's an error AND not loading */}
            {error && !loading && <p style={{ color: 'red' }}>Error: {error}</p>}
          </div>

          <div className="at__header-content__input">
            <button 
              type="button" 
              onClick={fetchQuote} 
              disabled={loading}
              className="surprise-btn"
            >
              {loading ? 'Loading...' : 'Surprise Me'}
            </button>
            
          </div>

          <div className="at__header-content__people">
            <a href="https://www.youtube.com/@javascriptmastery" target="_blank" rel="noopener noreferrer">
              <img src={people} alt="people" />
            </a>
            <p>Built with help from{'  '}
              <a href="https://www.youtube.com/@javascriptmastery" target="_blank" rel="noopener noreferrer">
                 JS Mastery
              </a> tutorials.
            </p>
          </div>
        </div>

        <div className="at__header-image">
          <img src={DslayerTest} alt="AI" />
        </div>
      </div>
      <div className="at__header-about">
       { /*<p><a href="#wgpt3">More about me</a></p>*/}
      </div>
    </>
  );
};

export default Header;