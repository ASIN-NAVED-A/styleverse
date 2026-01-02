import { useEffect } from "react";
import { gsap } from "gsap";
import "./Navbar.css";


const Navbar = ({ homeRef, featuredRef, pantsRef, shirtsRef, shoesRef, accessoriesRef, watchesRef, lookbookRef }) => {
  useEffect(() => {
    gsap.from(".navbar", {
      scale: 0.5,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.7)"
    });
  }, []);



const scrollTo = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <button onClick={() => scrollTo(homeRef)}>Home</button>
      <button onClick={() => scrollTo(featuredRef)}>Featured</button>
      <button onClick={() => scrollTo(pantsRef)}>Pants</button>
      <button onClick={() => scrollTo(shirtsRef)}>Shirts</button>
      <button onClick={() => scrollTo(shoesRef)}>Shoes</button>
      <button onClick={() => scrollTo(accessoriesRef)}>Accessories</button>
      <button onClick={() => scrollTo(watchesRef)}>Watches</button>
      <button onClick={() => scrollTo(lookbookRef)}>Lookbook</button>
    </nav>
  );
};

export default Navbar;