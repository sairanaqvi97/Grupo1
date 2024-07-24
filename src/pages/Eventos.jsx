import React from "react";
import Header from "../components/Header/Header";
import MeetupCard from "../components/MeetupCard/MeetupCard";
import '../styles/Eventos.css'

export const Eventos = () => {

  return (
    <div>
      <Header />
      <div>
        <h2 className="hello">Hello Próximos eventos!</h2>
      </div>
      
      <MeetupCard></MeetupCard>


    </div>
  );
};
export default Eventos;
