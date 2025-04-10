import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FilterOptions {
  value: FiltersKey;
  checked: boolean;
  label: string;
}

export interface FiltersState {
  filters: FilterOptions[];
}

export enum FiltersKey {
  all = -1,
  noTransfers = 0,
  transfersOne = 1,
  transfersTwo = 2,
  transfersThree = 3,
}

const initialState: FiltersState = {
  filters: [
    { value: FiltersKey.all, checked: false, label: "Все" },
    { value: FiltersKey.noTransfers, checked: false, label: "Без пересадок" },
    { value: FiltersKey.transfersOne, checked: false, label: "1 пересадка" },
    { value: FiltersKey.transfersTwo, checked: false, label: "2 пересадки" },
    { value: FiltersKey.transfersThree, checked: false, label: "3 пересадки" },
  ],
};

export const filtersReducer = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleFilter: (state, action: PayloadAction<FiltersKey>) => {
      const filter = action.payload;

      state.filters.forEach((el) =>
        el.value == filter ? (el.checked = !el.checked) : false,
      );

      if (filter === FiltersKey.all) {
        state.filters.forEach((el) => (el.checked = state.filters[0].checked));
      } else {
        state.filters[0].checked = state.filters
          .filter((el) => el.value !== FiltersKey.all)
          .every((el) => el.checked);
      }
    },
  },
});

export const { toggleFilter } = filtersReducer.actions;
