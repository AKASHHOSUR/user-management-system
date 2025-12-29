import React, { useState }from 'react';
import '../styles/auth.css';

function Signup() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!fullName || !email || !password || !confirmPassword) {
            setError('All fields are required');
            return;
        }

        if (password !== confirmPassword) {
            setError('Password do not match');
            return;
        }

        if (password.length < 6) {
            setError('Password must be atleast 6 characters');
            return;
        }

        setError('');
        alert('Signup successful');
    };


  return (
    <div className='auth-container'>
        <form className='auth-box' onSubmit={handleSubmit}>
            <h2>
                Signup
            </h2>

            {error && <p className='error'>{error}</p>}

            <input 
            type='text'
            placeholder='Full Name'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)} />

            <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)} />

            <input 
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} />

            <input 
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} />

            <button type='submit'>Sighnup</button>
            <p className='link'>
                Already have an account? Login
            </p>
        </form>
        
    </div>
  )
}

export default Signup
