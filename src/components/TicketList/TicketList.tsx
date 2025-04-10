import { useState, useEffect } from "react";
import Ticket from "../Ticket/Ticket";
import { useSelector } from "../../redux/store";
import { TicketType } from "../../redux/tickets";
import styles from "./TicketList.module.scss";

interface TicketListProps {
  tickets: TicketType[];
}

const TicketList = ({ tickets }: TicketListProps) => {
  const [visibleCount, setVisibleCount] = useState(5);

  const currentSorting = useSelector((state) => state.sorting.sort);

  useEffect(() => {
    setVisibleCount(5);
  }, [currentSorting]);

  const clickShowMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  return (
    <section>
      <ul className={styles.ticketList}>
        {tickets.slice(0, visibleCount).map((ticket, index) => {
          const key = `${ticket.carrier} - ${ticket.price} - ${ticket.segments[0].duration} - ${index}`;
          return <Ticket key={key} ticket={ticket} />;
        })}
      </ul>
      {tickets.length > visibleCount && (
        <button
          className={styles.showMoreButton}
          type="button"
          onClick={clickShowMore}
        >
          Показать еще 5 билетов!
        </button>
      )}
    </section>
  );
};

export default TicketList;
