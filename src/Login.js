import React from 'react';
import './styles/Account.css'
import {NavLink} from "react-router-dom"

function Login(){
    return(
        <div>
            <h1 id="Enter-text">Вход</h1>
            <div id='holder'>
            <input id='EmailLogin-input' type="text" placeholder='Имейл...'/>
            <input id='Password-input' type="text" placeholder='Парола...'/>
            <button className="Login-btn">Вход</button>
            <p id='reg-text'>Все още нямате акаунт? <NavLink to = "/register">Регистрация</NavLink></p>
            </div>
        </div>
    )
}

export default Login