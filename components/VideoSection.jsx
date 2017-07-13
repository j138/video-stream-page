import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import ReactHLS from 'react-hls';
import Radium from 'radium';
import plyr from 'plyr';
import 'plyr/dist/plyr.css';

@inject('userStore')
@observer
@Radium
class VideoSection extends React.Component {
  propTypes = {
    user: PropTypes.shape().isRequired,
  };

  componentDidMount() {
    const v = document.querySelector('#player');
    plyr.setup(v);
  }

  componentDidUpdate() {
    const v = document.querySelector('#player');
    plyr.setup(v);
  }

  render() {
    const { user } = this.props;

    const videoProps = {
      id: 'player',
      url: user.source[0].src,
      poster: user.image,
      controls: true,
      autoPlay: false,
      crossorigin: true,
    };

    return (
      <ReactHLS {...videoProps}>
        <track kind="captions" />
      </ReactHLS>
    );
  }
}

export default VideoSection;
