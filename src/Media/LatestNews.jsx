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
    <section className="bg-white pt-[50px] pb-[74.72px]">
      <div className="max-w-[1440px] mx-auto w-[90%] flex flex-col h-full gap-[43.72px]">
        <div className="w-1/2">
          <SectionHeader
            eyebrow="Latest News"
            title={
              <>
                In The <span className="text-primary"> Press</span>
              </>
            }
          />
        </div>
        <div className="grid grid-cols-2 gap-4 gap-y-[17.72px]">
          {articles.map(({ day, month, title, description }, i) => (
            <div
              key={i}
              className="bg-[#F6F6F6] rounded-[7.61px] gap-[19.05px] flex items-center py-[25.22px] h-[112.28px] pl-[20.18px] pr-[32.74px]"
            >
              <div className="bg-[#242424] rounded-[3.81px] h-full flex flex-col gap-[2.84px] px-4 items-center justify-center shrink-0">
                <p className="font-bebas text-[22.84px] leading-[19.98px] text-white font-bold">
                  {day}
                </p>
                <p className="font-medium text-[7.61px] tracking-[3%] text-white leading-[11.42px]">
                  {month}
                </p>
              </div>
              <div className="flex flex-col text-text-color">
                <p className="text-[19.03px] font-bold leading-[19.98px]">
                  {title}
                </p>
                <p className="text-[11.42px] font-inter leading-[19.98px]">
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
