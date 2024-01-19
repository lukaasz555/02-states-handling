import { useContext } from 'react';
import { LangContext } from '../../context/LangContext';

interface SectionProps {
	sectionName: string;
}

export const Section = ({ sectionName }: SectionProps) => {
	const { texts } = useContext(LangContext);
	const { title, subtitle, ctaButton } = texts[sectionName];

	return (
		<section
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
				minWidth: '300px',
				padding: '1em',
				marginTop: '1em',
				border: '1px solid #f9f9f910',
				borderRadius: '12px',
			}}>
			<h1>{title}</h1>
			<h2>{subtitle}</h2>
			<button>{ctaButton}</button>
		</section>
	);
};
