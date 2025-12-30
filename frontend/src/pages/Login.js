import { Link } from 'react-router-dom';
import React, { useState } from "react";
import '../styles/auth.css';
import { loginUser } from '../services/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('All fields are required');
            return;
        }

        const user = {
            fullName: 'Akash',
            role: email.includes('admin') ? 'admin' : 'user'
        };

        loginUser(user);
        navigate('/profile');
    };

    return (
        <div className="auth-container">
            <form className="auth-box" onSubmit={handleSubmit}>
                <h2>Login</h2>

                {error && <p className="error">{error}</p>}

                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}></input>

                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}></input>

                <button type="submit">Login</button>

                <p className="link"> Don't have an account? <Link to="/signup">Sighnup</Link></p>
            </form>
        </div>
    );
}

export default Login;