import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for the state
type TMetamaskBox = {
  isBoxOpen: boolean;
};

// Define the initial state
const initialState: TMetamaskBox = {
  isBoxOpen: false,
};

// Create the slice
export const metaMaskBoxSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    metamaskBoxOpenHandlar: (state) => {
      state.isBoxOpen = true;
    },
    metamaskBoxCloseHandlar: (state) => {
      state.isBoxOpen = false;
    },
  },
});

export const { metamaskBoxOpenHandlar, metamaskBoxCloseHandlar } =
  metaMaskBoxSlice.actions;
export default metaMaskBoxSlice.reducer;