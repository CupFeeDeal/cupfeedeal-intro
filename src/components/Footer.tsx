"use client";

import { LogoContact, LogoText } from "@assets/icons";

const Footer = () => {
  const openKakaoChat = () => {
    if (typeof window !== "undefined") {
      window.open(
        `https://pf.kakao.com/${process.env.NEXT_PUBLIC_KAKAO_CHANNEL_ID}/chat`,
        "_blank"
      );
    }
  };
  return (
    <div className="w-full bg-white px-5 py-6">
      <LogoText className="w-24" />

      <section className="space-y-2.5">
        <p className="Caption_bold">사업자 정보</p>
        <p className="Caption_med leading-5">
          (주)리아랩스
          <br />
          Copyright(c) 2024 리아랩스 All Rights Reserved.
          <br />
          통신판매업 신고번호 : 2024-서울서대문-1050
          <br />
          사업자등록번호 : 452-88-03211&ensp;‖&ensp;대표자 : 서다원
        </p>
        <p className="Caption_bold">
          호스팅 제공자&ensp;<span className="Caption_med">Vercel Inc.</span>
        </p>
      </section>

      <div className="w-12 flex flex-col justify-center items-center mt-3">
        <button
          className="mb-[2px] w-12 h-12 rounded-full grid place-items-center"
          onClick={openKakaoChat}
        >
          <LogoContact />
        </button>
        <div className="text-center Caption_med text-Main_Blue">kakao</div>
      </div>
    </div>
  );
};

export default Footer;
