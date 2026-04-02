import React from "react";
import SectionHeader from "../components/SectionHeader";
import { Icon } from "../components/Icon";
import { Link } from "react-router-dom";
import f224 from "../assets/images/Frame 234.png";
import f231 from "../assets/images/Frame 231.png";
import f232 from "../assets/images/Frame 224.png";
import programsBanner from "../assets/images/programs-banner.png";

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
    <section className="bg-white py-[80.33px] max-[768px]:py-12 max-[480px]:py-8">
      <div className="max-w-[1440px] mx-auto w-[90%] flex flex-col gap-[57.43px] h-full max-[600px]:w-[92%]">
        <div className="*:w-1/2 max-[1000px]:w-full flex justify-between items-center gap-[64.99px] max-[1000px]:flex-col max-[1000px]:*:w-full max-[1000px]:gap-[30px]">
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
          <div className="rounded-2xl overflow-hidden h-full">
            <img
              src={programsBanner}
              alt="PMF Programs"
              className="w-full h-full object-cover rounded-2xl max-[1000px]:min-h-[384px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 max-[1350px]:gap-4 max-[768px]:grid-cols-1 max-[480px]:gap-3">
          {programs.map(({ tags, title, description }, i) => (
            <div
              key={i}
              className="border-[#DFDFDF] border-[1.07px] rounded-[5.23px] bg-[#FBFBFB] flex flex-col h-[411.43px] max-[1350px]:h-[380px] max-[1000px]:h-[360px] max-[768px]:h-auto"
            >
              <div className="py-[44.79px] bg-[#F3F3F3] pl-[5%] max-[1350px]:py-8 max-[768px]:py-6">
                <Icon.TargetOutlinedGrey />
              </div>
              <div className="flex flex-col gap-[18.26px] bg-[#FBFBFB] px-[5%] h-full justify-center py-5 max-[480px]:gap-3">
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
                <div className="flex flex-col gap-[17.19px] max-[480px]:gap-3">
                  <p className="text-[21.48px] leading-[22.56px] font-bold text-text-color max-[1350px]:text-[19px] max-[1000px]:text-[17px] max-[480px]:text-[15px] max-[480px]:leading-[20px]">
                    {title}
                  </p>
                  <p className="text-[12.89px] leading-[22.56px] text-text-color font-inter max-[480px]:text-[12px] max-[480px]:leading-[20px]">
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
        <div className="flex flex-col gap-6 max-[1350px]:gap-4 max-[480px]:gap-3 mt-2">
          <img
            src={f224}
            alt=""
            className="w-full h-[880px] max-[1000px]:h-[360px] max-[600px]:h-[260px] max-[480px]:h-[200px] object-cover rounded-[5.23px]"
          />
          <div className="flex gap-6 max-[1350px]:gap-4 max-[480px]:gap-3">
            <img
              src={f231}
              alt=""
              className="flex-1 min-w-0 h-[480px] max-[1000px]:h-[280px] max-[600px]:h-[200px] max-[480px]:h-[160px] object-cover rounded-[5.23px]"
            />
            <img
              src={f232}
              alt=""
              className="flex-1 min-w-0 h-[480px] max-[1000px]:h-[280px] max-[600px]:h-[200px] max-[480px]:h-[160px] object-cover rounded-[5.23px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
