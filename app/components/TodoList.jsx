import React from 'react';
import Todo from 'Todo';

let TodoList = React.createClass({

    render() {
        let {todos} = this.props;
        let renderTodos = () => {
            return todos.map((todo) => {
                return (
                    <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
                )
            });
        };

        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
});

module.exports = TodoList;