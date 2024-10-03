import SupabaseClient from '../Client.js';

const AttemptSignup = async (email, password) => {
	try {
		const { error } = await SupabaseClient.auth.signUp({
			email: email,
			password: password,
		});

		if (error) {
			console.error('Error during sign up:', error.message);
			return;
		}

		console.log('Sign up successful! Please check your email to confirm.');

	} catch (err) {
		console.error('Sign up error:', err);
	}
};

export default AttemptSignup;
