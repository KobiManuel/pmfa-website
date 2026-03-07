import React from "react";
import Hero from "./Hero";
import FooterBanner from "../components/FooterBanner";

const Main = () => {
  return (
    <>
      <Hero />
      <FooterBanner
        title="Ready To Get Started?"
        description="Contact us today to learn about programmes available in your community."
        buttons={[{ label: "Support us today", href: "/", variant: "solid" }]}
        className={"pt-[112.55px]! pb-[77px]!"}
        underline
      />
    </>
  );
};

export default Main;
