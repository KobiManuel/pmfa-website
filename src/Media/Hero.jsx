import React from "react";
import SectionHeader from "../components/SectionHeader";

const Hero = () => {
  return (
    <section className="bg-white py-[34.38px]">
      <div className="max-w-[1440px] mx-auto w-[90%] flex h-full items-center">
        <div className="w-1/2">
          <SectionHeader
            eyebrow="See Our Work"
            title={
              <>
                Media
                <span className="text-primary"> Gallery</span>
              </>
            }
            description="Watch our journey as we empower young footballers across Nigeria through structured training, tournaments, and community engagement."
            descriptionClassName={"!text-[16px] !leading-[28px]"}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
