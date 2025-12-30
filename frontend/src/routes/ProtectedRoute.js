import React from 'react';
import { Navigate } from 'react-router-dom';
import { getUser } from '../services/auth';

function ProtectedRoute({ children }) {
    const user =getUser();
    if (!user) {
        return <Navigate to="/login" />
    }
  return children;
}

export default ProtectedRoute;
