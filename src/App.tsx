import React from 'react';

import * as stylex from '@stylexjs/stylex';
import Button from './components/Button/Button';

const styles = stylex.create({
  red: { color: 'red', fontSize: '36px' },
  caption: { fontSize: '20px' },
});

const App: React.FC = () => {
  return (
    <div>
      <h1 {...stylex.props(styles.red)}>StyleX</h1>
      <p {...stylex.props(styles.red, styles.caption)}>Specificity</p>
      <Button>Click Me</Button>
    </div>
  );
};

export default App;
