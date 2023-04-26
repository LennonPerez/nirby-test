// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'nirby-pokemon-test',
    appId: '1:610071602194:web:39622ca1986fae239e24cb',
    storageBucket: 'nirby-pokemon-test.appspot.com',
    apiKey: 'AIzaSyBAVXQBR51FnO-UZTgG2Svq3LDA-25Wl3w',
    authDomain: 'nirby-pokemon-test.firebaseapp.com',
    messagingSenderId: '610071602194',
  },
  pokemonApiBaseUrl: 'https://pokeapi.co/api/v2',
  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
