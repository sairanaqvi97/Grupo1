import React, { createContext, useState, useEffect } from 'react';
import { getMeetups } from '../service/MeetupService'

export const meetupContext = createContext();

export const useMeetupContext = () => {
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMeetups()
      .then(data => {
        setMeetups(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return {meetups, setMeetups, loading, setLoading, error, setError};




};

