import Image from "next/image";
import section3_1 from "@assets/images/Section3_1.png";
import section3_2 from "@assets/images/Section3_2.png";
import section3_3 from "@assets/images/Section3_3.png";
import section3_4 from "@assets/images/Section3_4.png";
import section3_5 from "@assets/images/Section3_5.png";

const Section3 = () => {
  return (
    <div className="w-full bg-white mt-6">
      <div className="Headline_3 text-Grey-900 mb-3 text-center">
        커피딜은 이렇게 사용해요
      </div>
      <Image src={section3_1} alt={"section3_1"} />
      <Image src={section3_2} alt={"section3_2"} />
      <Image src={section3_3} alt={"section3_3"} />
      <Image src={section3_4} alt={"section3_4"} />
      <Image src={section3_5} alt={"section3_5"} />
    </div>
  );
};

export default Section3;
