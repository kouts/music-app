# MusicApp
A Vue.js single page application that displays the Pink Floyd discography using the [TheAudioDB API](https://www.theaudiodb.com/api_guide.php) as it's source.

> MusicApp is created using [Vue CLI](https://cli.vuejs.org/). It uses [Vuex](https://vuex.vuejs.org/) for state management and [Vue Router](https://router.vuejs.org/) for client-side routing.
>
> For the tests, [Vue Test Utils](https://vue-test-utils.vuejs.org/) with [Jest](https://jestjs.io/) is used.

**Some notes**
- Styling is applied using app-level and in-component custom SCSS
- Simple in-memory caching of albums data for better performance
- Scroll position is restored in list view for better UX
- Scroll back to top functionality

View it live at https://kouts-music-app.netlify.app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```
