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
import { PrivateRoute } from "../components/PrivateRoute/PrivateRoute";
import { useMeetupContext, meetupContext} from "../components/context/meetupContext";
import { useContext } from "react";
import Header from "../components/Header/Header";

export const AppRouter = ({userData, setUserData, authData}) => {
  const meetupContextValue = useMeetupContext();

  return (
    <>
      <meetupContext.Provider value={meetupContextValue}>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="login" element={<Login setUserData={setUserData}/>} />
            <Route path="register" element={<Register />} />
            <Route path="/inicio" element={
                <PrivateRoute authData={authData}> <Home /> </PrivateRoute>}/>
            <Route path="/crear" element={<PrivateRoute authData={authData}><Crear /></PrivateRoute>} />
            <Route path="/eventos" element={<PrivateRoute authData={authData}><Eventos /></PrivateRoute>} />
            <Route path="/perfil" element={<PrivateRoute authData={authData}><Perfil /></PrivateRoute>} />
          </Route>
        </Routes>
      </meetupContext.Provider>
    </>
  );
};
