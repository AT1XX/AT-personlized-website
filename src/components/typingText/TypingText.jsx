import React, { useState, useEffect, useRef } from 'react';
import './typingText.css'; // we'll add CSS there

const TypingText = ({ text, speed = 50, delay = 0, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const indexRef = useRef(0);
  const timeoutRef = useRef(null);
  const cursorIntervalRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (cursorIntervalRef.current) clearInterval(cursorIntervalRef.current);
    };
  }, []);

  const startTyping = () => {
    const typeNextChar = () => {
      if (indexRef.current < text.length) {
        setDisplayedText(text.substring(0, indexRef.current + 1));
        indexRef.current++;
        timeoutRef.current = setTimeout(typeNextChar, speed);
      } else {
        // Start blinking cursor
        cursorIntervalRef.current = setInterval(() => {
          setShowCursor(prev => !prev);
        }, 500);
      }
    };
    timeoutRef.current = setTimeout(typeNextChar, delay);
  };

  useEffect(() => {
    setDisplayedText('');
    setShowCursor(true);
    indexRef.current = 0;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (cursorIntervalRef.current) clearInterval(cursorIntervalRef.current);
    startTyping();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, speed, delay]);

  return (
    <div className={`typing-text ${className}`} style={{ whiteSpace: 'pre-wrap' }}>
      {displayedText}
      <span className={`typing-cursor ${showCursor ? 'visible' : 'hidden'}`}>|</span>
    </div>
  );
};

export default TypingText;