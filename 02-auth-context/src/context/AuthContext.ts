import React from 'react';
import { SetStateAction, createContext, useContext } from 'react';

export type AuthContextType = {
	isLoggedIn: boolean;
	setLoggedIn: React.Dispatch<SetStateAction<boolean>>;
	email?: string;
};

export const AuthContext = createContext<AuthContextType>({
	isLoggedIn: false,
	setLoggedIn: () => {},
	email: 'qwe@qwe.com',
});

export const useAuthContext = () => useContext(AuthContext);
