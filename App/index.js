import React from 'react';
import Navigation from './config/Navigation';
import { ConversionContextProvider } from './util/conversionContext';

const App = () => {
  return (
    <ConversionContextProvider>
      <Navigation />
    </ConversionContextProvider>
  );
}

export default App;