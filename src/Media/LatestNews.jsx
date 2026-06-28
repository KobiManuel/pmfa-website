import React from "react";
import SectionHeader from "../components/SectionHeader";

const articles = [
  {
    day: "05",
    month: "Jan '26",
    title: "PMF Launches Ajegunle Tournament — 200 Children Compete",
    description:
      "Play More Football Foundation hosts its inaugural community tournament, bringing together over 200 children from 16 schools across the Ajegunle area of Lagos.",
    href: "https://newstap.com.ng/play-more-football-foundation-takes-over-ajegunle/",
  },
  {
    day: "10",
    month: "Oct '25",
    title:
      "PMF Calls for Greater Investment in Grassroots Football Development",
    description:
      "The Founder of Play More Football Foundation, Lawrence Okonji, has called on the Nigerian government to intensify efforts toward grassroots football development following the national under-20 team's recent 4–0 defeat to Argentina.",
    href: "https://ifm923.com/play-more-football-foundation-calls-for-greater-investment-in-grassroots-football-development/",
  },
  {
    day: "10",
    month: "Oct '25",
    title:
      "UEFA and FIFA license Coach Lawrence Okonji calls on Government to invest in grassroot sports",
    description:
      "Play More Football Foundation Urges Nigerian Government to Prioritise Grassroots Football Development.",
    href: "https://radionigerialagos.gov.ng/press-release/",
  },
  {
    day: "24",
    month: "Jan '26",
    title:
      "Play More Football Foundation Urges Nigerian Government to Prioritize Grassroots Football Development",
    description:
      "Mr. Okonji emphasized that one of the major reasons behind the founding of the Play More Football Foundation is to bridge the gap in grassroots training and nurture young talent across the country.",
    href: "https://www.completesports.com/play-more-football-foundation-urges-nigerian-government-to-prioritize-grassroots-football-development/",
  },
  {
    day: "11",
    month: "Oct '25",
    title:
      "The Guardian: Foundation urges government to prioritize grassroots sports",
    description:
      "Following the poor performance of Nigeria's national under-20 football team in the recent match against Argentina, which ended 4–0,",
    href: "https://guardian.ng/sport/foundation-urges-government-to-prioritize-grassroots-sports/",
  },
  {
    day: "25",
    month: "Jan '26",
    title: "Play More Football Foundation Takes Over Ajegunle.",
    description:
      "Ajegunle came alive on January 24th, 2026, as over 200 children from 16 schools gathered for the Play More Football (PMF) Tournament.",
    href: "https://radionigerialagos.gov.ng/play-more-football-foundation-takes-over-ajegunle/",
  },
  {
    day: "24",
    month: "Jan '26",
    title: "PMF Launches Ajegunle Tournament — 200 Children Compete",
    description:
      "Play More Football Foundation hosts its inaugural community tournament, bringing together over 200 children from 16 schools across the Ajegunle area of Lagos.",
    href: "https://memonewsng.wordpress.com/2026/01/25/play-more-foundation-takes-over-ajegunle-memonews-duch-tv-africa-products/",
  },
  {
    day: "24",
    month: "Jan '26",
    title:
      "PMF Calls for Greater Investment in Grassroots Football Development",
    description:
      "Play More Football Foundation hosts its inaugural community tournament, bringing together over 200 children from 16 schools across the Ajegunle area of Lagos.",
    href: "https://hottestgistnow.blogspot.com/2026/01/play-more-football-foundation-takes.html",
  },
  {
    day: "24",
    month: "Jan '26",
    title: "PMF empowers youths through grassroots football",
    description:
      "Play More Football Foundation is empowering young people across Nigeria through structured grassroots football programmes, community tournaments, and talent development initiatives.",
    href: "https://punchng.com/pmf-empowers-youths-through-grassroots-football/",
  },
  {
    day: "11",
    month: "Oct '25",
    title: "Foundation urges government to prioritize grassroots sports",
    description:
      "Following the poor performance of Nigeria's national under-20 football team in the recent match against Argentina, which ended 4–0,",
    href: "https://guardian.ng/sport/foundation-urges-government-to-prioritize-grassroots-sports/",
  },
  {
    day: "10",
    month: "Oct '25",
    title:
      "Play More Football Foundation Calls for Greater Investment in Grassroots Football Development",
    description:
      "The Founder of Play More Football Foundation, Lawrence Okonji, has called on the Nigerian government to intensify efforts toward grassroots football development following the national under-20 team's recent 4–0 defeat to Argentina.",
    href: "https://ifm923.com/play-more-football-foundation-calls-for-greater-investment-in-grassroots-football-development/",
  },
  {
    day: "24",
    month: "Jan '26",
    title:
      "Play More Football Foundation Urges Nigerian Government to Prioritize Grassroots Football Development",
    description:
      "Mr. Okonji emphasized that one of the major reasons behind the founding of the Play More Football Foundation is to bridge the gap in grassroots training and nurture young talent across the country.",
    href: "https://www.completesports.com/play-more-football-foundation-urges-nigerian-government-to-prioritize-grassroots-football-development/",
  },
];

const LatestNews = () => {
  return (
    <section className="bg-white pt-[50px] pb-[74.72px] max-[768px]:pt-10 max-[768px]:pb-12 max-[480px]:pt-8 max-[480px]:pb-10">
      <div className="max-w-[1440px] mx-auto w-[90%] flex flex-col h-full gap-[43.72px] max-[600px]:w-[92%] max-[600px]:gap-8">
        <div className="w-1/2 max-[1000px]:w-full">
          <SectionHeader
            eyebrow="Latest News"
            title={
              <>
                In The <span className="text-primary"> Press</span>
              </>
            }
          />
        </div>
        <div className="grid grid-cols-2 gap-4 gap-y-[17.72px] max-[768px]:grid-cols-1 max-[768px]:gap-y-3 max-[480px]:gap-y-2">
          {articles.map(({ day, month, title, description, href }, i) => (
            <a
              key={i}
              href={href || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F6F6F6] rounded-[7.61px] gap-[19.05px] flex items-center py-[25.22px] min-h-[112.28px] pl-[20.18px] pr-[32.74px] max-[768px]:h-auto max-[768px]:py-4 max-[768px]:pr-5 max-[480px]:pl-4 max-[480px]:pr-4 max-[480px]:gap-3 hover:bg-[#efefef] transition-colors"
            >
              <div className="bg-[#242424] rounded-[3.81px] h-[61.85px] flex flex-col gap-[4.84px] px-4 items-center justify-center shrink-0 max-[1000px]:px-3 max-[768px]:py-3 max-[480px]:px-3">
                <p className="font-bebas text-[22.84px] leading-[19.98px] text-white font-bold max-[1000px]:text-[20px] max-[480px]:text-[18px]">
                  {day}
                </p>
                <p className="font-medium text-[7.61px] tracking-[3%] text-white leading-[11.42px] max-[480px]:text-[7px]">
                  {month}
                </p>
              </div>
              <div className="flex flex-col text-text-color">
                <p className="text-[19.03px] font-bold leading-[19.98px] underline max-[1350px]:text-[17px] max-[1000px]:text-[15px] max-[1000px]:leading-[18px] max-[768px]:text-[14px] max-[768px]:leading-[18px] max-[480px]:text-[13px] max-[480px]:leading-[17px]">
                  {title}
                </p>
                <p className="text-[11.42px] font-inter leading-[19.98px] underline max-[1000px]:text-[10.5px] max-[1000px]:leading-[17px] max-[768px]:text-[10px] max-[768px]:leading-[16px] max-[480px]:text-[10px] max-[480px]:leading-[15px]">
                  {description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
