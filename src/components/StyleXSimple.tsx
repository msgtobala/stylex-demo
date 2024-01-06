import React from 'react';

import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  red: { color: 'red', fontSize: '36px' },
  spacing: { border: '2px solid black', padding: '10px' },
  active: {
    color: 'brown',
  },
  inactive: {
    color: 'red',
  },
});

const StyleXSimple: React.FC = () => {
  const isActive = true;
  return (
    <h1
      {...stylex.props(
        styles.red,
        styles.spacing,
        isActive ? styles.active : styles.inactive
      )}
    >
      StyleX simple example
    </h1>
  );
};

export default StyleXSimple;
