const Section2 = () => {
  return (
    <div className="flex flex-col w-full px-5 py-16 bg-white justify-center items-center gap-4">
      <div className=" Headline_3 text-Grey-900">커피딜은 이런 서비스예요!</div>
      <video className="rounded-md" width="100%" autoPlay loop playsInline>
        <source src="/video/cupfeedeal_video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Section2;
