import HeaderComponent from './components/HeaderComponent.js';
import AddItemCard from './components/AddItemCard.js';
import ProductCard from './components/ProductCard.js';
import { useState, useEffect } from "react";

import './App.css';
import Form from './components/Form.js';


function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [totalCost, setTotalCost] = useState(0);
  const [totalCardsCount, setTotalCardsCount] = useState(0);

  const [cards, setCards] = useState(() => {
    const storedCards = localStorage.getItem('items');
    const cards = storedCards ? JSON.parse(storedCards) : [];
    setTotalCardsCount(cards.length);
    return cards;
  });

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(cards));
    const totalSum = cards.reduce((accumulator, currentItem) => {
      return accumulator + Number(currentItem.price);
    }, 0);
        
    setTotalCost(totalSum.toFixed(2))
  }, [cards]);

  const handleAddItems = (cardData) => {
    setCards([cardData, ...cards]);
    setTotalCardsCount(totalCardsCount + 1)
    handleFormVisibility()
  };

  const handleFormVisibility = () => {
    setIsFormVisible(prev => !prev);
  };

  const removeItem = (id) => {
    const updatedCards = cards.filter(item => item.id !== id);
    setTotalCardsCount(updatedCards.length)
    setCards(updatedCards);
  };

  return (
    <div class="App">
      <HeaderComponent totalCost={totalCost} />
      {isFormVisible && <Form totalCardCount= {totalCardsCount} handleAddItems={handleAddItems} handleFormVisibility={handleFormVisibility} />}
      <div class='flex flex-row flex-wrap'>
        <AddItemCard handleCardClick ={handleFormVisibility}/>
        {cards.map((card) => (
          <ProductCard 
            {...card}
            removeItem = {removeItem} />
        ))}
      </div> 
    </div>
  );
}

export default App;
