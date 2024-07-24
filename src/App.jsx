import {AppRouter} from "./Router/AppRouter";
import './styles/Login.css';
import { useState, useEffect } from "react";
import { getDataUserForAuth } from "./components/service/userService"; 

function App() {
  const dataLocal = JSON.parse(localStorage.getItem("user"));
  const [userData, setUserData] = useState(dataLocal); 
  const [authData, setAuthData] = useState(null);

  useEffect(() => {
    console.log(userData);
    if (userData) {
      getDataUserForAuth(userData).then((info) => {
        setAuthData(info);
      });
    }
  }, [userData]);

  return <AppRouter userData={userData} setUserData={setUserData} authData={authData} />;
}

export default App;
  