# Acronis To-do App

## Installation
### Pre-requisites
1. Node.js

### First, install the required packages using
```
npm install
```

### To compile and run the development server with hot-reloads
```
npm run serve
```
You can access the app at http://localhost:8080.
Please note that you will also need the api server to be running. See below for more information.

### To compile and minify for production
```
npm run build
```
### To run the API server
```
npm run server
```
If you are running the development server, please also run this API server.

If you have already built for production ( i.e `npm run build` ), you can also access the app at http://localhost:8000 to test the app once you run the API server.

## Unit Test

Unit test is written using Jest as required by the assignment. The example unit test is written for the InputBar.vue component

To run the test, use:
```
npm run test:unit
```


## Project Information

This project is a single-page Vue app created using Vue CLI 3. The following are also installed using Vue CLI
- Vuex for state management, 
- scss for styling, 
- Element UI for UI,
- Jest + vue-utils for unit test

For the API server, *lowdb* is used as the database for testing. The access to the database is separate as another module (instead of directly writing into *apiserver.js*). This is done so that the API server is not tightly coupled with one type of database implementation. If another type of database is required and the implementation of accessing the database is changed, *apiserver.js* will only need to import another module (with the same function names) that implements this.

Only Element UI components that are required by this project is installed, this is defined in "__src/plugin/element.js__". This will help reduce the file size of the app when it is built as unnecessary code for unused component is excluded.

In cases where the app requires access to the API server, the javascript file imports a set of "API helper" functions that returns a promise, implemented using Axios. This is most evident in *store.js* which imports from *apiHelper.js*. 
By writing it this way, the implementation of consuming the APIs is not be tightly coupled with the rest of the app. Should the case where other methods of consuming the API is used, such as using the native *fetch()* instead of axios, we could just import the .js file that implements this (with the same function names) and not make huge changes to every part of the app that requires access to the APIs. Because of this implementation, *vue-axios* is not used.

When the app starts, the app will retrieve all of the to-dos. While it is retrieving, the app shows a loading icon to provide a feedback for the users that the retrieval is in progress, instead of showing a "no to-dos" state right from the beginning. This is implemented in the Vuex action - `getTodoList` in store.js.

Similar feedback can be seen for updating the to-do (Setting whether a to-do is done, or the editing text itself) where the change is commited to the store first. The app will show a spinner, along with greyed text reflecting the change (if any) while waiting for the response from the server, then showing the correct checkbox state and normal text colour after the response from the API server had return. 

To test the routing in this app, an Edit to-do is implemented as the "other page". Lazy-loading is used for this view so that the initial load of the app is less heavy. To save time on getting the to-do object, if Edit page is accessed by navigating from the Edit button in the Home page, the to-do object is passed to the Edit page directly as a parameter. However, if the Edit page is access directly via URL, the **id** parameter is used to retrieve the to-do object from the API server as the to-do object will not be initially available. Similarly, a loading spinner will be shown if the retrieval of the to-do object is in progress. Because the Edit page also uses the `updateTodo` action, the edit will be reflected immediately to the store once the action commits `UPDATE_TODO`. The edit will be shown in the Home page as it has access to the same Vuex state.