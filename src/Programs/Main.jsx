import React from "react";
import Hero from "./Hero";
import FooterBanner from "../components/FooterBanner";
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
      <FooterBanner
        title="Ready To Get Started?"
        description="Contact us today to learn about programmes available in your community."
        buttons={[
          {
            label: "Support us today",
            onClick: handleSupportClick,
            variant: "solid",
          },
        ]}
        className={"pt-[112.55px]! pb-[77px]!"}
        underline
      />
    </>
  );
};

export default Main;
