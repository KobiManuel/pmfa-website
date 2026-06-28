import React, { useEffect } from "react";
import Hero from "./Hero";
import YourImpact from "./YourImpact";
import FooterBanner from "../components/FooterBanner";
import SupportSection from "./SupportSection";
import { useLocation, useNavigate } from "react-router-dom";
import AboutPMFF from "./AboutPMFF";
import WhatWeDo from "./WhatWeDo";

const Main = () => {
  const { state, pathname } = useLocation();

  const navigation = useNavigate();

  const handleSupportClick = () => {
    console.log("clickeddd");
    if (pathname === "/foundation") {
      // Already on the page, just scroll
      document
        .getElementById("support")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to foundation, pass scroll target via state
      navigation("/foundation", { state: { scrollTo: "support" } });
    }
  };

  useEffect(() => {
    if (state?.scrollTo) {
      // Small timeout lets the page render before scrolling
      const timeout = setTimeout(() => {
        document
          .getElementById(state.scrollTo)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [state]);
  return (
    <>
      <Hero />
      <AboutPMFF />
      <WhatWeDo />
      {/* <YourImpact />
      <SupportSection /> */}
      <FooterBanner
        title="Become A Corporate Partner"
        description="Partner with PMF Foundation and help us scale our impact across Nigeria and Africa. Let's build the future of African football together."
        buttons={[
          {
            label: "Contact Our Partnerships Team",
            onClick: handleSupportClick,
            variant: "solid",
          },
        ]}
        className={"min-[1350px]:pt-[112.55px]!"}
      />
    </>
  );
};

export default Main;
