import React from 'react';
// import {ReactComponent as Pokeball} from '../../assets/pokeball.svg';
import Logo from '../../assets/pokeball.png';
import './navbar.styles.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <Link to='/' className="logo-container">
                <img className="logo" src={Logo} alt="logo" />
                {/*<Pokeball className="logo"/>*/}
            </Link>
            <div className="navs">
                <div className="nav-link">
                    <Link to="/pokedex">Pokedex</Link>
                </div>
                <div className="nav-link">
                    <Link to="/pokegame">Pokegame</Link>
                </div>
                <div className="nav-link">
                    <Link to="/">About</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;