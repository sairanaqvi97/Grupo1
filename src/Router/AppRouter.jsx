import { Route, Routes } from "react-router-dom";
import { Navbar } from "../pages/Navbar";
import { MeetupProvider } from "../components/context/meetupContext";
import {
  Crear,
  Eventos,
  Home,
  Login,
  Perfil,
  Register,
} from "../pages";
import MeetupDetails from "../components/MeetupDetails/MeetupDetails";
import { PrivateRoute } from "../components/PrivateRoute/PrivateRoute";
import { useMeetupContext, meetupContext} from "../components/context/meetupContext";
import { UserProvider } from "../components/context/usercontext";
import { useEffect } from "react";
import { useUserContext } from "../components/context/usercontext";


export const AppRouter = ({userData, setUserData, authData, setAuthData}) => {
  const meetupContextValue = useMeetupContext();
  const userContextValue = useUserContext();

 useEffect(() => {
    const token = localStorage.getItem("user");
    if (token) {
      setAuthData(JSON.parse(token));
    }
  }, [setAuthData]);


  return (
    <>
    <UserProvider value={userContextValue}>
      <MeetupProvider value={meetupContextValue}>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="login" element={<Login setUserData={setUserData}/>} />
            <Route path="register" element={<Register />} />
            <Route path="/inicio" element={
                <PrivateRoute authData={authData}> <Home /> </PrivateRoute>}/>
            <Route path="/crear" element={<PrivateRoute authData={authData}><Crear /></PrivateRoute>} />
            <Route path="/eventos" element={<PrivateRoute authData={authData} ><Eventos userData={userData} /></PrivateRoute>} />
            <Route path="/perfil" element={<PrivateRoute authData={authData}><Perfil  /></PrivateRoute>} />
            <Route path="/meetup/:id" element={<PrivateRoute authData={authData}><MeetupDetails /></PrivateRoute>} />
          </Route>
        </Routes>
      </MeetupProvider>
      </UserProvider>
    </>
  );
};
