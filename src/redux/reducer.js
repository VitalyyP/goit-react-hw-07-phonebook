import { createReducer } from '@reduxjs/toolkit';
import { data } from '../data/data';

const initialState = [...data];

export const contactReducer = createReducer(initialState, {
  addContact: (state, { payload }) => [...state, payload],
  removeContact: (state, { payload }) => state.filter(contact => contact.id !== payload),
});

export const filterReducer = createReducer('', {
  handleInputChange: (_, { payload }) => payload,
});

//------------------- Without Redux Toolkit--------------------------

// import { combineReducers } from 'redux';
// import { data } from '../data/data';
// import { ADD, REMOVE, FILTER } from './types';

// const initialState = [...data];

// const contactReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case ADD:
//       return [...state, payload];

//     case REMOVE:
//       return state.filter(contact => contact.id !== payload);

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// const contactsReducer = combineReducers({
//   items: contactReducer,
//   filter: filterReducer,
// });

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// export default rootReducer;

//-------------------------------------------------------------------
