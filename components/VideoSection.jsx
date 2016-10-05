import React from 'react';

class VideoSection extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.user.name !== this.props.user.name) {
      return true;
    }

    return false;
  }

  render() {
    return (
      <div
        id="main-video"
        ref={(c) => { this.videoPlayer = c; }}
        className="video-js vjs-default-skin"
        poster={this.props.user.image}
        preload="auto"
        controls
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
      >
        {this.props.user.source.map((v, index) =>
          <source key={`${this.props.user.name}-${index}`} {... v} />)}
      </div>
    );
  }
}
// {this.props.user.source.map((v, index) =>
// <source key={`${this.props.user.name}-${index}`} {... v} />)}
// src={this.props.user.source[0].src}

VideoSection.propTypes = {
  user: React.PropTypes.object,
};

export default VideoSection;
