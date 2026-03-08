import React from "react";
import { Icon } from "../components/Icon";

const OurSponsors = () => {
  return (
    <section className="max-[1200px]:gap-0 max-[1200px]:pt-6 max-[1200px]:pb-0 pt-[56.26px] pb-[87.55px] bg-[#F8F8F8] flex flex-col gap-[41.83px] justify-center items-center">
      <p className="text-xl text-[#6E6E6E] tracking-[40%] font-bold uppercase max-[600px]:text-[16px] max-[600px]:leading-[24px] max-[480px]:text-[13px] max-[480px]:leading-[20px]">
        Our Partners & Sponsors
      </p>
      <Icon.Brands className="max-[1200px]:w-full max-[1000px]:h-[133.0px] max-[500px]:h-[80px]" />
    </section>
  );
};

export default OurSponsors;
