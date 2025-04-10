import { createAsyncThunk } from "@reduxjs/toolkit";
import { addTickets, setLoading } from "./tickets";

const fetchTickets = createAsyncThunk<void, void>(
  "fetchTickets",
  async (_, thunkAPI) => {
    try {
      const dispatch = thunkAPI.dispatch;

      const responseSearch = await fetch(
        "https://aviasales-test-api.kata.academy/search",
      );
      if (!responseSearch.ok) {
        return thunkAPI.rejectWithValue(
          "Не удалось получить идентификатор поиска",
        );
      }
      const searchData = await responseSearch.json();
      const searchId = searchData.searchId;

      let stop = false;

      while (!stop) {
        try {
          const responseTickets = await fetch(
            `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`,
          );
          if (!responseTickets.ok) {
            if (responseTickets.status === 500) {
              continue;
            }
            return thunkAPI.rejectWithValue(
              `Не удалось получить билеты. Ошибка ${responseTickets.status}`,
            );
          }
          const ticketsData = await responseTickets.json();

          dispatch(addTickets(ticketsData.tickets));

          stop = ticketsData.stop;
        } catch (error) {
          return thunkAPI.rejectWithValue((error as Error).message);
        }
      }
      dispatch(setLoading(false));
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  },
);

export default fetchTickets;
