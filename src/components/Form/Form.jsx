import React, { useState } from "react";
import { createMeetup } from "../service/MeetupService";
import { useUserContext } from "../context/usercontext";

function Form() {
  const { user } = useUserContext();
  const [formData, setFormData] = useState({
    title: "",
    host: {
      name: user ? user.name : "",
      contact: user ? user.email : "",
      avatar: "",
    },
    maxAttendees: "",
    location: "",
    googleMapsLink: "",
    type: "",
    keywords: [],
    description: "",
    fullText: "",
    date: "",
    time: "",
    activeMeetup: true,
    city: "",
  });

  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("host.")) {
      const hostField = name.split(".")[1];
      setFormData((prevState) => ({
        ...prevState,
        host: { ...prevState.host, [hostField]: value },
      }));
    } else if (name === "keywords") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value.split(",").map((keyword) => keyword.trim()),
      }));
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    createMeetup(formData)
    .then((response) => {
      console.log("Meetup created successfully", response);
      setConfirmationMessage("¡Quedada creada exitosamente!");
   
    })
    .catch((error) => {
      console.error("Error creating meetup", error);
       setErrorMessage("Error al crear la quedada. Por favor, inténtalo de nuevo."); 
    
    });
};

  return (
    <form onSubmit={handleSubmit}>
    {confirmationMessage && (
      <div className="confirmation-message">{confirmationMessage}</div>
    )}
    {errorMessage && (
      <div className="error-message">{errorMessage}</div>
    )}
   

 <label htmlFor="title">Title:</label>
      <input
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />

<label htmlFor="host.name">Host Name:</label>
<input
  type="text"
  name="host.name"
  value={formData.host.name}
  onChange={handleChange}
  placeholder="Host Name"
  readOnly
/>

<label htmlFor="host.contact">Host Contact:</label>
<input
  type="text"
  name="host.contact"
  value={formData.host.contact}
  onChange={handleChange}
  placeholder="Host Contact"
  readOnly
/>

<label htmlFor="host.avatar">Host Avatar URL:</label>
<input
  type="text"
  name="host.avatar"
  value={formData.host.avatar}
  onChange={handleChange}
  placeholder="Host Avatar"
  readOnly
/>


      <label htmlFor="maxAttendees">Max Attendees:</label>
      <input
        id="maxAttendees"
        name="maxAttendees"
        type="number"
        value={formData.maxAttendees}
        onChange={handleChange}
        required
      />

      <label htmlFor="location">Ubicación</label>
      <input
        id="location"
        name="location"
        value={formData.location}
        onChange={handleChange}
        required
      />

      <label htmlFor="googleMapsLink">Google Maps Link:</label>
      <input
        id="googleMapsLink"
        name="googleMapsLink"
        value={formData.googleMapsLink}
        onChange={handleChange}
        required
      />

      <label htmlFor="type">Tipo de quedada:</label>
      <select
        id="type"
        name="type"
        value={formData.type}
        onChange={handleChange}
        required
      >
        <option value="">Selecciona un tipo</option>
        <option value="Aventura">Aventura</option>
        <option value="Danza">Danza</option>
        <option value="Gastronomía">Gastronomía</option>
        <option value="Cultura">Cultura</option>
        <option value="Social">Social</option>
        <option value="Turismo">Turismo</option>
        <option value="Aire Libre">Aire Libre</option>
        <option value="Música">Música</option>
      </select>
      <label htmlFor="keywords">
        Keywords (separa tus keywords con comas):
      </label>
      <input
        id="keywords"
        name="keywords"
        value={formData.keywords.join(", ")}
        onChange={handleChange}
        required
      />

      <label htmlFor="description">Deja una breve descripción que en una línea resuma tu quedada:</label>
      <textarea
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <label className="escribe-text" htmlFor="fullText">
        Escribe un texto que deje a las usuarios boquiabiertos para que nadie se
        pierda tu quedada:
      </label>
      <textarea
        id="fullText"
        name="fullText"
        value={formData.fullText}
        onChange={handleChange}
        required
      />

      <label htmlFor="date">Fecha:</label>
      <input
        id="date"
        name="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <label htmlFor="time">Hora:</label>
      <input
        id="time"
        name="time"
        type="time"
        value={formData.time}
        onChange={handleChange}
        required
      />

      <label htmlFor="city">Ciudad:</label>
      <input
        id="city"
        name="city"
        value={formData.city}
        onChange={handleChange}
        required
      />

      <button type="submit" className="btn btn-primary btn-sm">
        Crear Meetup
      </button>
    </form>
  );
}

export default Form;
