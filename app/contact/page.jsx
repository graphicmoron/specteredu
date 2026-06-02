"use client";

import React, { useState } from "react";

const levelOfStudyOptions = [
  "Foundation / Pathway",
  "Bachelor",
  "Diploma",
  "Masters",
  "Postgraduate Diploma",
];

const destinationOptions = [
  "Georgia",
  "Australia",
  "Canada",
  "United Kingdom",
  "United States",
  "New Zealand",
];

const englishProficiencyOptions = [
  "IELTS",
  "PTE",
  "TOEFL",
  "Duolingo",
  "No test yet",
];

const fields = [
  {
    label: "Enter your name",
    type: "input",
    wide: true,
    icon: (
      <path d="M10 10.4a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2Zm-5.3 7.1v-.9a5.3 5.3 0 0 1 10.6 0v.9" />
    ),
  },
  {
    label: "Mobile number",
    type: "input",
    icon: (
      <path d="M6.5 3.8 8.3 3c.5-.2 1 .1 1.2.5l.9 2.2c.2.4.1.9-.3 1.2l-1.2.9a9.4 9.4 0 0 0 3.5 3.5l.9-1.2c.3-.4.8-.5 1.2-.3l2.2.9c.5.2.7.7.5 1.2l-.8 1.8c-.2.5-.7.8-1.2.7C9 13.8 5.2 10 4.5 4.8c-.1-.5.2-1 .7-1.2Z" />
    ),
  },
  {
    label: "Email",
    type: "input",
    icon: (
      <path d="M3.8 6.2c0-.8.7-1.5 1.5-1.5h9.4c.8 0 1.5.7 1.5 1.5v7c0 .8-.7 1.5-1.5 1.5H5.3c-.8 0-1.5-.7-1.5-1.5v-7Zm.6.1 5.6 4 5.6-4" />
    ),
  },
  { label: "Interested level of study", type: "select", options: levelOfStudyOptions },
  { label: "Study destination", type: "select", options: destinationOptions },
  {
    label: "Academic Qualification (Exp: HSC: GPA-4, City College, 2024)",
    type: "input",
    wide: true,
  },
  { label: "English proficiency", type: "select", options: englishProficiencyOptions },
  { label: "Overall Score", type: "input" },
];

function FieldIcon({ children }) {
  if (!children) {
    return null;
  }

  return (
    <svg aria-hidden="true" className="h-[17px] w-[17px] shrink-0 text-secondary" viewBox="0 0 20 20" fill="none">
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
        {children}
      </g>
    </svg>
  );
}

function ContactIllustration() {
  return (
    <svg aria-hidden="true" className="h-full w-full" viewBox="0 0 560 360" fill="none">
      <path d="M255 86c38-55 118-31 125 35 34-12 68 14 65 50-4 46-54 72-93 47-26 31-70 39-105 15-31-21-39-58-20-88-26-21-14-57 28-59Z" fill="#BDEFF2" />
      <path d="M365 101c32-13 61-23 70-8 11 18-4 87-36 106-21 12-49 7-73-12 11-33 12-63 39-86Z" fill="#5CCDD5" />
      <path d="M429 178c14 23 7 52-18 71-25 20-58 15-80-10 42-10 76-28 98-61Z" fill="#008E9A" />
      <path d="M354 132h57M358 151h62M363 170h45" stroke="#fff" strokeLinecap="round" strokeWidth="7" />
      <path d="M110 185c34 85 86 99 127 71 16-11 23-32 12-48-19-27-71-11-106-56-22-29-47-13-33 33Z" fill="#E89573" />
      <path d="M135 175 116 135c-2-6 2-12 8-13l8-1c5-1 9 2 11 6l20 47-28 1Z" fill="#32106B" />
      <path d="M155 202c42 8 67 66 117 49 45-16 30-95-29-105-56-10-104 21-88 56Z" fill="#CE2F5C" />
      <path d="M255 151c27 10 45 31 50 62 7 45-14 80-59 83 24-34 22-72-5-105l14-40Z" fill="#C92355" />
      <path d="M220 133c8-32 48-36 66-13 21 28 6 65-26 68-28 2-49-24-40-55Z" fill="#F7B296" />
      <path d="M246 108c25 4 55 0 63 21 6 17 5 32 26 38-30 15-70-1-91-33l2-26Z" fill="#563225" />
      <path d="M226 129c-4 11-3 24 8 29 10 5 23-2 28-15l7-17-29-9-14 12Z" fill="#F7B296" />
      <path d="M237 137c2 6 7 9 14 7M240 121l-3 15 10 1" stroke="#563225" strokeLinecap="round" strokeWidth="2" />
      <path d="M216 181c-35 0-62-20-72-55" stroke="#F7B296" strokeLinecap="round" strokeWidth="24" />
      <path d="M144 126c-1 21 3 40 18 51" stroke="#F7B296" strokeLinecap="round" strokeWidth="24" />
      <path d="M142 142h58" stroke="#F7B296" strokeLinecap="round" strokeWidth="12" />
      <circle cx="154" cy="113" r="29" fill="#009CA6" />
      <path d="m137 113 11 11 25-29" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
      <path d="M56 92 65 101M150 63l2 11M226 74l10 10M320 62l6 14M372 61l8 10M484 112l2 13M85 206l3 10M455 77l1 9" stroke="#E02537" strokeWidth="3" />
      <path d="M97 112h16M49 70l10 10M301 70l8 9M392 73l9 10" stroke="#5CCDD5" strokeWidth="4" />
      <path d="M290 63v-11M412 89v-13M124 113h-12" stroke="#F28A35" strokeWidth="4" />
    </svg>
  );
}

