import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { meetupContext } from '../context/meetupContext'

function MeetupCard() {

  const { meetups, loading, error} = useContext(meetupContext);
    if(error) {
        return <div> <h5>Error al cargar la página</h5><p>Inténtalo de nuevo</p></div>
    }

  return (
    <div>
    <h1>MeetUp</h1>
    <h2>¡Quedadas por un tubo!</h2>
    
    <ul>

    {context.meetups.map(meetup => (
      <li key={meetup.title}>
        <Link to={`/meetup/${meetup.id}`}></Link>
      </li>
       
    ))}
    
    </ul>
    </div>
  )
}

export default MeetupCard