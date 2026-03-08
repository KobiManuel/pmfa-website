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
      className={`pt-[49.26px] pb-[55px] flex items-center justify-center bg-primary max-[768px]:pt-10 max-[768px]:pb-10 max-[480px]:pt-8 max-[480px]:pb-8 ${className}`}
    >
      <div className="min-w-1/2 text-center mx-auto flex flex-col items-center justify-center w-[90%] max-[600px]:w-[92%]">
        <p className="text-2xl uppercase tracking-[16%] text-text-color mb-[33.84px] font-bold max-[1350px]:text-[20px] max-[1000px]:text-[17px] max-[768px]:text-[14px] max-[768px]:mb-5 max-[480px]:text-[12px] max-[480px]:mb-4">
          {eyebrow}
        </p>
        <p className="text-[72px] uppercase leading-[72px] -tracking-[3%] mb-[28px] font-bold max-[1350px]:text-[56px] max-[1350px]:leading-[56px] max-[1000px]:text-[44px] max-[1000px]:leading-[44px] max-[1000px]:mb-5 max-[768px]:text-[36px] max-[768px]:leading-[36px] max-[768px]:mb-4 max-[480px]:text-[28px] max-[480px]:leading-[30px] max-[480px]:mb-3 max-[360px]:text-[24px] max-[360px]:leading-[26px]">
          {title}
        </p>
        <p className="text-xl -tracking-[1%] font-inter text-center mb-[22.1px] max-w-1/2 max-[1350px]:text-[17px] max-[1000px]:text-[15px] max-[1000px]:max-w-[80%] max-[768px]:text-[14px] max-[768px]:max-w-full max-[768px]:mb-4 max-[480px]:text-[13px] max-[480px]:mb-3">
          {description}
        </p>
        {buttons.length > 0 && (
          <div className="flex items-center gap-[15px] justify-center max-[480px]:flex-col max-[480px]:w-full max-[480px]:gap-3">
            {buttons.map(({ label, to, variant = "solid" }, i) => (
              <Link
                key={i}
                to={to}
                className={`h-[56px] uppercase font-bold px-[53px] flex items-center justify-center rounded-[4px] text-[16px] leading-[16px] max-[1350px]:h-[50px] max-[1350px]:px-10 max-[1350px]:text-[15px] max-[768px]:h-[46px] max-[768px]:px-8 max-[768px]:text-[14px] max-[480px]:w-full max-[480px]:h-[48px] max-[480px]:px-6 max-[480px]:text-[13px] ${
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
