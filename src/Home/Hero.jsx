import React from "react";
import heroBanner from "../assets/images/hero-banner.png";

const Hero = () => {
  return (
    <>
      <div
        className="w-100% h-[1053.98px] bg-cover bg-center bg-no-repeat flex items-end"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="w-[90%] mx-auto flex items-end justify-between pb-[44.37px]">
          <div className="max-w-[70%]">
            <div className="bg-primary flex items-center gap-[12.92px] w-fit h-10 rounded-[4px] px-[22.03px] mb-[21px]">
              <div className="w-[8.16px] h-[8.16px] rounded-full bg-black" />
              <p className="text-[16px] font-medium tracking-[9%]">
                Africa's Leading Grassroots Academy
              </p>
            </div>
            <div className="flex flex-col gap-[19.19px] mb-[29.42px]">
              <h3 className="font-bold uppercase text-[92px] leading-[92px] -tracking-[3%] text-white">
                From the <span className="text-primary">Local</span> Pitch to
                the <span className="text-primary">Global</span> Stage
              </h3>
              <p className="text-xl font-medium text-white">
                We deliver UEFA-standard coaching and create pathways that help
                develop talent into a career.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="uppercase border border-white text-white cursor-pointer rounded-[4px] bg-transparent h-[57px] w-[200px] text-[16px] leading-4 font-bold underline">
                Explore Programs
              </button>
              <button className="uppercase cursor-pointer rounded-[4px] bg-primary h-[57px] w-[200px] text-[16px] leading-4 font-bold underline">
                Join 2026 Intake
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between gap-[19.82px]">
            <div className="flex flex-col items-center font-bebas">
              <p className="text-[75.9px] font-bold text-white -tracking-[4%] leading-[60px]">
                1,000+
              </p>
              <p className="text-[13.82px] leading-6 tracking-[1%] text-white">
                Children Participated
              </p>
            </div>
            <div className="flex flex-col items-center font-bebas">
              <p className="text-[75.9px] font-bold text-white -tracking-[4%] leading-[60px]">
                30
              </p>
              <p className="text-[13.82px] leading-6 tracking-[1%] text-white">
                30 Schools in Network
              </p>
            </div>{" "}
            <div className="flex flex-col items-center font-bebas">
              <p className="text-[75.9px] font-bold text-white -tracking-[4%] leading-[60px]">
                50+
              </p>
              <p className="text-[13.82px] leading-6 tracking-[1%] text-white">
                Coaches Trained{" "}
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="w-full bg-primary h-[80px] flex justify-center items-center">
        <div className="max-w-[1440px] mx-auto w-[90%] flex items-center justify-between gap-8">
          <p className="uppercase text-[20px] leading-4 text-[#121212] tracking-[1%]">
            ⚽ Grassroots Development
          </p>
          <p className="uppercase text-[20px] leading-4 text-[#121212] tracking-[1%]">
            🏆 Competitive Tournaments
          </p>
          <p className="uppercase text-[20px] leading-4 text-[#121212] tracking-[1%]">
            🎓 Coach Education
          </p>{" "}
          <p className="uppercase text-[20px] leading-4 text-[#121212] tracking-[1%]">
            🌍 Pan-African Vision
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
