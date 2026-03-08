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
    <section className="w-full py-[62.05px] bg-[#F8F8F8] max-[768px]:py-10 max-[480px]:py-8">
      <div className="max-w-[1440px] w-[90%] mx-auto flex flex-col gap-[42.66px] items-center justify-center max-[600px]:w-[92%] max-[600px]:gap-8">
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
        <div className="flex items-center *:flex-1! w-full max-[768px]:grid max-[768px]:grid-cols-2 max-[768px]:*:flex-none!">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="h-[337.95px] font-bebas border-[1.14px] border-[#DFDFDF] rounded-[4.55px] px-[35.31px] flex flex-col bg-white justify-center items-center max-[1350px]:h-[280px] max-[1350px]:px-6 max-[1000px]:h-[240px] max-[1000px]:px-4 max-[768px]:h-[180px] max-[768px]:rounded-none max-[480px]:h-[150px] max-[480px]:px-3"
            >
              <p className="text-[100px] leading-[80px] -tracking-[4%] font-bold max-[1350px]:text-[80px] max-[1350px]:leading-[64px] max-[1000px]:text-[64px] max-[1000px]:leading-[52px] max-[768px]:text-[52px] max-[768px]:leading-[42px] max-[480px]:text-[42px] max-[480px]:leading-[34px] max-[360px]:text-[36px] max-[360px]:leading-[30px]">
                {stat.value}
              </p>
              <p className="text-[18.21px] font-bold leading-[20px] tracking-[1%] max-[1350px]:text-[15px] max-[1000px]:text-[13px] max-[768px]:text-[12px] max-[768px]:leading-[16px] max-[480px]:text-[11px] max-[360px]:text-[10px] text-center">
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
