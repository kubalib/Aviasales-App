import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum SortingKey {
  Cheapest = "cheapest",
  Fastest = "fastest",
  Optimal = "optimal",
}

interface SortingState {
  sort: SortingKey;
}

const initialState: SortingState = {
  sort: SortingKey.Cheapest,
};

export const sortingReducer = createSlice({
  name: "sorting",
  initialState,
  reducers: {
    setSorting: (state, action: PayloadAction<SortingKey>) => {
      state.sort = action.payload;
    },
  },
});

export const { setSorting } = sortingReducer.actions;
