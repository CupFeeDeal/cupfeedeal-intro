import Section1 from "@components/Section1";
import Section2 from "@components/Section2";
import Section4 from "@components/Section4";
import Section3 from "@components/Section3";
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
      </div>
      <FloatingBtn />
    </>
  );
};

export default Home;
