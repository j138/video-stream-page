import React from 'react';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
// import MyRawTheme from '../components/materialUiRawThemeFile';
import MyRawTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Header from '../components/Header';
import VideoSection from '../components/VideoSection';

const request = require('superagent');

const apiUrl = '/static/config.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { name: 'init', image: '', stream_uri: '', hls_stream_uri: '' },
      users: {},
    };

    request.get(apiUrl)
    .end((err, res) => {
      if (err) {
        throw err;
      }

      this.setState({ users: res.body });
    });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(MyRawTheme)}>
        <div>
          <Header
            user={this.state.user}
            users={Object.keys(this.state.users)}
            changeUser={v => this.setState({ user: this.state.users[v] })}
          />
          <VideoSection user={this.state.user} />
        </div>
      </MuiThemeProvider>
    );
  }
}
export default App;
