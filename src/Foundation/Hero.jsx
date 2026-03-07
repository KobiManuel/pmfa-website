import React from "react";
import heroBanner from "../assets/images/foundation-banner.png";

const Hero = () => {
  return (
    <>
      <div
        className="w-100% h-[1053.98px] bg-cover bg-center bg-no-repeat flex items-end"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="w-[90%] mx-auto flex items-end justify-between pb-[44.37px]">
          <div className="max-w-[70%]">
            <p className="uppercase text-[21.19px] leading-[38.92px] font-bold tracking-[16%] text-white">
              PMF Foundation
            </p>
            <div className="flex flex-col gap-[19.19px] mb-[29.42px]">
              <h3 className="font-bold uppercase text-[92px] leading-[92px] -tracking-[3%] text-white">
                Help Us <span className="text-primary">Change Lives</span>{" "}
                Through Football
              </h3>
              <p className="text-xl font-medium text-white">
                The PMF Foundation is the charitable arm of Play More Football.
                Every donation directly funds training sessions, tournament
                participation, coaching education, and safe spaces for children
                across Nigeria's most underserved communities.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="uppercase cursor-pointer rounded-[4px] bg-white h-[57px] w-[200px] text-[16px] leading-4 font-bold text-black">
                Donate Now{" "}
              </button>
              <button className="uppercase cursor-pointer rounded-[4px] bg-primary h-[57px] w-[200px] text-[16px] leading-4 font-bold">
                Become a Sponsor{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
