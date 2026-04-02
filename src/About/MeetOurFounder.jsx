import React from "react";
import SectionHeader from "../components/SectionHeader";
import founder from "../assets/images/founder-face.png";
import { Link } from "react-router-dom";

const MeetOurFounder = () => {
  return (
    <section className="bg-white py-[52px] max-[768px]:py-10 max-[480px]:py-8">
      <div className="max-w-[1440px] mx-auto w-[90%] flex flex-row-reverse items-center justify-between gap-[87.44px] *:w-1/2 max-[1350px]:gap-14 max-[1000px]:flex-col max-[1000px]:*:w-full max-[1000px]:gap-10 max-[600px]:w-[92%] max-[600px]:gap-8">
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
          <p className="font-inter text-[14px] leading-6 text-center mb-[30px] max-[480px]:text-[13px] max-[480px]:leading-[22px]">
            "With a passion for innovation and a deep understanding of global
            football culture, Lawrence Okonji continues to bridge the gap
            between talent and opportunity, shaping the future of the beautiful
            game."
          </p>
          <Link
            to="https://www.linkedin.com/in/lawrence-okonji-25200b77/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#0077B5] hover:bg-[#0077B5]/90 transition-colors duration-200 text-white font-inter text-[14px] font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="flex-shrink-0"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.771 24h20.451c0.979 0 1.771-0.773 1.771-1.729V1.729C24 0.774 23.208 0 22.225 0z" />
            </svg>
            Connect on LinkedIn
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MeetOurFounder;
