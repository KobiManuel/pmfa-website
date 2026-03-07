import React from "react";
import SectionHeader from "../components/SectionHeader";
import founder from "../assets/images/founder-face.png";

const MeetOurFounder = () => {
  return (
    <section className="bg-white py-[52px]">
      <div className="max-w-[1440px] mx-auto w-[90%] flex items-center justify-between gap-[87.44px] *:w-1/2">
        <div className="flex flex-col gap-[42.82px]">
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
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center border-[0.5px] border-[#B4B4B4] rounded-2xl h-[28px] w-[182px] bg-[#E3E2E1] font-inter text-[12px] leading-[16px] text-[#606060]">
              UEFA Certified Coach
            </div>
            <div className="flex items-center justify-center border-[0.5px] border-[#B4B4B4] rounded-2xl h-[28px] w-[182px] bg-[#E3E2E1] font-inter text-[12px] leading-[16px] text-[#606060]">
              SFV Swiss FA Accredited{" "}
            </div>
            <div className="flex items-center justify-center border-[0.5px] border-[#B4B4B4] rounded-2xl h-[28px] w-[182px] bg-[#E3E2E1] font-inter text-[12px] leading-[16px] text-[#606060]">
              CEO OKLAPROD GmbH{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center rounded-2xl border-[1.44px] border-[#BFB2B2] bg-[#FAFAFA] px-[5%] justify-center py-[40px]">
          <img
            src={founder}
            alt="/"
            className="w-[228px] h-[228px] mb-[55.73px]"
          />
          <div className="font-inter mb-[40.95px]">
            <p className="font-bold text-[20px] leading-[28px] text-center">
              Lawrence Okonji
            </p>
            <p className="font-bold text-[20px] leading-[28px] text-center">
              Founder & CEO — PMFA
            </p>
          </div>
          <p className="font-inter text-[14px] leading-6 text-center">
            “With a passion for innovation and a deep understanding of global
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
