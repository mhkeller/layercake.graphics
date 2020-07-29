cd `dirname $0`/..

# fetch svelte-app
rm -rf scripts/svelte-app
node_modules/.bin/degit mhkeller/layercake-template#example-template scripts/svelte-app

# remove App.svelte (will be recreated client-side) and node_modules
rm -rf scripts/svelte-app/src/App.svelte
rm -rf scripts/svelte-app/node_modules

# build svelte-app.json
node scripts/build-svelte-app-json.js `find scripts/svelte-app -type f`

# Do SSR

# fetch svelte-app-ssr
rm -rf scripts/svelte-app-ssr
node_modules/.bin/degit mhkeller/layercake-template-ssr#example-template scripts/svelte-app-ssr

# remove App.svelte (will be recreated client-side) and node_modules
rm -rf scripts/svelte-app-ssr/src/App.svelte
rm -rf scripts/svelte-app-ssr/node_modules

# build svelte-app.json
node scripts/build-svelte-app-json.js `find scripts/svelte-app-ssr -type f`
