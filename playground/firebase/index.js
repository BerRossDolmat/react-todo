import firebase from 'firebase';


// Initialize Firebase
var config = {
  apiKey: "AIzaSyCLvu9NIUhM5lWtxwgVY6mwqWx29tJ9gd0",
  authDomain: "react-todo-app-6208d.firebaseapp.com",
  databaseURL: "https://react-todo-app-6208d.firebaseio.com",
  storageBucket: "react-todo-app-6208d.appspot.com",
  messagingSenderId: "484988063558"
};
firebase.initializeApp(config);

let firebaseRef = firebase.database().ref();
firebaseRef.set({
  app: {
    name: 'ReactTodoApp',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Anton',
    age: 29
  }
});

let todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
console.log('Added todo', snapshot.key);
});

todosRef.push({
  text: 'Walk the dog!'
});

todosRef.push({
  text: 'Film smth'
});
