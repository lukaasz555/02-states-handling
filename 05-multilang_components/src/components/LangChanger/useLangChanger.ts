import { useEffect, useState } from 'react';
import { LanguageEnum, TextType } from '../../context/LangContext';
import { en, pl } from '../../data/index';

export const useLangChanger = () => {
	const [selectedLang, setLang] = useState(LanguageEnum.EN);
	const [texts, setTexts] = useState<TextType>(en);

	useEffect(() => {
		setTexts(selectedLang === LanguageEnum.EN ? en : pl);
	}, [selectedLang]);

	return { selectedLang, setLang, texts };
};
