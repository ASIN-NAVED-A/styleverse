import { useEffect } from "react";
import { gsap } from "gsap";

const SizeGuideModal = ({ onClose }) => {
  useEffect(() => {
    gsap.from(".size-modal", {
      scale: 0.5,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    });
  }, []);

  return (
    <div className="size-modal">
      {/* modal content */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default SizeGuideModal;