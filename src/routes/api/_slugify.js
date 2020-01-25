import emoji from 'emoji-regex';

const whitespace = /\s/g;

function lower (string) {
	return string.toLowerCase();
}

const slugs = {};

export default function slugger (string, maintainCase) {
	const re = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g;
	const replacement = '-';

	if (typeof string !== 'string') return '';
	if (!maintainCase) string = string.replace(/[A-Z]+/g, lower);
	const slug = string.trim()
		.split('(')[0]
		.replace(re, '')
		.replace(emoji(), '')
		.replace(whitespace, replacement)
		.split('-code')[0]
		.replace(/^cake/, '');

	if (!slugs[slug]) {
		slugs[slug] = 0;
	}
	slugs[slug] += 1;

	// Not sure why these numbers go really high
	// so do some weird substractions and things to make
	// them turn out correctly
	if (slugs[slug] > 3) {
		return `${slug}-${slugs[slug] - 2}`;
	}

	return slug;
}
