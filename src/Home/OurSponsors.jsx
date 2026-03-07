import React from "react";
import { Icon } from "../components/Icon";

const OurSponsors = () => {
  return (
    <section className="pt-[56.26px] pb-[87.55px] bg-[#F8F8F8] flex flex-col gap-[41.83px] justify-center items-center">
      <p className="text-xl text-[#6E6E6E] tracking-[40%] font-bold uppercase">
        Our Partners & Sponsors
      </p>
      <Icon.Brands />
    </section>
  );
};

export default OurSponsors;
