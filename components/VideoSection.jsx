import React from 'react';

const VideoSection = props => (
  <video
    id="main-video"
    className="video-js vjs-default-skin"
    poster={props.user.image}
    controls
    preload="auto"
    data-setup='
    {
      "autoplay": true,
      "nativeControlsForTouch": "true",
      "techOrder": ["flash", "html5", "other supported tech"],
      "controlBar": {
        "muteToggle": true,
        "timeDivider": false,
        "durationDisplay": true,
        "progressControl": true
      }
    }
    '
  >
    {props.user.source.map(v => <source key={v.src} src={v.src} type={v.type} />)}
  </video>
);

VideoSection.propTypes = {
  user: React.PropTypes.object,
};

export default VideoSection;
