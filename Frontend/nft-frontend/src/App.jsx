import React from "react";
import MintNFT from "./components/MintNFT";
import "./styles.css";
import Navbar from "./components/Navbar"
const App = () => {
  return (
    <div className="app">
      <Navbar />
            <h1 className="NFT-brand-name">OpulentMint</h1>
      {/* <MintNFT /> */}
    </div>
  );
};

export default App;
