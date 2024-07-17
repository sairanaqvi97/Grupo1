import React from 'react';
import MeetupLogo from '../img/Footer/MeetNowLogoWhite.svg';

function FooterLogo() {
  return (
    <div >
      <img className='footer-logo' src={MeetupLogo} alt="Meetup Logo" />
    </div>
  );
}

export default FooterLogo;