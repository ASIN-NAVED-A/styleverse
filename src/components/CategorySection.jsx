import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductCard from "./ProductCard";
import ProductDetails from "./ProductDetails";
import products from "../data/products";

gsap.registerPlugin(ScrollTrigger);

const CategorySection = ({ category, featured }) => {
  const sectionRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter(p => p.category === category);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      el.querySelectorAll(".product-card"),
      {
        y: featured ? 150 : 100,
        scale: featured ? 0.7 : 0.9,
        opacity: 0,
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, [featured]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedProduct ? "hidden" : "auto";
  }, [selectedProduct]);

  return (
    <section
      ref={sectionRef}
      className={`category-section ${featured ? "featured" : ""} ${category.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <h2>{category}</h2>
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};

export default CategorySection; 