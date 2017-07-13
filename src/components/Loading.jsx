import React from 'react';
import { CircularProgress } from 'material-ui';
import radium from 'radium';
import * as styles from './styles';

const customStyle = {
  paddingTop: 100,
};

const Loading = () =>
  (<div style={[customStyle, styles.wideScreen]}>
    <CircularProgress size={320} thickness={12} />
  </div>);

export default radium(Loading);
