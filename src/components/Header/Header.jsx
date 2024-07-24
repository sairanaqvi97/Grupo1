import "../../styles/Header.css"
import { useState } from "react"
import Menu from "../Menu/Menu"
import BurgerButton from "../BurgerButton/BurgerButton"
import logoImage from '../../assets/Footer/MeetNowLogoYellow.svg';

function Header() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked)
    console.log(clicked)
  }
  return (
    <header className="header">
      <div className= "logo">
      <img src={logoImage} alt="Logo" />
      </div>
      <Menu clicked={clicked} handleClick={handleClick}/>
      <BurgerButton clicked={clicked} handleClick={handleClick}/>
    </header>

  )
}

export default Header;
