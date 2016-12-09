import React from 'react';
import {connect} from 'react-redux';
import {startAddTodo} from 'actions';

export let AddTodo = React.createClass({
    handleSubmit(e) {
        e.preventDefault();
        let text = this.refs.newTodo.value;
        let {dispatch} = this.props;
        if (text.length > 0) {
            this.refs.newTodo.value = '';
            dispatch(startAddTodo(text));
        } else {
            this.refs.newTodo.focus();
        }
    },
    render() {
        return (
            <div className="container__footer">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="newTodo" placeholder="What you want to do?"/>
                    <button className="button primary expanded">Add todo</button>
                </form>
            </div>
        )
    }
});

export default connect()(AddTodo);
