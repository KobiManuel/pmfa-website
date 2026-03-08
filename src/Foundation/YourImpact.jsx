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
    <section className="bg-[#F6F6F6] pt-[70px] pb-[66.66px] max-[768px]:pt-10 max-[768px]:pb-12 max-[480px]:pt-8 max-[480px]:pb-10">
      <div className="max-w-[1440px] mx-auto w-[90%] flex flex-col items-center justify-between gap-[38.73px] max-[600px]:w-[92%] max-[600px]:gap-8">
        <SectionHeader
          eyebrow={"Your Impact"}
          title={
            <>
              What Your <span className="text-primary"> donation</span> Does
            </>
          }
          description="See how your contribution directly transforms lives in communities across Nigeria."
          descriptionClassName="min-[1350px]:!text-[20px] min-[1350px]:!leading-[32px]"
          centered
        />
        <div className="grid grid-cols-3 justify-between items-center gap-[26px] border border-[#D5D5D5] rounded-2xl bg-white py-[23.47px] px-[26.02px] max-[1000px]:grid-cols-1 max-[1000px]:gap-4 max-[768px]:px-4 max-[768px]:py-4 max-[480px]:px-3 max-[480px]:py-3 max-[480px]:gap-3">
          {tiers.map(({ amount, title, description }, i) => (
            <div
              key={i}
              className="h-[199px] border border-[#D5D5D5] rounded-lg bg-[#F6F6F6] flex flex-col gap-[9px] items-center justify-center px-6 max-[1350px]:h-[180px] max-[1000px]:h-auto max-[1000px]:py-6 max-[1000px]:flex-row max-[1000px]:items-center max-[1000px]:justify-start max-[1000px]:gap-5 max-[1000px]:px-6 max-[480px]:px-4 max-[480px]:gap-4"
            >
              <p className="font-bebas font-bold text-[80px] leading-[80px] -tracking-[5%] max-[1350px]:text-[68px] max-[1350px]:leading-[68px] max-[1000px]:text-[56px] max-[1000px]:leading-[56px] max-[1000px]:shrink-0 max-[480px]:text-[44px] max-[480px]:leading-[44px]">
                {amount}
              </p>
              <div className="flex flex-col gap-[6px] max-[1000px]:items-start max-[480px]:gap-1">
                <p className="font-bold font-inter text-[16px] leading-[16px] text-text-color -tracking-[3%] max-[1000px]:text-left max-[768px]:text-[14px] max-[480px]:text-[13px] max-[480px]:leading-[16px]">
                  {title}
                </p>
                <p className="font-inter text-[11px] leading-4 text-text-color max-[1000px]:text-left max-[480px]:text-[11px] max-[480px]:leading-[16px]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YourImpact;
