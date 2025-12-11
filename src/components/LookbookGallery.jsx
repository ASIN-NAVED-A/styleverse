import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LookbookGallery = () => {
  useEffect(() => {
    gsap.from(".gallery-item", {
      scrollTrigger: {
        trigger: ".gallery-item",
        start: "top 90%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
        scrub: true,
      },
      y: 100,
      scale: 0.8,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      stagger: 0.2,
    });
  }, []);

  return (
    <section className="gallery">
      <h2 className="gallery-title">Styleverse Lookbook</h2>
      <div className="gallery-grid">
        <img className="gallery-item" src="/images/look1.jpg" alt="Look 1" />
        <img className="gallery-item" src="/images/look2.jpg" alt="Look 2" />
        <img className="gallery-item" src="/images/look3.jpg" alt="Look 3" />
      </div>
    </section>
  );
};

export default LookbookGallery;