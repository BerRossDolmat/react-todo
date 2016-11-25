import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import uuid from 'node-uuid';

let TodoApp = React.createClass({
    getInitialState() {
      return {
          searchCompleted: false,
          searchText: '',
          todos: [
            {
                id: uuid(),
                text: 'Walk the dog'
            },
            {
                id: uuid(),
                text: 'Clean the yard'
            },
            {
                id: uuid(),
                text: 'Leave mail'
            },
            {
                id: uuid(),
                text: 'Play videogames'
            }
        ]
      };
    },
    handleAddTodo(text) {
        this.setState({
           todos: [
               ...this.state.todos,
               {
                   text: text,
                   id: uuid()
               }
           ]
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
                <TodoList todos={todos} />
                <AddTodo addTodo={this.handleAddTodo} />
            </div>
        )
    }
});

module.exports = TodoApp;