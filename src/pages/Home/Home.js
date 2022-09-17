import React from "react";
import ExploreItems from "../../components/Home/ExploreItems";
import ImageSlider from "../../components/Home/ImageSlider";
import Subscribe from "../../components/Home/Subscribe";

const Home = () => {
  return (
    <>
      <ImageSlider />
      <ExploreItems />
      <Subscribe />
    </>
  );
};

export default Home;
