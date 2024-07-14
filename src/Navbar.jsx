import React from 'react';
import {
	Link,
	Outlet,
	useLocation,
	useNavigate,
} from 'react-router-dom';

export const Navbar = () => {
	const { state } = useLocation();
	const navigate = useNavigate();

	console.log(state);

	const onLogout = () => {
		navigate('/login', {
			replace: true,
		});
	};

	return (
		<>
			<header>
				<h1>
					<Link to='/'>Meet Now</Link>
				</h1>

				{state?.logged ? (
					<div className='user'>
						<span className='username'>{state?.name}</span>
						<button className='btn-logout' onClick={onLogout}>
							Sign Out
						</button>
					</div>
				) : (
					<nav>
						<Link to='/login'>Log in</Link>
						<Link to='/register'>Create Account</Link>
					</nav>
				)}
			</header>

			<Outlet />
		</>
	);
};

export default Navbar;
