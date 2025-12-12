import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import products from "../data/products";

gsap.registerPlugin(Draggable);

const SwipeCarousel = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const slides = track.querySelectorAll(".carousel-item");
    const totalSlides = slides.length;

    let slideWidth = track.offsetWidth;

    // Arrange slides horizontally
    slides.forEach((slide, index) => {
      slide.style.left = `${index * 100}%`;
    });

    // Draggable logic for swipe
    Draggable.create(track, {
      type: "x",
      bounds: {
        minX: -(slideWidth * (totalSlides - 1)),
        maxX: 0
      },
      inertia: true,
      snap: (value) => {
        return Math.round(value / slideWidth) * slideWidth;
      }
    });

    // Update size on resize
    const handleResize = () => {
      slideWidth = track.offsetWidth;
      slides.forEach((slide, index) => {
        slide.style.left = `${index * 100}%`;
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const featured = products.filter(p => p.category === "Featured Dresses");

  return (
    <section className="swipe-carousel">
      <h2>Featured Dresses</h2>

      <div className="carousel-container">
        <div className="carousel-track" ref={trackRef}>
          {featured.map((product) => (
            <div key={product.id} className="carousel-item">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SwipeCarousel;
