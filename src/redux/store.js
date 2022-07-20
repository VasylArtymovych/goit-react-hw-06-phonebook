import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './contactsSlice';

const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
