import React from 'react';

import theme from './src/theme'
import { ThemeProvider } from 'styled-components/native';

import { StatusBar } from 'expo-status-bar';

import { LogViewer } from './src/screens/LogViewer';


export default function App() {


  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor = "transparent"
        translucent
      />
      <LogViewer/>
    </ThemeProvider>

  );
}
