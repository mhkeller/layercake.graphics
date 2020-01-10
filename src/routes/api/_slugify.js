import emoji from 'emoji-regex';

const whitespace = /\s/g;

function lower (string) {
	return string.toLowerCase();
}

export default function slugger (string, maintainCase) {
	const re = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g;
	const replacement = '-';

	if (typeof string !== 'string') return '';
	if (!maintainCase) string = string.replace(/[A-Z]+/g, lower);
	return string.trim()
		.split('(')[0]
		.replace(re, '')
		.replace(emoji(), '')
		.replace(whitespace, replacement)
		.split('-code')[0]
		.replace(/^cake/, '');
}
