import React from 'react'
import FooterLogo from './FooterLogo'
import FooterSectionMenu from './FooterSectionMenu'
import FooterSectionSocials from './FooterSectionSocials'
import FooterCopyright from './FooterCopyright'

function Footer() {

  return (
    <>

    
    <footer className='footer'>
    <FooterLogo ></FooterLogo>
    <FooterSectionMenu></FooterSectionMenu>
    <FooterSectionSocials></FooterSectionSocials>
    <FooterCopyright></FooterCopyright>
    </footer>
    </>
  )
}

export default Footer