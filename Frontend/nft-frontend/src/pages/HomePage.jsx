// HeroSection.jsx
import React from "react";
import "./HeroSection.css";
// import heroImage from "./nft-hero.png"; // You can replace this with any NFT image

const HeroSection = () => {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1>Discover, Collect & Sell Exclusive NFTs</h1>
        <p>
          Explore unique digital assets and join a thriving NFT community. Own, trade, and showcase your digital collectibles with ease.
        </p>
        <div className="hero-buttons">
          <button className="primary-btn">Explore NFTs</button>
          <button className="secondary-btn">Mint NFT</button>
        </div>
      </div>
      <div className="hero-image">
        {/* <img src={heroImage} alt="NFT art showcase" /> */}
      </div>
    </header>
  );
};

export default HeroSection;
