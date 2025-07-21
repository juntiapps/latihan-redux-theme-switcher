import React from 'react';
import { useAppDispatch, useAppSelector } from '../hook';
import { toggleTheme } from '../store/themeSlice';

interface HeaderProps {
    label?: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Header() {
    const dispatch = useAppDispatch(); // Dispatch sudah memiliki tipe yang benar
    const themeMode = useAppSelector((state) => state.theme.mode);
    const isDarkMode = themeMode === 'dark';
    return (
        <header className={`px-4 py-3 flex items-center justify-between ${isDarkMode ?
            'bg-yellow-400 text-gray-900 hover:bg-yellow-500' : 'bg-gray-800 text-white hover:bg-gray-700'}`}>
            <h1 className="text-lg font-semibold">{isDarkMode ? 'Tema Gelap' : 'Tema Terang'}</h1>
            <label className="flex items-center cursor-pointer space-x-2">
                {isDarkMode ? (<span className="text-sm" style={{ color: '#333' }}>Switch off untuk tema terang</span>) : (
                    <span className="text-sm" style={{ color: '#eee' }}>Switch on untuk tema gelap</span>
                )}
                {/* Custom Switch */}
                <input
                    type="checkbox"
                    className="sr-only"
                    checked={isDarkMode}
                    onChange={() => dispatch(toggleTheme())}
                />
                <div
                    className={`w-10 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out ${isDarkMode ? 'bg-yellow-200' : ' bg-gray-300'
                        }`}
                >
                    <div
                        className={`${isDarkMode ? 'bg-black' : 'bg-white'} w-4 h-4 rounded-full shadow-md flex items-center justify-center transform duration-300 ease-in-out ${isDarkMode ? 'translate-x-4' : ''}`}
                    >
                        {isDarkMode ? (
                            <span role="img" aria-label="moon" className="text-xs">🌙</span>
                        ) : (
                            <span role="img" aria-label="sun" className="text-xs">☀️</span>
                        )}
                    </div>
                </div>
            </label>
        </header>
    );
};