import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ params }) => {
	const lang = params.lang === 'de' ? 'de' : 'en';
	return { lang: lang as 'de' | 'en' };
};
