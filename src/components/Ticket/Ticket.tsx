import { parseISO, addMinutes, format } from "date-fns";
import { TicketType } from "../../redux/tickets";
import { FC } from "react";
import styles from "./Ticket.module.scss";

interface TicketProps {
  ticket: TicketType;
}

const formatPrice = (price: number) => price.toLocaleString() + " P";

const formatDuration = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const mins = (minutes % 60).toString().padStart(2, "0");
  return `${hours}ч ${mins}м`;
};

const stopsLabel = (count: number) => {
  switch (count) {
    case 0:
      return "Без пересадок";
    case 1:
      return "1 пересадка";
    default:
      return `${count} пересадки`;
  }
};

const Ticket: FC<TicketProps> = ({ ticket }) => {
  return (
    <li className={styles.ticket}>
      <article>
        <header className={styles.ticketHeader}>
          <div className={styles.ticketPrice}>{formatPrice(ticket.price)}</div>
          <div className={styles.ticketLogo}>
            <img
              src={`https://pics.avs.io/99/36/${ticket.carrier}.png`}
              alt="Ticket logo"
            />
          </div>
        </header>
        <section className={styles.ticketInfo}>
          {ticket.segments.map((segment, index) => {
            const departureDate = parseISO(segment.date);
            const departureTime = format(departureDate, "HH:mm");

            const arrivalDate = addMinutes(departureDate, segment.duration);
            const arrivalTime = format(arrivalDate, "HH:mm");
            return (
              <ul className={styles.ticketRow} key={index}>
                <li className={styles.ticketData}>
                  <p className={styles.ticketDataTitle}>
                    {segment.origin} – {segment.destination}
                  </p>
                  <span className={styles.ticketDataDescr}>
                    {departureTime} – {arrivalTime}
                  </span>
                </li>
                <li className={styles.ticketData}>
                  <p className={styles.ticketDataTitle}>В пути</p>
                  <span className={styles.ticketDataDescr}>
                    {formatDuration(segment.duration)}
                  </span>
                </li>
                <li className={styles.ticketData}>
                  <p className={styles.ticketDataTitle}>
                    {stopsLabel(segment.stops.length)}
                  </p>
                  <span className={styles.ticketDataDescr}>
                    {segment.stops.join(", ")}
                  </span>
                </li>
              </ul>
            );
          })}
        </section>
      </article>
    </li>
  );
};

export default Ticket;
