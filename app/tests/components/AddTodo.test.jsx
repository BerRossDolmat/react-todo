import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import {startAddTodo} from 'actions';
import {AddTodo} from 'AddTodo';

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should dispatch startAddTodo action with valid text', () => {
        let spy = expect.createSpy();
        let todoText = 'Wag The Dog';
        let action = startAddTodo(todoText);
        let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        let $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.newTodo.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should not dispatch addTodo with invalid text', () => {
        let spy = expect.createSpy();
        let todoText = '';
        let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        let $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.newTodo.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});
