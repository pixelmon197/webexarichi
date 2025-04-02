import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    setError('No estás autenticado');
                    return;
                }

                const response = await axios.get('http://18.117.157.132:3007/api/users', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (Array.isArray(response.data.data)) {
                    setUsers(response.data.data);
                } else {
                    setError('La respuesta no contiene un array de usuarios');
                }
            } catch (error) {
                setError('Error al obtener los usuarios');
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="container">
            <h2>Listado de Usuarios</h2>
            {error && <p className="error">{error}</p>}
            <ul>
                {Array.isArray(users) && users.length > 0 ? (
                    users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))
                ) : (
                    <p>No hay usuarios disponibles.</p>
                )}
            </ul>
        </div>
    );
};

export default UserList;
