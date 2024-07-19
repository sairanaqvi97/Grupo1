
import React from 'react';
import '../../scss/Footer.scss';
import Logo from '../img/Footer/MeetNowLogoWhite.svg';



const Footer = () => {
    return (
        <footer>
        <div className="footer__container">
        <div className='logo-meetnow'>
        <img src={Logo} alt="Logo" className="footer__logo-image" />
        </div>

            <div className="footer__links">
                <div className="footer__link--wrapper">
                    <div className="footer__link--items">
                    
                        <h2>About Us</h2>
                        <a href="#">Terms of use</a> <a href="#">Privacy Policy</a>
                        <a href="#">Manage cookies</a> <a href="#">
                        Community Rules
                        </a>
                    </div>
                    <div className="footer__link--items">
                        <h2>Support</h2>
                        <a href="#">Contact</a> <a href="#">Customer Service</a>
                        <a href="#">Help Center</a>
                    </div>
                </div>
                <div className="footer__link--wrapper">
                    <div className="footer__link--items">
                        <h2>Premium</h2>
                        <a href="#">Subscriptions</a> <a href="#">Extended Biography</a>
                        <a href="#">Upgrade to Premium</a>
                    </div>
                    <div className="footer__link--items">
                        <h2>Social Media</h2>
                        <a href="#">Instagram</a> 
                        <a href="#">Youtube</a>
                        <a href="#">Facebook</a> 
                        <a href="#">X</a>
                    </div>
                </div>
            </div>
            <section className="social__media">
                <div className="social__media--wrap">
                    <div className="footer__logo">
                        <a href="/" id="footer__logo"></a>
                    </div>
                    <div className='text-2023'>
                    <p className="website__rights">© 2023 MeetNow. All rights reserved</p> 
                    </div>
                    
                    <div className="social__icons" >
                        <a href="https://www.instagram.com/upgrade_hub/" className="social__icon--link" target="_blank">
                            <i className="bi bi-instagram"></i>
                        </a>
                        
                        <a href="https://www.youtube.com/watch?v=55_9BMdhbe0" className="social__icon--link">
                            <i className="fa-brands fa-youtube" style={{ color: '#ff1a1a', fontSize: 'larger' }}></i>
                        </a>

                        <a href="https://www.facebook.com/?locale=es_ES" className="social__icon--link">
                            <i className="bi bi-facebook" style={{ color: '#2e99ea' }}></i>
                        </a>

                        <a href="https://www.upgrade-hub.com/" className="social__icon--link">
                        <i className="bi bi-twitter-x"></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
        </footer>
    );
};

export default Footer;