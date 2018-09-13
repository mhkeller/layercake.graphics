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
		store.set(data);
		window.store = store;

		console.log('here');
		window.fetch(`api/guide/contents`).then(r => r.json()).then(guideContents => {
			console.log('here', guideContents);
			store.set({ guideContents });
		});

		return store;
	}
});
