import React, { useContext } from 'react';
import { meetupContext } from '../context/meetupContext';


function MeetupCard() {

  const {meetups, loading, error} = useContext(meetupContext);

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
    <div>
      <h1>MeetNow</h1>
      <h2>¡Quedadas por un tubo!</h2>
      <ul>
        {meetups.map((meetup) => (
          <li key={meetup.id}>
            <h3>{meetup.title}</h3>
            <p><strong>Host:</strong> {meetup.host.name}</p>
            <p><strong>Contact:</strong> {meetup.host.contact}</p>
            <img src={meetup.host.avatar} alt={`${meetup.host.name}'s avatar`} width="50" height="50" />
            <p><strong>Location:</strong> {meetup.googleMapsLink}</p>
            <p><a href={meetup.googleMapsLink} target="_blank" rel="noopener noreferrer">View on Google Maps</a></p>
            <p><strong>Type:</strong> {meetup.type}</p>
            <p><strong>Keywords:</strong> {meetup.keywords.join(', ')}</p>
            <p><strong>Description:</strong> {meetup.description}</p>
            <p><strong>Max Attendees:</strong> {meetup.maxAttendees}</p>
            <p><strong>Active:</strong> {meetup.activeMeetup ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MeetupCard;
