import HomeAbout from "@/templates/HomeAbout";
import HomeBlog from "@/templates/HomeBlog";
import HomeCounters from "@/templates/HomeCounters";
import HomeServices from "@/templates/HomeServices";
import HomeSlider from "@/templates/HomeSlider";
import HomeStatement from "@/templates/HomeStatement";
import React from "react";

function Home() {
  return (
    <>
      <HomeSlider />
      <HomeCounters />
      <HomeAbout />
      <HomeServices />
      <HomeStatement />
      <HomeBlog />
    </>
  );
}

export default Home;
