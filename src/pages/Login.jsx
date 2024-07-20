import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hook/useForm';

export const Login = () => {
  const navigate = useNavigate();

  const { name, email, password, onInputChange, onResetForm } = useForm({
    name: '',
    email: '',
    password: '',
  });

  const onLogin = e => {
    e.preventDefault();

    
    const isAuthenticated = true;      // Simulación de autenticación
    const token = "fake-token";      // Simulación  token

    if (isAuthenticated) {
      localStorage.setItem('token', token);

      navigate('/dashboard', {
        replace: true,
        state: {
          logged: true,
          name,
        },
      });

      onResetForm();
    } else {
      console.error('Authentication failed');
    }
  };

  return (

    <div className='container-meetnow'>
      <div className='left-section'>
        <p>MeetNow te ayuda a comunicarte y compartir con las personas que forman parte de tu vida.</p>
      </div>
    
    
    <div className='wrapper'>
      <form onSubmit={onLogin}>
        <h1>Log In</h1>
        <h2></h2>

        <div className='input-group'>
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={onInputChange}
            required
            autoComplete='off'
          />
          <label htmlFor='name'>Name</label>
        </div>

        <div className='input-group'>
          <input
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={onInputChange}
            required
            autoComplete='off'
          />
          <label htmlFor='email'>Email</label>
        </div>
        <div className='input-group'>
          <input
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={onInputChange}
            required
            autoComplete='off'
          />
          <label htmlFor='password'>Password</label>
        </div>

        <button className='login-btn'>Get In</button>
        <p className='p-password'>Have you forgotten the password?</p>

        <div className="sc-gDyJDg lcjrCd" style={{ opacity: 1 }}>
          <a className="sc-bwcZwS button-apple" href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-apple"></i>
            &nbsp; {/* &nbsp ESPACIO entre icono y texto */}
            App Store
          </a>
          <a className="sc-bwcZwS button-playstore" href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-google-play"></i>
            &nbsp;
            Play Store
          </a>
        </div>
        <p className='p-text'>Download the app.</p>
      </form>
    </div>
    </div>

    
  );
};

export default Login;
