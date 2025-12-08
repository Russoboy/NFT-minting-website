import "./Marketplace.css";

export default function Marketplace() {
  const items = [
    { id: 1, name: "Cyber Ape #144", price: "0.82 ETH", creator: "ApeLabs", img: "https://i.ibb.co/0n5ZzFN/nft1.jpg" },
    { id: 2, name: "Galactic Skull", price: "1.20 ETH", creator: "NovaArts", img: "https://i.ibb.co/LJX6kZv/nft2.jpg" },
    { id: 3, name: "Neon Wave #22", price: "0.63 ETH", creator: "WaveStudio", img: "https://i.ibb.co/PDH2LZP/nft3.jpg" },
    { id: 4, name: "Astral Queen", price: "2.5 ETH", creator: "CosmicMint", img: "https://i.ibb.co/51d4Fs6/nft4.jpg" },
  ];

  return (
    <section className="marketplace">
      <h2 className="market-title">Marketplace</h2>
      <p className="market-desc">Browse trending NFTs listed by top creators.</p>

      <div className="market-grid">
        {items.map((item) => (
          <div key={item.id} className="market-card">
            <img src={item.img} alt={item.name} />

            <div className="market-info">
              <h3>{item.name}</h3>
              <p className="creator">By {item.creator}</p>

              <div className="bottom">
                <span className="price">{item.price}</span>
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
