import "../../styles/Header.css";
import Menu from "../Menu/Menu";
import BurgerButton from "../BurgerButton/BugerButton";
import logoImage from "../../assets/Footer/MeetNowLogoGrey.svg";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logoImage} alt="Logo" />
      </div>
      <div className="menu-container ">
        <Menu />
      </div>
      <div className="burger-button">
        <BurgerButton />
      </div>
    </header>
  );
}

export default Header;
