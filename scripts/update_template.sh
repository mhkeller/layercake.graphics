cd `dirname $0`/..

# fetch svelte-app
rm -rf scripts/svelte-app
node_modules/.bin/degit mhkeller/layercake-template scripts/svelte-app

# remove App.svelte (will be recreated client-side) and node_modules
rm -rf scripts/svelte-app/src/App.svelte
rm -rf scripts/svelte-app/node_modules
rm -rf scripts/svelte-app/src/data
mkdir scripts/svelte-app/src/data
rm -rf scripts/svelte-app/src/components
mkdir scripts/svelte-app/src/components

# build svelte-app.json
node scripts/build-svelte-app-json.js `find scripts/svelte-app -type f`
