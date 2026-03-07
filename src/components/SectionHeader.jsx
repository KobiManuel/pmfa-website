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
    <div className={`flex flex-col gap-[19.42px] ${alignment}`}>
      <p className="uppercase font-bold text-[29.19px] leading-[38.92px] text-[#6E6E6E] tracking-[16%]">
        {eyebrow}
      </p>
      <h3 className="font-bold uppercase text-[68.11px] leading-[68.11px] -tracking-[2%] text-text-color">
        {title}
      </h3>
      {description && (
        <p
          className={`text-[19.46px] font-inter leading-[29.19px] text-text-color -tracking-[1%] ${descriptionClassName}`}
        >
          {description}
        </p>
      )}
      {buttonText && (
        <button className="uppercase cursor-pointer rounded-[4px] bg-primary h-[68.11px] w-[243.23px] text-[19.46px] leading-[19.46px] font-bold">
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default SectionHeader;
