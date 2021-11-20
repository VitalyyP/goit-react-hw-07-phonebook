import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { contactReducer, filterReducer } from './reducer';
import { contactsApi } from './slice';

const contactsAllReducer = combineReducers({
  items: contactReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: {
    contacts: contactsAllReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), contactsApi.middleware],
});
