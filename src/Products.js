import React from 'react';
import './styles/Products.css'
import chair1 from './img/Chair1.png';
import chair2 from './img/Chair2.png';
import chair3 from './img/Chair3.png';
import chair4 from './img/Chair4.png';
import chair5 from './img/Chair5.png';
import chair6 from './img/Chair6.png';
import table1 from './img/Table1.png';
import table2 from './img/Table2.png';
import table3 from './img/Table3.png';
import sofa1 from './img/Sofa1.png';
import sofa2 from './img/Sofa2.png';
import sofa3 from './img/Sofa3.png';
import sofa4 from './img/Sofa4.png';
import sofa5 from './img/Sofa5.png';
import sofa6 from './img/Sofa6.png';
import sofa7 from './img/Sofa7.png';

function redirectToProd(name){

    localStorage.setItem("ProdName",name);
    window.location = '/productview';
}

function Products(){
    return(
        <div>
            <h1 id='Chair-header'>Столове</h1>
            <hr></hr>
            <div className='img-container'>
                <img className='container-item' src={chair1} onClick={()=>redirectToProd("Chair1")}/>
                <img className='container-item' src={chair2} onClick={()=>redirectToProd("Chair2")}/>
                <img className='container-item' src={chair3} onClick={()=>redirectToProd("Chair3")}/>
                <img className='container-item' src={chair4} onClick={()=>redirectToProd("Chair4")}/>
                <img className='container-item' src={chair5} onClick={()=>redirectToProd("Chair5")}/>
                <img className='container-item' src={chair6} onClick={()=>redirectToProd("Chair6")}/>
            </div>
            <h1 id='Table-header'>Маси</h1>
            <hr></hr>
            <div className='img-container'>
                <img className='container-item' src={table1} onClick={()=>redirectToProd("Table1")}/>
                <img className='container-item' src={table2} onClick={()=>redirectToProd("Table2")}/>
                <img className='container-item' src={table3} onClick={()=>redirectToProd("Table3")}/>
            </div>
            <h1 id='Sofa-header'>Дивани</h1>
            <hr></hr>
            <div className='img-container'>
                <img className='container-item' src={sofa1} onClick={()=>redirectToProd("Sofa1")}/>
                <img className='container-item' src={sofa2} onClick={()=>redirectToProd("Sofa2")}/>
                <img className='container-item' src={sofa3} onClick={()=>redirectToProd("Sofa3")}/>
                <img className='container-item' src={sofa4} onClick={()=>redirectToProd("Sofa4")}/>
                <img className='container-item' src={sofa5} onClick={()=>redirectToProd("Sofa5")}/>
                <img className='container-item' src={sofa6} onClick={()=>redirectToProd("Sofa6")}/>
                <img className='container-item' src={sofa7} onClick={()=>redirectToProd("Sofa7")}/>
            </div>
        </div>
    )
}

export default Products