import React from "react";
import {NavLink} from "react-router-dom"
import logoPath from './img/MODUS.png'
import loginPath from './img/login.png'
import cartPath from './img/cart.png'
import logoutPath from './img/Logout.png'

const navLinkStyles = ({isActive})=>{
    return{
        fontWeight: isActive? 'bold':'normal',
    }
}
let logged;
if(localStorage.getItem("Logged")==='false'){
    logged = false;
}else{
    logged = true;
}
console.log(logged)
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
            {!logged&&<NavLink style={navLinkStyles} to = "/login"><img className="login" src={loginPath}/></NavLink>}
            {logged&&<p className="name-holder">Добре дошли {localStorage.getItem("Name")}</p>}
            {logged&&<img className="login" src={logoutPath} onClick={()=>loggOff()}/>}
            <NavLink style={navLinkStyles} to = "/cart"><img className="cart" src={cartPath}/></NavLink>
            </div>
    )
}

function loggOff(){
    localStorage.setItem("Logged",false);
    window.location = '/';
}

export default NavBar;