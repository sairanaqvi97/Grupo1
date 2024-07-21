import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hook/useForm';

export const Register = () => {
	const navigate = useNavigate();

	const { name, email, password, onInputChange, onResetForm } =
		useForm({
			name: '',
			email: '',
			password: '',
		});

	const onRegister = e => {
		e.preventDefault();

		navigate('/dashboard', {
			replace: true,
			state: {
				logged: true,
				name,
			},
		});

		onResetForm();
	};

	return (
		<div className='wrapper'>
			<form onSubmit={onRegister}>
				<h1></h1>

				<div className='input-group'>
					<input
						type='text'
						name='name'
						id='name'
						value={name}
						onChange={onInputChange}
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
						value={email}
						onChange={onInputChange}
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
						value={password}
						onChange={onInputChange}
						required
						autoComplete='off'
						className='input-transparent'
                        placeholder='Enter your password'
					/>
					<label htmlFor='password'>Password</label>
				</div>

				<button className='register-btn'>Log in</button>
				
			</form>
		</div>
	);
};

export default Register;