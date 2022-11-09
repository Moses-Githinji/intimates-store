import React from 'react';
import '../styles/globals.css';
import { StoreProvider } from '../utils/Store';

function App({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default App;
