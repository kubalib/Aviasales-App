import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FilterOptions {
  checked: boolean;
  label: string;
}

export interface FiltersState {
  all: FilterOptions;
  noTransfers: FilterOptions;
  transfersOne: FilterOptions;
  transfersTwo: FilterOptions;
  transfersThree: FilterOptions;
  activeStops: number[];
}

const initialState: FiltersState = {
  all: {
    checked: false,
    label: "Все",
  },
  noTransfers: {
    checked: false,
    label: "Без пересадок",
  },
  transfersOne: {
    checked: false,
    label: "1 пересадка",
  },
  transfersTwo: {
    checked: false,
    label: "2 пересадки",
  },
  transfersThree: {
    checked: false,
    label: "3 пересадки",
  },
  activeStops: [],
};

export const filtersReducer = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleFilter: (state, action: PayloadAction<keyof FiltersState>) => {
      const filter = action.payload;
      state[filter].checked = !state[filter].checked;

      if (filter === "all") {
        Object.keys(state)
          .filter((key) => key !== "activeStops")
          .forEach((key) => {
            state[key as keyof FiltersState].checked = state.all.checked;
          });
      } else {
        state.all.checked =
          state.noTransfers.checked &&
          state.transfersOne.checked &&
          state.transfersTwo.checked &&
          state.transfersThree.checked;
      }

      const activeStops: number[] = [];

      if (state.noTransfers.checked) activeStops.push(0);
      if (state.transfersOne.checked) activeStops.push(1);
      if (state.transfersTwo.checked) activeStops.push(2);
      if (state.transfersThree.checked) activeStops.push(3);
      state.activeStops = activeStops;
    },
  },
});

export const { toggleFilter } = filtersReducer.actions;
