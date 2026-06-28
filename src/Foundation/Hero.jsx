import React, { useState, useEffect, useCallback } from "react";
import heroBanner from "../assets/images/foundation-hero.svg";
import heroBanner1 from "../assets/image 10.png";
import heroBanner2 from "../assets/FRame-316.png";
import heroBanner3 from "../assets/_MG_0160.jpeg";

import blur from "../assets/images/Blur.svg";

const slides = [
  {
    src: heroBanner,
    eyebrow: "PMF Foundation — Project 2029",
    title: (
      <>
        Building Nigeria's Next Generation Of{" "}
        <span className="text-primary">Football Stars</span>
      </>
    ),
    subtitle: "Developing Elite U-17 Talent for Global Competition",
    description:
      "By 2029, we will produce a world-class U-17 team capable of competing with top European clubs, building discipline, confidence, and future leaders.",
  },
  {
    src: heroBanner1,
    eyebrow: "PMF Foundation — Project 2029",
    title: (
      <>
        Building Nigeria's Next Generation Of{" "}
        <span className="text-primary">Football Stars</span>
      </>
    ),
    subtitle: "Developing Elite U-17 Talent for Global Competition",
    description:
      "By 2029, we will produce a world-class U-17 team capable of competing with top European clubs, building discipline, confidence, and future leaders.",
  },
  {
    src: heroBanner2,
    eyebrow: "PMF Foundation — Project 2029",
    title: (
      <>
        Building Nigeria's Next Generation Of{" "}
        <span className="text-primary">Football Stars</span>
      </>
    ),
    subtitle: "Developing Elite U-17 Talent for Global Competition",
    description:
      "By 2029, we will produce a world-class U-17 team capable of competing with top European clubs, building discipline, confidence, and future leaders.",
  },
  {
    src: heroBanner3,
    eyebrow: "PMF Foundation — Project 2029",
    title: (
      <>
        Building Nigeria's Next Generation Of{" "}
        <span className="text-primary">Football Stars</span>
      </>
    ),
    subtitle: "Developing Elite U-17 Talent for Global Competition",
    description:
      "By 2029, we will produce a world-class U-17 team capable of competing with top European clubs, building discipline, confidence, and future leaders.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <div className="relative min-[1000px]:mt-[100px] w-full min-[1350px]:h-[1053.98px] min-h-[calc(100vh-242px)] max-[1000px]:min-h-[calc(100vh-101px)] overflow-hidden">
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={s.src}
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        </div>
      ))}

      {/* Dots — top right */}
      <div className="absolute top-20 -translate-x-1/2  left-1/2  z-20 flex items-center gap-[10px]">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              i === current
                ? "w-[12px] h-[12px] bg-white"
                : "w-[10px] h-[10px] bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Content — bottom left */}
      <div className="relative z-10 h-full min-h-[inherit] flex items-end">
        <div className="max-w-[1440px] w-[90%] mx-auto pb-[44.37px] max-[1000px]:pb-8 max-[600px]:pb-6 max-[600px]:w-[92%]">
          <div className="max-w-[70%] max-[1000px]:max-w-full">
            <p className="uppercase text-[18px] leading-[1.6] font-bold tracking-[0.1em] text-white mb-2 max-[1000px]:text-[15px] max-[600px]:text-[13px] max-[480px]:text-[11px]">
              {slide.eyebrow}
            </p>

            <div className="flex flex-col gap-[19.19px] mb-[29.42px] max-[600px]:gap-3 max-[600px]:mb-5">
              <h3 className="font-bold uppercase text-[80px] leading-[82px] -tracking-[3%] text-white max-[1350px]:text-[64px] max-[1350px]:leading-[66px] max-[1000px]:text-[52px] max-[1000px]:leading-[54px] max-[768px]:text-[40px] max-[768px]:leading-[42px] max-[480px]:text-[32px] max-[480px]:leading-[34px] max-[360px]:text-[26px] max-[360px]:leading-[28px]">
                {slide.title}
              </h3>
              <div className="flex flex-col gap-1 min-[600px]:w-[80%] ">
                <p className="text-white font-inter text-[24px] leading-[40px] max-[600px]:text-[14px] max-[600px]:!leading-[20px]  max-[480px]:text-[13px]">
                  {slide.subtitle}
                </p>
                <p className="text-white/80 font-inter text-[16px] leading-[28px] max-[600px]:text-[10px] max-[600px]:leading-[20px]">
                  {slide.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 max-[480px]:flex-col max-[480px]:gap-3 max-[480px]:w-full">
              <button
                onClick={() =>
                  document
                    .getElementById("support")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="uppercase cursor-pointer rounded-[4px] bg-white h-[57px] w-[200px] text-[16px] leading-4 font-bold text-black max-[768px]:h-[48px] max-[768px]:w-[170px] max-[768px]:text-[14px] max-[480px]:w-full max-[480px]:h-[48px]"
              >
                Support Now
              </button>
              <a
                href="https://forms.gle/UR7TFfPjQE7CHjjM9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center uppercase cursor-pointer rounded-[4px] bg-primary h-[57px] w-[200px] text-[16px] leading-4 font-bold max-[768px]:h-[48px] max-[768px]:w-[170px] max-[768px]:text-[14px] max-[480px]:w-full max-[480px]:h-[48px]"
              >
                Become a Sponsor
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
