import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';
import {Provider} from 'react-redux';

import firebase from 'app/firebase/index.js';
import {startAddTodos, login, logout} from 'actions';
import router from 'app/router/index.jsx';
let store = require('configureStore').configure();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startAddTodos());
    hashHistory.push('/todos');
  } else {
    store.dispatch(logout());
    hashHistory.push('/');
  }
});

// load custom styles
require('style!css!sass!applicationStyles');

$('document').foundation();


ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
