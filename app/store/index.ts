import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

// 2. Definisikan tipe RootState dari store itu sendiri
export type RootState = ReturnType<typeof store.getState>;
// 3. Definisikan tipe AppDispatch dari store
export type AppDispatch = typeof store.dispatch;