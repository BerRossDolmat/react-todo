import React from 'react';
import Todo from 'Todo';
import {connect} from 'react-redux';
import TodoAPI from 'TodoAPI';

export let TodoList = React.createClass({
    render() {
        let {todos, searchText, showCompleted} = this.props;
        let renderTodos = () => {
            if (todos.length === 0) {
                return (
                    <p className="container__message">Nothing to do</p>
                )
            }

            return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
                return (
                    <Todo key={todo.id} {...todo} />
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

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
