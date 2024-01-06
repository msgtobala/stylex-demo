import React from 'react';

import * as stylex from '@stylexjs/stylex';

interface IStyleXTypeSafeStyles {
  styles: stylex.StyleXStyles;
}

export const StyleXTypeSafeStyles: React.FC<IStyleXTypeSafeStyles> = (
  props: IStyleXTypeSafeStyles
) => {
  const { styles } = props;
  return <p {...stylex.props(styles)}>Type safe style(any styles)</p>;
};

interface IStyleXTypeSafeWithStyles {
  styles: stylex.StyleXStyles<{ fontSize: string }>;
}

export const StyleXTypeSafeWithStyles: React.FC<IStyleXTypeSafeWithStyles> = (
  props: IStyleXTypeSafeWithStyles
) => {
  const { styles } = props;

  return (
    <p {...stylex.props(styles)}>Type safe stye(with particular styles)</p>
  );
};

interface IStyleXTypeSafeWithoutStyles {
  styles: stylex.StyleXStylesWithout<{ fontSize: unknown }>;
}

export const StyleXTypeSafeWithoutStyles: React.FC<
  IStyleXTypeSafeWithoutStyles
> = (props: IStyleXTypeSafeWithoutStyles) => {
  const { styles } = props;

  return (
    <p {...stylex.props(styles)}>Type safe style(without/except a specific style)</p>
  );
};
