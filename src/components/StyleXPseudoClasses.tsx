import React from 'react';

import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  link: {
    fontFamily: 'monospace',
    fontSize: '20px',
    color: {
      default: 'purple',
      ':hover': 'darkblue',
    },
  },
});

const StyleXPseudoClasses: React.FC = () => {
  return <a {...stylex.props(styles.link)}>Pseudo class - Hover</a>;
};

export default StyleXPseudoClasses;
