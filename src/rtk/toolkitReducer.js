import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  items: [],
};

export const setItem = createAction('SET_ITEM');
export const deleteItem = createAction('DELETE_ITEM');
export const setQuantity = createAction('SET_QUANTITY');
export const setSize = createAction('SET_SIZE');
export const clearItems = createAction('CLEAR_ITEMS');

export default createReducer(initialState, {
  [setItem]: (state, action) => {
    state.items = [...state.items, action.payload];
  },
  [deleteItem]: (state, action) => {
    state.items = state.items.filter((item) => item._id !== action.payload);
  },
  [clearItems]: (state) => {
    state.items = [];
  },
  [setQuantity]: (state, action) => {
    state.items = state.items.map((item) => {
      if (item._id === action.payload._id) {
        item.quantity = action.payload.quantity;
      }
      return item;
    });
  },
});
