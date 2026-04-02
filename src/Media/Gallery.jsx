import React from "react";
import SectionHeader from "../components/SectionHeader";

import f215 from "../assets/images/Frame 215.png";
import f216 from "../assets/images/Frame 216.png";
import f217 from "../assets/images/Frame 217.png";
import f218 from "../assets/images/Frame 218.png";
import f219 from "../assets/images/Frame 219.png";
import f220 from "../assets/images/Frame 220.png";
import f221 from "../assets/images/Frame 221.png";
import f222 from "../assets/images/Frame 222.png";
import f223 from "../assets/images/Frame 223.png";
import f224 from "../assets/images/Frame 224.png";
import f225 from "../assets/images/Frame 225.png";
import f226 from "../assets/images/Frame 226.png";
import f227 from "../assets/images/Frame 227.png";
import f228 from "../assets/images/Frame 228.png";
import f229 from "../assets/images/Frame 229.png";
import f230 from "../assets/images/Frame 230.png";
import f231 from "../assets/images/Frame 231.png";
import f232 from "../assets/images/Frame 232.png";
import f233 from "../assets/images/Frame 233.png";
import f234 from "../assets/images/Frame 234.png";

const Gallery = () => {
  return (
    <section className="bg-[#F6F6F6] pt-[43.38px] pb-[121.35px]">
      <div className="max-w-[1440px] mx-auto w-[90%] flex flex-col gap-6 max-[800px]:gap-2">
        <SectionHeader
          eyebrow="Photo Gallery"
          title={
            <>
              Tournament
              <span className="text-primary"> Highlights</span>
            </>
          }
          description="Ajegunle Tournament, January 24th 2026 — 200+ children, 16 schools."
          descriptionClassName={
            "min-[1350px]:!text-[16px] min-[1350px]:!leading-[28px]"
          }
        />

        {/* Row 1: large left, two stacked right */}
        <div className="flex gap-6 max-[800px]:gap-2 h-[440px] max-[800px]:h-[280px]">
          <div className="flex-[2] min-w-0">
            <img
              loading="lazy"
              src={f215}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0 flex flex-col gap-6 max-[800px]:gap-2">
            <img
              loading="lazy"
              src={f216}
              alt=""
              className="w-full flex-1 object-cover min-h-0"
            />
            <img
              loading="lazy"
              src={f217}
              alt=""
              className="w-full flex-1 object-cover min-h-0"
            />
          </div>
        </div>

        {/* Row 2: three equal */}
        <div className="flex gap-6 max-[800px]:gap-2">
          <img
            loading="lazy"
            src={f218}
            alt=""
            className="flex-1 min-w-0 object-cover h-[220px] max-[800px]:h-[120px]"
          />
          <img
            loading="lazy"
            src={f219}
            alt=""
            className="flex-1 min-w-0 object-cover h-[220px] max-[800px]:h-[120px]"
          />
          <img
            loading="lazy"
            src={f220}
            alt=""
            className="flex-1 min-w-0 object-cover h-[220px] max-[800px]:h-[120px]"
          />
        </div>

        {/* Row 3: small left stacked, large right */}
        <div className="flex gap-6 max-[800px]:gap-2 h-[440px] max-[800px]:h-[280px]">
          <div className="flex-1 min-w-0 flex flex-col gap-6 max-[800px]:gap-2">
            <img
              loading="lazy"
              src={f221}
              alt=""
              className="w-full flex-1 object-cover min-h-0"
            />
            <img
              loading="lazy"
              src={f224}
              alt=""
              className="w-full flex-1 object-cover min-h-0"
            />
          </div>
          <div className="flex-[2] min-w-0">
            <img
              loading="lazy"
              src={f222}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Row 4: three equal */}
        <div className="flex gap-6 max-[800px]:gap-2">
          <img
            loading="lazy"
            src={f225}
            alt=""
            className="flex-1 min-w-0 object-cover h-[220px] max-[800px]:h-[120px]"
          />
          <img
            loading="lazy"
            src={f226}
            alt=""
            className="flex-1 min-w-0 object-cover h-[220px] max-[800px]:h-[120px]"
          />
          <img
            loading="lazy"
            src={f223}
            alt=""
            className="flex-1 min-w-0 object-cover h-[220px] max-[800px]:h-[120px]"
          />
        </div>

        {/* Row 5: large left, two stacked right */}
        <div className="flex gap-6 max-[800px]:gap-2 h-[440px] max-[800px]:h-[280px]">
          <div className="flex-[2] min-w-0">
            <img
              loading="lazy"
              src={f227}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0 flex flex-col gap-6 max-[800px]:gap-2">
            <img
              loading="lazy"
              src={f229}
              alt=""
              className="w-full flex-1 object-cover min-h-0"
            />
            <img
              loading="lazy"
              src={f230}
              alt=""
              className="w-full flex-1 object-cover min-h-0"
            />
          </div>
        </div>

        {/* Row 6: two equal */}
        <div className="flex gap-6 max-[800px]:gap-2">
          <img
            loading="lazy"
            src={f231}
            alt=""
            className="flex-1 min-w-0 object-cover h-[220px] max-[800px]:h-[120px]"
          />
          <img
            loading="lazy"
            src={f232}
            alt=""
            className="flex-1 min-w-0 object-cover h-[220px] max-[800px]:h-[120px]"
          />
        </div>

        {/* Row 7: small left stacked, large right */}
        <div className="flex gap-6 max-[800px]:gap-2 h-[440px] max-[800px]:h-[280px]">
          <div className="flex-1 min-w-0 flex flex-col gap-6 max-[800px]:gap-2">
            <img
              loading="lazy"
              src={f228}
              alt=""
              className="w-full flex-1 object-cover min-h-0"
            />
            <img
              loading="lazy"
              src={f233}
              alt=""
              className="w-full flex-1 object-cover min-h-0"
            />
          </div>
          <div className="flex-[2] min-w-0">
            <img
              loading="lazy"
              src={f234}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
