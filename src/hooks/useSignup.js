import { useState } from 'react';
import { log } from '../utils/helper';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(null);
	const { dispatch } = useAuthContext();

	const signup = async (email, password, firstName, lastName) => {
		setIsLoading(true);
		setError(null);

		const response = await fetch(
			`${process.env.REACT_APP_BACKEND_URL}/api/user/signup`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password, firstName, lastName }),
			}
		);
		// this will return the data as json or the error
		const json = await response.json();
		log(json, 'json in signup');
		if (!response.ok) {
			setIsLoading(false);
			setError(json.error);
		}
		if (response.ok) {
			// save the user to local storage
			localStorage.setItem('brendas-blog', JSON.stringify(json));
			// update auth context with email
			dispatch({ type: 'LOGIN', payload: json });
			// update loading state to false as finished
			setIsLoading(false);
		}
	};

	return { signup, isLoading, error };
};
