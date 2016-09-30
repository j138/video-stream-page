import React from 'react';

const VideoSection = props => (
  <div
    id="main-video"
    className="video-js vjs-default-skin"
    poster={props.user.image}
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
    <source src={props.user.stream_uri} type="rtmp/mp4" />
    <source src={props.user.hls_stream_uri} type="application/x-mpegURL" />
  </div>
);

VideoSection.propTypes = {
  user: React.PropTypes.object,
};

export default VideoSection;
