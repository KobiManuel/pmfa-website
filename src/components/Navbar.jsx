import React, { useEffect, useState } from "react";
import face from "../assets/images/player-face.png";
import { Icon } from "./Icon";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "../components/MenuIcon/MenuIcon";

const Navbar = () => {
  const { pathname } = useLocation();
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuToggle = () => setMenuActive((prev) => !prev);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Programs", to: "/programs" },
    { label: "Media", to: "/media" },
    { label: "Our Foundation", to: "/foundation" },
  ];

  useEffect(() => {
    if (menuActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuActive]);

  return (
    <nav>
      {/* Top banner — hidden on mobile */}
      <div className="max-[1000px]:hidden bg-primary font-sans w-full h-[141px] flex justify-center items-center gap-[47.17px]">
        <img
          src={face}
          alt="/"
          className="w-[163.01px] h-[141.22px] object-contain"
        />
        <div className="flex items-center gap-[44.5px]">
          <div className="flex flex-col gap-[11.99px] items-center  relative after:absolute after:h-full after:w-px after:bg-black after:top-0 after:-right-[22px]">
            <p className="font-bold text-base tracking-[24%]">
              CHINEDU OBI — AJEGUNLE FC
            </p>
            <p className="font-bold text-2xl leading-[24px]! tracking-[10%] text-center">
              ⭐ PMFA STAR PLAYER OF THE SEASON
            </p>
          </div>
          <p className="font-bold text-base tracking-[20%]">
            2026 SEASON · Presented by 9ja Energy Drink{" "}
          </p>
        </div>
      </div>

      {/* Main navbar */}
      <div className="h-[101px] bg-[#F6F6F6] flex items-center justify-center relative z-50">
        <div className="flex justify-between items-center w-[90%] mx-auto max-w-[1440px]">
          <div className="flex items-center gap-[13.53px]">
            <Icon.Logo className="max-[800px]:w-10! max-[800px]:h-10! " />
            <div className="gap-2 flex flex-col max-[800px]:gap-0">
              <p className="font-bold text-[30.96px] leading-[30.96px]  max-[800px]:text-xl">
                PMF Academy
              </p>
              <p className="font-bold text-[12.9px] tracking-[25%] leading-[12.9px] max-[800px]:-mt-1">
                Play More Football
              </p>
            </div>
          </div>

          {/* MenuIcon — visible only on mobile */}
          <div className="min-[1000px]:hidden">
            <MenuIcon
              handleMenuToggle={handleMenuToggle}
              menuActive={menuActive}
              setMenuActive={setMenuActive}
            />
          </div>

          {/* Desktop nav */}
          <div className="flex items-center gap-[46.75px] max-[1000px]:hidden">
            <ul className="flex items-center gap-10">
              {navLinks.map(({ label, to }) => {
                const isActive = pathname === to;
                return (
                  <li key={to}>
                    <Link
                      to={to}
                      className={`text-[15px] font-medium leading-[17.29px] pb-px border-b transition-all ${
                        isActive
                          ? "border-b-primary border-b-2"
                          : "border-b-black"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <button className="cursor-pointer rounded-[4px] bg-primary h-[57px] w-[177px] text-[16px] leading-4 font-bold underline">
              SUPPORT US
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`min-[1000px]:hidden fixed flex flex-col justify-between top-[101px] left-0 w-full bg-[#F6F6F6] z-40 overflow-hidden transition-all duration-300 ease-in-out ${
          menuActive
            ? "max-h-screen opacity-100 h-screen pb-40"
            : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col w-[90%] mx-auto py-4">
          {navLinks.map(({ label, to }, i) => {
            const isActive = pathname === to;
            return (
              <li
                key={to}
                className="border-b border-gray-200 last:border-b-0"
                style={{
                  transitionDelay: menuActive ? `${i * 50}ms` : "0ms",
                  transform: menuActive ? "translateX(0)" : "translateX(-16px)",
                  opacity: menuActive ? 1 : 0,
                  transition: `transform 300ms ease ${i * 50}ms, opacity 300ms ease ${i * 50}ms`,
                }}
              >
                <Link
                  to={to}
                  onClick={() => setMenuActive(false)}
                  className={`block py-4 text-[15px] font-medium leading-[17.29px] transition-all ${
                    isActive ? "text-primary font-bold" : "text-black"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div
          className="pt-4 w-[90%] mx-auto"
          style={{
            transitionDelay: menuActive ? `${navLinks.length * 50}ms` : "0ms",
            transform: menuActive ? "translateX(0)" : "translateX(-16px)",
            opacity: menuActive ? 1 : 0,
            transition: `transform 300ms ease ${navLinks.length * 50}ms, opacity 300ms ease ${navLinks.length * 50}ms`,
          }}
        >
          <button className="cursor-pointer rounded-[4px] bg-primary w-full h-[57px] text-[16px] leading-4 font-bold underline">
            SUPPORT US
          </button>
        </div>
      </div>

      {/* Backdrop */}
      {menuActive && (
        <div
          className="min-[1000px]:hidden fixed inset-0 top-[101px] bg-black/20 z-30"
          onClick={() => setMenuActive(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
