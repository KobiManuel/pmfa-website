import React, { useEffect, useRef, useState } from "react";
import { Icon } from "../components/Icon";
import Video1 from "../assets/Video 1.png";
import videoSrc from "../assets/videos/c19cf948-81ad-4778-b494-4f49093efe99.mp4";

const AboutPMFF = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.play();
    }
  }, [isPlaying]);

  return (
    <section className="w-full bg-[#F6F6F6] py-[80px] max-[1000px]:py-14 max-[480px]:py-10">
      <div className="max-w-[1440px] mx-auto w-[90%] max-[600px]:w-[92%] flex gap-[64px] items-stretch max-[1000px]:flex-col max-[1000px]:gap-10">
        {/* Left ,  text content */}
        <div className="flex-1 flex flex-col gap-6 max-[480px]:gap-5">
          <div className="flex flex-col gap-3">
            <p className="uppercase font-bold tracking-[0.16em] text-[#6E6E6E] text-[14px] leading-[1.4] max-[600px]:text-[12px]">
              Play More Football Foundation
            </p>
            <h2 className="font-bold uppercase text-[52px] leading-[52px] -tracking-[1%] text-text-color max-[1350px]:text-[44px] max-[1350px]:leading-[44px] max-[1000px]:text-[36px] max-[1000px]:leading-[36px] max-[480px]:text-[28px] max-[480px]:leading-[30px]">
              About <span className="text-primary">PMFF</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4 font-inter text-[15px] leading-[26px] text-text-color max-[480px]:text-[13px] max-[480px]:leading-[22px]">
            <p>
              The{" "}
              <span className="font-bold">
                Play More Football Foundation (PMFF)
              </span>{" "}
              is a registered non-profit organisation with the Corporate Affairs
              Commission (CAC), under registration number{" "}
              <span className="font-bold">RC8858554.</span>
            </p>
            <p>
              We are committed to transforming lives through the power of
              football by nurturing young talent at the grassroots level and
              creating opportunities for vulnerable children across Nigeria.
            </p>
            <p>
              In 2024 we established the PLAY MORE FOOTBALL PMFF for young kids
              in the age range of 12 to 15 years in the heart of Ajegunle, home
              to football greats including{" "}
              <span className="font-bold">
                Victor Osimhen, Taribo West, Emmanuel Amuneke, Odion Ighalo and
                Samson Siasia.
              </span>
            </p>
          </div>

          {/* Registration card */}
          <div className="border border-[#D5D5D5] rounded-[24px] bg-white justify-center items-center px-6 py-5 flex flex-col">
            <p className="font-inter text-[16px] leading-[16px] font-bold  -tracking-[3%] text-[#121212]">
              CAC Registered Non-Profit
            </p>
            <p className="font-bebas leading-[80px] font-bold text-[80px] text-black max-[480px]:text-[32px] max-[480px]:leading-[48px]">
              RC8856554
            </p>
          </div>

          {/* Mission card */}
          <div className="border border-[#D5D5D5] rounded-[24px] bg-white px-6 py-5 flex flex-col gap-2">
            <p className="text-[16px] leading-[16px] font-medium uppercase text-[#121212]">
              Our Mission
            </p>
            <p className="font-inter text-[14px] -tracking-[1%] leading-[24px] text-text-color max-[480px]:text-[12px] max-[480px]:leading-[20px]">
              To promote grassroots football development while providing
              underserved children with access to structured training,
              mentorship, and educational support. We believe that every child
              deserves the opportunity to dream, develop, and succeed both on
              and off the pitch.
            </p>
          </div>
        </div>

        {/* Right ,  video thumbnail */}
        <div className="flex-1 self-stretch max-[1000px]:w-full max-[1000px]:h-[400px] max-[600px]:h-[280px] max-[480px]:h-[220px]">
          <div className="relative w-full h-full rounded-[12px] overflow-hidden min-h-[500px] max-[1000px]:min-h-0">
            {isPlaying ? (
              <video
                ref={videoRef}
                src={videoSrc}
                controls
                playsInline
                className="w-full h-full object-cover"
                onEnded={() => setIsPlaying(false)}
              />
            ) : (
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                className="block w-full h-full cursor-pointer"
                aria-label="Play PMFF in action"
              >
                <img
                  src={Video1}
                  alt="PMFF in action"
                  className="w-full h-full object-cover"
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPMFF;
