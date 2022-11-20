import React from 'react';
import chairHomePath from './img/chairHome.png';
import lineToButtonPath from './img/lineToButton.png';
import './styles/Home.css';

function Home(){
    return(
        <div>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
            <div className='left'>
            <h1>Луксозни Мебели<br/>
На една ръка разстояние</h1>
            <p>В MODUS главанта ни цел е да ви накараме да се<br/>
            чувставте удобно в конфорта на сoбоствения ви дом, без да се <br/>
            налага да жертвате стилния му облик.</p>
            </div>
            <div className='right'>
                <a href='www.google.com'><img src={chairHomePath}/></a>
            </div>
            <img  className = 'lineToButton' src={lineToButtonPath}/>
            <button className="productsButton" onClick={moveTopProducts}>Към продукти</button>
        </div>
    )
}

function moveTopProducts(){
    window.location='products'
}

export default Home