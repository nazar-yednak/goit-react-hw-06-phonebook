import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
export const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    items: [{}],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    removeContact: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    filterOut: (state, action) => {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};
export const contactsReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { addContact, removeContact, filterOut } = contactSlice.actions;

// селектори
export const getContacts = state => state.contact.items;
export const getFilters = state => state.contact.filter;
