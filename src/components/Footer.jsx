import React from "react";
import { Icon } from "./Icon";

const Footer = () => {
  return (
    <footer className="bg-black pt-[62.54px] pb-[33.67px] flex justify-center items-center">
      <div className="max-w-[1440px] mx-auto w-[80%] flex flex-col gap-[40.85px] justify-between items-center">
        <div className="flex justify-between w-full pb-[56.37px] border-b-[0.4px] border-b-[#989898]">
          <div className="flex flex-col gap-[21.09px] max-w-[35%]">
            <div className="flex items-center gap-[13.53px]">
              <Icon.Logo />
              <div className="gap-2 flex flex-col">
                <p className="font-bold text-[44.96px] leading-[44.96px] text-white">
                  PMF Academy
                </p>
                <p className="font-bold text-[18.73px] tracking-[25%] leading-[18.73px] text-white">
                  Play More Football
                </p>
              </div>
            </div>
            <p className="font-inter text-[16px] leading-[28px] text-white">
              A pioneering grassroots initiative committed to discovering,
              nurturing, and empowering young football talent across Africa.
            </p>
          </div>
          <div className="flex items-start justify-between gap-[92px] h-fit">
            {/* Navigation */}
            <ul className="flex flex-col text-[16px] leading-[34px]">
              <p className="text-primary tracking-[11%] font-extrabold">
                Navigation
              </p>
              <li>
                <a className="font-medium tracking-[2%] text-[#8F8F8F] cursor-pointer hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a className="font-medium tracking-[2%] text-[#8F8F8F] cursor-pointer hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a className="font-medium tracking-[2%] text-[#8F8F8F] cursor-pointer hover:text-white transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a className="font-medium tracking-[2%] text-[#8F8F8F] cursor-pointer hover:text-white transition-colors">
                  Media
                </a>
              </li>
              <li>
                <a className="font-medium tracking-[2%] text-[#8F8F8F] cursor-pointer hover:text-white transition-colors">
                  Our Foundation
                </a>
              </li>
            </ul>

            {/* Company */}
            <ul className="flex flex-col text-[16px] leading-[34px]">
              <p className="text-primary tracking-[11%] font-extrabold">
                Company
              </p>
              <li>
                <a className="font-medium tracking-[2%] text-[#8F8F8F] cursor-pointer hover:text-white transition-colors">
                  Our Impact
                </a>
              </li>
              <li>
                <a className="font-medium tracking-[2%] text-[#8F8F8F] cursor-pointer hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a className="font-medium tracking-[2%] text-[#8F8F8F] cursor-pointer hover:text-white transition-colors">
                  Media Kit
                </a>
              </li>
              <li>
                <a className="font-medium tracking-[2%] text-[#8F8F8F] cursor-pointer hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="font-medium tracking-[2%] text-[#8F8F8F] cursor-pointer hover:text-white transition-colors">
                  Partners
                </a>
              </li>
            </ul>

            {/* Resources */}
            <ul className="flex flex-col text-[16px] leading-[34px]">
              <p className="text-primary tracking-[11%] font-extrabold">
                Resources
              </p>
              <li>
                <a className="font-medium tracking-[2%] text-[#8F8F8F] cursor-pointer hover:text-white transition-colors">
                  Scout Portal
                </a>
              </li>
              <li>
                <a className="font-medium tracking-[2%] text-[#8F8F8F] cursor-pointer hover:text-white transition-colors">
                  Coach Portal
                </a>
              </li>
              <li>
                <a className="font-medium tracking-[2%] text-[#8F8F8F] cursor-pointer hover:text-white transition-colors">
                  Parent Guide
                </a>
              </li>
              <li>
                <a className="font-medium tracking-[2%] text-[#8F8F8F] cursor-pointer hover:text-white transition-colors">
                  Training Schedule
                </a>
              </li>
              <li>
                <a className="font-medium tracking-[2%] text-[#8F8F8F] cursor-pointer hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center w-full">
          <p className="text-[#6E6E6E] text-[16px] leading-[28px] font-inter">
            © 2026 PMF Academy. All rights reserved. Registered in Nigeria. |
            info@pmfacademy.org
          </p>
          <div className="flex items-center gap-[30.17px]">
            <Icon.Tiktok />
            <Icon.Facebook />
            <Icon.Twitter />
            <Icon.Instagram />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
