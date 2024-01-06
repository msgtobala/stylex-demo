import React from 'react';

import * as stylex from '@stylexjs/stylex';

const fadeIn = stylex.keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const styles = stylex.create({
  base: {
    animationName: fadeIn,
    animationDuration: '1s',
    animationIterationCount: 'infinite',
  },
});

const StyleXKeyFrames: React.FC = () => {
  return <p {...stylex.props(styles.base)}>FadeIn styles</p>;
};

export default StyleXKeyFrames;
