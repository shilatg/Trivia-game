import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeProvider';
import './Navbar.css'; 
import { usePopup } from './PopupProvider';

export const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const {images, visible, setVisible } = usePopup()

  return (
    <nav className={`navbar `}>
      <Link className="nav-link" to="/" onClick={() => setVisible(false)}>Home</Link>
      <Link className="nav-link" to="/loginCard" onClick={() => setVisible(false)}>Login</Link>
      <Link className="nav-link" to="/store" onClick={() => setVisible(false)}>Store</Link>
      <Link className="nav-link" to="/cart" onClick={() => setVisible(false)}>Cart</Link>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </nav>
  );
};
