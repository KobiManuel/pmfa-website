import React from "react";
import SectionHeader from "../components/SectionHeader";
import { Icon } from "../components/Icon";

const CoreValues = () => {
  return (
    <section className="bg-white pt-[70px] pb-[142px] max-[768px]:pt-10 max-[768px]:pb-16 max-[480px]:pt-8 max-[480px]:pb-12">
      <div className="max-w-[1440px] mx-auto w-[90%] flex flex-col items-center justify-between gap-[64.2px] max-[600px]:w-[92%] max-[600px]:gap-10">
        <SectionHeader
          eyebrow={"What We Stand For"}
          title={
            <>
              Our Core
              <span className="text-primary"> values</span>
            </>
          }
          description="These five values are the foundation of everything we do — on and off the pitch."
          descriptionClassName={
            "min-[1350px]:text-[20px] min-[1350px]:leading-[32px]"
          }
          centered
        />
        <div className="grid grid-cols-5 items-center gap-4 justify-between w-full max-[1000px]:grid-cols-3 max-[480px]:grid-cols-2 max-[480px]:gap-3">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#E5E5E5] h-[133px] flex flex-col gap-[14.8px] bg-[#F6F6F6] items-center justify-center max-[1350px]:h-[120px] max-[480px]:h-[110px]"
            >
              <Icon.TargetOutlined />
              <p className="font-bold font-inter text-[18px] leading-8 tracking-[1%] max-[1350px]:text-[16px] max-[480px]:text-[14px] max-[480px]:leading-6">
                Passion
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
