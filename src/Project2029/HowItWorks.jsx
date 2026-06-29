import React from "react";
import mg0257 from "../assets/images/Frame 2020.svg";
import SectionHeader from "../components/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Talent Identification",
    points: [
      "Nationwide scouting",
      "Online video submissions (30-60 seconds)",
      "Selection from 3 regions: Lagos (South West), Asaba (South East/South), Abuja (North Central)",
    ],
  },
  {
    number: "02",
    title: "Training Model",
    points: [
      "4 intensive camps yearly",
      "Weekly training (3-4 sessions)",
      "Focus: Technical skills, Tactical awareness, Physical conditioning, Mental strength",
    ],
  },
  {
    number: "03",
    title: "National Tournament",
    points: [
      "1-week national competition",
      "Final selection pool for elite team",
      "Full media coverage",
    ],
  },
];

const roadmap = [
  {
    year: "2025",
    text: "PMF Foundation in collaboration with PMFA. hosted one the biggest Coaching seminar with over 50 coaches in attendance. An exhibition Game showcasing the PMFA model `Play More Football` was conducted for schools in Surulere axis in collaboration with Ansur Udeen chainman school.",
  },
  {
    year: "2026",
    text: "PMFF again partnered with PMFA. to host the biggest football tournament in Ajegunle heralding our #PMFA PROJECT 2029. The competition witnessed over 10 football academies, about 150 players all came from different parts of Lagos and the outskirts of the state.",
  },
  {
    year: "2027",
    text: "PMFF x PMFA #Project2029. gets underway fully as we journey round three different zones across the country starting with Lagos, Abuja and concluding with Asaba as the last stop.",
  },
];

const HowItWorks = () => {
  return (
    <div className="w-full bg-[#F6F6F6]">
      {/* ── How It Works ── */}
      <section className="w-full py-[72px] max-[1000px]:py-14 max-[480px]:py-10">
        <div className="max-w-[1440px] mx-auto w-[90%] max-[600px]:w-[92%] flex flex-col gap-[48px] max-[480px]:gap-8">
          <SectionHeader
            eyebrow={"Programme Structure"}
            title={
              <>
                How It
                <span className="text-primary"> Works</span>
              </>
            }
            description={
              "A three-pillar structure ,  Talent Identification, Elite Training, and National Competition"
            }
            descriptionClassName={
              "min-[1350px]:!text-[16px] min-[1350px]:!leading-[28px]"
            }
            centered
          />

          {/* Step cards */}
          <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-1 max-[1000px]:gap-4 max-[480px]:gap-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="border-[1.14px] border-[#DFDFDF] rounded-[23.45px] bg-white px-8 py-8 flex flex-col gap-4 max-[1350px]:px-6 max-[1350px]:py-6 max-[480px]:px-5 max-[480px]:py-5"
              >
                <p className="font-bold text-[52px] leading-[52px] -tracking-[2%] text-text-color max-[1350px]:text-[44px] max-[480px]:text-[36px]">
                  {step.number}
                </p>
                <div className="flex flex-col gap-3">
                  <p className="font-bold text-[18px] leading-[24px] text-text-color max-[480px]:text-[16px]">
                    {step.title}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {step.points.map((pt, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 font-inter text-[13px] leading-[22px] text-text-color max-[480px]:text-[12px]"
                      >
                        <span className="text-primary font-bold mt-[1px] shrink-0">
                          →
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Roadmap ── */}
      <section className="w-full bg-white py-[72px] max-[1000px]:py-14 max-[480px]:py-10">
        <div className="max-w-[1440px] mx-auto w-[90%] max-[600px]:w-[92%] flex gap-[64px] items-stretch max-[1000px]:flex-col max-[1000px]:gap-10">
          {/* Left ,  timeline */}
          <div className="flex-1 flex flex-col gap-6 justify-center">
            <h2 className="font-bold uppercase text-[52px] leading-[52px] -tracking-[1%] text-text-color max-[1350px]:text-[44px] max-[1000px]:text-[36px] max-[480px]:text-[28px] max-[480px]:leading-[30px]">
              The <span className="text-primary">Roadmap</span>
            </h2>

            <div className="flex flex-col gap-4">
              {roadmap.map((item) => {
                const firstPeriod = item.text.indexOf(".");
                const boldPart =
                  firstPeriod !== -1
                    ? item.text.slice(0, firstPeriod + 1)
                    : item.text;
                const restPart =
                  firstPeriod !== -1 ? item.text.slice(firstPeriod + 1) : "";

                return (
                  <div
                    key={item.year}
                    className="bg-[#F6F6F6] rounded-[8px] flex items-center gap-[19.05px] py-[25.22px] min-h-[112.28px] pl-[20.18px] pr-[32.74px] max-[768px]:h-auto max-[768px]:py-4 max-[768px]:pr-5 max-[480px]:pl-4 max-[480px]:pr-4 max-[480px]:gap-3"
                  >
                    <div className="shrink-0 bg-[#242424] py-[14px] text-white rounded-[3.81px]  flex items-center justify-center px-4 min-w-[72px] text-center max-[1000px]:px-3 max-[480px]:px-3">
                      <p className="font-bebas text-[56px] leading-[58px] font-bold max-[1000px]:text-[20px] max-[480px]:text-[18px]">
                        {item.year}
                      </p>
                    </div>
                    <p className="font-inter text-[13px] leading-[19px] text-text-color max-[480px]:text-[12px] max-[480px]:leading-[20px]">
                      <span className="font-bold">{boldPart}</span>
                      {restPart}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right ,  image */}
          <div className="flex-1 self-stretch min-h-[460px] max-[1000px]:min-h-0 max-[1000px]:h-[360px] max-[600px]:h-[260px] max-[480px]:h-[220px]">
            <img
              src={mg0257}
              alt="The Roadmap"
              className="w-full h-full object-cover rounded-[12px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
