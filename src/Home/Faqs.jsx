"use client";
import React, { useState } from "react";
import SectionHeader from "../components/SectionHeader";

const faqData = [
  {
    id: 1,
    question: "What is Play More Football Academy?",
    answer:
      "Play More Football (PMF) Academy is a community-based football development programme dedicated to nurturing young talent across grassroots communities. We provide structured coaching, tournaments, and mentorship to help players grow both on and off the pitch.",
  },
  {
    id: 2,
    question: "Is there a registration or training fee?",
    answer:
      "Our programme is designed to be accessible to all. Registration fees are kept minimal or waived for players from low-income households. We believe financial constraints should never be a barrier to developing football talent.",
  },
  {
    id: 3,
    question: "Is the programme only for training, or do players compete?",
    answer:
      "Players do both! Alongside structured weekly training sessions, PMF organises competitive tournaments and inter-community matches so players can test their skills, gain match experience, and represent their communities with pride.",
  },
  {
    id: 4,
    question: "How does the foundation support young players?",
    answer:
      "Beyond football, PMF provides mentorship, academic support, and life skills workshops. We partner with local organisations to ensure our players have access to education, nutrition, and the guidance they need to thrive holistically.",
  },
  {
    id: 5,
    question: "How can I contact the academy?",
    answer:
      "You can reach us through the contact form on our website, via email, or by visiting any of our training grounds during session hours. Our team is always happy to answer questions from players, parents, coaches, and potential partners.",
  },
];

const Faqs = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full pt-[57.26px] pb-[81.16px] bg-white">
      <div className="max-w-[1440px] w-[90%] mx-auto flex flex-col gap-[28.7px] items-center justify-center">
        <SectionHeader
          eyebrow="Got Questions?"
          title={
            <>
              Frequently Asked
              <span className="text-primary"> Questions</span>
            </>
          }
          centered
        />
        <div className="flex flex-col gap-[56px] w-full">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              onClick={() => toggleAccordion(faq.id)}
              className="cursor-pointer flex justify-between pb-[32.77px] border-b border-b-[#DEDEDE]"
            >
              <div className="flex flex-col overflow-hidden">
                <p className="text-[29px] leading-[32px] text-[#6E6E6E] font-bold">
                  {faq.question}
                </p>
                <div
                  className="transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: openId === faq.id ? "500px" : "0",
                    opacity: openId === faq.id ? 1 : 0,
                    marginTop: openId === faq.id ? "10px" : 0,
                  }}
                >
                  <p className="text-[18px] leading-8 text-[#6E6E6E] font-inter">
                    {faq.answer}
                  </p>
                </div>
              </div>
              <div className="shrink-0 w-[45px] h-[45px] rounded-full bg-[#FFFBEA] flex items-center justify-center border border-[#F1E2A2] text-[#B8960C] text-xl transition-transform duration-300 hover:scale-105">
                {openId === faq.id ? "−" : "+"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
