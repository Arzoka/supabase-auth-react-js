import AttemptLogin from './supabase/auth/AttemptLogin.js';
import { useState } from 'react';
import attemptSignup from './supabase/auth/AttemptSignup.js';

const Login = ({ setAuthenticated }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (<div style={{
		display: 'flex',
		flexDirection: 'column',
		gap: '0.25rem',
		width: '30%',
	}}>
		<label htmlFor="email">Email:</label>
		<input
			style={{ padding: '0.5rem' }}
			type="email"
			id="email"
			name="email"
			value={ email }
			onChange={ (e) => setEmail(e.target.value) }
		/>

		<label htmlFor="password">Password:</label>
		<input
			style={{ padding: '0.5rem' }}
			type="password"
			id="password"
			name="password"
			value={ password }
			onChange={ (e) => setPassword(e.target.value) }
		/>

		<button
			style={{ marginBlockStart: '0.25rem', background: '#00a000' }}
			onClick={ async () => await AttemptLogin(email, password, setAuthenticated) }
		>
			Log In
		</button>
		<button
			style={{ marginBlockStart: '0.25rem', background: '#0000a0' }}
			onClick={ async () => await attemptSignup(email, password, setAuthenticated, true) }
			>
			Register
		</button>
	</div>);
};

export default Login;
