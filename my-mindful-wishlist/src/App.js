import Wishlist from "./components/Wishlist.js";
import Header from "./components/Header.js";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import "./App.css";
function App() {
  return (
    <div className="App">
      <Header> </Header>
      <Wishlist> </Wishlist>   
    </div>
  );
}

export default App;
