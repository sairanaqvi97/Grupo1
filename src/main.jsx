import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {BrowserRouter } from "react-router-dom";
import './scss/index.css'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: App,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* En entorno de desarrollo tambien se puede utilizar la etiqueta <HashRouter></HashRouter>. Pero una vez que se pasa a la versión de producción ya no se suele utilizar y se sustituye por <BrowserRouter></BrowserRouter> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);



