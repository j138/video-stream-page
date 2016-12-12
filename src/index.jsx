import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import MyRawTheme from '../components/materialUiRawThemeFile';
import Template from '../containers/Template';
import App from '../containers/App';
import './main.css';
import './videojs-custom.css';

window.React = React;
ReactGA.initialize('UA-88356342-1');

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

injectTapEventPlugin();
ReactDOM.render((
  <MuiThemeProvider muiTheme={getMuiTheme(MyRawTheme)}>
    <Router history={browserHistory} onUpdate={logPageView}>
      <Route path="/" component={Template}>
        <IndexRoute component={App} />
        <Route path="/:userName" component={App} />
      </Route>
    </Router>
  </MuiThemeProvider>
), document.getElementById('root'));
