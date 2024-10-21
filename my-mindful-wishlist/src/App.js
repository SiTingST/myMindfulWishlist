import HeaderComponent from './components/HeaderComponent.js';
import AddItemCard from './components/AddItemCard.js';
import ProductCard from './components/ProductCard.js';
import { useState, useEffect } from "react";

import './App.css';
import Form from './components/Form.js';


function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [totalCost, setTotalCost] = useState(0);

  const [cards, setCards] = useState(() => {
    const storedCards = localStorage.getItem('items');
    return storedCards ? JSON.parse(storedCards) : [];
  });

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(cards));
    const totalSum = cards.reduce((accumulator, currentItem) => {
      return accumulator + Number(currentItem.price);
    }, 0);
    
    console.log("totalPrice", totalSum)
    
    setTotalCost(totalSum)
  }, [cards]);

  const handleAddItems = (cardData) => {
    setCards((prevCards) => [cardData, ...prevCards]);
    handleFormVisibility()
  };

  const handleFormVisibility = () => {
    setIsFormVisible(prev => !prev);
  };

  const removeItem = (id) => {
    const updatedCards = cards.filter(item => item.id !== id);
    setCards(updatedCards);
  };

  return (
    <div class="App">
      <HeaderComponent totalCost={totalCost} />
      {isFormVisible && <Form totalCardCount= {cards.length} handleAddItems={handleAddItems} handleFormVisibility={handleFormVisibility} />}
      <div class='flex flex-row flex-wrap'>
        <AddItemCard handleCardClick ={handleFormVisibility}/>
        {cards.map((card) => (
          <ProductCard class="card" 
            id = {card.id}
            name ={card.name}
            price ={card.price} 
            imageLink = {card.imageLink}
            websiteLink = {card.websiteLink}
            date = {card.date}
            removeItem = {removeItem} />
        ))}
      </div> 
    </div>
  );
}

export default App;
