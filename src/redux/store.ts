import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filters";
import { sortingReducer } from "./sorting";
import { ticketsReducer } from "./tickets";
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from "react-redux";

const store = configureStore({
  reducer: {
    tickets: ticketsReducer.reducer,
    filters: filtersReducer.reducer,
    sorting: sortingReducer.reducer,
  },
});

export default store;

export const useSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useReduxSelector;
