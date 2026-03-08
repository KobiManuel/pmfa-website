import React from "react";
import heroBanner from "../assets/images/hero-banner.png";
import { useEffect, useRef, useState } from "react";

const useCountUp = (target, duration = 2000, isVisible) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    setCount(0);
    const steps = 60;
    const increment = target / steps;
    const interval = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return count;
};

const StatItem = ({ value, suffix, label, isVisible }) => {
  const count = useCountUp(value, 5000, isVisible);
  return (
    <div className="shrink-0 flex flex-col items-center font-bebas">
      <p className="max-[1350px]:text-[60px] max-[1350px]:leading-[50px] text-[75.9px] font-bold text-white -tracking-[4%] leading-[60px] max-[1000px]:text-[52px] max-[1000px]:leading-[44px] max-[600px]:text-[42px] max-[600px]:leading-[36px] max-[480px]:text-[36px] max-[480px]:leading-[32px]">
        {count}
        {suffix}
      </p>
      <p className="text-[13.82px] leading-6 tracking-[1%] text-white max-[600px]:text-[11px] max-[600px]:leading-4 max-[480px]:text-[10px] text-center">
        {label}
      </p>
    </div>
  );
};

const Hero = () => {
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.3 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <div
        className="w-100% min-[1350px]:h-[1053.98px] bg-cover bg-center bg-no-repeat flex items-end min-h-[calc(100vh-242px)] max-[1000px]:min-h-[calc(100vh-101px)]"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="max-w-[1440px] w-[90%] mx-auto flex items-end justify-between pb-[44.37px] max-[1000px]:flex-col max-[1000px]:items-start max-[1000px]:gap-8 max-[1000px]:pb-8 max-[600px]:pb-6 max-[600px]:w-[92%]">
          {/* Left / Main Text Block */}
          <div className="max-w-[70%] max-[1350px]:max-w-[60%] max-[1000px]:max-w-full max-[1000px]:w-full">
            {/* Badge */}
            <div className="bg-primary flex items-center gap-[12.92px] w-fit h-10 rounded-[4px] px-[22.03px] mb-[21px] max-[600px]:h-8 max-[600px]:px-4 max-[600px]:gap-2 max-[600px]:mb-4">
              <div className="w-[8.16px] h-[8.16px] rounded-full bg-black max-[600px]:w-[6px] max-[600px]:h-[6px]" />
              <p className="text-[16px] font-medium tracking-[9%] max-[600px]:text-[12px]">
                Africa's Leading Grassroots Academy
              </p>
            </div>

            {/* Headline + Subtext */}
            <div className="flex flex-col gap-[19.19px] mb-[29.42px] max-[600px]:gap-3 max-[600px]:mb-5">
              <h3 className="font-bold uppercase text-[92px] leading-[92px] -tracking-[3%] text-white max-[1350px]:text-[70px] max-[1350px]:leading-[70px] max-[1000px]:text-[56px] max-[1000px]:leading-[56px] max-[768px]:text-[44px] max-[768px]:leading-[44px] max-[480px]:text-[34px] max-[480px]:leading-[36px] max-[360px]:text-[28px] max-[360px]:leading-[30px]">
                From the <span className="text-primary">Local</span> Pitch to
                the <span className="text-primary">Global</span> Stage
              </h3>
              <p className="text-xl font-medium text-white max-[1000px]:text-[17px] max-[600px]:text-[14px] max-[480px]:text-[13px] max-[480px]:leading-[1.5]">
                We deliver UEFA-standard coaching and create pathways that help
                develop talent into a career.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 max-[480px]:flex-col max-[480px]:gap-3 max-[480px]:w-full">
              <button className="uppercase border border-white text-white cursor-pointer rounded-[4px] bg-transparent h-[57px] w-[200px] text-[16px] leading-4 font-bold underline max-[768px]:h-[48px] max-[768px]:w-[170px] max-[768px]:text-[14px] max-[480px]:w-full max-[480px]:h-[48px]">
                Explore Programs
              </button>
              <button className="uppercase cursor-pointer rounded-[4px] bg-primary h-[57px] w-[200px] text-[16px] leading-4 font-bold underline max-[768px]:h-[48px] max-[768px]:w-[170px] max-[768px]:text-[14px] max-[480px]:w-full max-[480px]:h-[48px]">
                Join 2026 Intake
              </button>
            </div>
          </div>

          {/* Stats Block */}
          <div
            ref={statsRef}
            className="flex items-center justify-between gap-[19.82px] max-[1000px]:w-full max-[1000px]:justify-start max-[1000px]:gap-8 max-[600px]:gap-5 max-[480px]:gap-0 max-[480px]:justify-between"
          >
            <StatItem
              value={1000}
              suffix="+"
              label="Children Participated"
              isVisible={statsVisible}
            />
            <StatItem
              value={30}
              suffix=""
              label="Schools in Network"
              isVisible={statsVisible}
            />
            <StatItem
              value={50}
              suffix="+"
              label="Coaches Trained"
              isVisible={statsVisible}
            />
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="w-full bg-primary h-[80px] flex justify-center items-center max-[1000px]:h-auto max-[1000px]:py-4">
        <div className="max-w-[1440px] mx-auto w-[90%] flex items-center justify-between gap-8 max-[1000px]:gap-4 max-[768px]:grid max-[768px]:grid-cols-2 max-[768px]:gap-x-4 max-[768px]:gap-y-3 max-[480px]:grid-cols-2 max-[480px]:gap-x-3 max-[480px]:gap-y-3">
          <p className="max-[1350px]:text-[16px] max-[1350px]:leading-[12px] uppercase text-[20px] leading-4 text-[#121212] tracking-[1%] max-[1000px]:text-[14px] max-[768px]:text-[13px] max-[768px]:leading-normal max-[480px]:text-[11px]">
            ⚽ Grassroots Development
          </p>
          <p className="max-[1350px]:text-[16px] max-[1350px]:leading-[12px] uppercase text-[20px] leading-4 text-[#121212] tracking-[1%] max-[1000px]:text-[14px] max-[768px]:text-[13px] max-[768px]:leading-normal max-[480px]:text-[11px]">
            🏆 Competitive Tournaments
          </p>
          <p className="max-[1350px]:text-[16px] max-[1350px]:leading-[12px] uppercase text-[20px] leading-4 text-[#121212] tracking-[1%] max-[1000px]:text-[14px] max-[768px]:text-[13px] max-[768px]:leading-normal max-[480px]:text-[11px]">
            🎓 Coach Education
          </p>
          <p className="max-[1350px]:text-[16px] max-[1350px]:leading-[12px] uppercase text-[20px] leading-4 text-[#121212] tracking-[1%] max-[1000px]:text-[14px] max-[768px]:text-[13px] max-[768px]:leading-normal max-[480px]:text-[11px]">
            🌍 Pan-African Vision
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
