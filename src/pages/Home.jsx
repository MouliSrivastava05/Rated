import React from "react";
import Hero from "../components/Hero/Hero";
import TopRatedProducts from "../components/TopRatedProducts/TopRatedProducts";
import FeaturedCategories from "../components/FeaturedCat/FeaturedCat";

const Home = () => {
  return (
    <>
      <Hero />
      <TopRatedProducts />
      <FeaturedCategories />
    </>
  );
};

export default Home;