import React from 'react'
import FooterLogo from './FooterLogo'
import FooterSectionMenu from './FooterSectionMenu'
import FooterSectionSocials from './FooterSectionSocials'

function Footer() {

  return (
    <>

    
    <footer className='footer'>
    <FooterLogo ></FooterLogo>
    <FooterSectionMenu></FooterSectionMenu>
    <FooterSectionSocials></FooterSectionSocials>
    </footer>
    </>
  )
}

export default Footer