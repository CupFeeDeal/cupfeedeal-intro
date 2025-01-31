"use client";

import {
  Section1,
  Section2,
  Section3,
  Section4,
} from "@components/sections/Sections";
import Footer from "@components/Footer";
import FloatingBtn from "@components/FloatingBtn";

const Home = () => {
  return (
    <>
      <div className="w-full flex flex-col bg-white">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
        <div className="h-24" />
      </div>
      <FloatingBtn />
    </>
  );
};

export default Home;
