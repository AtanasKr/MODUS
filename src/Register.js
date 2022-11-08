import React from 'react';
import './styles/Account.css'
import {NavLink} from "react-router-dom"

function Login(){
    return(
        <div>
            <h1 id="Enter-text">Регистрация</h1>
            <div id='holder'>
            <input id='EmailLogin-input' type="text" placeholder='Име...'/>
            <input id='EmailLogin-input' type="text" placeholder='Имейл...'/>
            <input id='Password-input' type="text" placeholder='Парола...'/>
            <button className="Login-btn">Регистрация</button>
            </div>
        </div>
    )
}

export default Login