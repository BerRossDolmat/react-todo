let expect = require('expect');
let df = require('deep-freeze-strict');
let moment = require('moment');
let reducers = require('reducers');

describe('Reducers', () => {
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
        text: 'Walk the dog'
      };

      let res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle todo', () => {
      let action = {
        type: 'TOGGLE_TODO',
        id: 1
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

      let res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
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
      console.log(res);
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos);
    });
  });
});
