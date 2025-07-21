// src/app/page.tsx
'use client'; // Tandai sebagai Client Component untuk menggunakan hooks

import Header from './components/header';
import ThemedContent from './components/themedContent';
import { useAppSelector } from './hook'; // Gunakan hook kustom
import React from 'react'; // Impor React secara eksplisit

export default function HomePage() {
  const themeMode = useAppSelector((state) => state.theme.mode);

  return (<>
    <Header />
    <div className={`min-h-screen flex flex-col items-center justify-center p-8 transition-colors duration-300 ${themeMode === 'light' ? 'bg-gray-100' : 'bg-gray-900'
      }`}>

      <h1 className="text-4xl font-extrabold text-center drop-shadow-lg"
        style={{ color: themeMode === 'light' ? '#333' : '#eee' }}>
        Aplikasi Sederhana
      </h1>
      <h1 className="text-4xl font-extrabold mb-10 text-center drop-shadow-lg"
        style={{ color: themeMode === 'light' ? '#333' : '#eee' }}>
        Pengaturan Tema dengan Redux
      </h1>
      <div className="flex flex-col gap-8 w-full max-w-2xl">
        <ThemedContent />
      </div>
    </div>
  </>
  );
}