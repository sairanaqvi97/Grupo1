import { useContext } from "react";
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
      <ul className="display">
        {meetups.map((meetup) => {
          const keywords = Array.isArray(meetup.keywords)
            ? meetup.keywords
            : [];

          return (
            <li key={meetup.id}>
              <h3 className="h3-id">{meetup.title}</h3>
              <p>
                <strong>Host:</strong> {meetup.host.name}
              </p>
              <p>
                <strong>Contact:</strong> {meetup.host.contact}
              </p>
              <img
                src={meetup.host.avatar}
                alt={`${meetup.host.name}'s avatar`}
                width="50"
                height="50"
              />
              <p>
                <strong>Location:</strong> {meetup.googleMapsLink}
              </p>
              <p>
                <a
                  href={meetup.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </p>
              <p>
                <strong>Type:</strong> {meetup.type}
              </p>
              <p>
                <strong>Keywords:</strong> {keywords.join(", ")}
              </p>
              <p>
                <strong>Description:</strong> {meetup.description}
              </p>
              <p>
                <strong>Max Attendees:</strong> {meetup.maxAttendees}
              </p>
              <p>
                <strong>Active:</strong> {meetup.activeMeetup ? "Yes" : "No"}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MeetupCard;
