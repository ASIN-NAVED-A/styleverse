import React, { useEffect, useRef } from "react";

const ProductCard = ({ product, onClick }) => {
  const cardRef = useRef(null);

  // Create a class based on category (e.g. "pants", "shoes")
  const categoryClass = product.category.replace(/\s+/g, '-').toLowerCase();

  useEffect(() => {
    const card = cardRef.current;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 5;
      const rotateY = ((x - centerX) / centerX) * -5;

      card.style.transform = `translateY(-20px) scale(1.1) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const resetTransform = () => {
      card.style.transform = "translateY(0) scale(1)";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", resetTransform);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", resetTransform);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`product-card carousel-item ${categoryClass}`}
      onClick={onClick}
    >
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductCard;