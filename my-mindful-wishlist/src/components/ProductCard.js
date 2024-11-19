import noImageFound from "../images/noImageAvailable.png";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useState, useEffect } from "react";

const ProductCard = (props) => {
  const [dayDifference, setDayDifference] = useState(0);
  let useCustomImageNotFound = true;

  useEffect(() => {
    const calculateDayDifference = () => {
      const currentDate = new Date();
      const unlockDate = new Date(props.unlockDate);

      if (currentDate < unlockDate) {
        let timeDifference = unlockDate.getTime() - currentDate.getTime();
        let dayDifferenceCalculated = timeDifference / (1000 * 3600 * 24);
        setDayDifference(Math.floor(dayDifferenceCalculated));
      }
    };
    calculateDayDifference();

    const intervalId = setInterval(calculateDayDifference, 1000 * 60 * 60 * 24); // 24 hours in ms

    return () => {
      clearInterval(intervalId);
    };
  }, [props.unlockDate]);

  const regex = /\.(jpg|jpeg|png|WebP)$/i;
  if (regex.test(props.imageLink)) {
    useCustomImageNotFound = false;
  }

  const handleCardClick = () => {
    const { id, imageLink, name, websiteLink, notes, price } = props;
    props.handleSetEditMode();
    props.handleFormVisibility();
    const cardData = { id, imageLink, name, websiteLink, notes, price };
    props.setSelectedCardData(cardData);
  };

  const handleRemoveButtonClick = (e) => {
    e.stopPropagation();
    props.removeItem(props.id);
  };

  return (
    <div className="relative flex flex-col m-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 md:w-80 cursor-pointer" onClick={() => handleCardClick()}>
      {dayDifference > 0 && (
        <div className="absolute inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center z-10 rounded-lg">
          <div className="text-center text-white">
            <p font-black> {dayDifference} Days Left</p>
            <button className="bg-black mt-3 hover:bg-slate-600 text-white font-bold py-2 px-4 border  rounded"> Unlock </button>
          </div>
        </div>
      )}
      <div className="relative h-56">
        {useCustomImageNotFound ? (
          <img
            className="object-contain w-full h-full rounded-lg bg-peach"
            src={noImageFound}
            alt="Not Available"
          />
        ) : (
          <img
            className="object-cover w-full h-full rounded-lg"
            src={props.imageLink}
            alt="Not Available"
          />
        )}
      </div>
      <div className="p-4">
        <p className="mb-2 text-slate-800 font-semibold">{props.name}</p>
        <p className="mb-2 text-sm opacity-50">{props.date}</p>
        <div className="flex justify-between">
          <span className="font-bold text-xl">
            ${props.price ? props.price : 0}
          </span>
          <div className="flex gap-2">
            <button
              className="flex items-center rounded-md bg-red-500 px-2 border text-sm text-white hover:shadow-lg"
              onClick={handleRemoveButtonClick}
            >
              <DeleteOutlineIcon style={{ fontSize: 22 }} />
              <span className="ml-1"> Remove </span>
            </button>
            <a
              href={props.websiteLink || "#"}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center rounded-md bg-slate-800 px-4 border text-sm text-white hover:shadow-lg"
            >
              <LocalShippingIcon />
              <span className="ml-1"> Buy </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
