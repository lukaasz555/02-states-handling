import { LangContext, LanguageEnum } from '../../context/LangContext';
import { useContext } from 'react';
import './LangChanger.css';

export const LangChanger = () => {
	const { selectedLang, setLang } = useContext(LangContext);
	return (
		<div>
			<h3>lang-changer</h3>
			<p>Current lang is: {selectedLang}</p>
			<div>
				<button onClick={() => setLang(LanguageEnum.EN)}>EN</button>
				<button onClick={() => setLang(LanguageEnum.PL)}>PL</button>
			</div>
		</div>
	);
};
