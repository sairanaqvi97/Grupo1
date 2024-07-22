import { createContext } from "react";
import { useEffect, useState } from "react";
import { getMeetUps } from "../service/MeetupService";

export const meetupContext = createContext();
export const userMeetupContext = () => {

    const [meetups, setMeetups] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getMeetUps()
        .then((data) => {
            setMeetups(data);
            setLoading(false);
        })
        .catch((error) => {
            ServerHMRConnector(error) ;
            setLoading(false);
        });
    }, [] );

console.log(meetups);

return {meetups, setMeetups, error, setError, loading, setLoading};

}