import BannerComponent from "./BannerComponent.js";
import Wishlist from "./Wishlist.js";

import { useState } from "react";

const MainPage = () =>  {
  const [totalCost, setTotalCost] = useState(0);


  return (
    <div>
      <BannerComponent totalCost={totalCost} />
      <Wishlist setTotalCost={setTotalCost}></Wishlist>
    </div>   
  );
}

export default MainPage;
