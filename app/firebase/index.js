import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCLvu9NIUhM5lWtxwgVY6mwqWx29tJ9gd0",
    authDomain: "react-todo-app-6208d.firebaseapp.com",
    databaseURL: "https://react-todo-app-6208d.firebaseio.com",
    storageBucket: "react-todo-app-6208d.appspot.com",
    messagingSenderId: "484988063558"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export let firebaseRef = firebase.database().ref();
export default firebase;
