import Header from "./Header/Header";
import Carousel from "./Carousel/Carousel";
import ProductCard from "./ProductCard/ProductCard";
import Footer from "../components/Footer/Footer";
// import Home from "./components/Home";
import ProductsPage from "./ProductsPage/ProductsPage";

const Home = () => {
  const carouselImages = ["banner1.jpg", "banner2.jpg", "banner3.jpg"];
  const products = [
    { id: 1, name: "Product 1", price: 19.99, image: "product1.jpg" },
    // ... more products
  ];

  return (
    <div className="home">
      <Header />
      <Carousel images={carouselImages} />
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;