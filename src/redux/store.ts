import { configureStore, createSlice } from "@reduxjs/toolkit";

export interface FiltersState {
  all: boolean;
  no_transfers: boolean;
  transfers_one: boolean;
  transfers_two: boolean;
  transfers_three: boolean;
}

const initialState: FiltersState = {
  all: false,
  no_transfers: false,
  transfers_one: false,
  transfers_two: false,
  transfers_three: false,
};

const filtersReducer = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleFilter: (state, action) => {
      // const filter = action.payload as keyof FiltersState;
      const filter = action.payload;
      state[filter] = !state[filter];

      if (filter === "all") {
        Object.keys(state).forEach((key) => {
          state[key as keyof FiltersState] = state.all;
        });
      } else {
        state.all =
          state.no_transfers &&
          state.transfers_one &&
          state.transfers_two &&
          state.transfers_three;
      }
    },
  },
});

const sortingSlice = createSlice({
  name: "sorting",
  initialState: "cheapest",
  reducers: {
    setSorting: (state, action) => action.payload,
  },
});

const store = configureStore({
  reducer: {
    filters: filtersReducer.reducer,
    sorting: sortingSlice.reducer,
  },
});

export const { toggleFilter } = filtersReducer.actions;
export const { setSorting } = sortingSlice.actions;
export default store;
