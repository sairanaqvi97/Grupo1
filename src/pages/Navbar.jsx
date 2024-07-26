import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { getDataUserForAuth } from "../components/service/userService";

export const Navbar = ({ userData }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(userData);

  useEffect(() => {
    const token = localStorage.getItem("user");
    if (token) {
      getDataUserForAuth(token).then((data) => {
        setUser(data);
      });
    }
  }, [userData]);

  const onLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login", { replace: true });
  };

  return (
    <>
      <header>
        <h1>
          <Link to="/"></Link>
        </h1>
        {user ? (
          <div className="user">
            <span className="username">{user.name}</span>
            <button className="btn-logout" onClick={onLogout}>
              Sign Out
            </button>
          </div>
        ) : (
          <nav>
            <Link to="/login">Inicia sesión</Link>
            <Link to="/register">Registro</Link>
          </nav>
        )}
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;