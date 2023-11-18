import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  carts: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.carts.push(action.payload);
    },
    deleteItem(state, action) {
      const cartIndex = state.carts.findIndex(
        (cart) => cart.pizzaId === action.payload,
      );
      state.carts.splice(cartIndex, 1);
    },
    increaseItemQuantity(state, action) {
      const item = state.carts.find((cart) => cart.pizzaId === action.payload);
      if (!item) {
        state.carts.push(action.payload);
      }
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.carts.find((cart) => cart.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.carts = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
export const getCart = state=> state.cart.carts;
export const getTotalCartQuantity = (state) =>
  state.cart.carts.reduce((sum, item) => sum + item.quantity, 0);
export const getTotalCartPrice = (state) =>
  state.cart.carts.reduce((sum, item) => sum + item.totalPrice, 0);
