import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';
import {Provider} from 'react-redux';

import firebase from 'app/firebase/index.js';
import {startAddTodos} from 'actions';
import router from 'app/router/index.jsx';
let store = require('configureStore').configure();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    hashHistory.push('/todos');
  } else {
    hashHistory.push('/');
  }
});


store.dispatch(startAddTodos());

// load custom styles
require('style!css!sass!applicationStyles');

$('document').foundation();


ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
