import { init } from 'sapper/runtime.js';
import { Store } from 'svelte/store.js';
import { manifest } from './manifest/client.js';

const store = new Store({ activeGuideSection: null });

init({
	target: document.querySelector('#sapper'),
	manifest,
	// store
});
