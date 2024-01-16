import React from 'react';
import { SetStateAction, createContext, useContext } from 'react';

export type AuthContextType = {
	isLoggedIn: boolean;
	setLoggedIn: React.Dispatch<SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthContextType>({
	isLoggedIn: false,
	setLoggedIn: () => {},
});

export const useAuthContext = () => useContext(AuthContext);
