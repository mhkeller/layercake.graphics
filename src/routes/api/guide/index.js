import getSections from './_getSections.js';

let json;

export function get () {
	if (!json || process.env.NODE_ENV !== 'production') {
		json = JSON.stringify(getSections());
	}

	return {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		},
		body: json
	};
}
