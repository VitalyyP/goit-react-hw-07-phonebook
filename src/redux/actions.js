import { createAction } from '@reduxjs/toolkit';

export const addContactAction = createAction('addContact');
export const removeContactAction = createAction('removeContact');
export const filterContactAction = createAction('handleInputChange');

//------------------- Without Redux Toolkit----------------------------------

// import { ADD, REMOVE, FILTER } from './types';

// export const addContactAction = payload => ({ type: ADD, payload });
// export const removeContactAction = payload => ({ type: REMOVE, payload });
// export const filterContactAction = payload => ({ type: FILTER, payload });

//----------------------------------------------------------------------------
