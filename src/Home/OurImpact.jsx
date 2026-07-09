import React from "react";
import SectionHeader from "../components/SectionHeader";
import frame215 from "../assets/Frame 3162.png";

const stats = [
  { value: "1,000+", label: "Children Participated" },
  { value: "30", label: "Schools In Network" },
  { value: "5+", label: "Communities Reached" },
  { value: "50+", label: "Coaches Trained" },
];

const OurImpact = () => {
  return (
    <section className="w-full py-[62.05px] bg-[#F8F8F8] max-[768px]:py-10 max-[480px]:py-8">
      <div className="max-w-[1440px] w-[90%] mx-auto flex items-stretch gap-[48px] max-[900px]:flex-col max-[600px]:w-[92%] max-[600px]:gap-8">
        {/* Left: Image */}
        <div className="flex-shrink-0 w-[45%] self-stretch max-[900px]:w-full max-[900px]:h-[400px]">
          <img
            src={frame215}
            alt="Youth football team"
            className="w-full h-full object-cover rounded-[16px]"
          />
        </div>

        {/* Right: Header + Cards */}
        <div className="flex flex-col gap-[42.66px] flex-1 max-[600px]:gap-8">
          <SectionHeader
            eyebrow={"Our Impact In Numbers"}
            title={
              <>
                <span className="text-primary">Results</span> That Speak For
                Themselves
              </>
            }
          />

          <div className="flex gap-2 *:flex-1 max-[600px]:flex-col">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="h-[217px] font-bebas border-[1.14px] border-[#DFDFDF] rounded-[16px] px-6 flex flex-col bg-white justify-center items-center max-[1000px]:h-[180px] max-[600px]:min-h-[150px] max-[480px]:h-[130px] max-[480px]:px-3"
              >
                <p className="text-[60px] leading-[12px] -tracking-[4%] font-bold max-[1000px]:text-[48px] max-[600px]:text-[60px]">
                  {stat.value}
                </p>
                <p className="text-[10.92px] font-bold leading-[24px] tracking-[1%] text-center mt-4">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
