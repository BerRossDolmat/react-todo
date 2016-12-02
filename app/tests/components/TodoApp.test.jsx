import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import TodoApp from 'TodoApp';

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add Todo to todos state on handle addTodo', () => {
       let todoText = 'Test text';
       let todoApp = TestUtils.renderIntoDocument(<TodoApp />);

       todoApp.setState({todos: []});
       todoApp.handleAddTodo(todoText);

       expect(todoApp.state.todos[0].text).toBe(todoText);
    });

    it('should toggle completed value when handleToggle called', () => {
       let todoData = {
           id: 11,
           text: 'Test',
           completed: false,
           createdAt: 0,
           completedAt: undefined
       };

       let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
       todoApp.setState({
          todos: [todoData]
       });

       expect(todoApp.state.todos[0].completed).toBe(false);

       todoApp.handleToggle(11);
       expect(todoApp.state.todos[0].completed).toBe(true);
       expect(todoApp.state.todos[0].completedAt).toBeA('number');
    });

    it('should toggle todo from completed to incompleted', () => {
        let todoData = {
            id: 1,
            text: 'Test',
            completed: true,
            createdAt: 0,
            completedAt: 123123123
        };

        let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({
            todos: [todoData]
        });
        expect(todoApp.state.todos[0].completed).toBe(true);
        todoApp.handleToggle(1);
        expect(todoApp.state.todos[0].completed).toBe(false);
        expect(todoApp.state.todos[0].completedAt).toBe(undefined);
    });
});