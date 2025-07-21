// src/app/layout.tsx
'use client';

import { Provider } from 'react-redux';
import { store } from './store'; // Impor store dari file store
import './globals.css';
import React from 'react'; // Impor React secara eksplisit

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}