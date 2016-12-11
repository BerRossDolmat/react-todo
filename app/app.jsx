import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import TodoApp from 'TodoApp';

import {addTodos, startAddTodos} from 'actions';

let store = require('configureStore').configure();
import TodoAPI from 'TodoAPI';

store.dispatch(startAddTodos());

// load custom styles
require('style!css!sass!applicationStyles');

$('document').foundation();

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
