import React from 'react';
// import {
//   CircularProgress,
// } from 'material-ui';

export default class MainSection extends React.Component {
  static rtmpSrc() {
    return 'rtmp://miyahira.me/jey3/kido';
  }

  static m3u8Src() {
    return 'rtmp://miyahira.me:8081/jey3hls/kido.m3u8';
  }

  static poster() {
    return '//i.imgur.com/2Rq14GG.jpg';
  }

  render() {
    return (
      <div
        id="main-video"
        className="video-js vjs-default-skin"
        controls
        poster={this.poster}
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
        <source src={this.rtmpSrc} type="rtmp/mp4" />
        <source src={this.m3u8Src} type="application/x-mpegURL" />
      </div>
    );
  }
}
