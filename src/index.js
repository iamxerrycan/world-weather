import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { SettingsProvider } from './context/SettingsContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <SettingsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SettingsProvider>
);
