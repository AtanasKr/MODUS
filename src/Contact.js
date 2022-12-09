import React from 'react';
import './styles/Contact.css'

function Contact(){
    return(
        <div>
            <h1>Свържете се с нас</h1>
            <form  action="https://formsubmit.co/tedi.arnaudova99@gmail.com" method="POST">
            <div id='holder'>
            <input id='Name-input'  name="name" type="text" placeholder='Име...' required/>
            <input id='Email-input'  name="email" type="text" placeholder='Имейл...' required/>
            <input id='Message-input' name="message" type="text" placeholder='Съобщение...' required/>
            <button className="Send-btn">Изпрати</button>
            </div>
            </form>
        </div>
    )
}

export default Contact