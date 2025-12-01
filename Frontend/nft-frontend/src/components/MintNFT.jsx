import React, { useState } from "react";
import { ethers } from "ethers";
import ERC721ABI from "../abi/ERC721.json";

const CONTRACT_ADDRESS = "YOUR_DEPLOYED_CONTRACT_ADDRESS_HERE";

const MintNFT = () => {
  const [account, setAccount] = useState("");
  const [minting, setMinting] = useState(false);
  const [tokenURI, setTokenURI] = useState("");

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Install MetaMask first!");
      return;
    }
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);
  };

  const mintNFT = async () => {
    if (!tokenURI) return alert("Enter Token URI!");
    setMinting(true);

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ERC721ABI.abi, signer);

      const tx = await contract.mintTo(account, tokenURI);
      await tx.wait();
      alert("NFT Minted Successfully!");
      setTokenURI("");
    } catch (err) {
      console.error(err);
      alert("Minting failed");
    }
    setMinting(false);
  };

  return (
    <div>
      {!account ? (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <div>
          <p>Connected: {account}</p>
          <input
            type="text"
            placeholder="Token URI"
            value={tokenURI}
            onChange={(e) => setTokenURI(e.target.value)}
          />
          <button onClick={mintNFT} disabled={minting}>
            {minting ? "Minting..." : "Mint NFT"}
          </button>
        </div>
      )}
    </div>
  );
};

export default MintNFT;
