import React from 'react';

let AddTodo = React.createClass({
    handleSubmit() {
        let text = this.refs.newTodo.value;
        if (text.length > 0 && text != '') {
            this.props.addTodo(text);
            this.refs.newTodo.value = '';
        } else {
            this.refs.newTodo.focus();
        }
    },
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="newTodo" placeholder="What you want to do?"/>
                    <button className="button primary expanded">Add todo</button>
                </form>
            </div>
        )
    }
});

module.exports = AddTodo;