import React from 'react';
import Radium from 'radium';
import { CircularProgress } from 'material-ui';

const classNames = require('classnames');

const styles = {
  videojs: {
    position: 'fixed',
    right: 0,
    top: '50px',
    bottom: 0,
    minWidth: '100%',
    minHeight: '90%',
    width: 'auto',
    height: 'auto',
    zindex: -100,
    // backgroundColor: '#2B333F',
    backgroundColor: 'red',
    backgroundSize: 'cover',
  },
};

@Radium
class VideoSection extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.user.name === '') {
      return false;
    }

    if (nextProps.user.name !== this.props.user.name) {
      return true;
    }

    return false;
  }

  render() {
    if (this.props.user.name === '') {
      const customStyle = {
        paddingTop: 100,
        textAlign: 'center',
      };

      return (
        <div style={customStyle}>
          <CircularProgress size={280} thickness={10} />
        </div>
      );
    }

    const props = {
      id: 'main-video',
      className: classNames('video-js', 'vjs-default-skin'),
      poster: this.props.user.image,
      controls: true,
      autoPlay: false,
      preload: 'none',
    };

    return (
      <video
        style={[
          styles.videojs,
        ]}
        {...props}
        ref={(c) => { this.videoPlayer = c; }}
        data-setup='
        {
          "nativeControlsForTouch": "true",
          "techOrder": ["flash", "html5", "other supported tech"],
          "controlBar": {
            "muteToggle": true,
            "timeDivider": false,
            "durationDisplay": true,
            "progressControl": true
          }
        }'
      />
    );
  }
}

VideoSection.propTypes = {
  user: React.PropTypes.shape({
    name: React.PropTypes.string,
    image: React.PropTypes.string,
  }),
};

export default VideoSection;
