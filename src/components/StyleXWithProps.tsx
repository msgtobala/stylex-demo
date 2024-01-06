import React from 'react';

import * as stylex from '@stylexjs/stylex';

interface IStyleXWithProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  disabled?: boolean;
}

const styles = stylex.create({
  primary: {
    fontSize: '20px',
    color: 'green',
    textDecoration: 'underline',
  },
  secondary: {
    fontSize: '20px',
    color: 'purple',
    textDecoration: 'underline',
  },
  disabled: {
    cursor: 'not-allowed',
    color: 'grey',
  },
});

const StyleXWithProps: React.FC<IStyleXWithProps> = (
  props: IStyleXWithProps
) => {
  const { children, variant, disabled } = props;

  return (
    <a {...stylex.props(styles[variant], disabled && styles.disabled)}>
      {children}
    </a>
  );
};

export default StyleXWithProps;
