import React from 'react';

import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  input: {
    '::placeholder': {
      color: 'black',
      fontSize: '18px',
    },
    outline: 'none',
    border: '2px solid lightblue',
    padding: '20px',
    borderRadius: '10px',
    width: '500px',
    margin: '10px 0',
  },
});

const StyleXPseudoElements: React.FC = () => {
  return <input placeholder="Name" {...stylex.props(styles.input)} />;
};

export default StyleXPseudoElements;
