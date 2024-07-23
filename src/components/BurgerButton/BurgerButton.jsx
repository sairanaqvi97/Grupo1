import React from 'react';
import { NavLink } from 'react-router-dom';
import "../../styles/BurgerButton.css";

const BurgerButton = ({clicked,handleClick}) => {
    return (
        <div onClick={handleClick} className={`icon nav-icon-5 burger ${clicked ? 'open' : ''} `}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    
    );
};

export default BurgerButton;
