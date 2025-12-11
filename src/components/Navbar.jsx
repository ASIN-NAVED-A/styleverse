import { useEffect } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  useEffect(() => {
    gsap.from(".navbar", {
      scale: 0.5,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.7)"
    });
  }, []);

  return (
    <nav className="navbar">
      {/* your nav content */}
    </nav>
  );
};

export default Navbar;