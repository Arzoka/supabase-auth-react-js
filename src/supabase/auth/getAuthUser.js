import SupabaseClient from '../Client.js';

async function getAuthUser() {
	const { data, error } = await SupabaseClient.auth.getUser();

	if (error) {
		console.error(error);
		return null;
	}

	console.log(data?.user);

	return data?.user ?? null;

}

export default getAuthUser;
