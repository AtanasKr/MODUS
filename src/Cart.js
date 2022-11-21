import React from 'react';
import './styles/Contact.css'

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
        </div>
    )
}

export default Contact