import React from 'react';
import './styles/Contact.css'

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, ref, onValue, remove, update} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
import {NavLink} from "react-router-dom"

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
const auth = getAuth();
let userUid;
let history = [];

function addElementToList(date,price){
    let historyHolder ={};
    historyHolder.date = date;
    historyHolder.price = price;
    debugger;
    history.push(historyHolder);
}
auth.onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      //getting user ref in order to reach user data in database
      userUid = user.uid;
      const historyRef = ref(database, 'history/' + user.uid + '-logged/');
      onValue(historyRef, (snapshot) => {
          const data = snapshot;
          data.forEach(function(childSnapshot){
            addElementToList(childSnapshot.val().date.slice(0,10),childSnapshot.val().price);
          });
      });
      // ...
    } else {
      // User is signed out
      console.log("The user is signed off!");
    }
  });

function HistoryView(){
    return(
        <div>
            <h1>Вашата История на поръчки:</h1>
            <ul className='history-holder'>
            {history.map((data) => (
            <li key={data.date}>
              <p id='product-holder'>Транзакцията на: {data.date}</p> 
              <p id='product-holder3'>На стойност: {data.price} лв</p>
            </li>
            ))}
            </ul>
        </div>
    )
}

export default HistoryView