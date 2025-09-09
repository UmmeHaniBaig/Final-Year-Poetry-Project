export default function Shop({ addToCart }) {
  const products = [
    {
      id: 1,
      name: "Calligraphy Mug",
      price: 700,
      image: "/images/M.png",
    },
    {
      id: 2,
      name: "Stollers",
      price: 2000,
      image: "/images/D.png",
    },
    {
      id: 3,
      name: "Tote Bags",
      price: 1000,
      image: "/images/T.png",
    },
    {
      id: 4,
      name: "Frames",
      price: 1500,
      image: "/images/frames.jpg",
    },
    {
      id: 5,
      name: "Frames",
      price: 1500,
      image: "/images/sufi.jpg",
    },
     {
      id: 6,
      name: "Scarfs",
      price: 1500,
      image: "/images/stoller.jpg",
    },
  ];

  return (
    <div className="container">
      <h1>Our Trending Collection</h1>
      <div className="grid">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.name} className="product-img" />
            <h2>{product.name}</h2>
            <p>Rs {product.price}</p>
            <button className="btn" onClick={() => addToCart(product)}>
              🛒 Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
