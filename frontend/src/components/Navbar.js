import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';
import { getUser, logoutUser } from '../services/auth';

function Navbar() {
  const navigate = useNavigate();
  const user = getUser(); 

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  
  if (!user) {
    return null; 
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h3>User Management</h3>
      </div>

      <div className="navbar-center">
        {user.role === 'admin' && (
          <Link to="/admin">Admin Dashboard</Link>
        )}
        <Link to="/profile">Profile</Link>
      </div>

      <div className="navbar-right">
        <span>
          {user.fullName} ({user.role})
        </span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
