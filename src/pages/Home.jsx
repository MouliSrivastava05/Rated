import React from "react";
import Hero from "../components/Hero/Hero";
import NewArrivals from '../components/NewArrivals/NewArrivals';
import CollectionBanner from '../components/CollectionBanner/CollectionBanner';
import CuratedPicks from "../components/CuratedPicks/CuratedPicks";
import FeaturedCategories from "../components/FeaturedCat/FeaturedCat";
import './Home.css';

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <NewArrivals />
      <CollectionBanner />
      <CuratedPicks />
      <FeaturedCategories />
    </main>
  );
};

export default Home;
