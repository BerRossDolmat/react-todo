import React from 'react';

let Todo = React.createClass({
    render() {
        let {text, id} = this.props;
        return (
            <div>
                {id} {text}
            </div>
        )
    }
});

module.exports = Todo;