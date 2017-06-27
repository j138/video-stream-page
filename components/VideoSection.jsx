import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Radium from 'radium';
import * as styles from './styles';

@Radium
class VideoSection extends React.Component {
  render() {
    const props = {
      id: 'main-video',
      className: cx('video-js', 'vjs-default-skin'),
      poster: this.props.user.image,
      controls: true,
      autoPlay: false,
      preload: 'none',
    };

    const datasetup = `
        {
          "nativeControlsForTouch": "true",
          "techOrder": ["html5"],
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
      >
        <track kind="captions" />
      </video>
    );
  }
}

VideoSection.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default VideoSection;
