import "../../styles/Header.css"
import Menu from "../Menu/Menu"
import logoImage from '../../assets/Footer/MeetNowLogoGrey.svg';

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
