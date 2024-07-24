import { Route, Routes } from "react-router-dom";
import { Navbar } from "../pages/Navbar";
import {
  Crear,
  Eventos,
  Home,
  Login,
  Perfil,
  Register,
} from "../pages";
import { PrivateRoute } from "./PrivateRoute";
import { useMeetupContext, meetupContext} from "../components/context/meetupContext";
import { useContext } from "react";
import Header from "../components/Header/Header";

export const AppRouter = () => {
  const meetupContextValue = useMeetupContext();

  return (
    <>
	<meetupContext.Provider value={meetupContextValue}>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="login" element={<Login />} />
          <Route path="header" element={<Header />} />
          <Route path="register" element={<Register />} />
          <Route path="inicio" element={
              <PrivateRoute> <Home /> </PrivateRoute>}/>
          <Route path="/crear" element={<Crear />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/perfil" element={<Perfil />} />
 
        </Route>
      </Routes>
 </meetupContext.Provider>
    </>
  );
};
