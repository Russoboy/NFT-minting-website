import React from "react";
import MintNFT from "./components/MintNFT";
import "./styles.css";

const App = () => {
  return (
    <div className="app">
      <h1>My NFT Minting DApp</h1>
      <MintNFT />
    </div>
  );
};

export default App;
