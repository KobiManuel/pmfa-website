import React from "react";
import { Icon } from "../components/Icon";

const cards = [
  {
    title: "Our Mission",
    description:
      "To keep children engaged, active, and inspired away from the streets and toward meaningful development through football.",
  },
  {
    title: "Our Vision",
    description:
      "A future where grassroots programmes connect deeply with schools and communities across Africa.",
  },
  {
    title: "Our Impact",
    description:
      "Since 2026, we've touched 200+ children across Lagos State with plans to reach 600+ in multiple communities.",
  },
  {
    title: "PMF Methodology",
    description:
      "Minimal coaching interference during play, allowing children's creativity and natural instincts to flourish.",
  },
];

const WhoWeAre = () => {
  return (
    <section className="w-full py-[59.05px]">
      <div className="max-w-[1440px] w-[90%] mx-auto flex justify-between gap-[52.44px] *:w-1/2 items-center">
        <div className="flex flex-col gap-[19.42px]">
          <p className="uppercase font-bold text-[29.19px] leading-[38.92px] text-[#6E6E6E] tracking-[16%]">
            Who We Are
          </p>
          <h3 className="font-bold uppercase text-[68.11px] leading-[68.11px] -tracking-[2%] text-text-color">
            We Are Building <span className="text-primary">Futures</span> On &
            Off the Pitch
          </h3>
          <p className="text-[19.46px] font-inter leading-[29.19px] text-text-color -tracking-[1%]">
            At the heart of our work is a dedication to values such as
            discipline, teamwork, confidence, creativity, and passion. We
            believe football is more than a sport — it is a pathway to
            education, empowerment, and a brighter future.
          </p>
          <button className="uppercase cursor-pointer rounded-[4px] bg-primary h-[68.11px] w-[243.23px] text-[19.46px] leading-[19.46px] font-bold">
            Our story
          </button>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-[12.89px] rounded-[4.55px] border-[1.44px] border-[#DFDFDF] bg-[#F8F8F8] h-[337.94px] px-[32.48px] justify-center"
            >
              <Icon.Target />
              <div className="flex flex-col gap-2">
                <p className="text-[36.41px] leading-[29.58px] font-medium tracking-[1%]">
                  {card.title}
                </p>
                <p className="text-[18.21px] leading-[29.58px] tracking-[1%] font-light font-inter">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
