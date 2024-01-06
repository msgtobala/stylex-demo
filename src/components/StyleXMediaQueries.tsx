import React from 'react';

import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  mediaQuery: {
    fontSize: '26px',
    '@media screen and (min-width: 320px) and (max-width: 425px)': {
      fontSize: '18px',
      color: {
        default: 'orange',
        ':hover': 'green',
      }
    },
  },
});

const StyleXMediaQueries: React.FC = () => {
  return (
    <p {...stylex.props(styles.mediaQuery)}>
      Media Query(change to mobile resolution to see changes)
    </p>
  );
};

export default StyleXMediaQueries;
