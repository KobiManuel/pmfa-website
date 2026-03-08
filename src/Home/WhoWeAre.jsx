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
    <section className="w-full py-[59.05px] max-[768px]:py-10 max-[480px]:py-8">
      <div className="max-w-[1440px] w-[90%] mx-auto flex justify-between gap-[52.44px] *:w-1/2 items-center max-[1000px]:flex-col max-[1000px]:*:w-full max-[1000px]:gap-8 max-[600px]:w-[92%]">
        {/* Left Text Block */}
        <div className="flex flex-col gap-[19.42px] max-[480px]:gap-4">
          <p className="uppercase font-bold text-[29.19px] leading-[38.92px] text-[#6E6E6E] tracking-[16%] max-[1350px]:text-[24px] max-[1350px]:leading-[32px] max-[1000px]:text-[20px] max-[600px]:text-[16px] max-[600px]:leading-[24px]">
            Who We Are
          </p>
          <h3 className="font-bold uppercase text-[68.11px] leading-[68.11px] -tracking-[2%] text-text-color max-[1350px]:text-[52px] max-[1350px]:leading-[52px] max-[1000px]:text-[44px] max-[1000px]:leading-[44px] max-[768px]:text-[36px] max-[768px]:leading-[36px] max-[480px]:text-[28px] max-[480px]:leading-[30px] max-[360px]:text-[24px] max-[360px]:leading-[26px]">
            We Are Building <span className="text-primary">Futures</span> On &
            Off the Pitch
          </h3>
          <p className="text-[19.46px] font-inter leading-[29.19px] text-text-color -tracking-[1%] max-[1350px]:text-[17px] max-[1350px]:leading-[26px] max-[1000px]:text-[16px] max-[600px]:text-[14px] max-[600px]:leading-[22px] max-[480px]:text-[13px]">
            At the heart of our work is a dedication to values such as
            discipline, teamwork, confidence, creativity, and passion. We
            believe football is more than a sport — it is a pathway to
            education, empowerment, and a brighter future.
          </p>
          <button className="uppercase cursor-pointer rounded-[4px] bg-primary h-[68.11px] w-[243.23px] text-[19.46px] leading-[19.46px] font-bold max-[1350px]:h-[56px] max-[1350px]:w-[210px] max-[1350px]:text-[17px] max-[768px]:h-[48px] max-[768px]:w-[180px] max-[768px]:text-[15px] max-[480px]:w-full max-[480px]:h-[48px] max-[480px]:text-[14px]">
            Our story
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 gap-6 max-[1350px]:gap-4 max-[480px]:grid-cols-1 max-[480px]:gap-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-[12.89px] rounded-[4.55px] border-[1.44px] border-[#DFDFDF] bg-[#F8F8F8] h-[337.94px] px-[32.48px] justify-center max-[1350px]:h-[280px] max-[1350px]:px-6 max-[1000px]:h-[260px] max-[768px]:h-[220px] max-[768px]:px-5 max-[600px]:h-auto max-[600px]:py-6 max-[480px]:h-auto max-[480px]:py-5 max-[480px]:px-5"
            >
              <Icon.Target />
              <div className="flex flex-col gap-2">
                <p className="text-[36.41px] leading-[29.58px] font-medium tracking-[1%] max-[1350px]:text-[28px] max-[1350px]:leading-[26px] max-[1000px]:text-[24px] max-[1000px]:leading-[22px] max-[768px]:text-[20px] max-[768px]:leading-[20px] max-[480px]:text-[18px]">
                  {card.title}
                </p>
                <p className="text-[18.21px] leading-[29.58px] tracking-[1%] font-light font-inter max-[1350px]:text-[15px] max-[1350px]:leading-[24px] max-[1000px]:text-[14px] max-[1000px]:leading-[22px] max-[768px]:text-[13px] max-[768px]:leading-[20px] max-[480px]:text-[12px] max-[480px]:leading-[18px]">
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
