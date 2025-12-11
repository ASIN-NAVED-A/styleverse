import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const PriceTag = ({ price }) => {
  const priceRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      priceRef.current,
      { innerText: 0 },
      {
        innerText: price,
        duration: 1,
        snap: { innerText: 1 },
        ease: "power1.out"
      }
    );
  }, [price]);

  return <div ref={priceRef} className="price-tag">₹{price}</div>;
};

export default PriceTag;