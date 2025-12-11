import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import products from "../data/products";

gsap.registerPlugin(ScrollTrigger);

const SwipeCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const el = carouselRef.current;

    gsap.fromTo(
      el.querySelectorAll(".carousel-item"),
      {
        x: -100,
        opacity: 0,
        scale: 0.8
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true
        }
      }
    );
  }, []);

  const featured = products.filter(p => p.category === "Featured Dresses");

  return (
    <section className="swipe-carousel">
      <h2>Featured Dresses</h2>
      <div className="carousel-track" ref={carouselRef}>
        {featured.map(product => (
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