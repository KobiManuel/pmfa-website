import React, { useState } from "react";
import SectionHeader from "../components/SectionHeader";

const FREQUENCIES = ["One-Time", "Monthly", "Annual"];
const AMOUNTS = [5, 10, 20, 50, 100];
const PAYMENT_METHODS = ["Card", "Bank Transfer", "USSD", "Mobile Money"];

const BANK_DETAILS = {
  bankName: "Zenith Bank",
  accountName: "THE PLAY MORE FOOTBALL FOUNDATION",
  accountNumber: "1311942663",
};

const BankTransferModal = ({ onClose, amount }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div className="bg-white rounded-[7.92px] p-8 max-w-md w-[90%] flex flex-col gap-5 shadow-xl">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-extrabold text-[21.16px] text-text-color -tracking-[2%]">
            Bank Transfer Details
          </h3>
          <p className="font-inter text-[11.96px] text-[#747474] mt-1">
            Transfer {amount} to the account below
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-[#aaa] hover:text-[#555] text-xl font-bold cursor-pointer leading-none"
        >
          ✕
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {[
          { label: "Bank Name", value: BANK_DETAILS.bankName },
          { label: "Account Name", value: BANK_DETAILS.accountName },
          { label: "Account Number", value: BANK_DETAILS.accountNumber },
          { label: "Amount", value: amount },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="flex justify-between items-center bg-[#F6F6F6] border border-[#D5D5D5] rounded-lg px-4 py-3"
          >
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#B2B2B2]">
              {label}
            </span>
            <span className="font-bold text-[14px] text-text-color">
              {value}
            </span>
          </div>
        ))}
      </div>

      <p className="font-inter text-[11.96px] text-[#747474] text-center">
        After transfer, send your proof of payment to{" "}
        <a
          href="mailto:info@tpmffoundation.com"
          className="text-primary font-bold underline"
        >
          info@tpmffoundation.com
        </a>
      </p>

      <button
        onClick={onClose}
        className="h-[42px] w-full bg-primary border-none rounded-[7.36px] text-[12.88px] font-bold tracking-[0.12em] uppercase text-text-color cursor-pointer hover:opacity-90 transition-opacity"
      >
        Done
      </button>
    </div>
  </div>
);

