import { configureStore } from "@reduxjs/toolkit";
import productReducer from "@/features/TodoListProduct/TodoSlice";
import dialogBoxReducer from "@/features/ModelBox/ModelBoxSlice";
import metaMaskBoxReducer from "@/features/MetaMaskBox/MetaMaskBoxSlice"

import userReducer from "@/features/User/UserSlice";

export const store = configureStore({
  reducer: {
    productReducer,
    dialogBoxReducer,
    metaMaskBoxReducer,
    userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

store.subscribe(() => {
  console.log(store.getState());
});
