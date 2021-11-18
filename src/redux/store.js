import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { contactReducer, filterReducer } from './reducer';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  version: 1,
  storage,
  blacklist: ['filter'],
};

const contactsAllReducer = combineReducers({
  items: contactReducer,
  filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, contactsAllReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

//------------------- Without Redux Toolkit--------------------------

// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './reducer';

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;

//-------------------------------------------------------------------
