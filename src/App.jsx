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
  return (
    <>
      <Header />
      <Navbar />
      <SearchBar />
      <SwipeCarousel />
      <FilterBar />

      {/* Product categories with category-based styling */}
      <CategorySection category="Featured Dresses" className="featured-dresses" />
      <CategorySection category="Pants" className="pants" />
      <CategorySection category="Shirts" className="shirts" />
      <CategorySection category="Shoes" className="shoes" />
      <CategorySection category="Accessories" className="accessories" />
      <CategorySection category="Watches" className="watches" />

      <LookbookGallery />
      <Footer />
    </>
  );
}

export default App;