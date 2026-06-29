import React from "react";
import SectionHeader from "../components/SectionHeader";

const categories = [
  {
    code: "G3",
    name: "Fun Stage",
    ageRange: "U5 – U8 YEARS",
    format: "3 vs 3",
    description:
      "Professional-level training using modern football techniques with minimal coaching interference, allowing children's creativity and natural instincts to flourish.",
  },
  {
    code: "F4",
    name: "Early Foundation",
    ageRange: "U8 – U9 YEARS",
    format: "4 vs 4",
    description:
      "Builds love for football through fun and technical skills, Ball Mastery, Dribbling, Passing & Receiving. Players develop through the game itself, without coach interference.",
  },
  {
    code: "E5",
    name: "Late Foundation",
    ageRange: "U10 – U11 YEARS",
    format: "5 vs 5",
    description:
      "Fun and technical skills through small-sided games. Success is measured by engagement over results. The game is the teacher, players figure out the solutions themselves.",
  },
  {
    code: "D6",
    name: "Early Youth Development",
    ageRange: "U12 – U13 YEARS",
    format: "6 vs 6",
    description:
      "Introduction of the Principles of Play. Understanding game scenarios while refining Ball Mastery, Dribbling, Passing and Receiving.",
  },
  {
    code: "C7",
    name: "Youth Development",
    ageRange: "U14 – U15 YEARS",
    format: "7 vs 7",
    description:
      "Implementation of Principles of Play. Focuses on Tactical Awareness, Physical, Psychological and Technical skill development.",
  },
  {
    code: "B11",
    name: "Late Youth Development",
    ageRange: "U16 – U17 YEARS",
    format: "3 vs 3",
    description:
      "Implementation and Execution of the Principles of Play. Full-format competitive football at the highest grassroots level.",
  },
  {
    code: "A11",
    name: "Development Stage",
    ageRange: "U17 – U19 YEARS",
    format: "11 vs 11",
    isActive: true,
    description:
      "Refinement and Execution of the Principles of Play. The pinnacle of the PMFA pathway, players are prepared for professional football through elite coaching, competitive exposure, and structured scouting opportunities.",
    wide: true,
  },
];

const OurPlayerCategories = () => {
  return (
    <section className="w-full pt-[46.1px] pb-[98px] bg-white max-[768px]:pt-8 max-[768px]:pb-14 max-[480px]:pt-6 max-[480px]:pb-10">
      <div className="max-w-[1440px] w-[80%] mx-auto flex flex-col gap-[8px] items-center justify-center max-[1000px]:w-[90%] max-[600px]:w-[92%] max-[600px]:gap-8">
        <SectionHeader
          eyebrow="Player Pathways"
          title={
            <>
              Our Player <span className="text-primary">Categories</span>
            </>
          }
          description="Every player has a place at PMFA. Our seven-stage pathway is designed to grow with your child ,  from first kick to elite development."
          centered
        />

        {/* Top row ,  4 cards */}
        <div className="mt-[44.1px] grid grid-cols-4 gap-2 w-full max-[1350px]:gap-2 max-[1000px]:grid-cols-2 max-[480px]:grid-cols-1 max-[480px]:gap-2">
          {categories.slice(0, 4).map((cat) => (
            <CategoryCard key={cat.code} cat={cat} />
          ))}
        </div>

        {/* Bottom row ,  2 normal + 1 wide */}
        <div className="grid grid-cols-4 gap-2 w-full max-[1350px]:gap-2 max-[1000px]:grid-cols-2 max-[480px]:grid-cols-1 max-[480px]:gap-2">
          {categories.slice(4, 6).map((cat) => (
            <CategoryCard key={cat.code} cat={cat} />
          ))}
          <div className="col-span-2 max-[1000px]:col-span-1">
            <CategoryCard cat={categories[6]} />
          </div>
        </div>
      </div>
    </section>
  );
};

const CategoryCard = ({ cat }) => {
  return (
    <div className="h-full flex flex-col gap-[12px] rounded-[8px] border-[1.44px] border-[#DFDFDF] bg-[#F8F8F8] px-[28px] py-[28px] max-[1350px]:px-6 max-[1350px]:py-6 max-[768px]:py-5 max-[768px]:px-5">
      {/* Code + Format badge */}
      <div className="flex items-start justify-between">
        <p className="text-primary font-black text-[56px] leading-[1] max-[1350px]:text-[44px] max-[1000px]:text-[38px] max-[768px]:text-[34px]">
          {cat.code}
        </p>
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-medium text-[#555] bg-[#E8E8E8] rounded-full px-3 py-1 leading-none">
            {cat.format}
          </span>
          {cat.isActive && (
            <span className="text-[12px] font-bold text-[#7a6a00] bg-primary/30 rounded-full px-3 py-1 leading-none uppercase tracking-wide">
              Active Youth
            </span>
          )}
        </div>
      </div>

      {/* Name + Age */}
      <div className="flex flex-col gap-[4px]">
        <p className="font-black uppercase text-[18px] leading-[22px] max-[1350px]:text-[16px] max-[768px]:text-[15px]">
          {cat.name}
        </p>
        <p className="font-bold text-[11px] tracking-[10%] text-[#444] uppercase max-[768px]:text-[10px]">
          {cat.ageRange}
        </p>
      </div>

      {/* Description */}
      <p className="font-inter text-[14px] leading-[22px] text-[#333] max-[1350px]:text-[13px] max-[768px]:text-[12px] max-[768px]:leading-[19px]">
        {cat.description}
      </p>
    </div>
  );
};

export default OurPlayerCategories;
