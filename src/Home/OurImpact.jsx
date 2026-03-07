import React from "react";
import SectionHeader from "../components/SectionHeader";

const stats = [
  { value: "1,000+", label: "Children Participated" },
  { value: "30", label: "Schools In Network" },
  { value: "50+", label: "Coaches Trained" },
  { value: "5+", label: "Communities Reached" },
];

const OurImpact = () => {
  return (
    <section className="w-full py-[62.05px] bg-[#F8F8F8]">
      <div className="max-w-[1440px] w-[90%] mx-auto flex flex-col gap-[42.66px] items-center justify-center">
        <SectionHeader
          eyebrow={"Our Impact In Numbers"}
          title={
            <>
              <span className="text-primary">Results</span> That Speak For
              Themselves
            </>
          }
          centered
        />
        <div className="flex items-center *:flex-1! w-full">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="h-[337.95px] font-bebas border-[1.14px] border-[#DFDFDF] rounded-[4.55px] px-[35.31px] flex flex-col bg-white justify-center items-center"
            >
              <p className="text-[100px] leading-[80px] -tracking-[4%] font-bold">
                {stat.value}
              </p>
              <p className="text-[18.21px] font-bold leading-[20px] tracking-[1%]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
