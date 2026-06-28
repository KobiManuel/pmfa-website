import React from "react";

const camps = [
  {
    region: "South West",
    name: "Lagos Camp",
    items: [
      { label: "Accommodation", value: "₦750,000" },
      { label: "Pitch Rental", value: "₦2,000,000" },
      { label: "Feeding & Logistics", value: "₦1,000,000" },
      { label: "Transport & Movement", value: "₦300,000" },
      { label: "Media & Coverage", value: "₦250,000" },
      { label: "Contingency", value: "₦200,000" },
    ],
    total: "₦5,000,000",
  },
  {
    region: "South East / South",
    name: "Asaba Camp",
    items: [
      { label: "Accommodation", value: "₦750,000" },
      { label: "Pitch Rental", value: "₦2,000,000" },
      { label: "Feeding & Logistics", value: "₦1,000,000" },
      { label: "Transport & Movement", value: "₦4,500,000" },
      { label: "Media & Coverage", value: "₦250,000" },
      { label: "Contingency", value: "₦200,000" },
    ],
    total: "₦5,000,000",
  },
  {
    region: "North Central",
    name: "Abuja Camp",
    items: [
      { label: "Accommodation", value: "₦750,000" },
      { label: "Pitch Rental", value: "₦1,000,000" },
      { label: "Feeding & Logistics", value: "₦1,000,000" },
      { label: "Transport & Movement", value: "₦500,000" },
      { label: "Media & Coverage", value: "₦250,000" },
      { label: "Contingency", value: "₦200,000" },
    ],
    total: "₦5,000,000",
  },
];

const equipmentItems = [
  { label: "Jerseys (24 players)", value: "₦1,200,000" },
  { label: "Balls (24 players)", value: "₦360,000" },
];

const marketingItems = [
  { label: "Social Media Ads", value: "₦1,000,000" },
  { label: "Radio/TV Ads", value: "₦2,000,000" },
  { label: "Banners", value: "₦500,000" },
  { label: "Print & Flyers", value: "₦1,500,000" },
];

const sponsorBenefits = [
  "Nationwide visibility across all 3 regions",
  "Branding on kits, media, and events",
  "Association with youth empowerment",
  "Exposure through reality show content",
];

const brandVisibility = [
  { icon: "👕", label: "Jerseys and training kits" },
  { icon: "🏟️", label: "Event banners and pitch branding" },
  { icon: "💻", label: "Social media and digital campaigns" },
  { icon: "📻", label: "TV and radio mentions" },
];

const mediaCards = [
  {
    icon: "📱",
    title: "Social Media Storytelling",
    desc: "Player journeys and behind-the-scenes content",
  },
  {
    icon: "🎬",
    title: "Reality Show Episodes",
    desc: "Hybrid reality format for maximum reach",
  },
  { icon: "📡", title: "Press Coverage", desc: "TV, radio, and print media" },
];

