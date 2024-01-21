import { LangContext, LanguageEnum } from '../../context/LangContext';
import { useContext } from 'react';
import './LangChanger.css';

export const LangChanger = () => {
	const { selectedLang, onChangeLang } = useContext(LangContext);
	return (
		<div>
			<h3>lang-changer</h3>
			<p>Current lang is: {selectedLang}</p>
			<div>
				<button onClick={() => onChangeLang(LanguageEnum.EN)}>EN</button>
				<button onClick={() => onChangeLang(LanguageEnum.PL)}>PL</button>
			</div>
		</div>
	);
};
