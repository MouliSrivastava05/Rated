import React from "react";
import Hero from "../components/Hero/Hero";
import TopRatedProducts from "../components/TopRatedProducts/TopRatedProducts";
import FeaturedCategories from "../components/FeaturedCat/FeaturedCat";
import NewArrivals from '../components/NewArrivals/NewArrivals';

const Home = () => {
  return (
    <>
      <Hero />
      <TopRatedProducts />
      <NewArrivals />
      <FeaturedCategories />
    </>
  );
};

export default Home;