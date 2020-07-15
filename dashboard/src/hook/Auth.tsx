import React, { FC, createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface AuthState {
	token: string;
	user: object;
}

interface SignInCredentials {
	email: string;
	password: string;
}

interface AuthContextData {
	user: object;
	signIn(credentials: SignInCredentials): Promise<void>;
	signOut(): void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: FC = ({ children }) => {
	const [data, setData] = useState<AuthState>(() => {
		const token = localStorage.getItem("@CriArt:token"),
			  user = localStorage.getItem("@CriArt:user");

		return (token && user) ? {token, user: JSON.parse(user)} : {} as AuthState;
	});

	const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
		const response = await api.post('/session', { email, password });

		const { token, user } = response.data;

		localStorage.setItem("@CriArt:token", token);
		localStorage.setItem("@CriArt:user", JSON.stringify(user));

		setData({ token, user });
	}, []);

	const signOut = useCallback(async () => {
		localStorage.removeItem("@CriArt:token");
		localStorage.removeItem("@CriArt:user");

		setData({} as AuthState);
	}, []);

	return (
		<AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
			{ children }
		</AuthContext.Provider>
	);
}

export default function useAuth(): AuthContextData {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}

	return context;;
}