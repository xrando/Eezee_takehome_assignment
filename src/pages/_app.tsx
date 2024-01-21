// pages/_app.tsx
import React from 'react';
import { AppStateProvider } from '../utils/AppState';

function MyApp({ Component, pageProps }) {
    return (
        <AppStateProvider>
            <Component {...pageProps} />
        </AppStateProvider>
    );
}

export default MyApp;
