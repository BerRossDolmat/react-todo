import React from 'react';
import ReactDOM from'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

// load custom styles
require('style!css!sass!applicationStyles');

$('document').foundation();

ReactDOM.render(
  <p>Boilerplate3</p>,
  document.getElementById('app')
);
