import React from 'react';
import './styles/Contact.css'
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, ref, onValue} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

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

let counter= 1;

// function clearList(){
//     let completelist= document.getElementById("pendingList");
//     counter = 1;
//     completelist.innerHTML = "";
// }

function addElementToList(id,name,price){
    let completelist= document.getElementById("pendingList");
    
    completelist.innerHTML += "<li><input type='text' disabled style='display:none' value='"+name+"' id='"+counter+"fnum'><input type='text' disabled style='display:none' value='"+name+"' id='"+counter+"name'><input type='text' disabled style='display:none' value='"+id+"' id='"+counter+"id'><input type='text' disabled style='display:none' value='"+name+"' id='"+counter+"from'><input type='text' disabled style='display:none' value='"+name+"' id='"+counter+"'>" + "<button onclick='goToFunc("+counter+")'> <span class='tooltiptext' id='myTooltip'>Решаване на проучване "+counter+"</span></button></li><br>";
    counter++;
}

auth.onAuthStateChanged((user) => {
    debugger;
    if (user) {
      // User is signed in, see docs for a list of available properties
      //getting user ref in order to reach user data in database
      const userRef = ref(database, 'productHolder/' + user.uid + "-product");
      onValue(userRef, (snapshot) => {
          const data = snapshot;
          //clearList();
          data.forEach(function(childSnapshot){
            addElementToList(childSnapshot.val().id,childSnapshot.val().name,childSnapshot.val().price);
            debugger;
          });
      });
      // ...
    } else {
      // User is signed out
      console.log("The user is signed off!");
    }
  });

let logged;
if(localStorage.getItem("Logged")==='false'){
    logged = false;
}else{
    logged = true;
}

function Contact(){
    return(
        <div>
            {!logged&&<h1>Моля влезте за да ползвате страницата</h1>}
            {logged&&<h1 className='cart-holder'>Количката на {localStorage.getItem("Name")}</h1>}
            {logged&&<h1 className='balance-holder'>Баланс по сметка:2000лв</h1>}
            {logged&&<h1 className='balance-holder'>Стойност на стока:0лв</h1>}
            {logged&&<h1 id='Chair-header'>Продукти</h1>}
            {logged&&<hr></hr>}
            {logged&&<button className="Send-btn">Приключи поръчка</button>}
            <ul id="pendingList">
            </ul>
        </div>
    )
}

export default Contact