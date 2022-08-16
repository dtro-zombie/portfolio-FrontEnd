// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'portfolio-storage-1',
    appId: '1:931319269166:web:aa548ebd804ed39bdddcbf',
    storageBucket: 'portfolio-storage-1.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyB6qkLgsXGB3FExjDALlx4djzzuppvlynE',
    authDomain: 'portfolio-storage-1.firebaseapp.com',
    messagingSenderId: '931319269166',
  },
  production: false,
  useEmulators: true,
  firebaseConfig : {
    apiKey: "AIzaSyB6qkLgsXGB3FExjDALlx4djzzuppvlynE",
    authDomain: "portfolio-storage-1.firebaseapp.com",
    projectId: "portfolio-storage-1",
    storageBucket: "portfolio-storage-1.appspot.com",
    messagingSenderId: "931319269166",
    appId: "1:931319269166:web:aa548ebd804ed39bdddcbf"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
