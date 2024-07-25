import React from "react";
import Header from "../components/Header/Header";
import MeetupCard from "../components/MeetupCard/MeetupCard";
import Card from "../components/Card/Card";

export const Eventos = () => {
  return (
    <div>
      <Header />
      <Card>
        <MeetupCard />
      </Card>
    </div>
  );
};
export default Eventos;
