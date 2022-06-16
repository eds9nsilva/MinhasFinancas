import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/styles/theme';
import {Routes} from './src/routes';

const App: React.FunctionComponent = () => {
  return <Routes />;
};

export default App;
