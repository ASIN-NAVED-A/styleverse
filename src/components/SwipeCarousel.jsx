import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import products from "../data/products";

gsap.registerPlugin(ScrollTrigger);

const SwipeCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const items = carouselRef.current.querySelectorAll(".carousel-item");

    items.forEach((item) => {
      gsap.fromTo(
        item,
        {
          x: 100,
          opacity: 0,
          scale: 0.9
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 70%",
            end: "top 30%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  const featured = products.filter(
    (p) => p.category === "Featured Dresses"
  );

  return (
    <section className="swipe-carousel">
      <h2>Featured Dresses</h2>

      <div className="carousel-track" ref={carouselRef}>
        {featured.map((product) => (
          <div key={product.id} className="carousel-item">
            <div className="image-wrapper">
              <img src={product.image} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SwipeCarousel;
