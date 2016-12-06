import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import {Provider} from 'react-redux';

let configureStore = require('configureStore');
import TodoList from 'TodoList';
import TodoApp from 'TodoApp';

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should render TodoList', () => {
      let store = configureStore.configure();
      let provider = TestUtils.renderIntoDocument(
        <Provider store={store}>
          <TodoApp />
        </Provider>
      );

      let todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0]
      let todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

      expect(todoList.length).toEqual(1);
    });
});
