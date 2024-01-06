import React from 'react';

import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  customStyles: (size, color) => ({
    fontSize: size,
    color: color,
  }),
});

const StyleXDynamicStyles: React.FC = () => {
  return (
    <p {...stylex.props(styles.customStyles(29, 'teal'))}>Dynamic Styles</p>
  );
};

export default StyleXDynamicStyles;
