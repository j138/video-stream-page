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
      users: [],
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
      const user = users.find(u => u.name === params.userName) || users[0];

      this.setState({ users, user });
    });
  }

  componentWillReceiveProps(newProps) {
    const { users } = this.state;
    const params = newProps.match.params;

    this.setState({ user: users.find(u => u.name === params.userName) });
  }

  shouldComponentUpdate(newProps) {
    const { user } = this.state;
    const params = newProps.match.params;

    if (params.userName !== user.name) return true;
    return false;
  }

  componentDidUpdate() {
    if (!this.videoSection) return;
    this.setup();
  }

  setup() {
    const { user } = this.state;

    const v = videojs(this.videoSection.videoPlayer);
    v.poster(user.image);
    v.src(user.source);
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
          <VideoSection ref={(c) => { this.videoSection = c; }} user={user} /> </div>
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
