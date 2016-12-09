import React from 'react';
import Helmet from 'react-helmet';
import request from 'superagent';
import videojs from 'video.js/dist/video.min';
import Header from '../components/Header';
import VideoSection from '../components/VideoSection';
import Loading from '../components/Loading';

const apiUrl = 'config.json';

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
    v.load();
    v.play();
  }

  render() {
    if (this.state.user.name === '') return <Loading />;

    return (
      <div>
        <Helmet title={this.state.user.name} />
        <div>
          <Header
            user={this.state.user}
            users={this.state.users}
          />
          <VideoSection
            ref={(c) => { this.videoSection = c; }}
            user={this.state.user}
          />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  params: React.PropTypes.shape({
    userName: React.PropTypes.string,
  }),
};

export default App;
