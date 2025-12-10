import { useState } from "react";
import { ethers } from "ethers";
import "./MintNFT.css";
import ERC721Abi from "../abi/ERC721.json";  
// CHanged above


export default function MintNFT({ contractAddress }) {
  const [wallet, setWallet] = useState(null);
  const [minting, setMinting] = useState(false);
  const [tokenURI, setTokenURI] = useState("");
  const [status, setStatus] = useState("");

  // Connect Wallet
  async function connectWallet() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setWallet(accounts[0]);
        setStatus(`Connected: ${accounts[0].slice(0,6)}...${accounts[0].slice(-4)}`);
      } catch (err) {
        console.error(err);
        setStatus("Wallet connection failed");
      }
    } else {
      setStatus("Please install MetaMask");
    }
  }

  // Mint NFT
  async function mintNFT() {
    if (!wallet || !tokenURI) {
      setStatus("Connect wallet and enter token URI");
      return;
    }

    setMinting(true);
    setStatus("Minting NFT...");

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, ERC721Abi, signer);

      const tx = await contract.mintTo(wallet, tokenURI);
      await tx.wait();

      setStatus("🎉 NFT Minted Successfully!");
      setTokenURI("");
    } catch (err) {
      console.error(err);
      setStatus("Minting failed. Check console.");
    }

    setMinting(false);
  }

  return (
    <section className="mint-section">
      <div className="mint-container">
        <h2 className="mint-title">Mint Your NFT</h2>
        <p className="mint-desc">
          Connect your wallet, enter the metadata URI, and mint your exclusive NFT instantly on the blockchain.
        </p>

        <div className="mint-controls">
          {!wallet && (
            <button className="wallet-btn" onClick={connectWallet}>
              Connect Wallet
            </button>
          )}
          {wallet && <p className="wallet-address">Connected: {wallet.slice(0,6)}...{wallet.slice(-4)}</p>}

          <input
            type="text"
            placeholder="Enter Metadata URI"
            value={tokenURI}
            onChange={(e) => setTokenURI(e.target.value)}
            disabled={minting}
          />

          <button className="mint-btn" onClick={mintNFT} disabled={minting}>
            {minting ? "Minting..." : "Mint NFT"}
          </button>

          {status && <p className="status">{status}</p>}
        </div>
      </div>
    </section>
  );
}
