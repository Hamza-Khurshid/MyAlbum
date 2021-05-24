# My Album

## Setup
- "npm install" or "yarn install"
- "npx react-native run-android" to run on android device
- "cd ios; pod install; cd../" (Only for ios)
- "npx react-native run-ios" to run on ios device

These commands will setup node_modules and run application on emulator/simulator.

## Test 
I have used jest for unit testing as react native boilerplate comes with jest setup. I have written only snapshot tests.
- "npm test" to run tests

## Summary
+ It is a simple Photo Album application that consumes "jsonplaceholder" API to fetch albums, album owners and photos in each album. User can filter albums based on owner name. And clicking on each album fetches the potos of that album and show them in a gallery view.
+ I have used functional components along with react hooks and to separate UI from data fetching and logics I created custom hooks. That makes code more modularize and easy to understand.
+ If I had more time I wanted to write more tests to cover async network calls and custom hooks.

### Project Structure
             
+ source
    + assets
		+ icons
    + constants
		+ theme
    + navigation
		+ index.js
	+ screens
		+ albums
			+ components
				+ Album.js
				+ AlbumsFilter.js
				+ style.js
			+ index.js
			+ style.js
			+ useAlbums.js
			
		+ gallery
			+ components
				+ Photo.js
				+ SmallPhoto.js
				+ style.js
			+ index.js
			+ style.js
			+ useGallery.js
	+ utils
		+ helpers.js
+ \_\_tests\_\_
	+ Gallery.test.js