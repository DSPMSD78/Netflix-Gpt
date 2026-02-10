import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    loginUser: (state, action) => {
      return null;
    },
    logoutUser: (state, action) => {
      return null;
    },
  },
});

export const { addUser, loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
