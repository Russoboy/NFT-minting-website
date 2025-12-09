import React from "react";
// import MintNFT from "./components/MintNFT";
import "./styles.css";
import Navbar from "./components/Navbar"
import HeroSection from "./pages/HomePage"
import Collections from "./pages/collections"
import  Marketplace from "./pages/Marketplace"
import ContactSection from "./pages/ContactSection";
const App = () => {
  return (
    <div className="app">
      <Navbar />
            
      <HeroSection />
      <Marketplace />
      <Collections />
      <ContactSection />
      {/* <MintNFT /> */}
    </div>
  );
};

export default App;
