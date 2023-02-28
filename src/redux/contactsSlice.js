import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const arrayActions = [fetchContacts, addContact, deleteContact];
const getActions = type => arrayActions.map(action => action[type]);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: builder => {
    return builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addMatcher(isAnyOf(...getActions('pending')), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(...getActions('rejected')), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(isAnyOf(...getActions('fulfilled')), (state, action) => {
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
