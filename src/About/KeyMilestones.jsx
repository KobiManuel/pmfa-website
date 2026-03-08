import React from "react";
import SectionHeader from "../components/SectionHeader";
import placeholderImage from "../assets/images/key-milestones.png";

const milestones = [
  {
    date: "January 2025",
    title: "First Coach Training Session",
    description:
      "Over 50 coaches trained in Lagos on the PMF Methodology & Concept, equipping them with tools to translate training into real match situations. A landmark moment for grassroots coaching in Nigeria.",
  },
  {
    date: "March 2025",
    title: "Pre-Exhibition & Exhibition Matches",
    description:
      "More than 150 children participated across events designed to help them learn football principles in real game scenarios. These matches highlighted emerging talent within local communities.",
  },
  {
    date: "September 2025",
    title: "Second Coach Training, Lagos",
    description:
      "A follow-up coach education workshop reinforcing the PMF Methodology, growing our network of trained community coaches committed to youth development across Lagos State.",
  },
  {
    date: "January 2026",
    title: "Ajegunle Inaugural Tournament",
    description:
      "PMF launched its first major community project in Ajegunle, hosting a football tournament on January 24th that brought together over 200 children from 16 schools. Every participant received a medal, reinforcing PMF's focus on participation and positive engagement.",
  },
  {
    date: "2026 — Onwards",
    title: "Scaling Across Lagos & Nigeria",
    description:
      "With plans to expand across Lagos State and beyond, PMF aims to reach over 600 children in multiple communities, establishing a sustainable model for grassroots football development across Africa.",
  },
];

const KeyMilestones = () => {
  return (
    <section className="bg-white py-[52px] max-[768px]:py-10 max-[480px]:py-8">
      <div className="max-w-[1440px] mx-auto w-[85%] flex items-center justify-between gap-[87.44px] *:w-1/2 max-[1000px]:flex-col max-[1000px]:*:w-full max-[1000px]:gap-10 max-[600px]:w-[92%]">
        {/* Left — timeline */}
        <div className="flex flex-col gap-[42.82px] max-[600px]:gap-8">
          <SectionHeader
            eyebrow="Our Journey"
            title={
              <>
                Key <span className="text-primary">Milestones</span>
              </>
            }
          />

          {/* Timeline list */}
          <div className="relative flex flex-col">
            {/* Vertical line */}
            <div className="absolute left-[5px] top-2 bottom-2 w-px bg-[#A3A3A3]" />

            {milestones.map((m, i) => (
              <div
                key={i}
                className="relative flex gap-[28px] pb-[40px] last:pb-0 max-[480px]:gap-5 max-[480px]:pb-8"
              >
                {/* Dot */}
                <div className="relative z-10 mt-[9px] w-[11px] h-[11px] shrink-0 rounded-full bg-[#A3A3A3]" />

                {/* Content */}
                <div className="flex flex-col">
                  <p className="text-[16px] leading-[33px] font-medium tracking-[21%] text-text-color uppercase max-[480px]:text-[13px] max-[480px]:leading-[28px]">
                    {m.date}
                  </p>
                  <p className="font-bold text-[24px] leading-[33px] text-text-color max-[1350px]:text-[20px] max-[480px]:text-[17px] max-[480px]:leading-[26px]">
                    {m.title}
                  </p>
                  <p className="font-inter text-[11px] leading-[21px] text-text-color">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image */}
        <div className="rounded-2xl overflow-hidden h-full max-[1000px]:max-h-[500px] max-[600px]:max-h-[380px] max-[480px]:max-h-[280px]">
          <img
            src={placeholderImage}
            alt="Key Milestones"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default KeyMilestones;