const SupportSection = () => {
  const [frequency, setFrequency] = useState("One-Time");
  const [selectedAmount, setSelectedAmount] = useState(5);
  const [isCustom, setIsCustom] = useState(false);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Card");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showBankModal, setShowBankModal] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const displayAmount = isCustom
    ? customAmount
      ? `$${customAmount}`
      : "$0"
    : `$${selectedAmount}`;

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setIsCustom(false);
    setCustomAmount("");
  };

  const handleCustomSelect = () => {
    setIsCustom(true);
    setSelectedAmount(null);
  };

  const validate = () => {
    const newErrors = {};
    if (!firstName.trim()) newErrors.firstName = true;
    if (!lastName.trim()) newErrors.lastName = true;
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = true;
    if (isCustom && (!customAmount || Number(customAmount) <= 0))
      newErrors.customAmount = true;
    return newErrors;
  };

  const handleDonate = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});

    if (paymentMethod === "Bank Transfer") {
      setShowBankModal(true);
      return;
    }

    const amountValue = isCustom ? Number(customAmount) : selectedAmount;

    // Paystack inline
    const handler = window.PaystackPop.setup({
      key: "pk_test_YOUR_PAYSTACK_PUBLIC_KEY", // 🔑 replace with your key
      email,
      amount: amountValue * 100, // Paystack uses kobo
      currency: "NGN",
      ref: `PMF-${Date.now()}`,
      metadata: {
        custom_fields: [
          {
            display_name: "First Name",
            variable_name: "first_name",
            value: firstName,
          },
          {
            display_name: "Last Name",
            variable_name: "last_name",
            value: lastName,
          },
          { display_name: "Phone", variable_name: "phone", value: phone },
          {
            display_name: "Frequency",
            variable_name: "frequency",
            value: frequency,
          },
          {
            display_name: "Payment Method",
            variable_name: "payment_method",
            value: paymentMethod,
          },
        ],
      },
      callback: (response) => {
        alert(`✅ Donation successful! Reference: ${response.reference}`);
      },
      onClose: () => {
        // user closed the popup — no action needed
      },
    });

    handler.openIframe();
  };

  const inputClass = (hasError) =>
    `w-full px-4 py-[13px] min-h-[43.71px] rounded-md text-[14px] text-[#444] bg-[#ebebeb] border outline-none placeholder:text-[#bbb] focus:border-primary transition-all ${
      hasError ? "border-red-400" : "border-[#ebebeb]"
    }`;

  return (
    <>
      {showBankModal && (
        <BankTransferModal
          onClose={() => setShowBankModal(false)}
          amount={displayAmount}
        />
      )}

      <section className="pt-[70px] pb-[66.66px] max-[768px]:pt-10 max-[768px]:pb-12 max-[480px]:pt-8 max-[480px]:pb-10">
        <div className="max-w-[1440px] w-[90%] mx-auto  flex  items-start max-[1000px]:flex-col *:w-1/2! gap-[87.93px] max-[1000px]:*:w-full!">
          {/* ── Left Panel ── */}
          <div className="flex-1 flex flex-col justify-center gap-8 mt-[59.83px] max-[1000px]:mt-0">
            <div className={`flex flex-col gap-[19.42px] max-[480px]:gap-3`}>
              <p className="uppercase font-bold text-[26.14px] leading-[34.86px] text-[#6E6E6E] tracking-[16%] max-[1350px]:text-[24px] max-[1350px]:leading-[32px] max-[1000px]:text-[20px] max-[600px]:text-[16px] max-[600px]:leading-[24px] max-[480px]:text-[13px] max-[480px]:leading-[20px]">
                Support us
              </p>
              <h3 className="font-bold uppercase text-[50.16px] leading-[71.65px] -tracking-[2%] text-text-color max-[1350px]:text-[42px] max-[1350px]:leading-[42px] max-[1000px]:text-[34px] max-[1000px]:leading-[34px]  max-[480px]:text-[28px] max-[480px]:leading-[30px] max-[360px]:text-[24px] max-[360px]:leading-[26px]">
                Make a <span className="text-primary"> difference </span> today
              </h3>
              <p
                className={`text-[14.33px] font-inter leading-[25.08px] text-text-color -tracking-[1%]  max-[480px]:text-[13px] max-[480px]:leading-[20px]`}
              >
                Your contribution — no matter the size — goes directly toward
                giving Nigeria's brightest young football talents the
                opportunity they deserve. The PMF Foundation is built on the
                belief that every child deserves a chance to play, grow, and
                dream.
              </p>
            </div>

            <ul className="flex flex-col gap-0 list-disc pl-[21px]">
              {[
                "Fund grassroots training sessions for underserved communities",
                "Provide kits, boots, and equipment to children who can't afford them",
                "Train community coaches with the PMF Methodology",
                "Host tournaments that give children competitive experience",
                "Establish safe, modern facilities for training and play",
                "Build pathways from grassroots to professional football",
              ].map((item) => (
                <li
                  key={item}
                  className="font-inter text-text-color text-[14.33px] leading-[25.08px] max-[600px]:text-[12px] max-[480px]:text-[13px]"
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* Verified card */}
            <div className="max-[480px]:p-4 p-[23.29px] bg-[#F6F6F6] rounded-lg border-[0.9px] border-[#D5D5D5]">
              <p className="font-bold text-[16.12px] leading-[16.12px] tracking-[0.12em] uppercase text-text-color mb-2">
                Verified &amp; Registered
              </p>
              <p className="font-inter text-[9.85px] leading-[16.12px] text-[#121212]">
                PMF Foundation is a registered non-profit organisation in
                Nigeria. All donations are used directly for programme delivery
                and impact. Financial reports available on request.
              </p>
            </div>
          </div>

          {/* ── Right Panel — Donation Form ── */}
          <div
            id="support"
            className="max-[1000px]:w-full bg-[#F8F8F8] border-[0.92px] border-[#D5D5D5] rounded-[7.92px] flex flex-col p-[46px] max-[800px]:p-6"
          >
            {/* Form header */}
            <div className="flex flex-col gap-[10.82px]">
              <h3 className="font-extrabold text-[21.16px] leading-[18.4px] text-text-color -tracking-[2%]">
                Support PMFA Foundation
              </h3>
              <p className="font-inter text-[11.96px] leading-[11.04px] text-[#747474] -tracking-[2%]">
                Secure payment powered by Paystack
              </p>
            </div>

            {/* Donation Frequency */}
            <div className="flex flex-col gap-3 mt-[29.03px]">
              <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#B2B2B2]">
                Donation Frequency
              </p>
              <div className="flex gap-2 max-[400px]:flex-col">
                {FREQUENCIES.map((f) => (
                  <button
                    key={f}
                    onClick={() => setFrequency(f)}
                    className={`flex-1 min-h-[34.04px] rounded-md text-[11px] font-bold tracking-[0.1em] uppercase border transition-all cursor-pointer
                      ${
                        frequency === f
                          ? "bg-primary border-primary text-text-color"
                          : "bg-white border-[#ddd] text-[#aaa] hover:border-[#bbb]"
                      }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Donation Amount */}
            <div className="flex flex-col gap-3 mt-[23.36px]">
              <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#B2B2B2]">
                Donation Amount
              </p>
              <div className="grid grid-cols-3 gap-2">
                {AMOUNTS.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountSelect(amount)}
                    className={`h-[34.04px] rounded-md text-[14px] font-semibold border transition-all cursor-pointer
                      ${
                        !isCustom && selectedAmount === amount
                          ? "bg-[#2a2a2a] border-[#2a2a2a] text-white"
                          : "bg-[#ebebeb] border-[#ebebeb] text-[#555] hover:border-[#ccc]"
                      }`}
                  >
                    ${amount}
                  </button>
                ))}
                <button
                  onClick={handleCustomSelect}
                  className={`h-[34.04px] rounded-md text-[14px] font-semibold border transition-all cursor-pointer
                    ${
                      isCustom
                        ? "bg-[#2a2a2a] border-[#2a2a2a] text-white"
                        : "bg-[#ebebeb] border-[#ebebeb] text-[#555] hover:border-[#ccc]"
                    }`}
                >
                  Custom
                </button>
              </div>
              <input
                type="number"
                placeholder="Or Enter Custom Amount (₦)"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setErrors((prev) => ({ ...prev, customAmount: false }));
                }}
                className={`w-full px-4 py-[13px] h-[34.04px] rounded-md text-[14px] text-[#555] bg-[#ebebeb] border outline-none placeholder:text-[#bbb] focus:border-primary transition-all
                  ${isCustom ? "block" : "hidden"} ${errors.customAmount ? "border-red-400" : "border-[#ebebeb]"}`}
              />
            </div>

            {/* Divider */}
            <div className="h-px bg-[#e8e8e8] my-[48px]" />

            {/* Your Details */}
            <div className="flex flex-col gap-3">
              <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#B2B2B2]">
                Your Details
              </p>
              <div className="flex gap-2 max-[480px]:flex-col">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    setErrors((prev) => ({ ...prev, firstName: false }));
                  }}
                  className={`flex-1 px-4 py-[13px] min-h-[43.71px] rounded-md text-[14px] text-[#444] bg-[#ebebeb] border outline-none placeholder:text-[#bbb] focus:border-primary transition-all ${errors.firstName ? "border-red-400" : "border-[#ebebeb]"}`}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                    setErrors((prev) => ({ ...prev, lastName: false }));
                  }}
                  className={`flex-1 px-4 py-[13px] min-h-[43.71px] rounded-md text-[14px] text-[#444] bg-[#ebebeb] border outline-none placeholder:text-[#bbb] focus:border-primary transition-all ${errors.lastName ? "border-red-400" : "border-[#ebebeb]"}`}
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((prev) => ({ ...prev, email: false }));
                }}
                className={`w-full px-4 py-[13px] min-h-[43.71px] rounded-md text-[14px] text-[#444] bg-[#ebebeb] border outline-none placeholder:text-[#bbb] focus:border-primary transition-all ${errors.email ? "border-red-400" : "border-[#ebebeb]"}`}
              />
              <input
                type="tel"
                placeholder="Phone Number (Optional)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-[13px] min-h-[43.71px] rounded-md text-[14px] text-[#444] bg-[#ebebeb] border border-[#ebebeb] outline-none placeholder:text-[#bbb] focus:border-primary transition-all"
              />
            </div>

            {/* Divider */}
            <div className="h-px bg-[#e8e8e8] my-[34px]" />

            {/* Payment Method */}
            <div className="flex flex-col gap-3">
              <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#B2B2B2]">
                Payment Method
              </p>
              <div className="flex flex-wrap gap-2">
                {PAYMENT_METHODS.map((method) => (
                  <button
                    key={method}
                    onClick={() => setPaymentMethod(method)}
                    className={`px-4 py-[10px] h-[34.04px] rounded-md text-[11px] font-bold tracking-[0.1em] uppercase border transition-all cursor-pointer
                      ${
                        paymentMethod === method
                          ? "border-[#2a2a2a] text-[#1a1a1a] bg-white"
                          : "border-[#ddd] text-[#B2B2B2] bg-white hover:border-[#bbb]"
                      }`}
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>

            {/* Donate CTA */}
            <button
              onClick={handleDonate}
              disabled={loading}
              className="mt-[15.16px] h-[34.04px] w-full bg-primary border-none rounded-[7.36px] text-[12.88px] font-bold tracking-[0.12em] uppercase text-text-color cursor-pointer hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Processing..." : `DONATE ${displayAmount}`}
            </button>

            {/* Security note */}
            <p className="mt-[36.58px] font-inter text-[11.96px] text-[#747474] text-center">
              🔒 Secured &amp; Encrypted · SSL Protected · Powered by Paystack
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupportSection;
