import TopNavBar from "./components/TopNavBar.js";
import { Outlet } from 'react-router-dom';

import "./App.css";

const App = () => {
  return (
      <>
        <TopNavBar />
        <Outlet />
      </>
  );
};

export default App;