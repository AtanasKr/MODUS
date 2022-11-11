import React from 'react';
import './styles/Account.css'
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, set, ref} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

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
const database = getDatabase(app);

function Register(){
    return(
        <div>
            <h1 id="Enter-text">Регистрация</h1>
            <div id='holder'>
            <input id='NameLogin-input' type="text" placeholder='Име...'/>
            <input id='EmailLogin-input' type="text" placeholder='Имейл...'/>
            <input id='Password-input' type="text" placeholder='Парола...'/>
            <button className="Login-btn" onClick={handleRegister}>Регистрация</button>
            </div>
        </div>
    )
}

function handleRegister(){
    let name = document.getElementById('NameLogin-input').value;
    let email = document.getElementById('EmailLogin-input').value;
    let password = document.getElementById('Password-input').value;
    const auth = getAuth();
    console.log(email);
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   // Signed in 
    const user = userCredential.user;

    set(ref(database, 'users/' + user.uid),{
        name: name,
        email: email
    });

    alert('User created! You can now log in!');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(errorMessage);
  // ..
  });
}

export default Register