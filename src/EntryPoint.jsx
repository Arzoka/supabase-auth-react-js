import { useEffect, useState } from 'react';
import SupabaseClient from './supabase/Client.js';
import App from './App.jsx';
import Login from './Login.jsx';

const EntryPoint = () => {
	const [authenticated, setAuthenticated] = useState(false);

	useEffect(() => {
		(async () => {
			const user = await SupabaseClient.auth.getSession();

			// if u want to see the structure of the user object, uncomment the line below
			// console.log(user);

			if (user?.data?.session !== null) {
				setAuthenticated(true);
			}
		})();
	}, []);

	// you can directly put ur RouterProvider here before the : instead of <App />
	return authenticated ? <App /> : <Login setAuthenticated={ setAuthenticated } />;
};

export default EntryPoint;
