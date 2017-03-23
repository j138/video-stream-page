import React from 'react';
import Radium from 'radium';
import * as styles from './styles';

const classNames = require('classnames');

@Radium class VideoSection extends React.Component {
  render() {
    const props = {
      id: 'main-video',
      className: classNames('video-js', 'vjs-default-skin'),
      poster: this.props.user.image,
      controls: true,
      autoPlay: false,
      preload: 'none',
    };

    const datasetup = `
        {
          "nativeControlsForTouch": "true",
          "techOrder": ["flash", "html5", "other supported tech"],
          "controlBar": {
            "timeDivider": false,
            "durationDisplay": true,
            "progressControl": true
          }
        }`;

    return (
      <video
        style={styles.wideScreen}
        {...props}
        ref={(c) => {
          this.videoPlayer = c;
        }}
        data-setup={datasetup}
      />
    );
  }
}

VideoSection.propTypes = {
  user: React.PropTypes.shape({
    name: React.PropTypes.string,
    image: React.PropTypes.string,
  }).isRequired,
};

export default VideoSection;
