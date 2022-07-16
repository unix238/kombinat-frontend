import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

// export const setItem = createAction('SET_ITEM');
// export const deleteItem = createAction('DELETE_ITEM');
export const setQuantity = createAction('SET_QUANTITY');
export const setSize = createAction('SET_SIZE');
// export const clearItems = createAction('CLEAR_ITEMS');

export const addItemToBasket = createAction('ADD_ITEM_TO_BASKET');
export const loadBasketItems = createAction('LOAD_BASKET_ITEMS');

const updateLocalStorage = (state) => {
  localStorage.removeItem('basket');
  localStorage.setItem('basket', JSON.stringify(state.items));
};

export default createReducer(initialState, {
  // [setItem]: (state, action) => {
  //   state.items = [...state.items, action.payload];
  // },
  // [deleteItem]: (state, action) => {
  //   state.items = state.items.filter((item) => item._id !== action.payload);
  // },
  // [clearItems]: (state) => {
  //   state.items = [];
  // },
  // [setQuantity]: (state, action) => {
  //   state.items = state.items.map((item) => {
  //     if (item._id === action.payload._id) {
  //       item.quantity = action.payload.quantity;
  //     }
  //     return item;
  //   });
  // },

  [addItemToBasket]: (state, action) => {
    if (state.items.find((item) => item._id === action.payload._id)) {
      state.items = state.items.filter(
        (item) => item._id !== action.payload._id
      );
    } else {
      state.items = [...state.items, action.payload];
    }
    localStorage.removeItem('basket');
    localStorage.setItem('basket', JSON.stringify(state.items));
  },
  [loadBasketItems]: (state) => {
    const basket = JSON.parse(localStorage.getItem('basket'));
    if (basket) {
      state.items = basket;
    }
  },
  [setQuantity]: (state, action) => {
    state.items = state.items.map((item) => {
      if (item._id === action.payload.id) {
        item.quantity = action.payload.quantity;
      }
      return item;
    });
    updateLocalStorage(state);
  },
  [setSize]: (state, action) => {
    state.items = state.items.map((item) => {
      if (item._id === action.payload.id) {
        item.size = action.payload.size;
      }
      return item;
    });
    updateLocalStorage(state);
  },
});
