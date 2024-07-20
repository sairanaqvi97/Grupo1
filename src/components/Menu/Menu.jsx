import React from 'react';
import { NavLink } from 'react-router-dom';
import "../../styles/Menu.css";

const Menu = () => {
    return (
        <nav>
            <ul className="menu">
                <li>
                    <NavLink to="/inicio" exact >Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/perfil" >Mi perfil</NavLink>
                </li>
                <li>
                    <NavLink to="/eventos" >Próximos eventos</NavLink>
                </li>
                <li>
                    <NavLink to="/crear" >Crea tu meet</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
