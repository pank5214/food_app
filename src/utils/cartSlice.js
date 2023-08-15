import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //Vanilla (Older) Redux => DON'T MUTATE STATE, returning was mandantory
      // const newState = [...state];
      // newState.items.push(action.payload);
      // return newState;

      // Now in Redux Toolkit uses "immer" BTS
      // We have to mutate the state and returning not manadatory
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },

    //originalState = {items: ["Pizza"]}
    clearCart: (state, action) => {
      // RTK - either Mutate the existing state or return a new state
      //   state.items.length = 0;  // originalState = []

      return { items: [] }; // This new object will be replaced inside originalState = { items: [] }
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