function CustomDropdown({ label, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <span className="relative block">
      <button
        type="button"
        className={`flex h-[58px] w-full items-center gap-3 rounded-full border border-[#dedee4] bg-white px-5 text-left text-[13px] text-[#242434] shadow-[0_8px_20px_rgba(17,24,39,0.015)] transition-colors ${
          isOpen ? "border-secondary" : ""
        }`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="min-w-0 flex-1 truncate">{selected || label}</span>
        <svg aria-hidden="true" className={`h-4 w-4 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="none">
          <path d="m6 8 4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-[calc(100%+10px)] z-40 w-[min(285px,calc(100vw-3rem))] rounded-[32px] border border-[#dddddf] bg-white px-6 py-6 text-black shadow-[0_18px_45px_rgba(14,41,105,0.1)] sm:w-[285px]">
          <p className="text-lg font-normal leading-none text-black">{label === "Interested level of study" ? "Level of study" : label}</p>
          <div className="mt-4 border-t border-black">
            <ul role="listbox" aria-label={label}>
              {options.map((option) => (
                <li key={option} className="border-b border-[#e3e3e3] last:border-b-0">
                  <button
                    type="button"
                    className="w-full py-3 text-left text-lg font-normal leading-none text-[#66717a] transition-colors hover:text-secondary focus-visible:text-secondary"
                    role="option"
                    aria-selected={selected === option}
                    onClick={() => {
                      setSelected(option);
                      setIsOpen(false);
                    }}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </span>
  );
}

export default function ContactPage() {
  return (
    <main className="bg-[#f7f7f7] px-4 pb-10 pt-28 text-black sm:px-6 sm:pb-14 sm:pt-36 lg:px-8 lg:pt-40">
      <section className="mx-auto grid min-h-[calc(100vh-10rem)] max-w-[1180px] items-end gap-8 md:grid-cols-[1.08fr_0.92fr] md:gap-4 lg:gap-9">
        <div className="flex min-h-[540px] flex-col justify-end gap-7 sm:min-h-[620px] md:min-h-[560px] lg:min-h-[640px]">
          <div className="mx-auto flex w-full max-w-[560px] flex-1 items-center justify-center md:max-w-[520px] lg:max-w-[560px]">
            <ContactIllustration />
          </div>

          <article className="rounded-[32px] border border-black/5 bg-white/72 px-7 py-7 shadow-[0_18px_55px_rgba(17,24,39,0.035)] sm:px-9 sm:py-8 md:px-7 lg:px-9">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-secondary shadow-[0_16px_34px_rgba(14,41,105,0.055)]">
              <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 20 20" fill="none">
                <path d="M4.5 11.2a5.5 5.5 0 0 1 11 0v3.2a1.2 1.2 0 0 1-1.2 1.2h-1.8v-4.2h3M4.5 11.4h3v4.2H5.7a1.2 1.2 0 0 1-1.2-1.2v-3.2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
              </svg>
            </div>
            <h1 className="mt-6 text-[clamp(1.7rem,5vw,2.25rem)] font-semibold leading-tight tracking-normal">
              We're here to assist YOU.
            </h1>
            <p className="mt-3 max-w-[650px] text-[13px] leading-5 text-[#2c2c34] sm:text-sm">
              Enter your details and one of our expert counsellors will reach out to you so we can
              connect you to the right course, country, university - and even scholarships!
            </p>
          </article>
        </div>

        <aside className="rounded-[28px] bg-white px-5 py-5 shadow-[0_22px_70px_rgba(17,24,39,0.035)] sm:rounded-[32px] sm:px-7 sm:py-7 md:px-5 md:py-5 lg:mb-0 lg:px-7 lg:py-7">
          <div className="relative overflow-hidden rounded-[28px] border border-black/[0.04] bg-[linear-gradient(135deg,#fff_0%,#fff_43%,#ebeefc_100%)] px-7 pb-8 pt-7 shadow-[inset_0_-18px_42px_rgba(224,37,55,0.06)] sm:px-8 sm:pt-8 md:px-7 lg:px-8">
            <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-white text-secondary shadow-[0_18px_38px_rgba(14,41,105,0.06)]">
              <svg aria-hidden="true" className="h-[19px] w-[19px]" viewBox="0 0 20 20" fill="none">
                <path d="m6.2 13.8 6.7-6.7 2 2-6.7 6.7H6.2v-2ZM12.1 4.7l1.2-1.2c.5-.5 1.3-.5 1.8 0l1.4 1.4c.5.5.5 1.3 0 1.8l-1.2 1.2-3.2-3.2Z" fill="currentColor" />
              </svg>
            </div>
            <h2 className="mt-7 max-w-[360px] text-[clamp(1.55rem,5vw,2rem)] font-semibold leading-[0.98] tracking-normal">
              Fill up the following form to get assessed for up to{" "}
              <span className="text-primary">70%</span> scholarship.
            </h2>
          </div>

          <form className="mt-7 grid gap-3.5 sm:grid-cols-2 md:gap-3 lg:gap-3.5" action="#">
            {fields.map((field) => (
              <label key={field.label} className={field.wide ? "sm:col-span-2" : ""}>
                <span className="sr-only">{field.label}</span>
                {field.type === "select" ? (
                  <CustomDropdown label={field.label} options={field.options} />
                ) : (
                  <span className="flex h-[58px] items-center gap-3 rounded-full border border-[#dedee4] bg-white px-5 text-[13px] text-[#242434] shadow-[0_8px_20px_rgba(17,24,39,0.015)] transition-colors focus-within:border-secondary">
                    <FieldIcon>{field.icon}</FieldIcon>
                    <input
                      className="min-w-0 flex-1 bg-transparent text-[13px] text-[#242434] outline-none placeholder:text-[#242434]"
                      placeholder={field.label}
                    />
                  </span>
                )}
              </label>
            ))}

            <label className="flex items-start gap-2 text-[10px] leading-4 text-black sm:col-span-2">
              <input type="checkbox" className="mt-0.5 h-3 w-3 shrink-0 accent-secondary" />
              <span>
                By clicking you agree to our Privacy Policy <span aria-hidden="true">*</span>
              </span>
            </label>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="group inline-flex h-14 min-w-[170px] items-center justify-center gap-4 rounded-full bg-rare px-6 text-base font-semibold text-txt-primary shadow-[0_18px_34px_rgba(14,41,105,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:-translate-y-0.5 focus-visible:bg-white sm:h-16 sm:min-w-[190px]"
              >
                Submit now
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-colors duration-300 group-hover:bg-secondary group-focus-visible:bg-secondary">
                  <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 20 20" fill="none">
                    <path d="M8 5l5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </aside>
      </section>
    </main>
  );
}
