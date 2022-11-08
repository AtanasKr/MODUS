import React from "react";
import {NavLink} from "react-router-dom"
import logoPath from './img/MODUS.png'
import loginPath from './img/login.png'
import cartPath from './img/cart.png'

const navLinkStyles = ({isActive})=>{
    return{
        fontWeight: isActive? 'bold':'normal',
    }
} 
function NavBar(){
    return(
            <div className="navbar-container">
            <img className="logo" src={logoPath}/>
            <ul>
                <li className="nav-link"><NavLink style={navLinkStyles} end to = "/">Начало<div className="underline"></div></NavLink></li>
                <li className="nav-link"><NavLink style={navLinkStyles} to = "/products">Продукти<div className="underline"></div></NavLink></li>
                <li className="nav-link"><NavLink style={navLinkStyles} to = "/contact">Контакти<div className="underline"></div></NavLink></li>
                <li className="nav-link"><NavLink style={navLinkStyles} to = "/about">За нас<div className="underline"></div></NavLink></li>
            </ul>
            <NavLink style={navLinkStyles} to = "/login"><img className="login" src={loginPath}/></NavLink>
            <NavLink style={navLinkStyles} to = "/cart"><img className="cart" src={cartPath}/></NavLink>
            </div>
    )
}

export default NavBar;