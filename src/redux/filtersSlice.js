import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    filterContacs(state, action) {
      state.name = action.payload;
    },
  },
});

export const { filterContacs } = slice.actions;
export default slice.reducer;
