import React, { useEffect, useState } from 'react';

import './main.css'

import Singlecard from '../Singlecard/Singlecard';
const Main = () => {

    const [cards,setCards] = useState([]);
    const [data,setData]=useState([]);
   
    useEffect(()=>{
     fetch('data.json').then(res=>res.json()).then(data=>setCards(data));
    },[])

    const handleAddToCart=(card)=>{
        const newCart =[...data,card];
        setData(newCart);
            }
    return (
  <div>     
          <div className="two-content-bars">
  <div className="left-content-bar">
    {
        cards.map(card=><Singlecard card={card}  key={card.id}   handleAddToCart={handleAddToCart}></Singlecard>)
    }
</div>
<div className="right-content-bar">

      <h3> Here is bookmark List:{data.length}</h3>
        </div>
      </div>
  </div>
       
  
     
    );
};

export default Main;