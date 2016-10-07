import React from 'react';
import { CircularProgress } from 'material-ui';
import { colors } from 'material-ui/styles';

const classNames = require('classnames');

class Loading extends React.Component {
  render() {
    const customStyle = {
      paddingTop: 100,
      textAlign: 'center',
    };

    const styles = Object.assign(customStyle, this.props.styles);

    return (
      <div style={customStyle}>
        <CircularProgress size={280} thickness={10} />
      </div>
    );
  }
}

export default Loading;
