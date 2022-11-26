import "./App.css";
import Header from "./Header";

import Footer from "./Footer";
import HomePage from "./HomePage";

import BuyingPage from "./BuyingPage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
        <Route path="/" element={<HomePage />}></Route>
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
