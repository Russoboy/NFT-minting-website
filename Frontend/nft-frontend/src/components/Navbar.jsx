import React from "react";


const  Navbar = () =>{
     

    return(
    <nav className="Navbar">
      <ul>
        <h1 className="NFT-brand-name">OpulentMint</h1>
        <li>Home</li>
        <li>Marketplace</li>
        <li>Mint</li>
        <li>Collections</li>
        <li>Contacts</li>
       
      </ul>
      {/* <button>Connect Wallet</button> */}
    </nav>
    )
}

export default  Navbar;