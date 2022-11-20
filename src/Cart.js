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
            {logged&&<h1>Cart page.</h1>}
            {!logged&&<h1>Please login to use this page</h1>}
        </div>
    )
}

export default Contact