import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="nav container">
      <Link to="/" className="nav__logo">
        Discussify
      </Link>
      <div className="nav__menu">
        <Link to="/" className="nav__link">Home</Link>
        <Link to="/leaderboard" className="nav__link">Leaderboard</Link>
        <Link to="/thread-form" className="primary-btn">Create Thread</Link>
        <Link to="/profile">
          <img src="/src/assets/user-avatar.png" alt="user-avatar" className="nav__image" />
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
