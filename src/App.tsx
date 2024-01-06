import React from 'react';

import * as stylex from '@stylexjs/stylex';

import StyleXSimple from './components/StyleXSimple';
import StyleXSpecificity from './components/StyleXSpecificity';
import StyleXResetStyles from './components/StyleXResetStyles';
import StyleXWithProps from './components/StyleXWithProps';
import {
  StyleXTypeSafeStyles,
  StyleXTypeSafeWithStyles,
  StyleXTypeSafeWithoutStyles,
} from './components/StyleXTypeSafeStyles';
import StyleXPseudoClasses from './components/StyleXPseudoClasses';
import StyleXPseudoElements from './components/StyleXPseudoElements';
import StyleXMediaQueries from './components/StyleXMediaQueries';
import StyleXKeyFrames from './components/StyleXKeyFrames';
import StyleXVariables from './components/StyleXVariables';
import StyleXDynamicStyles from './components/StyleXDynamicStyles';
import StyleXTheme from './components/StyleXTheme';
import StyleXFallbackStyles from './components/StyleXFallbackStyles';

const styles = stylex.create({
  spacing: { margin: '10px', minHeight: '10000px' },
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: '30px 0',
    border: '2px dotted black',
    padding: '10px',
  },
  typeSafeAnyStyle: {
    color: 'red',
    fontSize: '18px',
    fontFamily: 'monospace',
  },
  typeSafeWithStyle: {
    fontSize: '20px',
  },
  typeSafeWithoutStyle: {
    color: 'blue',
  },
});

const App: React.FC = () => {
  return (
    <div {...stylex.props(styles.spacing)}>
      <StyleXSimple />
      <StyleXSpecificity />
      <StyleXResetStyles />
      <div {...stylex.props(styles.container)}>
        <StyleXWithProps variant="primary">Primary Link</StyleXWithProps>
        <StyleXWithProps variant="secondary">Secondary Link</StyleXWithProps>
        <StyleXWithProps variant="primary" disabled>
          Disabled Link
        </StyleXWithProps>
      </div>
      <div {...stylex.props(styles.container)}>
        <StyleXTypeSafeStyles styles={styles.typeSafeAnyStyle} />
        <StyleXTypeSafeWithStyles styles={styles.typeSafeWithStyle} />
        <StyleXTypeSafeWithoutStyles styles={styles.typeSafeWithoutStyle} />
      </div>
      <div {...stylex.props(styles.container)}>
        <StyleXPseudoClasses />
        <StyleXPseudoElements />
        <StyleXMediaQueries />
        <StyleXKeyFrames />
      </div>
      <div {...stylex.props(styles.container)}>
        <StyleXVariables />
      </div>
      <div {...stylex.props(styles.container)}>
        <StyleXDynamicStyles />
      </div>
      <div {...stylex.props(styles.container)}>
        <StyleXTheme />
      </div>
      <StyleXFallbackStyles />
    </div>
  );
};

export default App;
