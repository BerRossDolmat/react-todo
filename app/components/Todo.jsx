import React from 'react';
import moment from 'moment';

let Todo = React.createClass({
    render() {
        let {text, id, completed, createdAt, completedAt} = this.props;
        let todoClassname = completed ? 'todo todo-completed' : 'todo';
        let renderDate = () => {
          let message = 'Created ';
          let timestamp = createdAt;

          if (completed) {
              message = 'Completed ';
              timestamp = completedAt;
          }

          return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
        };
        return (
            <div className={todoClassname} onClick={() => {
                this.props.onToggle(id);
            }}>
                <div>
                    <input type="checkbox" checked={completed}/>
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
            </div>
        )
    }
});

module.exports = Todo;