import React from 'react';

import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  style1: { color: 'blue', fontSize: '20px' },
  style2: { color: 'black' },
});

const StyleXSpecificity: React.FC = () => {
  return (
    <p {...stylex.props(styles.style1, styles.style2)}>Stylex specificity</p>
  );
};

export default StyleXSpecificity;
