import "./Collections.css";

export default function Collections() {
  const collections = [
    { id: 1, title: "Cyber Apes Series", items: "120 items", img: "https://i.ibb.co/q7f5P8f/coll1.jpg" },
    { id: 2, title: "Mystic Queens", items: "90 items", img: "https://i.ibb.co/DVgD6Fj/coll2.jpg" },
    { id: 3, title: "Neon Universe", items: "150 items", img: "https://i.ibb.co/rHszKZX/coll3.jpg" },
    { id: 4, title: "Pixel Lords", items: "60 items", img: "https://i.ibb.co/LhWQ7t1/coll4.jpg" },
  ];

  return (
    <section className="collections">
      <h2 className="coll-title">Top Collections</h2>
      <p className="coll-desc">Explore curated collections from top creators.</p>

      <div className="coll-grid">
        {collections.map((col) => (
          <div key={col.id} className="coll-card">
            <img src={col.img} alt={col.title} />

            <div className="coll-info">
              <h3>{col.title}</h3>
              <p>{col.items}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
