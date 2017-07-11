import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import ReactHLS from 'react-hls';
import Radium from 'radium';
import * as styles from './styles';

@Radium
@inject('userStore')
@observer
class VideoSection extends React.Component {
  render() {
    const { user } = this.props.userStore;

    const videoProps = {
      id: 'main-video',
      url: user.source[0].src,
      poster: user.image,
      controls: true,
      autoPlay: false,
      height: window.innerHeight - 50,
      width: window.innerWidth,
    };

    return (
      <ReactHLS
        style={styles.wideScreen}
        ref={(c) => {
          this.videoPlayer = c;
        }}
        {...videoProps}
      >
        <track kind="captions" />
      </ReactHLS>
    );
  }
}

VideoSection.propTypes = {
  userStore: PropTypes.shape({
    user: PropTypes.shape(),
  }).isRequired,
};

export default VideoSection;
