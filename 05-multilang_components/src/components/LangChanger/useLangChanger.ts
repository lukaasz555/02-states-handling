import { useState } from 'react';
import { LanguageEnum, TextType } from '../../context/LangContext';
import { en, pl } from '../../data/index';

export const useLangChanger = () => {
	const [selectedLang, setLang] = useState(LanguageEnum.EN);
	const [texts, setTexts] = useState<TextType>(en);
	const langs = { en, pl };

	// useEffect(() => {
	// 	// setTexts(selectedLang === LanguageEnum.EN ? en : pl);
	// 	setTexts(langs[selectedLang]);
	// }, [selectedLang]);

	const onChangeLang = (lang: LanguageEnum) => {
		setLang(lang);
		setTexts(langs[lang]);
	};

	return {
		selectedLang,
		// setLang
		onChangeLang,
		texts,
	};
};
