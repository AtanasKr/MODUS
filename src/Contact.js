import React from 'react';
import './styles/Contact.css'

function Contact(){
    return(
        <div>
            <h1>Свържете се с нас.</h1>
            <div id='holder'>
            <input id='Name-input' type="text" placeholder='Име...'/>
            <input id='Email-input' type="text" placeholder='Имейл...'/>
            <input id='Message-input' type="text" placeholder='Съобщение...'/>
            <button className="Send-btn">Изпрати</button>
            </div>
        </div>
    )
}

export default Contact