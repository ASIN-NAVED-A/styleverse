import { useEffect } from "react";
import { gsap } from "gsap";

const ProductDetails = ({ product, onClose }) => {
  useEffect(() => {
    gsap.from(".product-details-content", {
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    });
  }, []);

  return (
    <div className="product-details-modal">
      <div className="product-details-content">
        <button className="product-details-close" onClick={onClose}>×</button>
        <div className="product-details-body">
          <div className="image-wrapper">
            <img src={product.image} alt={product.name} />
          </div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <div className="price">₹{product.price}</div>
          <div className="rating">⭐ {product.rating}</div>
          <div className="actions">
            <button>Add to Cart</button>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;