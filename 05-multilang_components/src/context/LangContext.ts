import { SetStateAction, createContext } from 'react';
import { en } from '../data';

export enum LanguageEnum {
	PL = 'pl',
	EN = 'en',
}

export const langs = {
	pl: LanguageEnum.PL,
	en: LanguageEnum.EN,
};

export type TextType = {
	[key: string]: Record<string, string>;
};

export type LangContextType = {
	selectedLang: LanguageEnum;
	setLang: React.Dispatch<SetStateAction<LanguageEnum>>;
	texts: TextType;
};

export const LangContext = createContext<LangContextType>({
	selectedLang: LanguageEnum.EN,
	setLang: () => {},
	texts: { ...en },
});
