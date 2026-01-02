import { useRef } from 'react';

import Header from './components/Header';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import SwipeCarousel from './components/SwipeCarousel';
import FilterBar from './components/FilterBar';
import CategorySection from './components/CategorySection';
import LookbookGallery from './components/LookbookGallery';
import Footer from './components/Footer';

// These components are used inside others, not directly rendered here:
import ProductCard from './components/ProductCard';
import ProductDetails from './components/ProductDetails';
import RatingStars from './components/RatingStars';
import PriceTag from './components/PriceTag';
import SizeGuideModal from './components/SizeGuideModal';

function App() {

  const homeRef = useRef(null);
  const featuredRef = useRef(null);
  const pantsRef = useRef(null);
  const shirtsRef = useRef(null);
  const shoesRef = useRef(null);
  const accessoriesRef = useRef(null);
  const watchesRef = useRef(null);
  const lookbookRef = useRef(null);


  const carouselImages = [
    "/images/dress1.jpg",
    "/images/dress2.jpg",
    "/images/dress3.jpg",
    "/images/dress4.jpg",
    "/images/dress5.jpg",
    "/images/dress6.jpg",
  ];

  return (
    <>
      <Header />
      <Navbar
        homeRef={homeRef}
        featuredRef={featuredRef}
       
       
        pantsRef={pantsRef}
        shirtsRef={shirtsRef}
        shoesRef={shoesRef}
        accessoriesRef={accessoriesRef}
        watchesRef={watchesRef}
        lookbookRef={lookbookRef}
      />
  
      <SearchBar />

      <section ref={homeRef}>
        <SwipeCarousel images={carouselImages} />
      </section>

      <FilterBar />

      <section ref={featuredRef}>
        <CategorySection
          category="Featured Dresses"
          className="featured-dresses"
        />
      </section>

      <section ref={pantsRef}>
        <CategorySection category="Pants" className="pants" />
      </section>

      <section ref={shirtsRef}>
        <CategorySection category="Shirts" className="shirts" />
      </section>

      <section ref={shoesRef}>
        <CategorySection category="Shoes" className="shoes" />
      </section>
      <section ref={accessoriesRef}>
      <CategorySection category="Accessories" className="accessories" />
      </section>
      <section ref={watchesRef}>
      <CategorySection category="Watches" className="watches" />
      </section>

      <section ref={lookbookRef}>
        <LookbookGallery />
      </section>
      
      <Footer />
    </>
  );
}

export default App;
