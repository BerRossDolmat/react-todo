import React from 'react';
import uuid from 'node-uuid';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import TodoAPI from 'TodoAPI';

let TodoApp = React.createClass({
    getInitialState() {
      return {
          searchCompleted: false,
          searchText: '',
          todos: TodoAPI.getTodos()
      };
    },
    componentDidUpdate() {
      TodoAPI.setTodos(this.state.todos);
    },
    handleAddTodo(text) {
        this.setState({
           todos: [
               ...this.state.todos,
               {
                   text: text,
                   id: uuid(),
                   completed: false
               }
           ]
        });
    },
    handleToggle(id) {
        let updatedTodos = this.state.todos.map((todo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });

        this.setState({
           todos: updatedTodos
        });
    },
    handleSearch(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    render() {
        let {todos} = this.state;

        return (
            <div>
                <TodoSearch onSearch={this.handleSearch} />
                <TodoList todos={todos} onToggle={this.handleToggle}/>
                <AddTodo addTodo={this.handleAddTodo} />
            </div>
        )
    }
});

module.exports = TodoApp;