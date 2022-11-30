import React from 'react';
import './styles/Contact.css'
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, ref, onValue, remove, update} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
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
let userUid;

auth.onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      //getting user ref in order to reach user data in database
      userUid = user.uid;
      // ...
    } else {
      // User is signed out
      console.log("The user is signed off!");
    }
  });

let allProducts = [];
let finalPrice = 0;
let balance = 0;
const updates = {};
function addElementToList(id,name,price){
    let productHolder ={};
    productHolder.id = id;
    productHolder.name = name;
    productHolder.price = price;
    allProducts.push(productHolder);
    finalPrice = finalPrice+parseInt(price);
    debugger;
}

function deleteElement(id){
  const refToDelete = ref(database,'productHolder/'+userUid+"-product/"+id);
  const allProducts = ref(database,"productHolder/"+userUid+"-product");
  onValue(allProducts, (snapshot) => {
      const data = snapshot;
      data.forEach(function(childSnapshot){
        if(id===childSnapshot.val().id){
          remove(refToDelete);
          window.location = '/products';
          alert("Продукта беше премахнат")
        }
      });
  });
}

function finishTransaction(){
  if(finalPrice===0){
    alert("Количката е празна!")
  }else if(balance>=finalPrice){
    balance = balance - finalPrice;
    alert("Транзакцията е успешна!");
    updates['users/' + userUid + "/balance"] = balance;
    const allProducts = ref(database,"productHolder/"+userUid+"-product");
    remove(allProducts);
    update(ref(database), updates);
    window.location = '/products';
  }else{
    alert("Не достатъчен баланс!");
  }
};

auth.onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      //getting user ref in order to reach user data in database
      const productRef = ref(database, 'productHolder/' + user.uid + "-product");
      onValue(productRef, (snapshot) => {
          const data = snapshot;
          allProducts=[];
          data.forEach(function(childSnapshot){
            addElementToList(childSnapshot.val().id,childSnapshot.val().name,childSnapshot.val().price);
          });
      });
      const userRef = ref(database, 'users/' + user.uid);
      onValue(userRef, (snapshot) => {
          balance = snapshot.val().balance;
          console.log(balance);
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
            {logged&&<h1 className='balance-holder'>Баланс по сметка:{balance}лв</h1>}
            {logged&&<h1 className='balance-holder'>Стойност на стока:{finalPrice}лв</h1>}
            {logged&&<h1 id='Chair-header'>Продукти</h1>}
            {logged&&<hr></hr>}
            {logged&&<ul id='all-products'>
            {allProducts.map((data) => (
            <li key={data.id} onClick={()=>deleteElement(data.id)}>
              <p id='product-holder'>Ид на продукта:{data.id}</p> 
              <p id='product-holder2'>Име: {data.name}</p>
              <p id='product-holder3'>Цена: {data.price} лв</p>
            </li>
            ))}
            </ul>}
            {logged&&<button className="Send-btn" onClick={()=>finishTransaction()}>Приключи поръчка</button>}
        </div>
    )
}

export default Contact