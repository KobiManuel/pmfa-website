import React from "react";
import frame215 from "../assets/Frame 215.png";
import mg0160 from "../assets/images/Frame 202.svg";
import SectionHeader from "../components/SectionHeader";

const pillars = [
  "Provide access to organised football training and development programs",
  "Identify and nurture young talents with professional potential",
  "Offer free educational support to complement athletic growth",
  "Create a safe and inclusive environment for vulnerable children",
  "Open pathways for exposure to local and international football opportunities",
];

const pillarIcons = ["⚽", "🔍", "📚", "🛡️", "🌍"];

const countries = [
  { name: "Nigeria", status: "Active Now", active: true },
  { name: "Ghana", status: "Coming Soon", active: false },
  { name: "Togo", status: "Coming Soon", active: false },
  { name: "Benin", status: "Coming Soon", active: false },
];

const joinPoints = [
  { icon: "🤝", label: "Partner with us" },
  { icon: "💰", label: "Become a sponsor" },
  { icon: "🙋", label: "Volunteer your time" },
  { icon: "❤", label: "Support our cause" },
];

const WhatWeDo = () => {
  return (
    <div className="w-full bg-[#F8F8F8]">
      {/* ── What We Do ── */}
      <section className="w-full bg-white py-[60px] max-[1000px]:py-12 max-[480px]:py-8">
        <div className="max-w-[1440px] mx-auto w-[90%] max-[600px]:w-[92%] flex flex-col gap-[40px] items-center">
          <div className="flex flex-col items-center gap-1 text-center">
            <p className="uppercase font-bold tracking-[0.16em] text-[#6E6E6E] text-[14px] max-[600px]:text-[12px]">
              What We Do
            </p>
            <h2 className="font-bold uppercase text-[52px] leading-[52px] -tracking-[1%] text-text-color max-[1350px]:text-[44px] max-[1000px]:text-[36px] max-[768px]:text-[28px] max-[480px]:text-[24px]">
              At PMFF, <span className="text-primary">We</span>
            </h2>
            <p className="text-[15px] leading-[24px] font-inter text-text-color max-[480px]:text-[13px]">
              Five pillars that define how we serve young footballers and their
              communities.
            </p>
          </div>

          {/* Pillar cards */}
          <div className="gap-3 w-full flex justify-between items-stretch *:w-1/5 max-[1000px]:flex-col max-[1000px]:*:w-full">
            {pillars.map((text, i) => (
              <div
                key={i}
                className="justify-center items-center border border-[#D5D5D5] rounded-[16px] bg-[#F6F6F6] px-4 py-5 flex flex-col gap-3 "
              >
                <span className="text-2xl">{pillarIcons[i]}</span>
                <p className="font-inter text-center -tracking-[1%] text-sm leading-6 text-text-color max-[480px]:text-[13px] max-[480px]:leading-[18px]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision + Growth ── */}
      <section className="w-full bg-[#F8F8F8] py-[60px] max-[1000px]:py-12 max-[480px]:py-8">
        <div className="max-w-[1440px] mx-auto w-[90%] max-[600px]:w-[92%] flex gap-[64px] items-stretch max-[1000px]:flex-col max-[1000px]:gap-10">
          {/* Left — image */}
          <div className="flex-1 self-stretch min-h-[460px] max-[1000px]:min-h-0 max-[1000px]:h-[360px] max-[600px]:h-[260px] max-[480px]:h-[220px]">
            <img
              src={frame215}
              alt="Our Vision"
              className="w-full h-full object-cover rounded-[12px]"
            />
          </div>

          {/* Right — vision + growth */}
          <div className="flex-1 flex flex-col gap-10 justify-center max-[480px]:gap-8">
            <SectionHeader
              eyebrow={"Our Vision"}
              title={
                <>
                  Every Child,
                  <span className="text-primary"> Every Dream</span>
                </>
              }
              description={
                "We envision a future where every talented child, regardless of background, has the opportunity to reach their full potential and pursue a career in professional football globally."
              }
              descriptionClassName={
                "min-[1350px]:!text-[16px] min-[1350px]:!leading-[28px]"
              }
            />

            {/* Impact & Growth */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-[6px]">
                <p className="uppercase font-bold text-2xl tracking-[16%] text-[#6E6E6E] max-[600px]:text-xl">
                  Our Impact & Growth
                </p>
                <h4 className="font-bold text-[40px] leading-[40px] -tracking-[3%] text-text-color max-[1000px]:text-[28px] max-[1000px]:leading-[28px] max-[480px]:text-[20px] max-[480px]:leading-[20px]">
                  Expanding Across West Africa
                </h4>
                <p className="font-inter -tracking-[1%] text-[14px] leading-[27px] text-text-color max-[480px]:text-[13px] max-[480px]:leading-[22px]">
                  Since our inception, we have remained dedicated to building a
                  strong foundation for young athletes in Nigeria. Over the next
                  three years, the Play More Football Foundation aims to expand
                  its reach across West Africa, including Ghana, Togo, and the
                  Republic of Benin, extending our impact to more communities
                  within the sub-Saharan region.
                </p>
              </div>

              {/* Country tags */}
              <div className="flex flex-wrap gap-2 max-[600px]:*:w-full">
                {countries.map((c) => (
                  <div
                    key={c.name}
                    className={`h-[87.05px] flex flex-col items-center justify-center rounded-[12.44px] px-5 py-2 border ${
                      c.active
                        ? "border-primary bg-primary/10"
                        : "border-[#D5D5D5] bg-white"
                    }`}
                  >
                    <p className="font-bold text-[13px] uppercase tracking-[0.05em] text-text-color">
                      {c.name}
                    </p>
                    <p
                      className={`font-inter text-[10px] uppercase tracking-[0.08em] ${c.active ? "text-primary" : "text-[#9E9E9E]"}`}
                    >
                      {c.status}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Join Us ── */}
      <section className="w-full bg-[#F8F8F8] py-[60px] pb-[60px] max-[1000px]:pb-12 max-[1000px]:py-12 max-[480px]:pb-8 max-[480px]:py-8">
        <div className="max-w-[1440px] mx-auto w-[90%] max-[600px]:w-[92%]">
          <div className="flex gap-8 overflow-hidden max-[900px]:flex-col">
            {/* Left — text */}
            <div className="flex-1 rounded-2xl bg-white px-[48px] py-[52px] flex flex-col gap-6 max-[1350px]:px-10 max-[1350px]:py-10 max-[480px]:px-6 max-[480px]:py-8">
              <div className="flex flex-col">
                <p className="uppercase font-medium text-text-color text-[20.33px] max-[600px]:text-[15px]">
                  Join Us
                </p>
                <h3 className="font-bold -tracking-[3%] text-[45.75px] leading-[45.75px] text-text-color max-[1350px]:text-[30px] max-[1350px]:leading-[30px] max-[1000px]:text-[26px] max-[480px]:text-[22px] max-[480px]:leading-[26px]">
                  Be Part of Something Bigger
                </h3>
              </div>
              <p className="font-inter -tracking-[1%] text-[17.79px] leading-[30.5px] text-text-color max-[480px]:text-[15px] max-[480px]:leading-[26px]">
                We believe meaningful change happens through collaboration.
                Whether you are a partner, sponsor, volunteer, or supporter,
                your involvement helps us empower the next generation of
                footballers and leaders.
              </p>
              <ul className="flex flex-col gap-2">
                {joinPoints.map((point, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-xl">{point.icon}</span>
                    <span className="font-inter -tracking-[1%] text-[17.79px] leading-[30.5px] text-text-color max-[480px]:text-[15px] max-[480px]:leading-[26px]">
                      {point.label}
                    </span>
                  </li>
                ))}
              </ul>
              <button className="uppercase cursor-pointer rounded-[4px] bg-primary h-[52px] w-full text-[15px] leading-4 font-bold text-black mt-2 max-[480px]:h-[48px] max-[480px]:text-[14px]">
                Support Us Today
              </button>
            </div>

            {/* Right — image */}
            <div className="flex-1 max-[900px]:h-[300px] max-[480px]:h-[220px]">
              <img
                src={mg0160}
                alt="Join PMFF"
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
