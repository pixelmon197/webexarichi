import React, { useState } from 'react';
import api from '../api';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  const handleCreateUser = async () => {
    try {
      const response = await api.post('/login', { name, email, password, rol: role });
      alert('Usuario creado');
    } catch (err) {
      setError('Error al crear el usuario');
    }
  };

  return (
    <div>
      <h2>Crear Usuario</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <select onChange={(e) => setRole(e.target.value)} value={role}>
        <option value="admin">Administrador</option>
        <option value="usuario">Usuario</option>
        <option value="gerente">Gerente</option>
      </select>
      <button onClick={handleCreateUser}>Crear Usuario</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default CreateUser;
