import React, { useState } from 'react'
import '../styles/profile.css';

function Profile() {

  const [fullName, setFullName] = useState('Akash Hosur');
  const [email, setEmail] = useState('user@gmail.com');

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleProfileSave = () => {
    if (!fullName || !email) {
      setError('Name and Email cannot be empty');
      setMessage('')
      return;
    }

    setError('');
    setMessage('Profile updated successfully');
  };

  const handlePasswordChange = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      setError('All password fields are required');
      setMessage('');
      return;
    } 

    if (newPassword !== confirmPassword) {
      setError('New Passwords do not match');
      setMessage('');
      return;
    }

    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters');
      setMessage('');
      return;
    }

    setError('');
    setMessage('Password changed successfully');

    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  }
  return (
    <div className='profile-conatiner'>
      <h2>User Profile</h2>

      {error && <p className='error'>{error}</p>}
      {message && <p className='success'>{message}</p>}

      <div className='profile-section'>
        <h3>Edit Profile</h3>

        <input
          type='text'
          placeholder='Full Name'
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input 
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)} />

        <div className='button-group'>
          <button onClick={handleProfileSave}>Save</button>
          <button className='secondary'>Cancel</button>
        </div>
      </div>

      <div className='profile-section'>
        <h3>Change Password</h3>

        <input 
          type='password'
          placeholder='Current password'
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)} />
        
        <input 
          type='password'
          placeholder='New password'
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)} />

        <input 
          type='password'
          placeholder='Confirm New password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)} />

        <button onClick={handlePasswordChange}>Change Password</button>
      </div>
    </div>
  );
}

export default Profile;
