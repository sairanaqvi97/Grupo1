import React from 'react';
import { NavLink } from 'react-router-dom';
import "../scss/Menu.scss";

const Menu = () => {
    return (
        <nav>
            <ul className="menu">
                <li>
                    <NavLink to="/" exact >Inicio</NavLink>
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
