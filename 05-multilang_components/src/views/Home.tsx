import { Layout } from '../components/Layout/Layout';
import { LangContext } from '../context/LangContext';
import { Section } from '../components/Section/Section';
import { useLangChanger } from '../components/LangChanger/useLangChanger';

export const Home = () => {
	const { selectedLang, onChangeLang, texts } = useLangChanger();

	return (
		<LangContext.Provider value={{ selectedLang, onChangeLang, texts }}>
			<Layout>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						columnGap: '1em',
						padding: '1em',
					}}>
					<Section sectionName='attention' />
					<Section sectionName='newsletter' />
				</div>
			</Layout>
		</LangContext.Provider>
	);
};
