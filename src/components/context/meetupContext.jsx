import React, { createContext, useState, useEffect } from 'react';
import { getMeetups, updateMeetup as apiUpdateMeetup } from '../service/MeetupService'

export const meetupContext = createContext();

export const MeetupProvider = ({ children }) => {
  const contextValue = useMeetupContext();
  return (
    <meetupContext.Provider value={contextValue}>
      {children}
    </meetupContext.Provider>
  );
};


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

  const getMeetupById = (id) => {
    return meetups.find(meetup => meetup.id === id);
  };

  const updateMeetup = async (updatedMeetup) => {
    try {
      const response = await apiUpdateMeetup(updatedMeetup);
      setMeetups(meetups.map(meetup => meetup.id === updatedMeetup.id ? response : meetup));
    } catch (err) {
      setError(err.message);
    }
  };

  return {meetups, setMeetups, loading, setLoading, error, setError, getMeetupById, updateMeetup};
};
