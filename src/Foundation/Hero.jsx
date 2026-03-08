import React from "react";
import heroBanner from "../assets/images/foundation-banner.png";

const Hero = () => {
  return (
    <div
      className="w-100% min-[1350px]:h-[1053.98px] bg-cover bg-center bg-no-repeat flex items-end min-h-[calc(100vh-242px)] max-[1000px]:min-h-[calc(100vh-101px)]"
      style={{ backgroundImage: `url(${heroBanner})` }}
    >
      <div className="max-w-[1440px] w-[90%] mx-auto flex items-end justify-between pb-[44.37px] max-[1000px]:pb-8 max-[600px]:pb-6 max-[600px]:w-[92%]">
        <div className="max-w-[70%] max-[1000px]:max-w-full max-[1000px]:w-full">
          <p className="uppercase text-[21.19px] leading-[38.92px] font-bold tracking-[16%] text-white max-[1350px]:text-[18px] max-[1000px]:text-[16px] max-[600px]:text-[14px] max-[600px]:leading-[24px] max-[480px]:text-[12px]">
            PMF Foundation
          </p>
          <div className="flex flex-col gap-[19.19px] mb-[29.42px] max-[600px]:gap-3 max-[600px]:mb-5">
            <h3 className="font-bold uppercase text-[92px] leading-[92px] -tracking-[3%] text-white max-[1350px]:text-[70px] max-[1350px]:leading-[70px] max-[1000px]:text-[56px] max-[1000px]:leading-[56px] max-[768px]:text-[44px] max-[768px]:leading-[44px] max-[480px]:text-[34px] max-[480px]:leading-[36px] max-[360px]:text-[28px] max-[360px]:leading-[30px]">
              Help Us <span className="text-primary">Change Lives</span> Through
              Football
            </h3>
            <p className="text-xl font-medium text-white max-[1000px]:text-[17px] max-[600px]:text-[14px] max-[480px]:text-[13px] max-[480px]:leading-[1.5]">
              The PMF Foundation is the charitable arm of Play More Football.
              Every donation directly funds training sessions, tournament
              participation, coaching education, and safe spaces for children
              across Nigeria's most underserved communities.
            </p>
          </div>
          <div className="flex items-center gap-4 max-[480px]:flex-col max-[480px]:gap-3 max-[480px]:w-full">
            <button className="uppercase cursor-pointer rounded-[4px] bg-white h-[57px] w-[200px] text-[16px] leading-4 font-bold text-black max-[768px]:h-[48px] max-[768px]:w-[170px] max-[768px]:text-[14px] max-[480px]:w-full max-[480px]:h-[48px]">
              Donate Now
            </button>
            <button className="uppercase cursor-pointer rounded-[4px] bg-primary h-[57px] w-[200px] text-[16px] leading-4 font-bold max-[768px]:h-[48px] max-[768px]:w-[170px] max-[768px]:text-[14px] max-[480px]:w-full max-[480px]:h-[48px]">
              Become a Sponsor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
