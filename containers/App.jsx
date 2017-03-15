import React from 'react';
import Helmet from 'react-helmet';
import request from 'superagent';
import videojs from 'video.js/es5/video';
import Header from '../components/Header';
import VideoSection from '../components/VideoSection';
import Loading from '../components/Loading';
import favicon from '../src/image/favicon.png';

const apiUrl = 'users.json';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { name: '', image: '', source: [{ src: '', type: '' }] },
      users: {},
    };
  }

  componentDidMount() {
    const params = this.props.match.params;
    request.get(apiUrl)
    .accept('json')
    .end((err, res) => {
      if (err) {
        throw err;
      }

      const users = res.body;
      const currentUserKey = (users[params.userName])
      ? params.userName
      : Object.keys(users).shift();

      this.setState({ users, user: users[currentUserKey] });
    });
  }

  componentWillReceiveProps(newProps) {
    const params = newProps.match.params;
    this.setState({ user: this.state.users[params.userName] });
  }

  shouldComponentUpdate(newProps) {
    const params = newProps.match.params;
    if (params.userName !== this.state.user.name) return true;
    return false;
  }

  componentDidUpdate() {
    if (!this.videoSection) return;
    this.setup();
  }

  setup() {
    const v = videojs(this.videoSection.videoPlayer);
    v.poster(this.state.user.image);
    v.src(this.state.user.source);
    v.load();
    v.play();
  }

  render() {
    const { user, users } = this.state;

    if (user.name === '') return <Loading />;

    return (
      <div>
        <Helmet title={user.name} link={[{ rel: 'icon', type: 'image/png', href: favicon }]} />
        <div>
          <Header user={user} users={users} />
          <VideoSection ref={(c) => { this.videoSection = c; }} user={user} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  match: React.PropTypes.shape({
    params: React.PropTypes.shape({
      userName: React.PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default App;
