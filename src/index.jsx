import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import MyRawTheme from '../components/materialUiRawThemeFile';
import Template from '../containers/Template';
import App from '../containers/App';

window.React = React;

injectTapEventPlugin();
ReactDOM.render((
  <MuiThemeProvider muiTheme={getMuiTheme(MyRawTheme)}>
    <Router history={browserHistory}>
      <Route path="/" component={Template}>
        <IndexRoute component={App} />
        <Route path="/:userName" component={App} />
      </Route>
    </Router>
  </MuiThemeProvider>
), document.getElementById('root'));
