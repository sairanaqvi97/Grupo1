import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../components/service/userService';

export const Register = () => {
	const navigate = useNavigate();

	const [userInfo, setUserInfo] = useState({
		name: '',
		email: '',
		password: '',
	});

	const [message, setMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		registerUser(userInfo)
			.then((data) => {
				console.log(data);
				setMessage('Registration successful!');
				setUserInfo({
					name: "",
					email: "",
					password: "",
				});
				setTimeout(() => navigate('/login'), 2000);
			})
			.catch((error) => {
				console.error('Registration error:', error);
				setMessage('Registration failed. Please try again.');
			});
	};

	return (
		<div className='wrapper'>
			{message && <div className="message">{message}</div>}
			<form onSubmit={handleSubmit}>
				<h1></h1>

				<div className='input-group'>
					<input
						type='text'
						name='name'
						id='name'
						value={userInfo.name}
						onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
						required
						autoComplete='off'
						className='input-transparent'
						placeholder='Enter your name'
					/>
					<label htmlFor='name'>Name</label>
				</div>

				<div className='input-group'>
					<input
						type='email'
						name='email'
						id='email'
						value={userInfo.email}
						onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
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
						value={userInfo.password}
						onChange={(e) => setUserInfo({...userInfo, password: e.target.value})}
						required
						autoComplete='off'
						className='input-transparent'
						placeholder='Enter your password'
					/>
					<label htmlFor='password'>Password</label>
				</div>

				<button className='register-btn'>Register</button>
			</form>
		</div>
	);
}

export default Register;
