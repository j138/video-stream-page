import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { Provider } from 'mobx-react';
import { RouterStore } from 'mobx-react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Template from './containers/Template';
import UserStore from './stores/UserStore';
import App from './containers/App';
import './main.css';
import './videojs-custom.css';

const routingStore = new RouterStore();
const userStore = new UserStore();

const stores = {
  routing: routingStore,
  userStore,
};

window.React = React;
ReactGA.initialize('UA-88356342-1');

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
  return null;
};

injectTapEventPlugin();
ReactDOM.render(
  <Provider {...stores}>
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
    </Template>
  </Provider>,
  document.getElementById('root'),
);
