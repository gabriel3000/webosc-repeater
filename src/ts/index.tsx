import '../style/index.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ReactContextProvider } from './context/ReactContextProvider';

window.onload = () => {
    const root = createRoot(document.getElementById('app'));
    root.render(
        <>
            <ReactContextProvider>
                <App />
            </ReactContextProvider>
        </>
    );
}