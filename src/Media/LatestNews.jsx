import React from "react";
import SectionHeader from "../components/SectionHeader";

const articles = [
  {
    day: "24",
    month: "Jan '26",
    title: "PMF Launches Ajegunle Tournament — 200 Children Compete",
    description:
      "Play More Football Foundation hosts its inaugural community tournament, bringing together over 200 children from 16 schools across the Ajegunle area of Lagos.",
  },
  {
    day: "24",
    month: "Jan '26",
    title: "PMF Launches Ajegunle Tournament — 200 Children Compete",
    description:
      "Play More Football Foundation hosts its inaugural community tournament, bringing together over 200 children from 16 schools across the Ajegunle area of Lagos.",
  },
  {
    day: "24",
    month: "Jan '26",
    title: "PMF Launches Ajegunle Tournament — 200 Children Compete",
    description:
      "Play More Football Foundation hosts its inaugural community tournament, bringing together over 200 children from 16 schools across the Ajegunle area of Lagos.",
  },
  {
    day: "24",
    month: "Jan '26",
    title: "PMF Launches Ajegunle Tournament — 200 Children Compete",
    description:
      "Play More Football Foundation hosts its inaugural community tournament, bringing together over 200 children from 16 schools across the Ajegunle area of Lagos.",
  },
  {
    day: "24",
    month: "Jan '26",
    title: "PMF Launches Ajegunle Tournament — 200 Children Compete",
    description:
      "Play More Football Foundation hosts its inaugural community tournament, bringing together over 200 children from 16 schools across the Ajegunle area of Lagos.",
  },
  {
    day: "24",
    month: "Jan '26",
    title: "PMF Launches Ajegunle Tournament — 200 Children Compete",
    description:
      "Play More Football Foundation hosts its inaugural community tournament, bringing together over 200 children from 16 schools across the Ajegunle area of Lagos.",
  },
  {
    day: "24",
    month: "Jan '26",
    title: "PMF Launches Ajegunle Tournament — 200 Children Compete",
    description:
      "Play More Football Foundation hosts its inaugural community tournament, bringing together over 200 children from 16 schools across the Ajegunle area of Lagos.",
  },
  {
    day: "24",
    month: "Jan '26",
    title: "PMF Launches Ajegunle Tournament — 200 Children Compete",
    description:
      "Play More Football Foundation hosts its inaugural community tournament, bringing together over 200 children from 16 schools across the Ajegunle area of Lagos.",
  },
];

const LatestNews = () => {
  return (
    <section className="bg-white pt-[50px] pb-[74.72px] max-[768px]:pt-10 max-[768px]:pb-12 max-[480px]:pt-8 max-[480px]:pb-10">
      <div className="max-w-[1440px] mx-auto w-[90%] flex flex-col h-full gap-[43.72px] max-[600px]:w-[92%] max-[600px]:gap-8">
        <div className="w-1/2 max-[1000px]:w-full">
          <SectionHeader
            eyebrow="Latest News"
            title={
              <>
                In The <span className="text-primary"> Press</span>
              </>
            }
          />
        </div>
        <div className="grid grid-cols-2 gap-4 gap-y-[17.72px] max-[768px]:grid-cols-1 max-[768px]:gap-y-3 max-[480px]:gap-y-2">
          {articles.map(({ day, month, title, description }, i) => (
            <div
              key={i}
              className="bg-[#F6F6F6] rounded-[7.61px] gap-[19.05px] flex items-center py-[25.22px] min-h-[112.28px] pl-[20.18px] pr-[32.74px]  max-[768px]:h-auto max-[768px]:py-4 max-[768px]:pr-5 max-[480px]:pl-4 max-[480px]:pr-4 max-[480px]:gap-3"
            >
              <div className="bg-[#242424] rounded-[3.81px] h-full flex flex-col gap-[2.84px] px-4 items-center justify-center shrink-0 max-[1000px]:px-3 max-[768px]:py-3 max-[480px]:px-3">
                <p className="font-bebas text-[22.84px] leading-[19.98px] text-white font-bold max-[1000px]:text-[20px] max-[480px]:text-[18px]">
                  {day}
                </p>
                <p className="font-medium text-[7.61px] tracking-[3%] text-white leading-[11.42px] max-[480px]:text-[7px]">
                  {month}
                </p>
              </div>
              <div className="flex flex-col text-text-color">
                <p className="text-[19.03px] font-bold leading-[19.98px] max-[1350px]:text-[17px] max-[1000px]:text-[15px] max-[1000px]:leading-[18px] max-[768px]:text-[14px] max-[768px]:leading-[18px] max-[480px]:text-[13px] max-[480px]:leading-[17px]">
                  {title}
                </p>
                <p className="text-[11.42px] font-inter leading-[19.98px] max-[1000px]:text-[10.5px] max-[1000px]:leading-[17px] max-[768px]:text-[10px] max-[768px]:leading-[16px] max-[480px]:text-[10px] max-[480px]:leading-[15px]">
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

export default LatestNews;
