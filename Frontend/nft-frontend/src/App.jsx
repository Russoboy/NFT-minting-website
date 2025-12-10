import React from "react";
// import MintNFT from "./components/MintNFT";
import "./styles.css";
import Navbar from "./components/Navbar"
import HeroSection from "./pages/HomePage"
import Collections from "./pages/collections"
import  Marketplace from "./pages/Marketplace"
import ContactSection from "./pages/ContactSection";
import MintNFT from "./pages/MintNFT";
const App = () => {

const CONTRACT_ADDRESS = "0x1Dd4c5E7310f503391Ee570964901e66503BC64f";

  return (
    <div className="app">
      <Navbar />
            
      <HeroSection />
      <Marketplace />
      <Collections />
      <MintNFT contractAddress="YOUR_DEPLOYED_NFT_CONTRACT_ADDRESS" />
      <ContactSection />
      {/* <MintNFT /> */}
    </div>
  );
};

export default App;
