import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import TodoList from 'TodoList';
import Todo from 'Todo';

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render 1 todo component for each todo item', () => {
       let todos = [
           {
               id: 1,
               text: 'do smth'
           },
           {
               id: 2,
               text: 'check data'
           }
       ];

       let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
       let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
       expect(todosComponents.length).toBe(todos.length);
    });
});