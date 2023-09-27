// src/components/LoginPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../actions/userActions';
const LoginPage = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulate a successful login
    if (username && password) {
      const user = { id: 1, username };
      dispatch(loginSuccess(user));
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;

