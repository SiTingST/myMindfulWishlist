import HeaderComponent from './components/HeaderComponent.js';
import AddItemCard from './components/AddItemCard.js';
import ProductCard from './components/ProductCard.js';
import { useState } from "react";

import './App.css';
import Form from './components/Form.js';

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [cards, setCards] = useState([]);

  const handleAddItems = (cardData) => {
    setCards((prevCards) => [cardData, ...prevCards]);
    handleFormVisibility()
  };

  const handleFormVisibility = () => {
    setIsFormVisible(prev => !prev);
  };

  return (
    <div class="App">
      <HeaderComponent />
      {isFormVisible && <Form handleAddItems={handleAddItems} handleFormVisibility={handleFormVisibility} />}
      <div class='flex flex-row flex-wrap'>
        <AddItemCard handleCardClick ={handleFormVisibility}/>
        {cards.map((card, index) => (
          <ProductCard key={index} class="card" 
            title ={card.title}
            price ={card.price} 
            imageLink = {card.imageLink}
            websiteLink = {card.websiteLink} />
        ))}
      </div> 
    </div>
  );
}

export default App;
