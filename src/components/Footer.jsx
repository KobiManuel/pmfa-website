import React from "react";
import { Icon } from "./Icon";
import { Link } from "react-router-dom";

const SOCIAL_HREF =
  "https://www.instagram.com/playmorefootballafrica?igsh=MWdxamE2bWNoMHZ5aA==";

const Footer = () => {
  return (
    <footer className="bg-black pt-[62.54px] pb-[33.67px] flex justify-center items-center max-[768px]:pt-10 max-[480px]:pt-8">
      <div className="max-w-[1440px] mx-auto w-[80%] flex flex-col gap-[40.85px] justify-between items-center max-[1000px]:w-[90%] max-[600px]:w-[92%] max-[600px]:gap-8">
        <div className="flex justify-between w-full pb-[56.37px] border-b-[0.4px] border-b-[#989898] max-[1000px]:flex-col max-[1000px]:gap-10 max-[1000px]:pb-10 max-[768px]:pb-8 max-[768px]:gap-8">
          {/* Brand Block */}
          <div className="flex flex-col gap-[21.09px] max-w-[35%] max-[1000px]:max-w-full">
            <div className="flex items-center gap-[13.53px]">
              <Icon.Logo className="max-[1350px]:w-[52px] max-[1350px]:h-[52px] max-[768px]:w-[40px] max-[768px]:h-[40px] max-[480px]:w-[32px] max-[480px]:h-[32px]" />
              <div className="gap-2 flex flex-col">
                <p className="uppercase font-bold text-[44.96px] leading-[44.96px] text-white max-[1350px]:text-[36px] max-[1350px]:leading-[36px] max-[768px]:text-[28px] max-[768px]:leading-[28px] max-[480px]:text-[22px] max-[480px]:leading-[22px]">
                  PMF Academy
                </p>
                <p className="uppercase font-bold text-[18.73px] tracking-[25%] leading-[18.73px] text-white max-[1350px]:text-[15px] max-[1350px]:leading-[15px] max-[768px]:text-[12px] max-[768px]:leading-[12px] max-[480px]:text-[10px]">
                  Play More Football
                </p>
              </div>
            </div>
            <p className="font-inter text-[16px] leading-[28px] text-white max-[1000px]:max-w-[480px]">
              A pioneering grassroots initiative committed to discovering,
              nurturing, and empowering young football talent across Africa.
            </p>
          </div>

          {/* Nav Columns */}
          <div className="flex items-start justify-between gap-[92px] h-fit max-[1350px]:gap-12 max-[1000px]:gap-8 max-[600px]:gap-0 max-[600px]:justify-between max-[480px]:grid max-[480px]:grid-cols-2 max-[480px]:gap-y-8 max-[480px]:gap-x-4">
            <ul className="flex flex-col text-[16px] leading-[34px]">
              <p className="text-primary tracking-[11%] font-extrabold">
                Navigation
              </p>
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Programs", to: "/programs" },
                { label: "Media", to: "/media" },
                { label: "Our Foundation", to: "/foundation" },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="font-medium tracking-[2%] text-[#8F8F8F] cursor-pointer hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col text-[16px] leading-[34px]">
              <p className="text-primary tracking-[11%] font-extrabold">
                Company
              </p>
              {[
                { label: "Our Impact", to: "/" },
                { label: "Careers", to: "/" },
                { label: "Media Kit", to: "/" },
                { label: "Privacy Policy", to: "/" },
                { label: "Partners", to: "/" },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="font-medium tracking-[2%] text-[#8F8F8F] cursor-pointer hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col text-[16px] leading-[34px]">
              <p className="text-primary tracking-[11%] font-extrabold">
                Resources
              </p>
              {[
                { label: "Scout Portal", to: "/" },
                { label: "Coach Portal", to: "/" },
                { label: "Parent Guide", to: "/" },
                { label: "Training Schedule", to: "/" },
                { label: "Contact Us", to: "/" },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="font-medium tracking-[2%] text-[#8F8F8F] cursor-pointer hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-between items-center w-full max-[768px]:flex-col max-[768px]:items-start max-[768px]:gap-5 max-[480px]:gap-4">
          <p className="text-[#6E6E6E] text-[16px] leading-[28px] font-inter max-[480px]:text-[13px] max-[480px]:leading-[22px]">
            © 2026 PMF Academy. All rights reserved. Registered in Nigeria. |
            info@pmfacademy.play
          </p>
          <div className="flex items-center gap-[30.17px] max-[480px]:gap-5">
            <a href={SOCIAL_HREF} target="_blank" rel="noopener noreferrer">
              <Icon.Tiktok />
            </a>
            <a href={SOCIAL_HREF} target="_blank" rel="noopener noreferrer">
              <Icon.Facebook />
            </a>
            <a href={SOCIAL_HREF} target="_blank" rel="noopener noreferrer">
              <Icon.Twitter />
            </a>
            <a href={SOCIAL_HREF} target="_blank" rel="noopener noreferrer">
              <Icon.Instagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
