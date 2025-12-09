import MintForm from "../components/MintForm";
import "./MintPage.css";

export default function MintPage() {
  return (
    <div className="mint-page">
      <div className="mint-container">
        <h1 className="mint-title">Mint Your Exclusive NFT</h1>
        <p className="mint-sub">
          Upload your metadata URL and mint your NFT instantly on the blockchain.
        </p>

        <MintForm />
      </div>
    </div>
  );
}
