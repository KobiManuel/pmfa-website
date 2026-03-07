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
    <section className="w-full pt-[46.1px] pb-[53px] bg-[#F8F8F8]">
      <div className="max-w-[1440px] w-[80%] mx-auto flex flex-col gap-[44.1px] items-center justify-center">
        <SectionHeader
          eyebrow="Voices From The Community"
          title={
            <>
              What People Say<span className="text-primary"> About Us</span>
            </>
          }
          centered
        />
        <div className="w-full grid grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="py-[62.5px] border-[1.14px] border-[#DFDFDF] rounded-[4.55px] px-[47.06px] flex flex-col bg-white justify-between"
            >
              <div className="flex flex-col">
                <Icon.Quote className="mb-7" />
                <p className="text-[#2C2B2B] text-[18px] leading-8 tracking-[1%] italic font-inter">
                  {t.quote}
                </p>
              </div>
              <div className="flex gap-4 items-center mt-[45.5px]">
                <div className="w-10 h-10 bg-[#D9D9D9] rounded-full shrink-0" />
                <div className="flex flex-col">
                  <p className="text-[19px] leading-5 font-bold tracking-[1%] text-[#686868]">
                    {t.name}
                  </p>
                  <p className="text-[16px] leading-5 font-inter">{t.role}</p>
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
