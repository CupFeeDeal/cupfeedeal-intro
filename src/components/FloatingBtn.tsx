import Link from "next/link";

const FloatingBtn = () => {
  return (
    <Link
      href="https://www.cupfeedeal.xyz"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="fixed max-w-[440px] mx-auto px-5 bottom-20 w-full ">
        <div className="px-6 py-[14px] drop-shadow-lg bg-Main_Blue rounded-xl Body_1_bold text-white text-center animate-float">
          커피딜 바로가기
        </div>
      </div>
    </Link>
  );
};

export default FloatingBtn;
