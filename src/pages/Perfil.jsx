import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { getMeetups } from "../components/service/MeetupService";
import { useUserContext } from "../components/context/usercontext";

export const Perfil = () => {
  const { user } = useUserContext();
  const [userMeetups, setUserMeetups] = useState([]);

  useEffect(() => {
    getMeetups()
      .then((data) => setUserMeetups(data))
      .catch((error) => console.error("Error al recibir la información", error));
  }, []);

  const meetupsUser = user
    ? userMeetups.filter(meetup =>
        meetup.Attendees.some(attendee => attendee.id === user.id)
      )
    : [];

  const activeMeetups = meetupsUser.filter(meetup => meetup.activeMeetup);
  const pastMeetups = meetupsUser.filter(meetup => !meetup.activeMeetup);

  return (
    <>
      <Header />
      
      <div className="profile-container">
        <h2>Perfil de Usuario</h2>
        <div>
          <p>
            <strong>Nombre:</strong> {user?.name}
          </p>
          <p>
            <strong>Email:</strong> {user?.email}
          </p>
        </div>
      </div>
      <div className="meetups-container">
        <h3>Tus Quedadas Activas</h3>
        <ul>
          {activeMeetups.length > 0 ? (
            activeMeetups.map(meetup => (
              <li key={meetup.id}>{meetup.title}</li>
            ))
          ) : (
            <p>No tienes quedadas activas.</p>
          )}
        </ul>
        <h3>Tus Quedadas Pasadas</h3>
        <ul>
          {pastMeetups.length > 0 ? (
            pastMeetups.map(meetup => (
              <li key={meetup.id}>{meetup.title}</li>
            ))
          ) : (
            <p>No tienes quedadas pasadas.</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default Perfil;
