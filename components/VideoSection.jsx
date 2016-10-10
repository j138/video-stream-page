import React from 'react';
import Radium from 'radium';
import * as styles from './styles';
import Loading from './Loading';


const classNames = require('classnames');

@Radium
class VideoSection extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.user.name === '') return false;
    if (nextProps.user.name !== this.props.user.name) return true;

    return false;
  }

  render() {
    if (this.props.user.name === '') {
      return (
        <Loading style={styles.wideScreen} />
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
          styles.wideScreen,
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
