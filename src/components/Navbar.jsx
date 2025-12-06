import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaClock, FaCloudSun } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weather, setWeather] = useState(null);
  const [weatherLocation, setWeatherLocation] = useState('Unknown');
  const [locationPermissionDenied, setLocationPermissionDenied] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
    { path: '/resume', label: 'Resume' }
  ];

  // Digital Clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Weather API
  const fetchWeatherByLocation = async (latitude, longitude) => {
    try {
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=celsius`
      );
      const weatherData = await weatherResponse.json();
      setWeather(weatherData.current_weather);

      try {
        const locationResponse = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        );
        const locationData = await locationResponse.json();
        const city = locationData.city || locationData.locality || 'Unknown City';
        setWeatherLocation(city);
      } catch (locationErr) {
        console.error('Location name fetch failed:', locationErr);
        setWeatherLocation('Unknown');
      }
    } catch (error) {
      console.error('Weather fetch failed:', error);
    }
  };

  const fetchWeatherWithPermission = useCallback(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherByLocation(latitude, longitude);
          localStorage.setItem('weatherPermission', 'granted');
          setLocationPermissionDenied(false);
        },
        (error) => {
          console.error('Geolocation error:', error);
          // If user denies permission, hide weather icon
          setLocationPermissionDenied(true);
          setWeather(null);
          localStorage.setItem('weatherPermission', 'denied');
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000
        }
      );
    }
  }, []);

  useEffect(() => {
    const savedPermission = localStorage.getItem('weatherPermission');
    if (savedPermission === 'granted') {
      fetchWeatherWithPermission();
    } else if (savedPermission === 'denied') {
      setLocationPermissionDenied(true);
    } else {
      // Try to get permission on first visit
      fetchWeatherWithPermission();
    }
  }, [fetchWeatherWithPermission]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            <span className="brand-text text-gradient animate-name">Bhumika Sonekar</span>
          </Link>

          {/* Time and Weather Info */}
          <div className="navbar-info">
            <div className="navbar-time">
              <FaClock />
              <span>{formatTime(currentTime)}</span>
            </div>
            {weather && !locationPermissionDenied && (
              <div className="navbar-weather">
                <FaCloudSun />
                <span>{Math.round(weather.temperature)}°C</span>
                <span className="weather-location">{weatherLocation}</span>
              </div>
            )}
          </div>

          <div className="navbar-right">
            <ul className={`navbar-nav ${isOpen ? 'open' : ''}`}>
              {navItems.map(item => (
                <li key={item.path} className="nav-item">
                  <Link 
                    to={item.path} 
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="navbar-controls">
              <ThemeToggle />
              <button 
                className="mobile-toggle"
                onClick={toggleMenu}
                aria-label="Toggle navigation"
              >
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
