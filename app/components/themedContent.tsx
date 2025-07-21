// src/components/ThemedContent.tsx
'use client';

import { useAppSelector } from '../hook'; // Gunakan hook kustom
import React from 'react'; // Impor React secara eksplisit

export default function ThemedContent() {
  const themeMode = useAppSelector((state) => state.theme.mode); // Selector sudah mengetahui tipe state

  return (
    <div
      className={`p-8 rounded-lg shadow-xl transition-colors duration-300 ${
        themeMode === 'light'
          ? 'bg-white text-gray-800'
          : 'bg-gray-700 text-white'
      }`}
    >
      <h2 className="text-3xl font-bold mb-4">Cara Testing</h2>
      <p className="text-lg">
        Mainkan Switch Yang Ada di Kanan Atas untuk Mengganti Tema Aplikasi.
      </p>
    </div>
  );
}