import React from "react";
import Hero from "./Hero";
import YourImpact from "./YourImpact";
import FooterBanner from "../components/FooterBanner";

const Main = () => {
  return (
    <>
      <Hero />
      <YourImpact />
      <FooterBanner
        title="Become A Corporate Partner"
        description="Partner with PMF Foundation and help us scale our impact across Nigeria and Africa. Let's build the future of African football together."
        buttons={[
          {
            label: "Contact Our Partnerships Team",
            href: "/",
            variant: "solid",
          },
        ]}
        className={"pt-[112.55px]!"}
      />
    </>
  );
};

export default Main;
