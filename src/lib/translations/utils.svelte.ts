import en from './en.json';
import de from './de.json';

type Language = 'en' | 'de';

function new_lang_store(initial_lang: Language) {
	let lang = $state(initial_lang);
	let translations = $derived(lang === 'de' ? de : en);

	function set_lang(new_lang: Language) {
		lang = new_lang;
	}

	return {
		get lang() {
			return lang;
		},
		get translations() {
			return translations;
		},
		set_lang
	};
}

export const lang_store = new_lang_store('en');

export const new_link = (path: string) => (lang_store.lang === 'de' ? `/de${path}` : path);
