import React from 'react';
import * as Redux from 'react-redux';

import {startLogin} from 'actions';

export let Login = React.createClass({
  onLogin() {
    let {dispatch} = this.props;
    dispatch(startLogin());
  },
  render() {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>
                Login with gitHub account below
              </p>
              <button onClick={this.onLogin} className="button">Login with GitHub</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default Redux.connect()(Login);
