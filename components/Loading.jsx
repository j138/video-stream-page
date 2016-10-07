import React from 'react';
import { CircularProgress } from 'material-ui';
import assign from 'object-assign';

class Loading extends React.Component {
  render() {
    const customStyle = {
      paddingTop: 100,
      textAlign: 'center',
    };

    return (
      <div style={assign(customStyle, this.props.styles)}>
        <CircularProgress size={280} thickness={10} />
      </div>
    );
  }
}

// Loading.propTypes = {
//   styles: React.PropTypes.shape({
//     wideScreen: React.PropTypes.object,
//   }),
// };

export default Loading;
