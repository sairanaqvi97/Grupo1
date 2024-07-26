import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { getMeetups } from "../components/service/MeetupService";
import "../styles/Perfil.css";

const user = {
  firstName: "Tony",
  lastName: "Stark",
  age: "33",
  gender: "Masculino",
};

export const Perfil = () => {
  const [userMeetups, setUserMeetups] = useState([]);

  useEffect(() => {
    getMeetups()
      .then((data) => setUserMeetups(data))
      .catch((error) => console.error("Error al recibir la informacion"));
  }, []);

  const activeMeetups = userMeetups.filter((meetup) => meetup.activeMeetup);
  const pastMeetups = userMeetups.filter((meetup) => !meetup.activeMeetup);

  return (
    <div>
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
            <label htmlFor="lastName">Nick de usuario:</label>
            <input type="text" id="lastName" name="nickName" required></input>
          </div>
          <div className="form-group">
            <label htmlFor="lastName">País de origen:</label>
            <input type="text" id="lastName" name="nickName" required></input>
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Ciudad de residencia:</label>
            <input type="text" id="lastName" name="nickName" required></input>
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Nick de usuario:</label>
            <input type="text" id="lastName" name="nickName" required></input>
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









        {/* <section className="form">
          <h2>Información del Usuario</h2>
          <div className="form-group">
            <label htmlFor="firstName">Nombre:</label>
            <p id="firstName">{user.firstName}</p>
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Apellidos:</label>
            <p id="lastName">{user.lastName}</p>
          </div>

          <div className="form-group">
            <label htmlFor="age">Edad:</label>
            <p id="age">{user.age}</p>
          </div>

          <div className="form-group">
            <label htmlFor="gender">Sexo:</label>
            <p id="gender">{user.gender}</p>
          </div>

          <div className="form-group">
            <label htmlFor="birthdate">Fecha de Nacimiento:</label>
            <p id="birthdate">{user.birthdate}</p>
          </div>
        </section> */}

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
      </div>
    </div>
  );
};
export default Perfil;
