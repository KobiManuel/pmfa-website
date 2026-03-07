import React from "react";
import SectionHeader from "../components/SectionHeader";
import { Icon } from "../components/Icon";
import { Link } from "react-router-dom";

const programs = [
  {
    tags: ["Core", "Ages 6-18"],
    title: "Grassroots Training Programme",
    description:
      "Our flagship programme provides professional-level training using modern football techniques. Using the PMF Methodology, we encourage minimal coaching interference during play, allowing children's creativity, natural instincts, and raw talent to flourish. Sessions are structured, fun, and designed to develop the complete player.",
  },
  {
    tags: ["Core", "Ages 6-18"],
    title: "Tournaments & Exhibition Matches",
    description:
      "We host regular tournaments and exhibition matches designed to give players real competitive experience. Our inaugural Ajegunle tournament (Jan 2026) brought together 200+ children from 16 schools. Every participant receives a medal, because at PMF, participation matters as much as winning.",
  },
  {
    tags: ["Core", "Ages 6-18"],
    title: "Coach Education Workshops",
    description:
      "Our Coach Training Sessions equip community coaches with the PMF Methodology — giving them practical tools to translate training concepts into real match situations. Over 50 coaches have been trained across sessions in Lagos (January & September 2025). Sessions are hands-on, evidence-based, and transformative.",
  },
  {
    tags: ["Core", "Ages 6-15"],
    title: "Talent Identification & Scouting",
    description:
      "Showcases and scouting programmes designed to identify promising young players and connect them with professional pathways. Exhibition matches double as scouting events, ensuring that raw talent within communities gets the visibility it deserves. We open doors that would otherwise stay closed.",
  },
  {
    tags: ["Core", "Ages 6-18"],
    title: "School Integration Programme",
    description:
      "We partner with schools to bring structured football programmes directly to students. Our vision is that grassroots programmes connect deeply with schools and communities nationwide — ensuring children can combine education and sport for balanced, holistic development.",
  },
  {
    tags: ["Core", "Ages 6-15"],
    title: "Character & Life Skills Development",
    description:
      "Beyond football, PMF builds essential life skills — discipline, teamwork, resilience, and leadership. Coaches at PMF are mentors first, shaping empathy and positive character in every young player they work with. Football at PMF is a vehicle, not just a destination.",
  },
];

const Hero = () => {
  return (
    <section className="bg-white py-[80.33px]">
      <div className="max-w-[1440px] mx-auto w-[90%] flex flex-col gap-[17.43px] h-full">
        <div className="w-1/2">
          <SectionHeader
            eyebrow="What We Offer"
            title={
              <>
                Our
                <span className="text-primary"> Programs</span>
              </>
            }
            description="We provide structured programmes, community-based training, and accessible opportunities that help children learn, play, and grow on and off the pitch. Football becomes a tool for social change, youth development, and lifelong opportunity."
            descriptionClassName={"!text-[16px] !leading-[28px]"}
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          {programs.map(({ tags, title, description }, i) => (
            <div
              key={i}
              className="border-[#DFDFDF] border-[1.07px] rounded-[5.23px] bg-[#FBFBFB] flex flex-col h-[411.43px]"
            >
              <div className="py-[44.79px] bg-[#F3F3F3] pl-[5%]">
                <Icon.TargetOutlinedGrey />
              </div>
              <div className="flex flex-col gap-[18.26px] bg-[#FBFBFB] px-[5%] h-full justify-center">
                <div className="flex items-center gap-[8.34px]">
                  {tags.map((tag, j) => (
                    <div
                      key={j}
                      className="font-medium flex items-center justify-center border-[1.07px] border-[#D8D8D8] rounded-2xl h-[28px] px-10 bg-[#E5E5E5] font-inter text-[7.52px] leading-[12.89px] text-[#5C5C5C]"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-[17.19px]">
                  <p className="text-[21.48px] leading-[22.56px] font-bold text-text-color">
                    {title}
                  </p>
                  <p className="text-[12.89px] leading-[22.56px] text-text-color font-inter">
                    {description}
                  </p>
                  <Link
                    to={"/"}
                    className="text-[12.89px] leading-[12.89px] font-bold text-text-color"
                  >
                    Enroll Now→
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
