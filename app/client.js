import { init } from 'sapper/runtime.js';
import { Store } from 'svelte/store.js';
import { manifest } from './manifest/client.js';

const store = new Store({
	activeGuideSection: ''
});

init({
	target: document.querySelector('#sapper'),
	manifest,
	store: data => {
		console.log({ data });
		store.set(data);
		window.store = store;

		return store;
	}
});
