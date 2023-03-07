import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: 0,
  cartItem: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItems = {
        ...action.payload.item,
        quantity: 1,
      };
      state.cartItem.push(newItems);
      state.item += 1;
    },

    addQuantity: (state, action) => {
      const newItem = [...state.cartItem];
      newItem[action.payload.index].quantity += 1;
      state.cartItem = newItem;
      state.item += 1;
    },
    increaseQuantity: (state, action) => {
      const newItems = [...state.cartItem];
      newItems[action.payload.index].quantity += 1;
      state.cartItem = newItems;
      state.item += 1;
    },
    decreaseQuantity: (state, action) => {
      const newItems = [...state.cartItem];
      newItems[action.payload.index].quantity -= 1;
      state.cartItem = newItems;
      state.item -= 1;
    },
    removeFromCart: (state, action) => {
      state.cartItem.splice(action.payload.index, 1);
      state.item = state.item - action.payload.quantity;
    },
  },
});

export const {
  addToCart,
  addQuantity,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
