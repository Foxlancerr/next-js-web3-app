import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for the state
type TModelBoxState = {
  isModelBox: boolean;
};

// Define the initial state
const initialState: TModelBoxState = {
  isModelBox: false,
};

// Create the slice
export const ModelBoxSlice = createSlice({
  name: "model-box",
  initialState,
  reducers: {
    ModelBoxOpenHandlar: (state) => {
      state.isModelBox = true;
    },
    ModelBoxCloseHandlar: (state) => {
      state.isModelBox = false;
    },
  },
});

export const { ModelBoxOpenHandlar, ModelBoxCloseHandlar } =
  ModelBoxSlice.actions;
export default ModelBoxSlice.reducer;
