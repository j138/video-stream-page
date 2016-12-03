import React from 'react';
import Helmet from 'react-helmet';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import MyRawTheme from '../components/materialUiRawThemeFile';

const title = 'Miyahira Livestream';

const Template = props => (
  <MuiThemeProvider muiTheme={getMuiTheme(MyRawTheme)}>
    <div>
      <Helmet
        defaultTitle={title}
        titleTemplate={`$%s@{title}`
      />
      {props.children}
    </div>
  </MuiThemeProvider>
);

Template.propTypes = {
  children: React.PropTypes.shape(),
};

export default Template;

