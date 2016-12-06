export let setSearchText = (searchText) => {
	return {
	    type: 'SET_SEARCH_TEXT',
	    searchText
    };
};

export let addTodos = (todos) => {
	console.log('in actions file', todos);
	return {
		type: 'ADD_TODOS',
		todos
	};
};

export let addTodo = (text) => {
	return {
		type: 'ADD_TODO',
		text
	};
};

export let toggleShowCompleted = () => {
	return {
		type: 'TOGGLE_SHOW_COMPLETED'
	};
};

export let toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	};
};
