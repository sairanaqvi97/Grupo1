import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/Login.css';
import Footer from './components/Footer/Footer.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
			<Footer></Footer>
		</BrowserRouter>
	</React.StrictMode>
);

