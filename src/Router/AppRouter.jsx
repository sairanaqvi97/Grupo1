import { Route, Routes } from "react-router-dom";
import { Navbar } from "../Navbar";
import {
  Crear,
  DashboardPage,
  Eventos,
  HomePage,
  Home,
  Login,
  Perfil,
  Register,
} from "../pages";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={
              <PrivateRoute> <DashboardPage /> </PrivateRoute>}/>
          <Route path="/inicio" element={<Home />} />
          <Route path="/crear" element={<Crear />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/perfil" element={<Perfil />} />
        </Route>
      </Routes>
    </>
  );
};
