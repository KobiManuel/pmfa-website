import React from "react";
import SectionHeader from "../components/SectionHeader";

const sections = [
  {
    title: "Information We Collect",
    body: "We may collect personal information you provide directly to us, such as your name, email address, phone number, and details submitted through registration, contact, or partnership forms, as well as information collected automatically when you use our website.",
  },
  {
    title: "How We Use Your Information",
    body: "We use the information we collect to operate and improve our programmes, respond to enquiries, communicate updates about PMF Academy, and fulfil our legal and safeguarding obligations, particularly where the information relates to a minor.",
  },
  {
    title: "Sharing of Information",
    body: "We do not sell your personal information. We may share information with trusted partners, coaches, and service providers who support our programmes, or where required by law, and only to the extent necessary.",
  },
  {
    title: "Children's Privacy",
    body: "Many of our programmes involve children. Where we collect information about a minor, we do so with the consent of a parent or guardian and take extra care to protect that information in line with applicable child protection standards.",
  },
  {
    title: "Cookies",
    body: "Our website may use cookies and similar technologies to improve your browsing experience and understand how our site is used. You can control cookies through your browser settings.",
  },
  {
    title: "Your Rights",
    body: "You may request access to, correction of, or deletion of your personal information at any time by contacting us using the details below.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.",
  },
];

const PrivacyPolicy = () => {
  return (
    <section className="w-full min-[1000px]:pt-[160px] max-[1000px]:pt-10 pb-[80px] max-[768px]:pb-10">
      <div className="max-w-[900px] w-[90%] mx-auto flex flex-col gap-[40px] max-[600px]:w-[92%] max-[600px]:gap-8">
        <SectionHeader
          eyebrow="Legal"
          title="Privacy Policy"
          description="This Privacy Policy explains how Play More Football Academy ('PMF Academy', 'we', 'us') collects, uses, and protects your personal information. Effective date: July 9, 2026."
          descriptionClassName="!text-[16px] !leading-[28px]"
        />

        <div className="flex flex-col gap-[32px]">
          {sections.map(({ title, body }) => (
            <div key={title} className="flex flex-col gap-2">
              <h3 className="font-bold text-[24px] leading-[32px] text-text-color max-[600px]:text-[20px]">
                {title}
              </h3>
              <p className="text-[16px] leading-[28px] font-inter text-text-color max-[600px]:text-[14px] max-[600px]:leading-[24px]">
                {body}
              </p>
            </div>
          ))}

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-[24px] leading-[32px] text-text-color max-[600px]:text-[20px]">
              Contact Us
            </h3>
            <p className="text-[16px] leading-[28px] font-inter text-text-color max-[600px]:text-[14px] max-[600px]:leading-[24px]">
              If you have questions about this Privacy Policy, please contact
              us at{" "}
              <a href="mailto:info@pmfa.club" className="text-primary">
                info@pmfa.club
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
