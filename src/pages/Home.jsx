import React from "react";
import Hero from "../components/Hero/Hero";
import TopRatedProducts from "../components/TopRatedProducts/TopRatedProducts";
import FeaturedCategories from "../components/FeaturedCat/FeaturedCat";
import NewArrivals from '../components/NewArrivals/NewArrivals';
import './Home.css';

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <div className="home-section">
        <TopRatedProducts />
      </div>
      <div className="home-section">
        <NewArrivals />
      </div>
      <div className="home-section">
        <FeaturedCategories />
      </div>
    </main>
  );
};

export default Home;