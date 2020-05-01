# thankful_for

This is a website made with [VueJs](https://vuejs.org) and [Firebase](https://firebase.google.com). It might help to find positive things in your day. You post for what you're thankful and get inspired by what the others are thankful for.

## Project setup
```
npm install
```
The ```src``` folder has to contain a file called ```firebaseConfig.js``` with this content:
```
module.exports = {

    apiKey: "<apiKey>",
    authDomain: "<authDomain>",
    databaseURL: "<databaseURL>",
    projectId: "<projectId>",
    storageBucket: "<storageBucket>",
    messagingSenderId: <messagingSenderId>",
    appId: "<appId>"
}
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
