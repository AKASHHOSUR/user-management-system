import React from 'react';
import { Navigate } from 'react-router-dom';
import { getUser } from '../services/auth';

function AdminRoute({ children }) {
    const user = getUser();
    if (!user || user.role !== 'admin') {
        return <Navigate to="/login" />
    }
  return children;
}

export default AdminRoute;
