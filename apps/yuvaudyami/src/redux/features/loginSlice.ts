import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 name:"",
  isLoggedIn: false,
  role: "",
  isLoading: false,
  userId: "",
  accessTokenJWT: "",
  refreshToken: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      //  console.log("state" ,state);
      // console.log("action", action.payload);
      if (action.payload !== "undefined") {
        state.name = action.payload.user?.name;
        state.isLoggedIn = true;
        state.role = action.payload.user?.role;
        state.userId = action.payload.user?.userId ?? action.payload.user?._id;
        state.accessTokenJWT =
          action.payload.user?.accessTokenJWT ?? action.payload?.accessTokenJWT;
        state.refreshToken =
          action.payload.user?.refreshToken ?? action.payload?.refreshToken;
      }
    },
    logoutAction: (state) => {
      state.name = "",
      state.isLoggedIn = false;
      state.role = "";
      state.userId = "";
      state.accessTokenJWT = "";
      state.refreshToken = "";
    },
  },
});

// console.log(loginSlice);

export const { loginAction, logoutAction } = loginSlice.actions;

export default loginSlice.reducer;
