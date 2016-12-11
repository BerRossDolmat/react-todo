import expect from 'expect';

import TodoAPI from 'TodoAPI';

describe('TodoAPI', () => {
	beforeEach(() => {
		localStorage.clear();
	});

	it('should exist', () => {
		expect(TodoAPI).toExist();
   });

	describe('filterTodos', () => {
        let todos = [{
            id: 1,
            text: 'test1',
            completed: true
        },{
            id: 2,
            text: 'test2',
            completed: false
        },{
            id: 3,
            text: 'test3',
            completed: true
        }];
		it('should return all todos if showCompleted is true', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, '');

            expect(filteredTodos.length).toBe(3);
	    });

        it('should return uncompleted todos if showCompleted is false', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, false, '');

            expect(filteredTodos.length).toBe(1);
        });

        it('should sort by completed status', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, '');

            expect(filteredTodos[0].completed).toBe(false);
        });

        it('should filter todos by search text', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, 'test1');

            expect(filteredTodos.length).toBe(1);
        });

        it('should return all todos if search text is empty', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, '');

            expect(filteredTodos.length).toBe(todos.length);
        });
	});
});
