import style from "./heades.scss";
import React from "react";
import {NavLink} from "react-router-dom";
import logo from "../Assets/logo.png";
import search from "../Assets/search.png";
const Header = ({active, setActive}) => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} className="logo__img" alt=""/>
            </div>
            <div className="links">
                <NavLink to="/" className="links__nav">Home</NavLink>
                <NavLink to="/destination" className="links__nav">Destination</NavLink>
                <NavLink to="/stories" className="links__nav">Stories</NavLink>
                <NavLink to="/posts" className="links__nav">Blog</NavLink>
                <NavLink to="/" className="links__nav">Reviews</NavLink>
            </div>
            <div className="header__left">
                <img src={search} className="search__img" alt=""/>
                <button className="login__header" onClick={() => setActive(true)}>Sing Up</button>
                {/*<a className="login__header2" onClick={() => setActive(true)}>Login</a>*/}
                <button className="login__header2" onClick={() => setActive(true)}>Login</button>
            </div>
        </header>

    )
}

export default Header;