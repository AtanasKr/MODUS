import {React,useState} from 'react';
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
import table4 from './img/Table4.png';
import table5 from './img/Table5.png';
import table6 from './img/Table6.png';
import sofa1 from './img/Sofa1.png';
import sofa2 from './img/Sofa2.png';
import sofa3 from './img/Sofa3.png';
import sofa4 from './img/Sofa4.png';
import sofa5 from './img/Sofa5.png';
import sofa6 from './img/Sofa6.png';
import desk1 from './img/Desk1.png';
import desk2 from './img/Desk2.png';
import desk3 from './img/Desk3.png';
import desk4 from './img/Desk4.png';
import desk5 from './img/Desk5.png';
import desk6 from './img/Desk6.png';
import lamp1 from './img/Lamp1.png';
import lamp2 from './img/Lamp2.png';
import lamp3 from './img/Lamp3.png';
import lamp4 from './img/Lamp4.png';
import lamp5 from './img/Lamp5.png';
import lamp6 from './img/Lamp6.png';
import data from "./TemplateDataJson";

function redirectToProd(name){

    localStorage.setItem("ProdName",name);
    window.location = '/productview';
}


function Products(){
    const [searchTerm, setSearchTerm] = useState("");
    return(
        <div>
            <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Търсене..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
            {/* <h1 id='Chair-header'>Столове</h1>
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
                <img className='container-item' src={table4} onClick={()=>redirectToProd("Table4")}/>
                <img className='container-item' src={table5} onClick={()=>redirectToProd("Table5")}/>
                <img className='container-item' src={table6} onClick={()=>redirectToProd("Table6")}/>
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
            </div>
            <h1 id='Sofa-header'>Бюра</h1>
            <hr></hr>
            <div className='img-container'>
                <img className='container-item' src={desk1} onClick={()=>redirectToProd("Sofa1")}/>
                <img className='container-item' src={desk2} onClick={()=>redirectToProd("Sofa2")}/>
                <img className='container-item' src={desk3} onClick={()=>redirectToProd("Sofa3")}/>
                <img className='container-item' src={desk4} onClick={()=>redirectToProd("Sofa4")}/>
                <img className='container-item' src={desk5} onClick={()=>redirectToProd("Sofa5")}/>
                <img className='container-item' src={desk6} onClick={()=>redirectToProd("Sofa6")}/>
            </div>
            <h1 id='Sofa-header'>Лампи</h1>
            <hr></hr>
            <div className='img-container'>
                <img className='container-item' src={lamp1} onClick={()=>redirectToProd("Lamp1")}/>
                <img className='container-item' src={lamp2} onClick={()=>redirectToProd("Lamp2")}/>
                <img className='container-item' src={lamp3} onClick={()=>redirectToProd("Lamp3")}/>
                <img className='container-item' src={lamp4} onClick={()=>redirectToProd("Lamp4")}/>
                <img className='container-item' src={lamp5} onClick={()=>redirectToProd("Lamp5")}/>
                <img className='container-item' src={lamp6} onClick={()=>redirectToProd("Lamp6")}/>
            </div> */}
             {data 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                //   <div className="template" key={val.id}>
                //       <img src={val.image} alt="" />
                //       <h3>{val.title}</h3>
                //       <p className="price">${val.price}</p>
                //   </div> 
                <div>
                    {val.title==="Столове"&&<div>
                        <h1 id='Sofa-header'>Столове</h1>
                        <hr></hr>
                        <div className='img-container'>
                            <img className='container-item' src={chair1} onClick={()=>redirectToProd("Chair1")}/>
                            <img className='container-item' src={chair2} onClick={()=>redirectToProd("Chair2")}/>
                            <img className='container-item' src={chair3} onClick={()=>redirectToProd("Chair3")}/>
                            <img className='container-item' src={chair4} onClick={()=>redirectToProd("Chair4")}/>
                            <img className='container-item' src={chair5} onClick={()=>redirectToProd("Chair5")}/>
                            <img className='container-item' src={chair6} onClick={()=>redirectToProd("Chair6")}/>
                        </div>
                    </div>}
                    {val.title==="Маси"&&<div>
                        <h1 id='Sofa-header'>Маси</h1>
                        <hr></hr>
                        <div className='img-container'>
                            <img className='container-item' src={table1} onClick={()=>redirectToProd("Table1")}/>
                            <img className='container-item' src={table2} onClick={()=>redirectToProd("Table2")}/>
                            <img className='container-item' src={table3} onClick={()=>redirectToProd("Table3")}/>
                            <img className='container-item' src={table4} onClick={()=>redirectToProd("Table4")}/>
                            <img className='container-item' src={table5} onClick={()=>redirectToProd("Table5")}/>
                            <img className='container-item' src={table6} onClick={()=>redirectToProd("Table6")}/>
                        </div>
                    </div>}
                    {val.title==="Дивани"&&<div>
                        <h1 id='Sofa-header'>Дивани</h1>
                        <hr></hr>
                        <div className='img-container'>
                            <img className='container-item' src={sofa1} onClick={()=>redirectToProd("Sofa1")}/>
                            <img className='container-item' src={sofa2} onClick={()=>redirectToProd("Sofa2")}/>
                            <img className='container-item' src={sofa3} onClick={()=>redirectToProd("Sofa3")}/>
                            <img className='container-item' src={sofa4} onClick={()=>redirectToProd("Sofa4")}/>
                            <img className='container-item' src={sofa5} onClick={()=>redirectToProd("Sofa5")}/>
                            <img className='container-item' src={sofa6} onClick={()=>redirectToProd("Sofa6")}/>
                        </div>
                    </div>}
                    {val.title==="Бюра"&&<div>
                        <h1 id='Sofa-header'>Бюра</h1>
                        <hr></hr>
                        <div className='img-container'>
                            <img className='container-item' src={desk1} onClick={()=>redirectToProd("Desk1")}/>
                            <img className='container-item' src={desk2} onClick={()=>redirectToProd("Desk2")}/>
                            <img className='container-item' src={desk3} onClick={()=>redirectToProd("Desk3")}/>
                            <img className='container-item' src={desk4} onClick={()=>redirectToProd("Desk4")}/>
                            <img className='container-item' src={desk5} onClick={()=>redirectToProd("Desk5")}/>
                            <img className='container-item' src={desk6} onClick={()=>redirectToProd("Desk6")}/>
                        </div>
                    </div>}
                    {val.title==="Лампи"&&<div>
                        <h1 id='Sofa-header'>Лампи</h1>
                        <hr></hr>
                        <div className='img-container'>
                            <img className='container-item' src={lamp1} onClick={()=>redirectToProd("Lamp1")}/>
                            <img className='container-item' src={lamp2} onClick={()=>redirectToProd("Lamp2")}/>
                            <img className='container-item' src={lamp3} onClick={()=>redirectToProd("Lamp3")}/>
                            <img className='container-item' src={lamp4} onClick={()=>redirectToProd("Lamp4")}/>
                            <img className='container-item' src={lamp5} onClick={()=>redirectToProd("Lamp5")}/>
                            <img className='container-item' src={lamp6} onClick={()=>redirectToProd("Lamp6")}/>
                        </div>
                    </div>}
                </div>
                )
              })
            }
        </div>
    )
}

export default Products