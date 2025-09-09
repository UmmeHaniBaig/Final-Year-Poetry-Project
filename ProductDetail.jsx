import { useParams } from "react-router-dom";

export default function ProductDetail({ addToCart }) {
  const { id } = useParams();

  const product = {
    id,
    name: id === "1" ? "Calligraphy Mug" : id === "2" ? "Urdu Frame" : "Notebook",
    price: id === "1" ? 1200 : id === "2" ? 2500 : 800,
    image: "https://picsum.photos/300?random=" + id,
  };

  return (
    <div className="container">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>Rs {product.price}</p>
      <button className="btn" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}
