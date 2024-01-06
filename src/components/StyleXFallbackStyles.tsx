import React from 'react';

import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  stickyContainer: {
    position: 'sticky',
    top: '0',
    backgroundColor: 'red',
    height: '200px',
    color: 'black',
  },
});

const StyleXFallbackStyles: React.FC = () => {
  return <div {...stylex.props(styles.stickyContainer)}>Sticky Container</div>;
};

export default StyleXFallbackStyles;
