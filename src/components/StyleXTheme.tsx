import React from 'react';

import * as stylex from '@stylexjs/stylex';

import { colors, spacing } from '../theme/tokens.stylex';
import { dracula } from '../theme/themes';

const styles = stylex.create({
  container: {
    color: colors.primaryText,
    backgroundColor: colors.background,
    padding: spacing.medium,
  },
  secondaryText: {
    color: colors.secondaryText,
  },
});

const StyleXTheme: React.FC = () => {
  return (
    <div {...stylex.props(dracula, styles.container)}>
      <span {...stylex.props(styles.secondaryText)}>Themed P tag</span>
    </div>
  );
};

export default StyleXTheme;
