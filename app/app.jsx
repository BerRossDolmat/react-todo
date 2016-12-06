import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import TodoApp from 'TodoApp';

import {addTodos} from 'actions';

let store = require('configureStore').configure();
import TodoAPI from 'TodoAPI';

store.subscribe(() => {
  let state = store.getState();
  console.log('New state', state);
  TodoAPI.setTodos(state.todos);
});
let initialTodos = TodoAPI.getTodos();
console.log(initialTodos);
store.dispatch(addTodos(initialTodos));

// load custom styles
require('style!css!sass!applicationStyles');

$('document').foundation();

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
