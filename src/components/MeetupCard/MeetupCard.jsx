import { useContext } from "react";
import { Link } from "react-router-dom";
import { meetupContext } from "../context/meetupContext";
import "../../styles/MeetupCard.css";

function MeetupCard() {
  const { meetups, loading, error } = useContext(meetupContext);

  if (error) {
    return (
      <div>
        <h5>Error al cargar la página</h5>
        <p>Inténtalo de nuevo</p>
      </div>
    );
  }

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div id="events" className="break-words quedadafull marginTOP">
      <h1 className="textXL">MeetNow</h1>
      <h2 className="tubo">¡Quedadas por un tubo!</h2>
      <ul>
        {meetups.map((meetup) => (
          <li key={meetup.id}>
            <Link to={`/meetup/${meetup.id}`}>
              <h3>{meetup.title}</h3>
            </Link>
            <p>
              <strong>Host:</strong> {meetup.host.name}
            </p>
            <p>
              <strong>Location:</strong> {meetup.location}
            </p>
            <p>
              <strong>Date:</strong> {meetup.date}
            </p>
            <p>
              <strong>Time:</strong> {meetup.time}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MeetupCard;
