import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Diets from "./components/Diets";
import Fitness from "./components/Fitness";
import Nutrition from "./components/Nutrition";
import WeightLoss from "./components/WeightLoss";
import MentalHealth from "./components/MentalHealth";
import Login from "./components/Login";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diets" element={<Diets />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/weight-loss" element={<WeightLoss />} />
          <Route path="/mental" element={<MentalHealth />} />
          <Route path="/login" element={<Login />} />
        
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
