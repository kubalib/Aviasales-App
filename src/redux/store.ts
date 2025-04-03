import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filters";
import { sortingReducer } from "./sorting";
import { ticketsReducer } from "./tickets";

const store = configureStore({
  reducer: {
    tickets: ticketsReducer.reducer,
    filters: filtersReducer.reducer,
    sorting: sortingReducer.reducer,
  },
});

export default store;
