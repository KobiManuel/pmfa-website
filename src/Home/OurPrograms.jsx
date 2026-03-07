import React from "react";
import SectionHeader from "../components/SectionHeader";
import { Icon } from "../components/Icon";

const programs = [
  {
    title: "Grassroots Training",
    description:
      "Professional-level training using modern football techniques with minimal coaching interference, allowing children's creativity and natural instincts to flourish.",
  },
  {
    title: "Tournaments & Showcases",
    description:
      "Competitive events designed to help young players apply football principles in real game scenarios while highlighting emerging talent within local communities.",
  },
  {
    title: "Coach Education",
    description:
      "Comprehensive training sessions equipping coaches with the PMF Methodology — translating training concepts into real match situations effectively.",
  },
  {
    title: "Talent Scouting",
    description:
      "Structured scouting programmes designed to identify and connect promising young players with professional development pathways across Africa.",
  },
  {
    title: "Education Integration",
    description:
      "Combining academic achievement with athletic development to ensure our players grow into well-rounded individuals with life skills beyond football.",
  },
  {
    title: "Community Outreach",
    description:
      "Bringing football to underserved communities across Lagos State, creating safe, positive weekend engagement for children away from the streets.",
  },
];

const OurPrograms = () => {
  return (
    <section className="w-full pt-[46.1px] pb-[98px] bg-[white">
      <div className="max-w-[1440px] w-[80%] mx-auto flex flex-col gap-[44.1px] items-center justify-center">
        <SectionHeader
          eyebrow="What We Offer"
          title={
            <>
              Our <span className="text-primary">Programs</span>
            </>
          }
          description="We provide structured programmes, community-based training, and accessible opportunities that help children learn, play, and grow on and off the pitch."
          centered
        />
        <div className="grid grid-cols-3 gap-6 w-full">
          {programs.map((program) => (
            <div
              key={program.title}
              className="flex flex-col gap-[12.89px] h-[377px] rounded-[8px] border-[1.44px] border-[#DFDFDF] bg-[#F8F8F8] px-[32.48px] py-[32.48px] justify-between"
            >
              <div className="flex flex-col gap-[12.89px]">
                <Icon.Target />
                <div className="flex flex-col gap-2 font-inter">
                  <p className="text-[18.21px] leading-[29.58px] font-bold">
                    {program.title}
                  </p>
                  <p className="text-[18.21px] leading-[29.58px]">
                    {program.description}
                  </p>
                </div>
              </div>
              <p className="font-inter text-[#686868] font-bold text-[18px] leading-[32px] cursor-pointer">
                Learn More →
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPrograms;
