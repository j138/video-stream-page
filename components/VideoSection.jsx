import React from 'react';
import { CircularProgress } from 'material-ui';

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
          <CircularProgress size={9} />
        </div>
      );
    }

    return (
      <video
        id="main-video"
        ref={(c) => { this.videoPlayer = c; }}
        className="video-js vjs-default-skin"
        poster={this.props.user.image}
        preload="auto"
        controls="true"
        data-setup='
        {
          "autoplay": false,
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
