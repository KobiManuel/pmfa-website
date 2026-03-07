import React from "react";
import SectionHeader from "../components/SectionHeader";

const tiers = [
  {
    amount: "$20",
    title: "Kits a Child for a Season",
    description:
      "Your donation provides one child with training kit, boots, and equipment for a full season of football.",
  },
  {
    amount: "$50",
    title: "Sponsors Tournament Entry",
    description:
      "Covers one school's full tournament participation — travel, kit, medals, and registration fees.",
  },
  {
    amount: "$100",
    title: "Trains a Community Coach",
    description:
      "Funds one coach through a full PMF Methodology workshop, impacting hundreds of children through them.",
  },
];

const YourImpact = () => {
  return (
    <section className="bg-[#F6F6F6] pt-[70px] pb-[66.66px]">
      <div className="max-w-[1440px] mx-auto w-[90%] flex flex-col items-center justify-between gap-[38.73px]">
        <SectionHeader
          eyebrow={"Your Impact"}
          title={
            <>
              What Your <span className="text-primary"> donation</span> Does
            </>
          }
          description="See how your contribution directly transforms lives in communities across Nigeria."
          descriptionClassName={"!text-[20px] !leading-[32px]"}
          centered
        />
        <div className="grid grid-cols-3 justify-between items-center gap-[26px] border border-[#D5D5D5] rounded-2xl bg-white py-[23.47px] px-[26.02px]">
          {tiers.map(({ amount, title, description }, i) => (
            <div
              key={i}
              className="h-[199px] border border-[#D5D5D5] rounded-lg bg-[#F6F6F6] flex flex-col gap-[9px] items-center justify-center px-6"
            >
              <p className="font-bebas font-bold text-[80px] leading-20 -tracking-[5%]">
                {amount}
              </p>
              <p className="font-bold font-inter text-[16px] leading-[16px] text-text-color -tracking-[3%]">
                {title}
              </p>
              <p className="font-inter text-[11px] leading-4 text-text-color text-center">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YourImpact;
