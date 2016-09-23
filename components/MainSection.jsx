import React from 'react';
// import {
//   CircularProgress,
// } from 'material-ui';

function rtmpSrc() {
  return 'rtmp://miyahira.me/jey3/kido';
}

function m3u8Src() {
  return 'rtmp://miyahira.me:8081/jey3hls/kido.m3u8';
}

function poster() {
  return '//i.imgur.com/2Rq14GG.jpg';
}

const MainSection = () => (
  <div
    id="main-video"
    className="video-js vjs-default-skin"
    controls
    poster={poster()}
    data-setup='{
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
    }}'
  >
    <source src={rtmpSrc()} type="rtmp/mp4" />
    <source src={m3u8Src()} type="application/x-mpegURL" />
  </div>
);

export default MainSection;
