import Filter from "../Filter/Filter";
import TicketList from "../TicketList/TicketList";
import Tabs from "../Tabs/Tabs";
import { Alert } from "antd";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import fetchTickets from "../../redux/fetchTickets";

import { FiltersKey } from "../../redux/filters";
import { useSelector } from "../../redux/store";

import styles from "./App.module.scss";
import logo from "./Logo.png";

const App = () => {
  const dispatch = useDispatch();
  const { tickets, loading, error } = useSelector((state) => state.tickets);
  const { filters } = useSelector((state) => state.filters);

  const currentSorting = useSelector((state) => state.sorting.sort);

  const activeStops = filters.reduce<FiltersKey[]>((acc, el) => {
    if (el.checked) acc.push(el.value);
    return acc;
  }, [] as FiltersKey[]);

  const shouldFilter = activeStops.some((el) => el !== FiltersKey.all);

  const filteredTickets = shouldFilter
    ? tickets.filter((ticket) =>
        ticket.segments.some((segment) =>
          activeStops.includes(segment.stops.length),
        ),
      )
    : tickets;

  const sortedTickets = [...filteredTickets];

  if (currentSorting === "cheapest") {
    sortedTickets.sort((a, b) => a.price - b.price);
  } else if (currentSorting === "fastest") {
    sortedTickets.sort(
      (a, b) =>
        a.segments[0].duration +
        a.segments[1].duration -
        (b.segments[0].duration + b.segments[1].duration),
    );
  }

  useEffect(() => {
    dispatch(fetchTickets());
  }, []);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img className={styles.logo} alt="logo" src={logo} />
      </header>
      <aside className={styles.filterBlock}>
        <Filter />
      </aside>
      <main className={styles.main}>
        <Tabs />
        {loading && (
          <div className={styles.loadingWrapper}>
            <div className={styles.loading}>
              <span></span>
            </div>
            Ищем билеты...
          </div>
        )}
        {error ? (
          <Alert
            message="Ошибка"
            description={error}
            type="error"
            className={styles.error}
          />
        ) : (
          <TicketList tickets={sortedTickets} />
        )}
      </main>
    </div>
  );
};

export default App;
