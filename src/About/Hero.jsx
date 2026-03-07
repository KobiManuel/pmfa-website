import React from "react";
import SectionHeader from "../components/SectionHeader";

const Hero = () => {
  return (
    <section className="bg-[#F3F3F3] h-[calc(100vh-242px)]">
      <div className="max-w-[1440px] mx-auto w-[90%] flex h-full items-center">
        <div className="w-1/2">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
