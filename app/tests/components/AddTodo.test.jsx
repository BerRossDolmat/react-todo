import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import AddTodo from 'AddTodo';

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should call onSubmit with valid data', () => {
        let spy = expect.createSpy();
        let todoText = 'Wag The Dog';
        let addTodo = TestUtils.renderIntoDocument(<AddTodo addTodo={spy}/>);
        let $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.newTodo.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(todoText);
    });

    it('should never call onSubmit with empty data', () => {
        let spy = expect.createSpy();
        let todoText = '';
        let addTodo = TestUtils.renderIntoDocument(<AddTodo addTodo={spy}/>);
        let $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.newTodo.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});

