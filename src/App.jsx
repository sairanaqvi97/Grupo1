import {AppRouter} from "./Router/AppRouter";
import './styles/Login.css';
import { useState, useEffect } from "react";
import { getDataUserForAuth } from "./components/service/userService"; 
import Navbar from "./pages/Navbar";

function App() {
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("user")));
  const [authData, setAuthData] = useState(null);

  useEffect(() => {
    console.log(userData);
    if (userData) {
      getDataUserForAuth(userData).then((info) => {
        setAuthData(info);
      });
    }
  }, [userData]);

  return ( <>
  <Navbar userData={authData} setUserData={setUserData}/> 
  <AppRouter userData={userData} setUserData={setUserData} authData={authData} setAuthData={setAuthData} />
  </>);
}

export default App