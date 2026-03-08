import React from "react";
import SectionHeader from "../components/SectionHeader";

const cards = [
  {
    number: "01",
    title: "Understand Game Scenarios",
    body: "Players are placed in realistic game situations that mirror match-day conditions and tactical requirements.",
  },
  {
    number: "02",
    title: "Decisions Under Pressure",
    body: "Small-sided games create constant decision-making moments, developing sharp, confident footballing intelligence.",
  },
  {
    number: "03",
    title: "Manage Game Moments",
    body: "Players learn to read and manage different phases — in possession, out of possession, and transitions.",
  },
];

const HowWeTrain = () => {
  return (
    <section className="bg-[#F6F6F6] py-[50px] max-[768px]:py-10 max-[480px]:py-8">
      <div className="w-full bg-white py-[30px] max-[480px]:py-6">
        <div className="max-w-[1440px] mx-auto w-[80%] flex flex-col items-center justify-between gap-[64.2px] max-[1000px]:w-[90%] max-[600px]:w-[92%] max-[600px]:gap-10">
          <SectionHeader
            eyebrow={"How we train"}
            title={
              <>
                Training
                <span className="text-primary"> Methodology</span>
              </>
            }
            description="Our methodology follows a real football approach — the game is the teacher. Players learn best by playing. Sessions are built around carefully designed small-sided games, creating more touches, more decisions, and more involvement for every player."
            descriptionClassName="min-[1350px]:text-[20px] min-[1350px]:leading-[32px]"
            centered
          />
          <div className="grid grid-cols-3 items-center gap-4 justify-between w-full max-[1000px]:grid-cols-1 max-[480px]:gap-3">
            {cards.map((card) => (
              <div
                key={card.number}
                className="px-[51.18px] py-[48.5px] rounded-2xl tracking-[1%] text-base font-inter border border-[#E5E5E5] flex flex-col bg-[#F6F6F6] justify-center gap-1 max-[1350px]:px-10 max-[1350px]:py-10 max-[1000px]:flex-row max-[1000px]:items-start max-[1000px]:gap-6 max-[600px]:px-6 max-[600px]:py-6 max-[480px]:px-5 max-[480px]:py-5"
              >
                <p className="font-bold text-primary text-[20px] max-[1000px]:text-[24px] max-[1000px]:shrink-0 max-[480px]:text-[18px]">
                  {card.number}
                </p>
                <div className="flex flex-col gap-1">
                  <p className="font-bold">{card.title}</p>
                  <p>{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeTrain;
