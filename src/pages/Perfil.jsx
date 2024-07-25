import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { getMeetups } from "../components/service/MeetupService";

export const Perfil = () => {

const [userMeetups, setUserMeetups] = useState([]);

useEffect(() => {
  getMeetups()
  .then(data => setUserMeetups(data))
  .catch(error => console.error('Error al recibir la informacion'));
}, []);

const activeMeetups = userMeetups.filter(meetup => meetup.activeMeetup);
const pastMeetups = userMeetups.filter(meetup => !meetup.activeMeetup);


  return (
    <div>
      <Header />
      <h1>Bienvenido a tu perfil</h1>
      <h2>Despliega para ver los ajustes de tu perfil</h2>

<section>
  <h2>Mis quedadas activas</h2>
  <ul>
    {activeMeetups.map(meetup => (
      <li key={meetup.id}>
        <h3>{meetup.title}</h3>
        <img src={meetup.host.avatar} alt={`${meetup.host.name}'s avatar`} width="50" height="50" />
        <p><strong>Type:</strong> {meetup.type}</p>
            <p><strong>Keywords:</strong> {meetup.keywords.join(', ')}</p>
            <p><strong>Description:</strong> {meetup.description}</p>
            <p><strong>Max Attendees:</strong> {meetup.maxAttendees}</p>
            <p><strong>Active:</strong> {meetup.activeMeetup ? 'Yes' : 'No'}</p>

      </li>
    ))}
    
  </ul>
</section>

<section>
  <h2>Mis quedadas pasadas</h2>
  <ul>
          {pastMeetups.map(meetup => (
            <li key={meetup.id}>
              <h3>{meetup.title}</h3>
              <p>Date: {meetup.date}</p>
              <p>Location: {meetup.location}</p>
            </li>
          ))}
        </ul>
</section>



    </div>
  );
};
export default Perfil;
