import React, { useState, useEffect } from 'react';
import './DailyInspiration.css';

const DailyInspiration = () => {
  const [quote, setQuote] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://zenquotes.io/api/random');
        const data = await response.json();
        setQuote(data[0]);
      } catch (error) {
        console.error('Quote fetch failed:', error);
        setQuote({
          q: 'The best way to predict the future is to create it.',
          a: 'Peter Drucker'
        });
      }
    };

    fetchQuote();

    // Show inspiration after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!quote) return null;

  return (
    <div className={`daily-inspiration ${isVisible ? 'visible' : ''}`}>
      <div className="inspiration-content">
        <h3>Daily Inspiration</h3>
        <blockquote>
          <p>"{quote.q}"</p>
          <cite>- {quote.a}</cite>
        </blockquote>
      </div>
    </div>
  );
};

export default DailyInspiration;
