import * as stylex from '@stylexjs/stylex';

export const colors = stylex.defineVars({
  primaryText: 'white',
  background: { default: 'black' },
  secondaryText: 'red',
});

export const spacing = stylex.defineVars({
  none: '0px',
  small: '8px',
  medium: '12px',
  large: '20px',
});
