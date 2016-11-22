import React from 'react';
import ReactDOM from'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import TodoApp from 'TodoApp';
// load custom styles
require('style!css!sass!applicationStyles');

$('document').foundation();

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
