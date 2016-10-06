import React from 'react';
import videojs from 'video.js/dist/video.min';
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
  }

  componentDidMount() {
    request.get(apiUrl)
    .accept('json')
    .end((err, res) => {
      if (err) {
        throw err;
      }

      const users = res.body;
      const currentUserKey = (users[this.props.params.userName])
      ? this.props.params.userName
      : Object.keys(users).shift();

      this.setState({ users, user: users[currentUserKey] });
    });
  }

  componentWillReceiveProps(newProps) {
    this.setState({ user: this.state.users[newProps.params.userName] });
  }

  shouldComponentUpdate(newProps) {
    if (newProps.params.userName !== this.state.user.name) {
      return true;
    }

    return false;
  }

  componentDidUpdate() {
    if (!this.videoSection.videoPlayer) return;
    const v = videojs(this.videoSection.videoPlayer);
    v.poster(this.state.user.image);
    v.src(this.state.user.source);
    v.pause();
    v.load();
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
  params: React.PropTypes.shape({
    userName: React.PropTypes.string,
  }),
};

export default App;
