import React from 'react';
import vjs from 'video.js/dist/video.min';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import MyRawTheme from '../components/materialUiRawThemeFile';
import Header from '../components/Header';
import VideoSection from '../components/VideoSection';

const request = require('superagent');

const apiUrl = '/static/config.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { name: '', image: '', source: [{ src: '', type: '' }] },
      users: {},
    };

    request.get(apiUrl)
    .end((err, res) => {
      if (err) {
        throw err;
      }

      this.setState({ users: res.body });

      const currentUserKey = (this.state.users[this.props.params.userName])
      ? this.props.params.userName
      : Object.keys(this.state.users).shift();

      this.setState({ user: this.state.users[currentUserKey] });
    });
  }

  componentWillReceiveProps(newProps) {
    this.setState({ user: this.state.users[newProps.params.userName] });
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.params.userName !== this.state.user.name) {
      return true;
    }

    return false;
  }

  // componentWillUpdate() {
  // }

  componentDidUpdate() {
    // window.console.log(this.videoSection.videoPlayer);
    // vjs(this.videoSection.videoPlayer.id);
    const v = vjs(this.videoSection.videoPlayer.id);
    v.pause();
    v.load();
    v.play();
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(MyRawTheme)}>
        <div>
          <Header
            user={this.state.user}
            users={this.state.users}
            selectUser={v => this.setState({ user: this.state.users[v] })}
          />
          <VideoSection
            ref={(c) => { this.videoSection = c; }}
            user={this.state.user}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  params: React.PropTypes.object,
};

export default App;
