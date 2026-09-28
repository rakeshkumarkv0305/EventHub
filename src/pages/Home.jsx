import { Link } from "react-router-dom";
import { useEvents } from "../context/EventContext";
import EventCard from "../components/EventCard";

export default function Home() {
  const { events } = useEvents();

  return (
    <>
      <section className="hero">
        <div>
          <p className="label">WELCOME TO EventHub</p>
          <h1>Find simple events. Meet new people.</h1>
          <p>
            EventHub is a small event platform where you can discover, save and
            create events around your interests.
          </p>
          <Link to="/events" className="button">
            Explore Events
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <div>
            <p className="label">UPCOMING</p>
            <h2>Some events you may like</h2>
          </div>
          <Link to="/events">View all</Link>
        </div>

        <div className="cards">
          {events.slice(0, 3).map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
      </section>
    </>
  );
}

