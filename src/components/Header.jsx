import { useEffect } from "react";
import { gsap } from "gsap";

const Header = () => {
  useEffect(() => {
    gsap.from(".header", {
      y: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out"
    });
  }, []);

  return (
    <header className="header">
      <h1>STYLEVERSE</h1>
      <p>Your fashion destination</p>
    </header>
  );
};

export default Header;