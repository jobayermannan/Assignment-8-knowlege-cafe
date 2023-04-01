import React, { useEffect, useState } from 'react';

import './main.css'

import Singlecard from '../Singlecard/Singlecard';
const Main = () => {

    const [cards,setCards] = useState([]);
   
    useEffect(()=>{
     fetch('data.json').then(res=>res.json()).then(data=>setCards(data));
    },[])
    return (
  <div>
    {
        cards.map(card=><Singlecard card={card}  key={card.id} ></Singlecard>)
    }

    
  </div>
       
  
     
    );
};

export default Main;