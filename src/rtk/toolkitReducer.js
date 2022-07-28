import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  favorite: [],
};

export const setQuantity = createAction('SET_QUANTITY');
export const setSize = createAction('SET_SIZE');
export const addItemToBasket = createAction('ADD_ITEM_TO_BASKET');
export const loadBasketItems = createAction('LOAD_BASKET_ITEMS');
export const addItemToFavorite = createAction('ADD_ITEM_TO_FAVORITE');
export const loadFavoriteItems = createAction('LOAD_FAVORITE_ITEMS');

export const clearItems = createAction('CLEAR_ITEMS');

const updateLocalStorage = (state) => {
  localStorage.removeItem('basket');
  localStorage.setItem('basket', JSON.stringify(state.items));
};

export default createReducer(initialState, {
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
  [clearItems]: (state) => {
    state.items = [];
    updateLocalStorage(state);
  },
  [addItemToFavorite]: (state, action) => {
    if (state.favorite.find((item) => item._id === action.payload._id)) {
      state.favorite = state.favorite.filter(
        (item) => item._id !== action.payload._id
      );
    } else {
      state.favorite = [...state.favorite, action.payload];
    }
    localStorage.removeItem('favorite');
    localStorage.setItem('favorite', JSON.stringify(state.favorite));
  },
  [loadFavoriteItems]: (state) => {
    const favoriteItems = JSON.parse(localStorage.getItem('favorite'));
    if (favoriteItems) {
      state.favorite = favoriteItems;
    }
  },
});
