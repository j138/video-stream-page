import React from 'react';
import Helmet from 'react-helmet';
import videojs from 'video.js/dist/video.min';
import Header from '../components/Header';
import VideoSection from '../components/VideoSection';
import Loading from '../components/Loading';
import users from '../src/users.json';
import favicon from '../src/favicon.png';

class App extends React.Component {
  constructor(props) {
    super(props);

    const currentUserKey = (users[this.props.params.userName])
      ? this.props.params.userName
      : Object.keys(users).shift();

    this.state = {
      users,
      user: users[currentUserKey],
    };
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
        <Helmet
          title={this.state.user.name}
          link={[
            { rel: 'icon', type: 'image/png', href: favicon },
          ]}
        />
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
