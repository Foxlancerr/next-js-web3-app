import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  isLoading: boolean;
  isError: boolean;
  userData: any | null;
  isLogIn: boolean;
}

const initialState: UserState = {
  isLoading: false,
  isError: false,
  userData: null,
  isLogIn: false,
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    storeUserDetails: (state, action: PayloadAction<{ user: any }>) => {
      state.userData = action.payload.user;
    },
    resetUserDetails: (state) => {
      state.userData = null;
    },
    logInUser: (state) => {
      state.isLogIn = true;
    },
    logOutUser: (state) => {
      state.isLogIn = false;
    },
  },
});

export const { storeUserDetails, logInUser, logOutUser,resetUserDetails } = userSlice.actions;
export default userSlice.reducer;
