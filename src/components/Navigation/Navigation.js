import React from 'react';
import './Navigation.css'
import { useLocation, useNavigate } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();

  const toggleContent = () => {
    if (location.pathname === '/') {
      navigate('/checklist');
    } else {
      navigate('/');
    }
  };

  const buttonText = location.pathname === '/' ? 'Checklist' : 'USB';

  return (
    <div className='nav'>
        <h1>gigDown</h1>
    <nav className='nav'>
      <button className ='toggle-bttn' onClick={toggleContent}>{buttonText}</button>
    </nav>
    </div>
  );
}

export default Navigation;
