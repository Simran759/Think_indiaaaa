import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import API_BASE_URL from '../config/api';

const Navbar = () => {
  const navLinks = [
    // { path: '/', label: '<-' },
    // { path: '/youthfest', label: 'Home' },
    
    { path: '/youthfest/event', label: 'Events' },
    { path: '/youthfest/2024', label: 'Previous Glimpse' },
    // { path: '/work', label: 'Our Work' }
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsOpen(false);
    };
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('.navbar-menu') && !e.target.closest('.navbar-toggle')) {
        setIsOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
useEffect(() => {
  fetch(`${API_BASE_URL}/auth/me`, {
    credentials: "include"
  })
    .then(res => res.ok ? res.json() : null)
    .then(data => setUser(data))
    .catch(() => setUser(null));
}, []);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
        <Link to="/" className="navbar-brand" onClick={() => { closeMenu(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '44px',
              width: '44px',
              borderRadius: '50%',
              overflow: 'hidden',
              background: '#fff',
              boxShadow: '0 2px 12px 2px rgba(0,0,0,0.18)',
              border: '3px solid #1976d2',
              marginRight: '6px',
              outline: '2px solid #fff',
              outlineOffset: '-2px'
            }}>
              <img src="/logoti.webp" alt="Think India Logo" style={{ height: '40px', width: '40px', objectFit: 'cover', borderRadius: '50%', background: '#fff' }} />
            </span>
            <span className="logo-text">Think India</span>
            {/* <div className="logo-accent"></div> */}
          </div>
        </Link>

        {/* Desktop Menu */}
        {!isMobile && (
          <div className="navbar-menu" style={{ marginLeft: 'auto', zIndex: 2000 }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
             {!user ? (
              <Link to="/login" className="nav-link">
                Login
              </Link>
            ) : (
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "#e86704ff",
                  color: "#000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  fontWeight: "bold"
                }}
                onClick={() => window.location.href = "/dashboard"}
              >
                {user.name[0].toUpperCase()}
              </div>
            )}
            
          </div>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <>
            <div className="navbar-toggle" onClick={toggleMenu} style={{ color: '#FFD93D', zIndex: 2100, background: 'none', border: 'none', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',fontSize: '20px' }}>
              {isOpen ? <FaTimes size={28} color="#FFD93D" /> : <FaBars size={28} color="#FFD93D" />}
            </div>
            <div className={`navbar-menu${isOpen ? ' active' : ''}`} style={{ marginLeft: 0, zIndex: 2000 }}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </nav>
  );
  
};

export default Navbar; 