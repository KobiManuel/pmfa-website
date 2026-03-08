import React from "react";
import SectionHeader from "../components/SectionHeader";
import { Icon } from "../components/Icon";

const testimonials = [
  {
    quote:
      "PMF changed my son's life. He went from spending weekends on the streets to training every Saturday with purpose. The coaches genuinely care about these children.",
    name: "Adaeze Okafor",
    role: "Parent, Ajegunle",
  },
  {
    quote:
      "The coach training I received through PMF completely transformed how I work with young players. The methodology is modern and the results are clear on the pitch.",
    name: "Emmanuel Igwe",
    role: "Community Coach, Lagos",
  },
  {
    quote:
      "Participating in the tournament was the best day of my life. I got a medal and my school was cheering for me. I want to be a professional footballer now.",
    name: "Tunde Musa",
    role: "Player, Age 13",
  },
];

const Voices = () => {
  return (
    <section className="w-full pt-[46.1px] pb-[53px] bg-[#F8F8F8] max-[768px]:pt-8 max-[768px]:pb-10 max-[480px]:pt-6 max-[480px]:pb-8">
      <div className="max-w-[1440px] w-[80%] mx-auto flex flex-col gap-[44.1px] items-center justify-center max-[1000px]:w-[90%] max-[600px]:w-[92%] max-[600px]:gap-8">
        <SectionHeader
          eyebrow="Voices From The Community"
          title={
            <>
              What People Say<span className="text-primary"> About Us</span>
            </>
          }
          centered
        />
        <div className="w-full grid grid-cols-3 gap-6 max-[1350px]:gap-4 max-[1000px]:grid-cols-1 max-[480px]:gap-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="py-[62.5px] border-[1.14px] border-[#DFDFDF] rounded-[4.55px] px-[47.06px] flex flex-col bg-white justify-between max-[1350px]:py-10 max-[1350px]:px-8 max-[1000px]:py-8 max-[1000px]:px-7 max-[600px]:py-6 max-[600px]:px-5 max-[480px]:py-5 max-[480px]:px-5"
            >
              <div className="flex flex-col">
                <Icon.Quote className="mb-7 max-[1350px]:w-[64px] max-[1350px]:h-[64px] max-[1000px]:w-[52px] max-[1000px]:h-[52px] max-[768px]:w-[40px] max-[768px]:h-[40px] max-[480px]:w-[32px] max-[480px]:h-[32px] max-[1350px]:mb-5 max-[768px]:mb-4" />
                <p className="text-[#2C2B2B] text-[18px] leading-8 tracking-[1%] italic font-inter max-[1350px]:text-[16px] max-[1350px]:leading-[28px] max-[1000px]:text-[15px] max-[1000px]:leading-[26px] max-[768px]:text-[14px] max-[768px]:leading-[24px] max-[480px]:text-[13px] max-[480px]:leading-[22px]">
                  {t.quote}
                </p>
              </div>
              <div className="flex gap-4 items-center mt-[45.5px] max-[1350px]:mt-8 max-[1000px]:mt-6 max-[480px]:mt-5 max-[480px]:gap-3">
                <div className="w-10 h-10 bg-[#D9D9D9] rounded-full shrink-0 max-[768px]:w-8 max-[768px]:h-8 max-[480px]:w-7 max-[480px]:h-7" />
                <div className="flex flex-col">
                  <p className="text-[19px] leading-5 font-bold tracking-[1%] text-[#686868] max-[1350px]:text-[16px] max-[1000px]:text-[15px] max-[768px]:text-[14px] max-[480px]:text-[13px]">
                    {t.name}
                  </p>
                  <p className="text-[16px] leading-5 font-inter max-[1350px]:text-[14px] max-[1000px]:text-[13px] max-[768px]:text-[12px] max-[480px]:text-[12px]">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Voices;
