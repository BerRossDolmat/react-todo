let expect = require('expect');
let df = require('deep-freeze-strict');
let moment = require('moment');
let reducers = require('reducers');

describe('Reducers', () => {
  describe('authReducer', () => {
    it('should set uid with LOGIN action', () => {
      let action = {
        type: 'LOGIN',
        uid: 115
      };

      let res = reducers.authReducer(df(''), df(action));

      expect(res.uid).toEqual(action.uid);
    });

    it('should unset uid with LOGOUT action', () => {
      const authData = {
        uid: 123
      };

      let action = {
        type: 'LOGOUT'
      };

      let res = reducers.authReducer(df(authData), df(action));

      expect(res).toEqual({});
    });
  });

  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      let action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };

      let res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted state', () => {
      let action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };

      let res = reducers.showCompletedReducer(df(true), df(action));

      expect(res).toBe(false);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      let action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'Something to do',
          completed: false,
          createdAt: 123123123
        }
      };

      let res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should wipe out all todos on LOGOUT', () => {

      let todos = [{
        id: 'abc123',
        text: 'Something to do',
        completed: false,
        createdAt: 123123123
      },
      {
        id: 'abc123',
        text: 'Something to do',
        completed: false,
        createdAt: 123123123
      }];

      let action = {
        type: 'LOGOUT',
      };

      let res = reducers.todosReducer(df(todos), df(action));

      expect(res.length).toEqual(0);
    });

    it('should update todo', () => {
      let updates = {
        completed: false,
        completedAt: null
      };

      let todos = [
        {
          text: 'Some todo',
          id: 1,
          completed: true,
          createdAt: 123,
          completedAt: 125
        }
      ];

      let action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };

      let res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });

    it('should add existing todos', () => {
      let todos = [{
        id: 111,
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }];
      let action = {
        type: 'ADD_TODOS',
        todos
      };

      let res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
  });
});
