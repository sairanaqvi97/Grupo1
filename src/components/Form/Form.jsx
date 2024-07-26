import React, { useState } from 'react';
import { createMeetup } from '../service/MeetupService';
import '../../tyles/Form.css';

function Form() {
  const [formData, setFormData] = useState({
    title: '',
    host: {
      name: '',
      contact: '',
      avatar: ''
    },
    maxAttendees: '',
    location: '',
    googleMapsLink: '',
    type: '',
    keywords: [],
    description: '',
    fullText: '',
    date: '',
    time: '',
    activeMeetup: true,
    city: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData.host) {
      setFormData(prevState => ({
        ...prevState,
        host: { ...prevState.host, [name]: value }
      }));
    } else if (name === 'keywords') {
      setFormData(prevState => ({
        ...prevState,
        [name]: value.split(',').map(keyword => keyword.trim())
      }));
    } else {
      setFormData(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMeetup(formData)
      .then(response => {
        console.log('Meetup created successfully', response);
      })
      .catch(error => {
        console.error('Error creating meetup', error);
      });
  };

  return (
    <form className='formulario-form' onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input id="title" name="title" value={formData.title} onChange={handleChange} required />

      <label htmlFor="hostName">Host Name:</label>
      <input id="hostName" name="name" value={formData.host.name} onChange={handleChange} required />

      <label htmlFor="hostContact">Host Contact:</label>
      <input id="hostContact" name="contact" value={formData.host.contact} onChange={handleChange} required />

      <label htmlFor="hostAvatar">Host Avatar URL:</label>
      <input id="hostAvatar" name="avatar" value={formData.host.avatar} onChange={handleChange} />

      <label htmlFor="maxAttendees">Max Attendees:</label>
      <input id="maxAttendees" name="maxAttendees" type="number" value={formData.maxAttendees} onChange={handleChange} required />

      <label htmlFor="location">Location:</label>
      <input id="location" name="location" value={formData.location} onChange={handleChange} required />

      <label htmlFor="googleMapsLink">Google Maps Link:</label>
      <input id="googleMapsLink" name="googleMapsLink" value={formData.googleMapsLink} onChange={handleChange} required />

      <label htmlFor="type">Tipo de quedada:</label>
      <select id="type" name="type" value={formData.type} onChange={handleChange} required />

      <label htmlFor="keywords">Keywords (separa tus keywords con comas):</label>
      <input id="keywords" name="keywords" value={formData.keywords.join(', ')} onChange={handleChange} required />

      <label htmlFor="description">Description:</label>
      <textarea id="description" name="description" value={formData.description} onChange={handleChange} required />

      <label className='escribe-text' htmlFor="fullText">Escribe un texto que deje a las usuarios boquiabiertos para que nadie se pierda tu quedada:</label>
      <textarea id="fullText" name="fullText" value={formData.fullText} onChange={handleChange} required />

      <label htmlFor="date">Date:</label>
      <input id="date" name="date" type="date" value={formData.date} onChange={handleChange} required />

      <label htmlFor="time">Time:</label>
      <input id="time" name="time" type="time" value={formData.time} onChange={handleChange} required />

      <label htmlFor="city">City:</label>
      <input id="city" name="city" value={formData.city} onChange={handleChange} required />

      <button type="button" className="btn btn-primary btn-sm">Create Meetup</button>

    </form>
  );
}

export default Form;