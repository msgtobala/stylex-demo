import React from 'react';

import * as stylex from '@stylexjs/stylex';
import { colors, spacing } from '../theme/tokens.stylex';

const styles = stylex.create({
  container: {
    color: colors.primaryText,
    backgroundColor: colors.background,
    padding: spacing.medium,
    width: '20%',
    border: 'none',
    cursor: 'pointer',
  },
});

const StyleXVariables: React.FC = () => {
  return <button {...stylex.props(styles.container)}>Click Me</button>;
};

export default StyleXVariables;
