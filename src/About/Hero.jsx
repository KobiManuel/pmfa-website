import React from "react";
import SectionHeader from "../components/SectionHeader";
import aboutBanner from "../assets/images/about-banner.png";

const Hero = () => {
  return (
    <section className="bg-[#F3F3F3] h-[calc(100vh-242px)] max-[1000px]:h-fit">
      <div className="max-w-[1440px] mx-auto w-[90%] flex h-full items-center">
        <div className="*:w-1/2 max-[1000px]:w-full flex justify-between items-center gap-[64.99px] max-[1000px]:flex-col max-[1000px]:*:w-full max-[1000px]:gap-[30px]">
          <SectionHeader
            eyebrow="About PMF"
            title={
              <>
                Our Story, Our
                <span className="text-primary"> Mission</span>
              </>
            }
            description="Play More Football Foundation (PMF) is a pioneering grassroots initiative committed to discovering, nurturing, and empowering young football talent across Africa. Through structured programmes, community-based training, and accessible opportunities, PMF helps children learn, play, and grow on and off the pitch."
            descriptionClassName={"!text-[16px] !leading-[28px]"}
          />
          <div className="rounded-2xl overflow-hidden h-full">
            <img
              src={aboutBanner}
              alt="About PMF Academy"
              className="w-full h-full object-cover rounded-2xl max-[1000px]:min-h-[384px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
