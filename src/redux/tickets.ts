import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import fetchTickets from "./fetchTickets";

interface Ticket {
  price: number;
  carrier: string;
  segments: [
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    },
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    },
  ];
}

export interface TicketsState {
  tickets: Ticket[];
  loading: boolean;
  error: string | null;
}

const initialState: TicketsState = {
  tickets: [],
  loading: true,
  error: null,
};

export const ticketsReducer = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    addTickets: (state, action: PayloadAction<Ticket[]>) => {
      state.tickets = [...state.tickets, ...action.payload];
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTickets.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const { addTickets, setLoading } = ticketsReducer.actions;
