import React, { useState} from 'react'
import '../styles/admin.css';

function AdminDashboard() {
    const [users, setUsers] = useState([
        {id: 1, fullName: 'Akash Hosur', email: 'admin@gmail.com', role: 'admin', status: 'active'},
        {id: 2, fullName: 'Rahul Kumar', email: 'rahul@gmail.com', role: 'user', status: 'active'},
        {id: 3, fullName: 'Sneha Patil', email: 'sneha@gmail.com', role: 'user', status: 'inactive'},
    ]);

    const toggleStatus = (id) => {
        const confirmAction = window.confirm('Are you sure you want to change the user status?');
        if (!confirmAction) return;

        const updateUsers = users.map(user =>
            user.id === id ? { ...user, status: user.status === 'active' ? 'inactive' : 'active'} : user
        );

        setUsers(updateUsers);
    };
  return (
    <div className='admin-conatiner'>
        <h2>Admin Dashboard</h2>

        <table className='user-table'>
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.fullName}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>
                            <span className={user.status === 'active' ? 'status-active' : 'status-inactive'}>
                                {user.status}
                            </span>
                        </td>
                        <td>
                            <button 
                            className={user.status === 'active' ? 'btn-deactivate' : 'btn-activate'}
                            onClick={() => toggleStatus(user.id)}
                            >
                                {user.status === 'active' ? 'Deactivate' : 'Activate'}
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}

export default AdminDashboard;
