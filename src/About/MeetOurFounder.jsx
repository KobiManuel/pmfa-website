import React from "react";
import SectionHeader from "../components/SectionHeader";
import founder from "../assets/images/founder-face.png";

const MeetOurFounder = () => {
  return (
    <section className="bg-white py-[52px] max-[768px]:py-10 max-[480px]:py-8">
      <div className="max-w-[1440px] mx-auto w-[90%] flex items-center justify-between gap-[87.44px] *:w-1/2 max-[1350px]:gap-14 max-[1000px]:flex-col max-[1000px]:*:w-full max-[1000px]:gap-10 max-[600px]:w-[92%] max-[600px]:gap-8">
        {/* Left — Text Block */}
        <div className="flex flex-col gap-[42.82px] max-[1350px]:gap-8 max-[480px]:gap-6">
          <SectionHeader
            title={
              <>
                Meet Our
                <span className="text-primary"> Founder</span>
              </>
            }
            description="Lawrence Okonji is a dynamic sports entrepreneur, UEFA-certified coach, and passionate advocate for youth football development. As the CEO of OKLAPROD GmbH Switzerland, he has been instrumental in shaping football events and grassroots programs that inspire young athletes.
A certified coach accredited by both UEFA and the Swiss Football Federation, Lawrence currently coaches the Regensdorf Football Club Youth League Under-19 team and previously coached the Zurich City Football Club Under-15 team.
Beyond coaching, Lawrence is a sports consultant and coordinator for 1TURNIER Switzerland, overseeing high-level football tournaments. His expertise extends to organising prestigious football programs including the Real Madrid Kids Camp in Glattbrugg, Street Soccer Glattbrugg, and youth tournaments across Switzerland. He is also the founder of 9JA Energy Drink."
            descriptionClassName={"!text-[16px] !leading-[28px]"}
          />
          <div className="flex items-center gap-2 max-[480px]:flex-wrap">
            {[
              "UEFA Certified Coach",
              "SFV Swiss FA Accredited",
              "CEO OKLAPROD GmbH",
            ].map((badge) => (
              <div
                key={badge}
                className="flex items-center justify-center border-[0.5px] border-[#B4B4B4] rounded-2xl h-[28px] w-[182px] bg-[#E3E2E1] font-inter text-[12px] leading-[16px] text-[#606060] max-[1350px]:w-[160px] max-[1000px]:w-auto max-[1000px]:px-4 max-[480px]:h-[26px] max-[480px]:text-[11px]"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>

        {/* Right — Founder Card */}
        <div className="flex flex-col items-center rounded-2xl border-[1.44px] border-[#BFB2B2] bg-[#FAFAFA] px-[5%] justify-center py-[40px] max-[1350px]:py-8 max-[1000px]:max-w-[480px] max-[1000px]:mx-auto max-[1000px]:w-full max-[768px]:max-w-full max-[480px]:py-6 max-[480px]:px-6">
          <img
            src={founder}
            alt="Lawrence Okonji"
            className="w-[228px] h-[228px] mb-[55.73px] max-[1350px]:w-[196px] max-[1350px]:h-[196px] max-[1350px]:mb-10 max-[768px]:w-[160px] max-[768px]:h-[160px] max-[768px]:mb-8 max-[480px]:w-[130px] max-[480px]:h-[130px] max-[480px]:mb-6"
          />
          <div className="font-inter mb-[40.95px] max-[1350px]:mb-8 max-[768px]:mb-6 max-[480px]:mb-5">
            <p className="font-bold text-[20px] leading-[28px] text-center max-[1350px]:text-[18px] max-[768px]:text-[16px] max-[480px]:text-[15px] max-[480px]:leading-[24px]">
              Lawrence Okonji
            </p>
            <p className="font-bold text-[20px] leading-[28px] text-center max-[1350px]:text-[18px] max-[768px]:text-[16px] max-[480px]:text-[15px] max-[480px]:leading-[24px]">
              Founder & CEO — PMFA
            </p>
          </div>
          <p className="font-inter text-[14px] leading-6 text-center max-[480px]:text-[13px] max-[480px]:leading-[22px]">
            "With a passion for innovation and a deep understanding of global
            football culture, Lawrence Okonji continues to bridge the gap
            between talent and opportunity, shaping the future of the beautiful
            game."
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeetOurFounder;
