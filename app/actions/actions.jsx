import firebase, {firebaseRef, githubProvider} from 'app/firebase/index';
import moment from 'moment';

export let setSearchText = (searchText) => {
	return {
	    type: 'SET_SEARCH_TEXT',
	    searchText
    };
};

export let addTodos = (todos) => {
	return {
		type: 'ADD_TODOS',
		todos
	};
};

export let startAddTodos = () => {
	return (dispatch, getState) => {
		return firebaseRef.child('todos').once('value').then((snapshot) => {
			let objTodos = snapshot.val() || {};
			let todos = [];
			Object.keys(objTodos).forEach((todoId) => {
				todos.push({
					id: todoId,
					...objTodos[todoId]
				});
			});
			dispatch(addTodos(todos));
		});
	};
};

export let addTodo = (todo) => {
	return {
		type: 'ADD_TODO',
		todo
	};
};

export let startAddTodo = (text) => {
	return (dispatch, getState) => {
		let todo = {
			text,
			completed: false,
			createdAt: moment().unix(),
			completedAt: null
		};
		let todoRef = firebaseRef.child('todos').push(todo);

		return todoRef.then(() => {
			dispatch(addTodo({
				...todo,
				id: todoRef.key
			}));
		});

	};
};

export let toggleShowCompleted = () => {
	return {
		type: 'TOGGLE_SHOW_COMPLETED'
	};
};

export let updateTodo = (id, updates) => {
	return {
		type: 'UPDATE_TODO',
		id,
		updates
	};
};

export let startToggleTodo = (id, completed) => {
	return (dispatch, getState) => {
		let todoRef = firebaseRef.child(`todos/${id}`);
		let updates = {
			completed,
			completedAt: completed ? moment().unix() : null
		};

		return todoRef.update(updates)
			.then(() => {
				dispatch(updateTodo(id, updates));
			});
	}
};

export let startLogin = () => {
	return (dispatch, getState) => {
		return firebase.auth().signInWithPopup(githubProvider)
			.then((result) => {
				console.log('Worked', result);
			},
			(error) => {
				console.log('Error', error);
			});
	};
};

export let startLogout = () => {
	return (dispatch, getState) => {
		return firebase.auth().signOut()
			.then(() => {
				console.log('Logged out');
			})
	};
};
