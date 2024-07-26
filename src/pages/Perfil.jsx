import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { getMeetups } from "../components/service/MeetupService";
import "../styles/Perfil.css";
import { useUserContext } from "../components/context/usercontext";

const user = {
  firstName: "Tony",
  lastName: "Stark",
  age: "33",
  gender: "Masculino",
};


export const Perfil = () => {
  const [userMeetups, setUserMeetups] = useState([]);
  const { user } = useUserContext();

  useEffect(() => {
    getMeetups()
      .then((data) => setUserMeetups(data))
      .catch((error) => console.error("Error al recibir la información", error));
  }, []);

  const meetupsUser = user && userMeetups
    ? userMeetups.filter(meetup =>
        meetup.Attendees && meetup.Attendees.some(attendee => attendee.id === user.id)
      )
    : [];

  const activeMeetups = meetupsUser.filter(meetup => meetup.activeMeetup);
  const pastMeetups = meetupsUser.filter(meetup => !meetup.activeMeetup);

  return (
    <>
      <Header />

      <div className="container">
        <form className="profile-form">
          <div className="form-group">
            <label htmlFor="profileImage">Subir Imagen:</label>
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              accept="image/*"
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="firstName">Nombre:</label>
            <input type="text" id="firstName" name="firstName" required></input>
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Apellidos:</label>
            <input type="text" id="lastName" name="lastName" required></input>
          </div>

          <div className="form-group">
            <label htmlFor="nickName">Nick de usuario:</label>
            <input type="text" id="nickName" name="nickName" required></input>
          </div>
          <div className="form-group">
            <label htmlFor="country">País de origen:</label>
            <input type="text" id="country" name="country" required></input>
          </div>
          <div className="form-group">
            <label htmlFor="city">Ciudad de residencia:</label>
            <input type="text" id="city" name="city" required></input>
          </div>

          <div className="form-group gender-box">
            <label htmlFor="gender">Sexo:</label>
            <select id="gender" name="gender" required>
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
              <option value="other">Otro</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="birthdate">Fecha de Nacimiento:</label>
            <input type="date" id="birthdate" name="birthdate" required></input>
          </div>

          <button type="submit">Guardar Cambios</button>
        </form>

        <div className="mis-quedadas-activas">
            <form>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required />
                </div>
                <div className="form-group">
                    <label htmlFor="fecha">Fecha:</label>
                    <input type="date" id="fecha" name="fecha" required />
                </div>
                <div className="form-group">
                    <label htmlFor="hora">Hora:</label>
                    <input type="time" id="hora" name="hora" required />
                </div>
                <div className="form-group">
                    <label htmlFor="ubicacion">Ubicación:</label>
                    <input type="text" id="ubicacion" name="ubicacion" required />
                </div>
                <div className="form-group">
                    <label htmlFor="descripcion">Descripción:</label>
                    <textarea id="descripcion" name="descripcion" rows="4" required></textarea>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>

        <section className="mis-quedadas-activas">
          <h2>Mis quedadas activas</h2>
          <ul>
            {activeMeetups.map((meetup) => (
              <li key={meetup.id}>{meetup.title}</li>
            ))}
          </ul>
        </section>

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
      </div>
    </>
  );
};

export default Perfil;
