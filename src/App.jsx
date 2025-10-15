import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./sections/Header/Navbar";
import Faq from "./pages/Faq";
import HowItWorks from "./pages/HowItWorks";
import Footer from "./sections/Footer/Footer";
import Feature from "./pages/Feature";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/feature" element={<Feature/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/howitworks" element={<HowItWorks/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
        </Routes>
    
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
