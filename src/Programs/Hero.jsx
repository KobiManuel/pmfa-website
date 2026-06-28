import React from "react";
import SectionHeader from "../components/SectionHeader";
import { Icon } from "../components/Icon";
import { Link } from "react-router-dom";
import programsBanner from "../assets/images/programs-banner.png";
import img1 from "../assets/Frame 226.png";
import img2 from "../assets/Frame 225.png";
import img3 from "../assets/Frame 2251.png";
import img4 from "../assets/image 10.png";
import img5 from "../assets/image 101.png";
import img6 from "../assets/Frame 2252.png";

const programs = [
  {
    tags: ["Core", "Ages 6-18"],
    title: "Grassroots Training Programme",
    description:
      "Our flagship programme provides professional-level training using modern football techniques. Using the PMF Methodology, we encourage minimal coaching interference during play, allowing children's creativity, natural instincts, and raw talent to flourish. Sessions are structured, fun, and designed to develop the complete player.",
    image: img1,
  },
  {
    tags: ["Core", "Ages 6-18"],
    title: "Talent Identification & Scouting",
    description:
      "Showcases and scouting programmes designed to identify promising young players and connect them with professional pathways. Exhibition matches double as scouting events, ensuring that raw talent within communities gets the visibility it deserves. We open doors that would otherwise stay closed.",
    image: img2,
  },
  {
    tags: ["Core", "Ages 6-18"],
    title: "School Integration Programme",
    description:
      "We partner with schools to bring structured football programmes directly to students. Our vision is that grassroots programmes connect deeply with schools and communities nationwide — ensuring children can combine education and sport for balanced, holistic development.",
    image: img3,
  },
  {
    tags: ["Core", "Ages 6-18"],
    title: "Tournaments & Exhibition Matches",
    description:
      "We host regular tournaments and exhibition matches designed to give players real competitive experience. Our inaugural Ajegunle tournament (Jan 2026) brought together 200+ children from 16 schools. Every participant receives a medal, because at PMF, participation matters as much as winning.",
    image: img4,
  },
  {
    tags: ["Core", "Ages 6-18"],
    title: "Coach Education Workshops",
    description:
      "Our Coach Training Sessions equip community coaches with the PMF Methodology — giving them practical tools to translate training concepts into real match situations. Over 50 coaches have been trained across sessions in Lagos (January & September 2025). Sessions are hands-on, evidence-based, and transformative.",
    image: img5,
  },
  {
    tags: ["Core", "Ages 6-15"],
    title: "Character & Life Skills Development",
    description:
      "Beyond football, PMF builds essential life skills — discipline, teamwork, resilience, and leadership. Coaches at PMF are mentors first, shaping empathy and positive character in every young player they work with. Football at PMF is a vehicle, not just a destination.",
    image: img6,
  },
];

const Hero = () => {
  return (
    <section className="min-[1000px]:pt-[200px] max-[1000px]:pt-10 bg-white py-[80.33px] max-[768px]:py-12 max-[480px]:py-8">
      <div className="max-w-[1440px] mx-auto w-[90%] flex flex-col gap-[57.43px] h-full max-[600px]:w-[92%]">
        {/* Page header */}
        <div className="max-w-[1440px] mx-auto w-[90%] flex flex-col gap-[57.43px] h-full max-[600px]:w-[92%]">
          <SectionHeader
            eyebrow="What We Offer"
            title={
              <>
                Our<span className="text-primary"> Programs</span>
              </>
            }
            description="We provide structured programmes, community-based training, and accessible opportunities that help children learn, play, and grow on and off the pitch. Football becomes a tool for social change, youth development, and lifelong opportunity."
            descriptionClassName={
              "!text-[16px] !leading-[28px] min-[1000px]:w-[80%]"
            }
            centered
          />
        </div>

        {/* Alternating program rows */}
        <div className="flex flex-col gap-6 max-[1350px]:gap-4 max-[480px]:gap-3 bg-[#E3E2E1">
          {programs.map(({ tags, title, description, image }, i) => {
            const isEven = i % 2 === 0;
            const card = (
              <div
                key="card"
                className="flex-1 border-[#DFDFDF] border-[1.07px] rounded-[5.23px] bg-[#FBFBFB] flex flex-col h-[411.43px] max-[1350px]:h-[380px] max-[1000px]:h-[360px] max-[768px]:h-auto"
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
            );

            const photo = (
              <div
                key="photo"
                className="flex-1 rounded-[5.23px] overflow-hidden h-[411.43px] max-[1350px]:h-[380px] max-[1000px]:h-[360px] max-[768px]:h-[280px] max-[480px]:h-[220px]"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            );

            return (
              <div
                key={i}
                className="flex gap-6 max-[1350px]:gap-4 max-[768px]:flex-col max-[480px]:gap-3"
              >
                {isEven ? [card, photo] : [photo, card]}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
