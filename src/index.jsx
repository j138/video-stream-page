import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Template from '../containers/Template';
import App from '../containers/App';
import './main.css';
import './videojs-custom.css';

window.React = React;
ReactGA.initialize('UA-88356342-1');

const logPageView = () => {
  window.console.log(window.location);
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
  return null;
};

injectTapEventPlugin();
ReactDOM.render(
  <Template>
    <Router>
      <div>
        <Route path="/" component={logPageView} />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/:userName" component={App} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </Router>
  </Template>,
  document.getElementById('root'),
);
