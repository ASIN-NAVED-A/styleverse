import { useState, useRef } from "react";
import products from "../data/products";

const SwipeCarousel = () => {
  const featured = products.filter(
    (p) => p.category === "Featured Dresses"
  );

  const [index, setIndex] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const startX = useRef(0);

  const handleStart = (x) => {
    if (isAnimating) return;
    startX.current = x;
  };

  const handleMove = (x) => {
    if (isAnimating) return;
    setOffsetX(x - startX.current);
  };

  const handleEnd = () => {
    if (isAnimating) return;

    if (offsetX < -80 && index < featured.length - 1) {
      // swipe left
      animateSlide(-1);
    } else if (offsetX > 80 && index > 0) {
      // swipe right
      animateSlide(1);
    } else {
      // snap back
      setOffsetX(0);
    }
  };

  const animateSlide = (direction) => {
    setIsAnimating(true);
    setOffsetX(direction * 300);

    setTimeout(() => {
      setIndex((prev) => prev - direction);
      setOffsetX(-direction * 300);

      requestAnimationFrame(() => {
        setOffsetX(0);
        setIsAnimating(false);
      });
    }, 250);
  };

  if (!featured.length) return null;

  return (
    <section
      style={{
        width: "100%",
        minHeight: "500px",
        background: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        touchAction: "pan-y",
        userSelect: "none"
      }}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => {
          if (e.buttons === 1) handleMove(e.clientX);
        }}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
    >
      <div
        style={{
          width: "320px",
          height: "440px",
          overflow: "hidden",
          position: "relative",
          pointerEvents: "none" 
        }}
        
      >
        <img
          src={featured[index].image}
          alt={featured[index].name}
          draggable={false}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            borderRadius: "12px",
            transform: `translateX(${offsetX}px)`,
            transition: isAnimating ? "transform 0.25s ease" : "none"
          }}
        />
      </div>
    </section>
  );
};

export default SwipeCarousel;
