import "../../scss/Header.scss"
import Menu from "../Menu"
import logoImage from '../../assets/images/logo/MeetNowLogoGrey.svg';

function Header() {
  
  return (
    <header className="header">
      <div className= "logo">
      <img src={logoImage} alt="Logo" />
      </div>
      <Menu />
    </header>
  )
}

export default Header
