import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    fliter: false,
    preferance: false,
  },
  reducers: {
    setGlobalValue: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});

export const { setGlobalValue } = globalSlice.actions;
export default globalSlice.reducer;
