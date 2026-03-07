import React from "react";
import SectionHeader from "../components/SectionHeader";
import { Icon } from "../components/Icon";

const HowWeTrain = () => {
  return (
    <section className="bg-[#F6F6F6] py-[50px]">
      <div className="w-full bg-white py-[30px]">
        <div className="max-w-[1440px] mx-auto w-[80%] flex flex-col items-center justify-between gap-[64.2px]">
          <SectionHeader
            eyebrow={"How we train"}
            title={
              <>
                Training
                <span className="text-primary"> Methodology</span>
              </>
            }
            description="Our methodology follows a real football approach — the game is the teacher. Players learn best by playing. Sessions are built around carefully designed small-sided games, creating more touches, more decisions, and more involvement for every player."
            descriptionClassName={"!text-[20px] !leading-[32px]"}
            centered
          />
          <div className="grid grid-cols-3 items-center gap-4 justify-between w-full">
            <div className="px-[51.18px] py-[48.5px] rounded-2xl tracking-[1%] text-base font-inter border border-[#E5E5E5]  flex flex-col bg-[#F6F6F6] justify-center">
              <p className="font-bold">01</p>
              <p className="font-bold">Understand Game Scenarios</p>
              <p>
                Players are placed in realistic game situations that mirror
                match-day conditions and tactical requirements.
              </p>
            </div>
            <div className="px-[51.18px] py-[48.5px] rounded-2xl tracking-[1%] text-base font-inter border border-[#E5E5E5]  flex flex-col bg-[#F6F6F6] justify-center">
              <p className="font-bold">02</p>
              <p className="font-bold">Decisions Under Pressure</p>
              <p>
                Small-sided games create constant decision-making moments,
                developing sharp, confident footballing intelligence.
              </p>
            </div>
            <div className="px-[51.18px] py-[48.5px] rounded-2xl tracking-[1%] text-base font-inter border border-[#E5E5E5]  flex flex-col bg-[#F6F6F6] justify-center">
              <p className="font-bold">03</p>
              <p className="font-bold">Manage Game Moments</p>
              <p>
                Players learn to read and manage different phases — in
                possession, out of possession, and transitions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeTrain;
