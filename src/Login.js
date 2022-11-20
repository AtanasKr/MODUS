import React from 'react';
import './styles/Account.css'
import {NavLink} from "react-router-dom"
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
localStorage.setItem("Logged",false);

function Login(){
    return(
        <div>
            <h1 id="Enter-text">Вход</h1>
            <div id='holder'>
            <input id='EmailLogin-input' type="text" placeholder='Имейл...'/>
            <input id='Password-input' type="text" placeholder='Парола...'/>
            <button className="Login-btn" onClick={handleLogin}>Вход</button>
            <p id='reg-text'>Все още нямате акаунт? <NavLink to = "/register">Регистрация</NavLink></p>
            </div>
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
const getApp = initializeApp(firebaseConfig);
const databaseHolder = getDatabase(getApp);
const authHolder = getAuth();
let user;

function handleLogin(){
    let email = document.getElementById('EmailLogin-input').value;
    let password = document.getElementById('Password-input').value;
    signInWithEmailAndPassword(authHolder, email, password)
      .then((userCredential) => {
        // Signed in 
        user = userCredential.user;
        let data;
        const roleRef = ref(databaseHolder, 'users/' + user.uid + '/name');
        onValue(roleRef, (snapshot) => {
          data = snapshot.val();
          localStorage.setItem("Name",data);
          localStorage.setItem("Logged",true);
          window.location = '/';
        //   if(data === "Teacher"){
        //     window.location = 'panelTeacher.html';
        //   }else{
        //     window.location = 'panelStudent.html';
        //   }
        });

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
  
        alert("Wrong user crediterials!");
      });
}

export default Login