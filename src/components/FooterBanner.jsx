import React from "react";
import { Link } from "react-router-dom";

const FooterBanner = ({
  eyebrow,
  title,
  description,
  className,
  underline,
  buttons = [],
}) => {
  return (
    <section
      className={`pt-[49.26px] pb-[55px] flex items-center justify-center bg-primary ${className}`}
    >
      <div className="min-w-1/2 text-center mx-auto flex flex-col items-center justify-center">
        <p className="text-2xl uppercase tracking-[16%] text-text-color mb-[33.84px] font-bold">
          {eyebrow}
        </p>
        <p className="text-[72px] uppercase leading-6 -tracking-[3%] mb-[28px] font-bold">
          {title}
        </p>
        <p className="text-xl -tracking-[1%] font-inter text-center mb-[22.1px]">
          {description}
        </p>
        {buttons.length > 0 && (
          <div className="flex items-center gap-[15px] justify-center">
            {buttons.map(({ label, to, variant = "solid" }, i) => (
              <Link
                key={i}
                to={to}
                className={`h-[56px] uppercase font-bold px-[53px] flex items-center justify-center rounded-[4px] text-[16px] leading-[16px] ${
                  variant === "solid"
                    ? "bg-black text-white"
                    : "bg-transparent border-[3px] border-[#333333] text-black"
                } ${underline && "underline"}`}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FooterBanner;
