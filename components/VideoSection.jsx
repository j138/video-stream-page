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
    {props.user.source.map(v => <source key={v.src} src={v.src} type={v.type} />)}
  </div>
);

VideoSection.propTypes = {
  user: React.PropTypes.object,
};

export default VideoSection;