const BudgetBreakdown = () => {
  return (
    <div className="w-full bg-[#F6F6F6]">
      {/* ── Budget Breakdown ── */}
      <section className="w-full py-[72px] max-[1000px]:py-14 max-[480px]:py-10">
        <div className="max-w-[1440px] rounded-3xl p-4 bg-white max-[600px]:rounded-none max-[600px]:w-full mx-auto w-[90%]  flex flex-col gap-[48px] items-center max-[480px]:gap-8">
          {/* Header */}
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="uppercase font-bold tracking-[0.16em] text-[#6E6E6E] text-[13px] max-[600px]:text-[11px]">
              Financial Overview
            </p>
            <h2 className="font-bold uppercase text-[52px] leading-[52px] -tracking-[1%] text-text-color max-[1350px]:text-[44px] max-[1000px]:text-[36px] max-[480px]:text-[28px] max-[480px]:leading-[30px]">
              Budget <span className="text-primary">Breakdown</span>
            </h2>
            <p className="font-inter text-[14px] leading-[24px] text-[#6E6E6E] max-[480px]:text-[13px]">
              Full transparency on how funds are allocated across our three
              regional hubs.
            </p>
          </div>

          {/* Camp tables */}
          <div className="grid grid-cols-3 gap-5 w-full max-[900px]:grid-cols-1 max-[1000px]:gap-4 max-[480px]:gap-3">
            {camps.map((camp) => (
              <div
                key={camp.name}
                className="border-[1.14px] border-[#DFDFDF] rounded-[8px] bg-white px-6 py-6 flex flex-col gap-4 max-[480px]:px-5 max-[480px]:py-5"
              >
                <div>
                  <p className="uppercase font-bold tracking-[0.12em] text-primary text-[10px] mb-1">
                    {camp.region}
                  </p>
                  <p className="font-bold text-[18px] leading-[24px] text-text-color max-[480px]:text-[16px]">
                    {camp.name}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  {camp.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex justify-between items-center gap-2 border-b pb-4 border-[#DFDFDF]"
                    >
                      <p className="font-inter text-[12px] leading-[20px] text-[#6E6E6E] max-[480px]:text-[11px]">
                        {item.label}
                      </p>
                      <p className="font-inter text-[12px] leading-[20px] text-text-color font-medium shrink-0 max-[480px]:text-[11px]">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-[#DFDFDF] pt-3 flex justify-between items-center">
                  <p className="font-bold text-[12px] uppercase tracking-[0.1em] text-text-color">
                    Total
                  </p>
                  <p className="font-bold text-[16px] text-primary max-[480px]:text-[14px]">
                    {camp.total}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Totals row */}
          <div className="grid grid-cols-3 gap-5 w-full max-[900px]:grid-cols-1 max-[1000px]:gap-4 max-[480px]:gap-3">
            {/* 3 Regions total */}
            <div className="border-[1.14px] border-primary bg-primary/10 items-center justify-center rounded-[8px] px-6 py-6 flex flex-col gap-1 max-[480px]:px-5">
              <p className="uppercase font-bold tracking-[0.1em] text-[#6E6E6E] text-[10px]">
                3 Regions — Camp Total
              </p>
              <p className="font-bold text-[40px] leading-[44px] text-primary max-[1350px]:text-[34px] max-[480px]:text-[28px]">
                ₦15,000,000
              </p>
            </div>

            {/* Equipment */}
            <div className="border-[1.14px] border-[#DFDFDF] rounded-[8px] bg-white px-6 py-6 flex flex-col gap-4 max-[480px]:px-5">
              <p className="uppercase font-bold tracking-[0.1em] text-[#6E6E6E] text-[10px]">
                Equipment Per Centre
              </p>
              <div className="flex flex-col gap-2">
                {equipmentItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center gap-2"
                  >
                    <p className="font-inter text-[12px] leading-[20px] text-[#6E6E6E]">
                      {item.label}
                    </p>
                    <p className="font-inter text-[12px] leading-[20px] text-text-color font-medium shrink-0">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#DFDFDF] pt-3 flex justify-between items-center">
                <p className="font-bold text-[11px] uppercase tracking-[0.1em] text-text-color">
                  3 Centres Total
                </p>
                <p className="font-bold text-[15px] text-primary">₦4,680,000</p>
              </div>
            </div>

            {/* Marketing */}
            <div className="border-[1.14px] border-[#DFDFDF] rounded-[8px] bg-white px-6 py-6 flex flex-col gap-4 max-[480px]:px-5">
              <p className="uppercase font-bold tracking-[0.1em] text-[#6E6E6E] text-[10px]">
                Marketing Budget
              </p>
              <div className="flex flex-col gap-2">
                {marketingItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center gap-2"
                  >
                    <p className="font-inter text-[12px] leading-[20px] text-[#6E6E6E]">
                      {item.label}
                    </p>
                    <p className="font-inter text-[12px] leading-[20px] text-text-color font-medium shrink-0">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#DFDFDF] pt-3 flex justify-between items-center">
                <p className="font-bold text-[11px] uppercase tracking-[0.1em] text-primary">
                  Marketing Total
                </p>
                <p className="font-bold text-[15px] text-primary">₦5,000,000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Partner With Project 2029 ── */}
      <section className="w-full bg-white py-[72px] max-[1000px]:py-14 max-[480px]:py-10">
        <div className="max-w-[1440px] rounded-3xl border border-[#8a83833b] p-8 bg-[#e3e3e365] max-[600px]:rounded-none max-[600px]:border-none max-[600px]:w-full mx-auto w-[90%] flex gap-[64px] items-start max-[1000px]:flex-col max-[1000px]:gap-10">
          {/* Left */}
          <div className="flex-1 flex flex-col gap-6 max-[480px]:gap-5">
            <div className="flex flex-col gap-2">
              <p className="uppercase font-bold tracking-[0.16em] text-[#6E6E6E] text-[13px] max-[600px]:text-[11px]">
                Sponsorship Opportunity
              </p>
              <h2 className="font-bold uppercase text-[44px] leading-[46px] -tracking-[1%] text-text-color max-[1350px]:text-[36px] max-[1350px]:leading-[38px] max-[1000px]:text-[30px] max-[1000px]:leading-[32px] max-[480px]:text-[24px] max-[480px]:leading-[26px]">
                Partner With <span className="text-primary">Project 2029</span>
              </h2>
              <div className="w-12 h-[3px] bg-primary mt-1" />
            </div>

            <p className="font-inter text-[14px] leading-[24px] text-text-color max-[480px]:text-[13px] max-[480px]:leading-[22px]">
              Sponsors will gain nationwide visibility while making a real
              difference in the lives of Nigeria's most talented young
              footballers.
            </p>

            <ul className="flex flex-col gap-2">
              {sponsorBenefits.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 font-inter text-[13px] leading-[22px] text-text-color max-[480px]:text-[12px]"
                >
                  <span className="text-primary font-bold mt-[1px] shrink-0">
                    ✓
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="border-[1.14px] border-[#DFDFDF] rounded-[8px] bg-white px-6 py-5 flex flex-col gap-3 max-[480px]:px-5">
              <p className="uppercase font-bold tracking-[0.12em] text-[#6E6E6E] text-[10px]">
                Brand Visibility Includes
              </p>
              <ul className="flex flex-col gap-2">
                {brandVisibility.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 font-inter text-[12px] leading-[20px] text-text-color max-[480px]:text-[11px]"
                  >
                    <span className="shrink-0 mt-[2px]">{item.icon}</span>
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — media strategy */}
          <div className="flex-1 flex flex-col gap-4 max-[480px]:gap-3">
            <p className="uppercase font-bold tracking-[0.16em] text-[#6E6E6E] text-[13px] max-[600px]:text-[11px]">
              Marketing & Media Strategy
            </p>
            {mediaCards.map((card, i) => (
              <div
                key={i}
                className="border-[1.14px] border-[#DFDFDF] rounded-[8px] bg-white px-6 py-5 flex items-start gap-4 max-[480px]:px-5 max-[480px]:py-4"
              >
                <div className="w-10 h-10 rounded-[6px] bg-[#F3F3F3] border border-[#DFDFDF] shrink-0 flex items-center justify-center max-[480px]:w-8 max-[480px]:h-8">
                  <span className="text-xl">{card.icon}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-[14px] leading-[20px] text-text-color max-[480px]:text-[13px]">
                    {card.title}
                  </p>
                  <p className="font-inter text-[12px] leading-[20px] text-[#6E6E6E] max-[480px]:text-[11px]">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BudgetBreakdown;
