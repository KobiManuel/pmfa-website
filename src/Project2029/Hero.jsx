import React, { useState, useEffect, useCallback } from "react";
import heroBanner from "../assets/images/image 11.svg";
import heroBanner1 from "../assets/image 10.png";
import heroBanner2 from "../assets/FRame-316.png";
import heroBanner3 from "../assets/_MG_0160.jpeg";

const slides = [
  {
    src: heroBanner,
    eyebrow: "The Vision",
    title: (
      <>
        Project <span className="text-primary">2029</span>
      </>
    ),
    subtitle:
      "A bold roadmap to transform grassroots football across Nigeria, reaching 10,000+ children by 2029.",
  },
  {
    src: heroBanner1,
    eyebrow: "The Vision",
    title: (
      <>
        Project <span className="text-primary">2029</span>
      </>
    ),
    subtitle:
      "A bold roadmap to transform grassroots football across Nigeria, reaching 10,000+ children by 2029.",
  },
  {
    src: heroBanner2,
    eyebrow: "The Vision",
    title: (
      <>
        Project <span className="text-primary">2029</span>
      </>
    ),
    subtitle:
      "A bold roadmap to transform grassroots football across Nigeria, reaching 10,000+ children by 2029.",
  },
  {
    src: heroBanner3,
    eyebrow: "The Vision",
    title: (
      <>
        Project <span className="text-primary">2029</span>
      </>
    ),
    subtitle:
      "A bold roadmap to transform grassroots football across Nigeria, reaching 10,000+ children by 2029.",
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
    <div className="min-[1000px]:mt-[100px]">
      {/* ── Slider ── */}
      <div className="relative w-full min-[1350px]:h-[1053.98px] min-h-[calc(100vh-242px)] max-[1000px]:min-h-[calc(100vh-101px)] overflow-hidden">
        {slides.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <img
              src={s.src}
              alt=""
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          </div>
        ))}

        <div className="relative z-10 h-full min-h-[inherit] flex flex-col items-center justify-end pb-[60px] text-center max-[600px]:pb-10 max-[480px]:pb-8">
          <div className="w-[90%]  flex flex-col items-center max-[480px]:gap-3 max-[600px]:w-[92%]">
            <p className="uppercase tracking-[16%] font-bold text-white text-[29.19px] min-[100px]:leading-[38.92px] max-[1000px]:text-[18px] max-[600px]:text-[13px] max-[480px]:text-[11px]">
              {slide.eyebrow}
            </p>
            <h1 className="font-bold uppercase text-white text-[160px] leading-[180px] -tracking-[2%] max-[1350px]:text-[100px] max-[1350px]:leading-[100px] max-[1000px]:text-[52px] max-[1000px]:leading-[52px] max-[768px]:text-[40px] max-[768px]:leading-[42px] max-[480px]:text-[32px] max-[480px]:leading-[34px] max-[360px]:text-[26px] max-[360px]:leading-[28px]">
              {slide.title}
            </h1>
            <p className="font-inter max-w-[645px] text-white text-[24px] min-[1000px]:leading-[40px] font-medium max-[1000px]:text-[18px] max-[600px]:text-[16px] max-[480px]:text-[13px] max-[480px]:leading-[20px]">
              {slide.subtitle}
            </p>
            <div className="flex items-center gap-[10px] mt-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    i === current
                      ? "w-[10px] h-[10px] bg-white"
                      : "w-[8px] h-[8px] bg-white/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Executive Summary ── */}
      <div className="bg-primary w-full py-[60px] max-[1000px]:py-10 max-[480px]:py-8">
        <div className="max-w-[1440px] mx-auto w-[90%] max-[600px]:w-[92%] flex gap-[48px] items-start max-[900px]:flex-col max-[900px]:gap-8">
          {/* Left */}
          <div className="flex-1 flex flex-col gap-5 max-[480px]:gap-4">
            <p className="uppercase font-bold tracking-[0.16em] text-black text-[14px] leading-[1.4] max-[600px]:text-[12px]">
              Executive Summary
            </p>
            <h2 className="font-bold uppercase text-black text-[44px] leading-[46px] -tracking-[1%] max-[1350px]:text-[36px] max-[1350px]:leading-[38px] max-[1000px]:text-[30px] max-[1000px]:leading-[32px] max-[480px]:text-[24px] max-[480px]:leading-[26px]">
              What Is Project 2029?
            </h2>
            <p className="text-black text-[14px] leading-[24px] font-inter max-[480px]:text-[13px] max-[480px]:leading-[22px]">
              Project 2029 is a high-impact youth football development
              initiative designed to identify, train, and elevate Nigeria's most
              promising young players.
            </p>
            <p className="text-black text-[14px] leading-[24px] font-inter max-[480px]:text-[13px] max-[480px]:leading-[22px]">
              It is not just about football. It is about building discipline,
              confidence, and future leaders.
            </p>
            <ul className="flex flex-col gap-2 mt-1">
              {[
                "Grassroots scouting across 3 regions",
                "Structured elite training program",
                "Media visibility, major trophy format",
                "National competition & talent showcases",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-black text-[13px] leading-[22px] font-inter max-[480px]:text-[12px]"
                >
                  <span className="mt-[6px] w-[5px] h-[5px] rounded-full bg-black shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — two dark cards */}
          <div className="flex-1 flex flex-col gap-4 max-[900px]:w-full">
            {/* Card 1 — 2029 goal */}
            <div className="bg-[#1A1A1A] rounded-[8px] px-8 py-7 flex flex-col gap-3 max-[480px]:px-5 max-[480px]:py-5">
              <p className="text-white text-center font-bold text-[52px] leading-[52px] -tracking-[2%] max-[1350px]:text-[44px] max-[1000px]:text-[36px] max-[480px]:text-[30px]">
                2029
              </p>
              <p className="text-white text-center text-[13px] leading-[22px] font-inter max-[480px]:text-[12px]">
                <span className="font-bold">Our goal is clear:</span> by 2029,
                we will produce a world-class U-17 team capable of competing
                with top European clubs.
              </p>
            </div>

            {/* Card 2 — The Opportunity */}
            <div className="bg-[#1A1A1A] rounded-[8px] px-8 py-7 flex flex-col gap-3 max-[480px]:px-5 max-[480px]:py-5">
              <p className="uppercase font-bold tracking-[0.16em] text-white text-[12px] leading-[1.4]">
                The Opportunity
              </p>
              <p className="text-white text-[13px] leading-[22px] font-inter max-[480px]:text-[12px]">
                Nigeria is filled with raw football talent but lacks structured
                development pathways, early exposure to elite training, and
                consistent scouting systems.
              </p>
              <p className="text-white  font-bold text-[13px] leading-[22px] font-inter max-[480px]:text-[12px]">
                Project 2029 solves this gap, building a national pipeline of
                talent, starting from ages 12–13.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
