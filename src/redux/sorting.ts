import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SortingState {
  sort: "cheapest" | "fastest" | "optimal";
}

const initialState: SortingState = {
  sort: "cheapest",
};

export const sortingReducer = createSlice({
  name: "sorting",
  initialState,
  reducers: {
    setSorting: (state, action: PayloadAction<SortingState["sort"]>) => {
      state.sort = action.payload;
    },
  },
});

export const { setSorting } = sortingReducer.actions;
