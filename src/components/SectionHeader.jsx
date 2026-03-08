const SectionHeader = ({
  eyebrow,
  title,
  description,
  buttonText,
  centered = false,
  descriptionClassName,
}) => {
  const alignment = centered ? "items-center text-center" : "items-start";

  return (
    <div
      className={`flex flex-col gap-[19.42px] max-[480px]:gap-3 ${alignment}`}
    >
      <p className="uppercase font-bold text-[29.19px] leading-[38.92px] text-[#6E6E6E] tracking-[16%] max-[1350px]:text-[24px] max-[1350px]:leading-[32px] max-[1000px]:text-[20px] max-[600px]:text-[16px] max-[600px]:leading-[24px] max-[480px]:text-[13px] max-[480px]:leading-[20px]">
        {eyebrow}
      </p>
      <h3 className="font-bold uppercase text-[68.11px] leading-[68.11px] -tracking-[2%] text-text-color max-[1350px]:text-[52px] max-[1350px]:leading-[52px] max-[1000px]:text-[44px] max-[1000px]:leading-[44px] max-[768px]:text-[36px] max-[768px]:leading-[36px] max-[480px]:text-[28px] max-[480px]:leading-[30px] max-[360px]:text-[24px] max-[360px]:leading-[26px]">
        {title}
      </h3>
      {description && (
        <p
          className={`text-[19.46px] font-inter leading-[29.19px] text-text-color -tracking-[1%] max-[1350px]:text-[17px] max-[1350px]:leading-[26px] max-[1000px]:text-[16px] max-[600px]:text-[14px] max-[600px]:leading-[22px] max-[480px]:text-[13px] max-[480px]:leading-[20px] ${descriptionClassName}`}
        >
          {description}
        </p>
      )}
      {buttonText && (
        <button className="uppercase cursor-pointer rounded-[4px] bg-primary h-[68.11px] w-[243.23px] text-[19.46px] leading-[19.46px] font-bold max-[1350px]:h-[56px] max-[1350px]:w-[210px] max-[1350px]:text-[17px] max-[768px]:h-[48px] max-[768px]:w-[180px] max-[768px]:text-[15px] max-[480px]:w-full max-[480px]:h-[48px] max-[480px]:text-[14px]">
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default SectionHeader;
