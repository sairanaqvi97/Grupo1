import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDataUser } from '../components/service/userService';
import { UserContext } from '../components/context/usercontext';

export const Login = ({setUserData}) => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleInput = (e) => {
    setUser({ ...user, [e?.target?.id]: e?.target?.value });
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    getDataUser(user)
      .then((data) => {
        console.log('Response data:', data);  // Debugging line
        if (data.token) {
          localStorage.setItem("user", JSON.stringify(data.token));
          setUserData(data.token);
          // Ensure setAuthData is defined or imported
          if (typeof setAuthData === 'function') {
            setAuthData(data.token);
          }
          navigate('/inicio');
        } else {
          setErrorMessage('Credenciales inválidas. Prueba de nuevo.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);  // Debugging line
        setErrorMessage('Ha ocurrido un error, inténtalo de nuevo.');
      });
  };

  
  return (

    <div className='wrapper'>
      {errorMessage && (
        <div className="error-popup">
          {errorMessage}
          <button onClick={() => setErrorMessage('')}>Close</button>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <input
            type='email'
            name='email'
            id='email'
            value={user.email}
            onChange={handleInput}
            required
            autoComplete='off'
            className='input-transparent'
            placeholder='Enter your email'
          />
          <label htmlFor='email'>Email</label>
        </div>
        <div className='input-group'>
          <input
            type='password'
            name='password'
            id='password'
            value={user.password}
            onChange={handleInput}
            required
            autoComplete='off'
            className='input-transparent'
            placeholder='Enter your password'
          />
          <label htmlFor='password'>Password</label>
        </div>
        <button className='login-btn' type="submit">Get In</button>
      </form>
    </div>
  );
};

export default Login;
