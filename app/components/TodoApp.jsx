import React from 'react';
import TodoList from 'TodoList';

let TodoApp = React.createClass({
    getInitialState() {
      return {
        todos: [
            {
                id: 1,
                text: 'Walk the dog'
            },
            {
                id: 2,
                text: 'Clean the yard'
            },
            {
                id: 3,
                text: 'Leave mail'
            },
            {
                id: 4,
                text: 'Play videogames'
            }
        ]
      };
    },
    render() {
        let {todos} = this.state;

        return (
            <div>
                <TodoList todos={todos} />
            </div>
        )
    }
});

module.exports = TodoApp;