import React from "react";
import Hero from "./Hero";
import MeetOurFounder from "./MeetOurFounder";
import OurPhilosophy from "./OurPhilosophy";
import HowWeTrain from "./HowWeTrain";
import KeyMilestones from "./KeyMilestones";
import FooterBanner from "../components/FooterBanner";
import CoreValues from "./Values";

const Main = () => {
  return (
    <>
      <Hero />
      <MeetOurFounder />
      <OurPhilosophy />
      <CoreValues />
      <HowWeTrain />
      <KeyMilestones />
      <FooterBanner
        title="Be Part Of The Journey"
        description="Whether you're a parent, coach, sponsor, or passionate supporter, we'd love to hear from you. Together, we can create opportunities for young footballers across Africa."
        buttons={[{ label: "Support us today", href: "/", variant: "solid" }]}
        className={"min-[1350px]:pt-[112.55px]!"}
      />
    </>
  );
};

export default Main;
