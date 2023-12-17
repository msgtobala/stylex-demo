import React from 'react';

import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  red: { color: 'red', },
});

const App = () => {
  return (
    <div>
      <h1 {...stylex.props(styles.red)}>Hai</h1>
      <p {...stylex.props(styles.red)}>Hai</p>
    </div>
  );
};

export default App;
