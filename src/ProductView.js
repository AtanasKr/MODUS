import React from 'react';
import './styles/ProductView.css'
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

let prodObj = {
    "Chair1":{info:"Стол",text:"Описание", pic:chair1, price:"999.99лв"},
    "Chair2":{info:"Стол",text:"Описание", pic:chair2, price:"999.99лв"},
    "Chair3":{info:"Стол",text:"Описание", pic:chair3, price:"999.99лв"},
    "Chair4":{info:"Стол",text:"Описание", pic:chair4, price:"999.99лв"},
    "Chair5":{info:"Стол",text:"Описание", pic:chair5, price:"999.99лв"},
    "Chair6":{info:"Стол",text:"Описание", pic:chair6, price:"999.99лв"},
    "Table1":{info:"Маса",text:"Описание", pic:table1, price:"999.99лв"},
    "Table2":{info:"Маса",text:"Описание", pic:table2, price:"999.99лв"},
    "Table3":{info:"Маса",text:"Описание", pic:table3, price:"999.99лв"},
    "Sofa1":{info:"Диван",text:"Описание", pic:sofa1, price:"999.99лв"},
    "Sofa2":{info:"Диван",text:"Описание", pic:sofa2, price:"999.99лв"},
    "Sofa3":{info:"Диван",text:"Описание", pic:sofa3, price:"999.99лв"},
    "Sofa4":{info:"Диван",text:"Описание", pic:sofa4, price:"999.99лв"},
    "Sofa5":{info:"Диван",text:"Описание", pic:sofa5, price:"999.99лв"},
    "Sofa6":{info:"Диван",text:"Описание", pic:sofa6, price:"999.99лв"},
    "Sofa7":{info:"Диван",text:"Описание", pic:sofa7, price:"999.99лв"}
}

function ProductView(){
    return(
        <div>
            <div className="row">
                <div className="column">
                <img className='show-container-item' src={prodObj[localStorage.getItem("ProdName")].pic}/>
                </div>
                <div className="column">
                    <h2 className='prod-Inf'>{prodObj[localStorage.getItem("ProdName")].info}</h2>
                    <p>{prodObj[localStorage.getItem("ProdName")].text}</p>
                    <p>{prodObj[localStorage.getItem("ProdName")].price}</p>
                    <button className="Send-btn">Добави в количка</button>
                </div>
            </div>
        </div>
    )
}

export default ProductView