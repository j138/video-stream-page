import React from 'react';
// import {
//   CircularProgress,
// } from 'material-ui';

const request = require('superagent');

class MainSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      user: { name: '', image: '', stream_uri: '', hls_stream_uri: '' },
    };

    request.get(this.props.apiUrl)
    .end((err, res) => {
      if (err) {
        throw err;
      }
      this.setState({ users: res.body });
      this.pickUser();
    });
  }

  pickUser() {
    const { users } = this.state;
    const user = users.jey;
    this.setState({ user });
  }

  render() {
    return (
      <div>
        <p>{this.state.user.name}</p>
        <div
          id="main-video"
          className="video-js vjs-default-skin"
          poster={this.state.user.image}
          controls
          data-setup='
          {
            "controls": true,
            "preload": "auto",
            "autoplay": true,
            "techOrder": ["flash", "html5", "other supported tech"],
            "nativeControlsForTouch": true,
            "controlBar": {
              "muteToggle": true,
              "timeDivider": false,
              "durationDisplay": true,
              "progressControl": true
            }
          }
          '
        >
          <source src={this.state.user.stream_uri} type="rtmp/mp4" />
          <source src={this.state.user.hls_stream_uri} type="application/x-mpegURL" />
        </div>
      </div>
    );
  }
}

MainSection.defaultProps = {
  apiUrl: '/config.json',
};

MainSection.propTypes = {
  apiUrl: React.PropTypes.string,
};

export default MainSection;
