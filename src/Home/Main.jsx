import React from "react";
import Hero from "./Hero";
import WhoWeAre from "./WhoWeAre";
import OurImpact from "./OurImpact";
import OurPrograms from "./OurPrograms";
import Voices from "./Voices";
import Faqs from "./Faqs";
import OurSponsors from "./OurSponsors";
import FooterBanner from "../components/FooterBanner";
import { useLocation, useNavigate } from "react-router-dom";
import OurPlayerCategories from "./OurPlayerCAtegories";

const Home = () => {
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
      <WhoWeAre />
      <OurImpact />
      <OurPlayerCategories />
      <OurPrograms />
      <Voices />
      <Faqs />
      <OurSponsors />
      <FooterBanner
        eyebrow="Get in touch"
        title="Join the movement"
        description="Whether you're a parent, coach, sponsor, or passionate supporter, we'd love to hear from you. Together, we can create opportunities for young footballers across Africa."
        buttons={[
          {
            label: "Support us today",
            onClick: handleSupportClick,
            variant: "solid",
          },
          {
            label: "Join 2026 Intake",
            to: "https://forms.gle/UR7TFfPjQE7CHjjM9",
            variant: "outline",
          },
        ]}
      />
    </>
  );
};

export default Home;
