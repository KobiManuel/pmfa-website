import React from "react";
import Hero from "./Hero";
import MeetOurFounder from "./MeetOurFounder";
import OurPhilosophy from "./OurPhilosophy";
import HowWeTrain from "./HowWeTrain";
import KeyMilestones from "./KeyMilestones";
import FooterBanner from "../components/FooterBanner";
import CoreValues from "./Values";
import { useLocation, useNavigate } from "react-router-dom";

const Main = () => {
  const { pathname } = useLocation();
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
        buttons={[
          {
            label: "Support us today",
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
