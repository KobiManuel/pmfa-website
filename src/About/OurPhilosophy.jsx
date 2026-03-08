import React from "react";
import SectionHeader from "../components/SectionHeader";

const OurPhilosophy = () => {
  return (
    <section className="bg-[#F6F6F6] py-[50px] max-[768px]:py-10 max-[480px]:py-8">
      <div className="max-w-[1440px] mx-auto w-[90%] flex items-center justify-between gap-[90.54px] *:w-1/2 max-[1000px]:flex-col max-[1000px]:*:w-full max-[1000px]:gap-8 max-[600px]:w-[92%]">
        <SectionHeader
          eyebrow={"Our Philosophy"}
          title={
            <>
              To Play Football
              <span className="text-primary"> With Ideas</span>
            </>
          }
          description="At PMFA, our philosophy is simple: we train the way we want to play, and we play the way we train.

Our training sessions form the foundation of our identity. Every activity, drill, and game scenario reflects how we want our players to think, move, and compete on match day. Football is not just about physical ability — it is about intelligence, creativity, and decision-making.

Our playing philosophy shapes our thoughts and actions both on and off the pitch. We aim to develop disciplined, confident, and tactically aware players who understand the game and express themselves positively."
          descriptionClassName={"!text-[16px] !leading-[28px]"}
        />
        <div className="flex flex-col gap-[28px] max-[480px]:gap-4">
          <div className="flex flex-col items-center rounded-2xl border-[1.44px] border-[#E8E8E8] bg-white px-[7%] justify-center py-[27.69px] max-[480px]:py-5">
            <p className="text-[16px] leading-[28px] font-inter text-text-color max-[480px]:text-[14px] max-[480px]:leading-[24px]">
              Football is not just about physical ability. It is about
              intelligence, creativity, and decision-making.
            </p>
          </div>
          <div className="flex flex-col rounded-2xl border-[1.44px] border-[#E8E8E8] bg-white px-[7%] justify-center py-[27.69px] max-[480px]:py-5">
            <p className="text-[16px] leading-[28px] font-bold font-inter text-text-color max-[480px]:text-[14px] max-[480px]:leading-[24px]">
              FIFA Grassroots Coaching Essentials
              <p className="text-[16px] leading-[28px] font-normal font-inter text-text-color max-[480px]:text-[14px] max-[480px]:leading-[24px]">
                • Making practice fun <br />
                • Making practice safe <br />
                • Making practice effective <br />
                • Making practice inclusive <br />
                • Applying game-based learning <br />• Keeping players active
              </p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPhilosophy;
