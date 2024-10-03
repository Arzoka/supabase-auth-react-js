import SupabaseClient from './supabase/Client.js';
import { useEffect, useState } from 'react';
import getAuthUser from './supabase/auth/getAuthUser.js';

function App() {
	const [commentContent, setCommentContent] = useState('');
	const [authUser, setAuthUser] = useState(null);

	useEffect(() => {
		(async () => {
			setAuthUser(await getAuthUser());
		})();
	}, []);

	const createComment = async () => {
		await SupabaseClient.from('Comments').insert([{
			content: commentContent, user_id: authUser.id,
		}]);
	};

	const logOut = async () => {
		await SupabaseClient.auth.signOut();
		setAuthUser(null);

		// can also use useContext for global variable, technically better, but more complex
		window.location.reload();
	};

	return (<>
			<h1>Create comment!</h1>
			<div style={ {
				display: 'flex', flexDirection: 'column', gap: '1rem',
			} }>

				<input
					style={ { padding: '1em' } }
					type={ 'text' }
					placeholder={ 'Comment' }
					value={ commentContent } onChange={ (e) => {
					setCommentContent(e.target.value);
				} }
				/>

				<button onClick={ createComment }>
					Create Comment as { authUser?.email }
				</button>

				<button
					style={ { background: '#a00000' } }
					onClick={ async () => await logOut() }
				>
					Sign Out
				</button>
			</div>
		</>);
}

export default App;
