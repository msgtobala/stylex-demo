import React from 'react';

import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  positionStyle: {
    color: 'orange',
    position: 'absolute',
    top: 0,
  },
  resetPositionStyle: {
    position: null,
  },
});

const StyleXResetStyles: React.FC = () => {
  return (
    <p {...stylex.props(styles.positionStyle, styles.resetPositionStyle)}>
      Stylex reset styles
    </p>
  );
};

export default StyleXResetStyles;
