import BannerComponent from "./BannerComponent.js";
import AddItemCard from "./AddItemCard.js";
import ProductCard from "./ProductCard.js";
import Form from ".//Form.js";

import { useState, useEffect } from "react";

const Wishlist = (props) =>  {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [totalCardsCount, setTotalCardsCount] = useState(0);
  const [selectedCardData, setSelectedCardData] = useState(null);

  const [cards, setCards] = useState(() => {
    const storedCards = localStorage.getItem("items");
    const cards = storedCards ? JSON.parse(storedCards) : [];
    setTotalCardsCount(cards.length);
    return cards;
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cards));
    const totalSum = cards.reduce((accumulator, currentItem) => {
      return accumulator + Number(currentItem.price);
    }, 0);

    props.setTotalCost(totalSum.toFixed(2));
  }, [cards]);

  const handleAddItems = (cardData) => {
    if (selectedCardData) {
      setCards((prev) => {
        return prev.map((card) =>
          card.id === selectedCardData.id
            ? { ...card, ...cardData }
            : { ...card },
        );
      });
    } else {
      setCards([cardData, ...cards]);
      setTotalCardsCount(totalCardsCount + 1);
    }
    handleFormVisibility();
  };

  const handleFormVisibility = () => {
    setIsFormVisible((prev) => !prev);
    if (selectedCardData) {
      setSelectedCardData(null);
    }
  };

  const handleSetEditMode = () => {
    setIsEditMode((prev) => true);
  };
  const handleCardClick = () => {
    handleFormVisibility();
    setIsEditMode(false);
  };

  const removeItem = (id) => {
    const updatedCards = cards.filter((item) => item.id !== id);
    setTotalCardsCount(updatedCards.length);
    setCards(updatedCards);
  };

  const setSelectedCardDatas = (data) => {
    setSelectedCardData(data);
  };

  return (
    <div>
      {isFormVisible && (
        <Form
          totalCardCount={totalCardsCount}
          handleAddItems={handleAddItems}
          handleFormVisibility={handleFormVisibility}
          isEditMode={isEditMode}
          selectedCardData={selectedCardData}
        />
      )}
      <div className="flex flex-row flex-wrap">
        <AddItemCard handleCardClick={handleCardClick} />
        {cards.map((card) => (
          <ProductCard
            handleFormVisibility={handleFormVisibility}
            handleSetEditMode={handleSetEditMode}
            setSelectedCardData={setSelectedCardDatas}
            {...card}
            removeItem={removeItem}
          />
        ))}
      </div>
    </div>   
  );
}

export default Wishlist;
