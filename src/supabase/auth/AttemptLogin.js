import SupabaseClient from '../Client.js';

const AttemptLogin = async (email, password, setAuthenticated) => {
	try {
		const { error } = await SupabaseClient.auth.signInWithPassword({
			email: email, password: password,
		});
		if (error) {
			console.error('Error during login:', error.message);
			return;
		}

		setAuthenticated && setAuthenticated(true);
		console.log('Login successful!');

	} catch (err) {
		console.error('Login error:', err);
	}
};

export default AttemptLogin;
