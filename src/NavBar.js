import React from "react";
import {NavLink} from "react-router-dom"
import logoPath from './img/MODUS.png'
import loginPath from './img/login.png'
import cartPath from './img/cart.png'
import logoutPath from './img/Logout.png'
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";

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
// Firebase configuration
// For Firebase JS SDK v7.20.0 and later
const firebaseConfig = {
    apiKey: "AIzaSyDsfPr2HvfXQa7f5UP0wVE5Ctx7zzHspJg",
    authDomain: "modus-eac11.firebaseapp.com",
    projectId: "modus-eac11",
    storageBucket: "modus-eac11.appspot.com",
    messagingSenderId: "370786540996",
    appId: "1:370786540996:web:169cf51e66e678e1b1d891",
    measurementId: "G-0F4G8BD80F"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const databaseHolder = getDatabase(app);
const authHolder = getAuth();

function loggOff(){
    localStorage.setItem("Logged",false);
    signOut(authHolder).then(() => {
        // Sign-out successful.
        window.location = '/';
      }).catch((error) => {
        // An error happened.
        console.log(error.message);
      });
}

export default NavBar;