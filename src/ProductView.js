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

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, ref, onValue, push, update} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

// Firebase configuration
// For Firebase JS SDK v7.20.0 and later
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
  const databaseHolder = getDatabase(app);
  const auth = getAuth();

let prodObj = {
    "Chair1":{info:"Фотьойл Mira",text:"Фотьойл с модерен дизайн, удобна седалка, практични размери и здрава конструкция, подходящ за всяко пространство.", specText:"Цвят: розовТегло: 20 кг Гаранция: 2 години", pic:chair1, price:"Цена: 220 лв"},
    "Chair2":{info:"Стол Aros",text:"Стол с дизайн, отговарящ на модерните тенденции в декорацията, идеален за дома или офиса.", specText:"Цвят: бял Тегло: 5 кг Гаранция: 2 години", pic:chair2, price:"69 лв"},
    "Chair3":{info:"Стол Armada",text:"Стол с дизайн, отговарящ на последните тенденции в декорацията, идеален за дома или офиса.", specText:"Цвят: черен Тегло: 4.5 кг Гаранция: 2 години", pic:chair3, price:"59 лв"},
    "Chair4":{info:"Офис стол Fabri",text:"Офис стол с удобна и извита седалка с амортисьор за повдигане, спомагаща за поддържане на правилна и удобна позиция на тялото по време на работа. ", specText:"Цвят: черен Тегло: 15 кг Гаранция: 2 години", pic:chair4, price:"179 лв"},
    "Chair5":{info:"Стол Comfy Yellow",text:"Стол с модерен дизайн и здрава конструкция, подходящ за освежаване на Вашия балкон или градина.", specText:"Цвят: жълт Тегло: 10 кг Гаранция: 2 години", pic:chair5, price:"149 лв"},
    "Chair6":{info:"Стол Comfy White",text:"Стол с модерен дизайн и здрава конструкция, подходящ за освежаване на Вашия балкон или градина.", specText:"Цвят: бял Тегло: 12 кг Гаранция: 2 години", pic:chair6, price:"155 лв"},
    "Table1":{info:"Маса Sigma",text:"Маса със здрава конструкция, с рафт за съхранение на дребни предмети, подходяща за Вашия хол.", specText:"Цвят: Дъб Тегло: 15 кг Гаранция: 2 години", pic:table1, price:"119 лв"},
    "Table2":{info:"Маса Terra",text:"Маса със здрава конструкция, подходяща за Вашата кухня.", specText:"Цвят: Дъб антрацит Тегло: 17 кг Гаранция: 2 години", pic:table2, price:"159 лв"},
    "Table3":{info:"Маса Simplicity ",text:"Маса със семпъл дизайн и практични размери, подходяща за всяко пространство.", specText:"Цвят: Тъмен орех  Тегло: 25 кг Гаранция: 2 години", pic:table3, price:"109 лв"},
    "Sofa1":{info:"Диван Fiona",text:"Триместен диван с модерна и практична конструкция, с включени декоративни възглавници, идеално допълнение за вашия хол.", specText:"Цвят: бял, възглавници с декорации в светлорозово Тегло: 92 кг Гаранция: 2 години", pic:sofa1, price:"829 лв"},
    "Sofa2":{info:"Диван Glory",text:"Диван тип лежанка, съчетаващ класически модерен дизайн и комфорт, с включени декоративни възглавници.", specText:"Цвят: сиви и бели райета Тегло: 75 кг Гаранция: 2 години", pic:sofa2, price:"709 лв"},
    "Sofa3":{info:"Диван Elmo ",text:"Триместен диван с декоративни възглавници и високо качество на изработка, ще добави стил и лукс към вашето пространство.", specText:"Цвят: бял, възглавници с декорации в бяло и светлорозово Тегло: 90 кг Гаранция: 2 години", pic:sofa3, price:"889 лв"},
    "Sofa4":{info:"Диван Solaris ",text:"Двуместен диван в класически дизайн с декорация от възглавници ще Ви предложи моменти на релакс благодарение на удобната седалка, а практичните му размери го правят идеален избор за всяко пространство. ", specText:"Цвят: тъмночервен, възглавници с декорации в тъмночервено и кафяво Тегло: 80 кг Гаранция: 2 години", pic:sofa4, price:"799 лв"},
    "Sofa5":{info:"Диван Alis",text:"Двуместен диван със семпла, стилна визия и практични размери приятно ще освежи Вашия хол.", specText:"Цвят: светлосин Тегло: 62 кг Гаранция: 2 години", pic:sofa5, price:"689 лв"},
    "Sofa6":{info:"Диван Savy",text:"Двуместен диван с модерен дизайн и декоративни възглавници, идеален за по-малки жилищни пространства.", specText:"Цвят: сив, възглавници в сиво и бяло Тегло: 58 кг Гаранция: 2 години", pic:sofa6, price:"599 лв"},
    "Sofa7":{info:"Диван Florence",text:"Триместен разтегателен диван с модерни детайли, здрава конструкция и удобна седалка, лесно се превръща в легло с практични размери, които го правят идеален избор за всяко пространство.", specText:"Цвят: жълт Тегло: 91 кг Гаранция: 2 години", pic:sofa7, price:"828 лв"}
}

let userHolder;
let logged;
auth.onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      //getting user ref in order to reach user data in database
      userHolder = user;
      logged = true;
      // ...
    } else {
      // User is signed out
      logged = false;
    }
  });

function sendProductToDatabase(passedName,passedPic,passedPrice,database){
  if(logged){
    const productRef = ref(database, 'productHolder/' + userHolder.uid + "-product");
    // Get the unique ID generated by push() by accessing its key
    const newPostKey = push(productRef).key;
    const updates = {};
    const productData = {
        name: passedName,
        pic: passedPic,
        id: newPostKey,
        from: userHolder.uid,
        price: passedPrice,
        };
        updates['productHolder/' + userHolder.uid + "-product/" + newPostKey] = productData;
        // Get the unique ID generated by push() by accessing its key
        alert("Продукта е добавен в количката!")
        return update(ref(database), updates);
    }else{
      alert("Моля влезте акаунта си за да правите покупки!")
    }
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
                    <h3 className='prod-Spec'>Спецификации:</h3>
                    <p>{prodObj[localStorage.getItem("ProdName")].specText}</p>
                    <p>{prodObj[localStorage.getItem("ProdName")].price}</p>
                    <button className="Send-btn" onClick={()=>sendProductToDatabase(prodObj[localStorage.getItem("ProdName")].info,
                    prodObj[localStorage.getItem("ProdName")].pic,
                    prodObj[localStorage.getItem("ProdName")].price,
                    databaseHolder)}>Добави в количка</button>
                </div>
            </div>
        </div>
    )
}

export default ProductView