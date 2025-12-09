import { useState } from "react";
import "./MintForm.css";

export default function MintForm() {
  const [uri, setUri] = useState("");

  const handleMint = (e) => {
    e.preventDefault();

    if (!uri.trim()) {
      alert("Please enter a valid metadata URI.");
      return;
    }

    // temporary placeholder until blockchain integration
    alert("Minting NFT with URI: " + uri);
  };

  return (
    <form className="mint-form" onSubmit={handleMint}>
      <input
        type="text"
        placeholder="Enter NFT Metadata URI"
        value={uri}
        onChange={(e) => setUri(e.target.value)}
        required
      />

      <button type="submit">Mint NFT</button>
    </form>
  );
}
