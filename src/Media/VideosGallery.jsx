import React from "react";
import video1 from "../assets/Video 1.png";
import video2 from "../assets/Video 2.png";

const VideosGallery = () => {
  return (
    <section className="bg-[#F6F6F6] py-8 max-[480px]:py-6">
      <div className="max-w-[1440px] mx-auto w-[90%] flex flex-col gap-3 max-[600px]:w-[92%]">
        <p className="font-bold text-[29.19px] leading-[38.92px] tracking-[0.16em] text-black uppercase max-[1000px]:text-[24px] max-[600px]:text-[18px] max-[480px]:text-[14px]">
          Videos Gallery
        </p>
        <div className="flex flex-col gap-[34px] max-[480px]:gap-6">
          <div className="relative w-full rounded-[8px] overflow-hidden">
            <img
              src={video1}
              alt="Video 1"
              className="w-full h-[604px] object-cover max-[1000px]:h-[300px] max-[768px]:h-[240px] max-[480px]:h-[180px]"
            />
          </div>
          <div className="relative w-full rounded-[8px] overflow-hidden">
            <img
              src={video2}
              alt="Video 2"
              className="w-full h-[604px] object-cover max-[1000px]:h-[300px] max-[768px]:h-[240px] max-[480px]:h-[180px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideosGallery;
