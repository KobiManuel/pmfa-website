import React from "react";
import Hero from "./Hero";
import WhoWeAre from "./WhoWeAre";
import OurImpact from "./OurImpact";
import OurPrograms from "./OurPrograms";
import Voices from "./Voices";
import Faqs from "./Faqs";
import OurSponsors from "./OurSponsors";
import FooterBanner from "../components/FooterBanner";

const Home = () => {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <OurImpact />
      <OurPrograms />
      <Voices />
      <Faqs />
      <OurSponsors />
      <FooterBanner
        eyebrow="Get in touch"
        title="Join the movement"
        description="Whether you're a parent, coach, sponsor, or passionate supporter, we'd love to hear from you. Together, we can create opportunities for young footballers across Africa."
        buttons={[
          { label: "Support us today", href: "/support", variant: "solid" },
          { label: "Join 2026 Intake", href: "/contact", variant: "outline" },
        ]}
      />
    </>
  );
};

export default Home;
