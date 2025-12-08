import React from "react";
import MintNFT from "./components/MintNFT";
import "./styles.css";
import Navbar from "./components/Navbar"
import HeroSection from "./pages/HomePage"
import Collections from "./pages/collections"
import  Marketplace from "./pages/Marketplace"

const App = () => {
  return (
    <div className="app">
      <Navbar />
            <h1 className="NFT-brand-name">OpulentMint</h1>
   <HeroSection />
   <Marketplace />
  <Collections />

      {/* <MintNFT /> */}
    </div>
  );
};

export default App;
