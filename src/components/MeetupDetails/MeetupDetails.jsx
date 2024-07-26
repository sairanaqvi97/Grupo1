import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { meetupContext } from "../context/meetupContext";
import Header from "../Header/Header";
import { updateMeetup } from "../service/MeetupService";

function MeetupDetails() {
  const { id } = useParams();
  const { updateMeetup } = useContext(meetupContext);
  const [meetup, setMeetup] = useState(null);

  useEffect(() => {
    const selectedMeetup = meetups.find((m) => m.id === id);
    setMeetup(selectedMeetup);
  }, [id, meetups]);

  if (!meetup) {
    return <div>Loading...</div>;
  }

  const handleSignUp = () => {
    if (meetup.confirmedAttendees < meetup.maxAttendees) {
      const updatedMeetup = {
        ...meetup,
        confirmedAttendees: meetup.confirmedAttendees + 1,
      };
      updateMeetup(updatedMeetup);
      setMeetup(updatedMeetup);
    }
  };

  if (!meetup) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header></Header>
      <div className="meetup-details">
        <h1>{meetup.title}</h1>
        <div className="host-info">
          <h2>Host</h2>
          <img src={meetup.host.avatar} alt={`${meetup.host.name}'s avatar`} width="100" height="100" />
          <p><strong>Name:</strong> {meetup.host.name}</p>
          <p><strong>Contact:</strong> {meetup.host.contact}</p>
        </div>
        <div className="meetup-info">
          <p><strong>Location:</strong> {meetup.location}</p>
          <p><strong>Date:</strong> {meetup.date}</p>
          <p><strong>Time:</strong> {meetup.time}</p>
          <p><strong>Type:</strong> {meetup.type}</p>
          <p><strong>Keywords:</strong> {meetup.keywords.join(", ")}</p>
          <p><strong>Description:</strong> {meetup.description}</p>
          <p><strong>Full Text:</strong> {meetup.fullText}</p>
          <p><strong>Max Attendees:</strong> {meetup.maxAttendees}</p>
          <p><strong>Confirmed Attendees:</strong> {meetup.confirmedAttendees}</p>
          <p><strong>Active Meetup:</strong> {meetup.activeMeetup ? "Yes" : "No"}</p>
          <p><strong>City:</strong> {meetup.city}</p>
          <a href={meetup.googleMapsLink} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
        </div>
        <div className="attendees">
          <h2>Attendees</h2>
          <ul>
            {meetup.Attendees.map((attendee, index) => (
              <li key={index}>
                <img src={attendee.avatar} alt={`${attendee.name}'s avatar`} width="50" height="50" />
                <p><strong>Name:</strong> {attendee.name}</p>
                <p><strong>Contact:</strong> {attendee.contact}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="sign-up-section">
          <h2>¡No te pierdas este planazo!</h2>
          <p>Confirmados {meetup.confirmedAttendees} / {meetup.maxAttendees} asistentes</p>
          <button 
            onClick={() => {
              handleSignUp();
              if (meetup.confirmedAttendees < meetup.maxAttendees) {
                alert('¡Te has inscrito con éxito! Nos vemos en el evento.');
              }
            }} 
            disabled={meetup.confirmedAttendees >= meetup.maxAttendees}
          >
            {meetup.confirmedAttendees >= meetup.maxAttendees ? 'Meetup Completo' : 'Inscribirse al Meetup'}
          </button>
        </div>
      </div>
    </>
  );
}

export default MeetupDetails;
