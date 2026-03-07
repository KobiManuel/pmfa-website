import React from "react";
import SectionHeader from "../components/SectionHeader";
import { Icon } from "../components/Icon";

const CoreValues = () => {
  return (
    <section className="bg-white pt-[70px] pb-[142px]">
      <div className="max-w-[1440px] mx-auto w-[90%] flex flex-col items-center justify-between gap-[64.2px]">
        <SectionHeader
          eyebrow={"What We Stand For"}
          title={
            <>
              Our Core
              <span className="text-primary"> values</span>
            </>
          }
          description="These five values are the foundation of everything we do — on and off the pitch."
          descriptionClassName={"!text-[20px] !leading-[32px]"}
          centered
        />
        <div className="grid grid-cols-5 items-center gap-4 justify-between w-full">
          <div className="rounded-2xl border border-[#E5E5E5] h-[133px] flex flex-col gap-[14.8px] bg-[#F6F6F6] items-center justify-center">
            <Icon.TargetOutlined />
            <p className="font-bold font-inter text-[18px] leading-8 tracking-[1%]">
              Passion
            </p>
          </div>
          <div className="rounded-2xl border border-[#E5E5E5] h-[133px] flex flex-col gap-[14.8px] bg-[#F6F6F6] items-center justify-center">
            <Icon.TargetOutlined />
            <p className="font-bold font-inter text-[18px] leading-8 tracking-[1%]">
              Passion
            </p>
          </div>
          <div className="rounded-2xl border border-[#E5E5E5] h-[133px] flex flex-col gap-[14.8px] bg-[#F6F6F6] items-center justify-center">
            <Icon.TargetOutlined />
            <p className="font-bold font-inter text-[18px] leading-8 tracking-[1%]">
              Passion
            </p>
          </div>
          <div className="rounded-2xl border border-[#E5E5E5] h-[133px] flex flex-col gap-[14.8px] bg-[#F6F6F6] items-center justify-center">
            <Icon.TargetOutlined />
            <p className="font-bold font-inter text-[18px] leading-8 tracking-[1%]">
              Passion
            </p>
          </div>
          <div className="rounded-2xl border border-[#E5E5E5] h-[133px] flex flex-col gap-[14.8px] bg-[#F6F6F6] items-center justify-center">
            <Icon.TargetOutlined />
            <p className="font-bold font-inter text-[18px] leading-8 tracking-[1%]">
              Passion
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
