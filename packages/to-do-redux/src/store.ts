import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from './slices/toDoSlices';

export const Store = configureStore({ reducer: toDoReducer });

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;