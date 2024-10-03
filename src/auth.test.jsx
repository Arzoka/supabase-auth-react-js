import './App.css';
import SupabaseClient from './supabase/Client.js';
import { useEffect, useState } from 'react';

function App() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		(async () => {
			const user = await SupabaseClient.auth.getSession();
			console.log(user);
		})();

	}, []);

	return (
		<>
			<label htmlFor="email">Email:</label>
			<input
				type="email"
				id="email"
				name="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<label htmlFor="password">Password:</label>
			<input
				type="password"
				id="password"
				name="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={async () => AttemptSignup()}>Sign Up</button>
			<button onClick={async () => AttemptLogin()}>Log In</button>
		</>
	);
}

export default App;
