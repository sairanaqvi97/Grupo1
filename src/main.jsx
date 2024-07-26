import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/Login.css';
import Footer from './components/Footer/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';



ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
			<Footer />
		</BrowserRouter>
	</React.StrictMode>
);

