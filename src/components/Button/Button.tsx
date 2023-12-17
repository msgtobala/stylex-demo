import React, { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { children } = props;

  return <button>{children}</button>;
};

export default Button;
