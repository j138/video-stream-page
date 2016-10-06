import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from '../containers/App';

window.React = React;

injectTapEventPlugin();
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/:userName" component={App} />
    </Route>
  </Router>
), document.getElementById('root'));
