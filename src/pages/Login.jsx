import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hook/useForm';

export const Login = () => {
	const navigate = useNavigate();

	const { name, email, password, onInputChange, onResetForm } =
		useForm({
			name: '',
			email: '',
			password: '',
		});

	const onLogin = e => {
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
			<form onSubmit={onLogin}>
				<h1>Log In</h1>

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
				
  <button className="sc-bwcZwS button-apple">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" data-testid="AppleIcon">
      <path d="M18.552 12.6258C18.5419 10.8232 19.3798 9.4627 21.0759 8.46073C20.1269 7.13951 18.6933 6.41259 16.8004 6.27015C15.0084 6.13263 13.0499 7.28686 12.3331 7.28686C11.5759 7.28686 9.83946 6.31927 8.47655 6.31927C5.65986 6.36348 2.6665 8.50494 2.6665 12.8615C2.6665 14.1484 2.9088 15.4778 3.39339 16.8498C4.03951 18.6523 6.3716 23.0728 8.80466 22.9991C10.0767 22.9696 10.9752 22.1199 12.6309 22.1199C14.2361 22.1199 15.069 22.9991 16.4874 22.9991C18.9407 22.9647 21.0507 18.947 21.6665 17.1395C18.3753 15.6317 18.552 12.7191 18.552 12.6258ZM15.6949 4.56092C17.073 2.96955 16.9468 1.52063 16.9064 1C15.6899 1.06876 14.2815 1.8055 13.4789 2.71415C12.5956 3.68665 12.0756 4.88999 12.1867 6.2456C13.5042 6.34383 14.7056 5.68567 15.6949 4.56092Z" fill="currentColor">
      </path>
    </svg> 
    App Store
  </button>

  
  <button className="sc-bwcZwS button-playstore">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" data-testid="PlayStoreIcon">
      <path fillRule="evenodd" clipRule="evenodd" d="M5.168 4.394c-.13-.128-.347-.102-.423.064-.156.339-.24.705-.24 1.085v12.998c0 .385.086.749.236 1.078.076.168.292.194.424.065l7.604-7.436a.29.29 0 0 0 0-.414l-7.6-7.44zM13.81 10.838c.112.11.29.11.401 0l2.544-2.487a.29.29 0 0 0-.06-.46L8.43 3.237a2.61 2.61 0 0 0-2.073-.22c-.19.06-.228.301-.085.44l7.54 7.381zM14.21 13.245a.286.286 0 0 0-.4 0L6.268 20.62c-.142.14-.105.377.084.44a2.5 2.5 0 0 0 .788.129c.436 0 .876-.113 1.278-.33l8.308-4.632a.29.29 0 0 0 .062-.46l-2.577-2.522zM21.035 10.8a2.704 2.704 0 0 0-1.017-1.036l-1.506-.849a.285.285 0 0 0-.341.046c-.48.474-1.98 1.954-2.919 2.874a.29.29 0 0 0 0 .415c.95.931 2.473 2.436 2.957 2.914.091.09.23.108.34.046l1.457-.812a2.62 2.62 0 0 0 1.256-1.587 2.635 2.635 0 0 0-.227-2.01z" fill="currentColor">
      </path>
    </svg> 
    Google Play
  </button>


</div>
	<p className='p-text'>Download the app.</p>



      </form>
    </div>
  );
};

export default Login;