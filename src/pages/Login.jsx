import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDataUser } from '../components/service/userService';
import '../styles/Login.css';


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
    getDataUser(user).then((data) => {
      if (data.token) {
        localStorage.setItem("user", JSON.stringify(data.token));
        setUserData(data.token);
        navigate('/inicio');
      } else {
        setErrorMessage('Credenciales inválidas. Pruba de nuevo.');
      }
    }).catch(error => {
      setErrorMessage('Ha ocurrido un error, intñentalo de nuevo.');
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
