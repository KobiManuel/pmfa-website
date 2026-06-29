import React from "react";
import SectionHeader from "../components/SectionHeader";
import { Icon } from "../components/Icon";
import mg0160 from "../assets/Frame 316.png";

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
    title: "Coach Education",
    description:
      "Comprehensive training sessions equipping coaches with the PMF Methodology ,  translating training concepts into real match situations effectively.",
  },
  {
    title: "Community Outreach",
    description:
      "Bringing football to underserved communities across Lagos State, creating safe, positive weekend engagement for children away from the streets.",
  },
];

const OurPrograms = () => {
  return (
    <section className="w-full pt-[46.1px] pb-[98px] bg-white max-[768px]:pt-8 max-[768px]:pb-14 max-[480px]:pt-6 max-[480px]:pb-10">
      <div className="max-w-[1440px] w-[80%] mx-auto flex flex-col gap-[44.1px] max-[1000px]:w-[90%] max-[600px]:w-[92%] max-[600px]:gap-8">
        <SectionHeader
          eyebrow="What We Offer"
          title={
            <>
              Our <span className="text-primary">Programs</span>
            </>
          }
          description="We provide structured programmes, community-based training, and accessible opportunities that help children learn, play, and grow on and off the pitch."
        />

        {/* Cards + Image row */}
        <div className="flex gap-6 items-stretch max-[900px]:flex-col-reverse max-[1350px]:gap-4">
          {/* Left: 2-col card grid */}
          <div className="grid grid-cols-2 gap-4 flex-1 max-[480px]:grid-cols-1 max-[480px]:gap-3">
            {programs.map((program) => (
              <div
                key={program.title}
                className="flex flex-col gap-[12.89px] h-[251.5px] rounded-[8px] border-[1.44px] border-[#DFDFDF] bg-[#F8F8F8] px-6 py-6 justify-between max-[1350px]:px-5 max-[1350px]:py-5 max-[768px]:h-auto max-[768px]:py-5 max-[768px]:px-5"
              >
                <div className="flex flex-col gap-[12.89px]">
                  <Icon.Target />
                  <div className="flex flex-col gap-1.5 font-inter">
                    <p className="text-[14px] leading-[22px] font-bold max-[1350px]:text-[13px] max-[1350px]:leading-[20px] max-[1000px]:text-[12px] max-[1000px]:leading-[18px]">
                      {program.title}
                    </p>
                    <p className="text-[12px] leading-[19px] max-[1350px]:text-[11px] max-[1350px]:leading-[17px] max-[1000px]:text-[11px] max-[1000px]:leading-[16px]">
                      {program.description}
                    </p>
                  </div>
                </div>
                <p className="font-inter text-[#686868] font-bold text-[12px] leading-[32px] cursor-pointer max-[1350px]:text-[11px] max-[1000px]:text-[11px]">
                  Learn More →
                </p>
              </div>
            ))}
          </div>

          {/* Right: Image */}
          <div className="w-[45%] flex-shrink-0 self-stretch max-[900px]:w-full max-[900px]:h-[400px]">
            <img
              src={mg0160}
              alt="Players on the pitch"
              className="w-full h-full object-cover rounded-[16px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPrograms;
