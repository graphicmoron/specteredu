"use client";

import React, { useEffect, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";

const levelOfStudyOptions = [
  "Foundation / Pathway",
  "Bachelor",
  "Diploma",
  "Masters",
  "Postgraduate Diploma",
];

const destinationOptions = [
  "Georgia",
];

const fields = [
  {
    label: "Enter your name",
    name: "name",
    type: "input",
    wide: true,
    icon: (
      <path d="M10 10.4a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2Zm-5.3 7.1v-.9a5.3 5.3 0 0 1 10.6 0v.9" />
    ),
  },
  {
    label: "Mobile number",
    name: "phone",
    type: "input",
    inputType: "tel",
    icon: (
      <path d="M6.5 3.8 8.3 3c.5-.2 1 .1 1.2.5l.9 2.2c.2.4.1.9-.3 1.2l-1.2.9a9.4 9.4 0 0 0 3.5 3.5l.9-1.2c.3-.4.8-.5 1.2-.3l2.2.9c.5.2.7.7.5 1.2l-.8 1.8c-.2.5-.7.8-1.2.7C9 13.8 5.2 10 4.5 4.8c-.1-.5.2-1 .7-1.2Z" />
    ),
  },
  {
    label: "Email",
    name: "email",
    type: "input",
    inputType: "email",
    icon: (
      <path d="M3.8 6.2c0-.8.7-1.5 1.5-1.5h9.4c.8 0 1.5.7 1.5 1.5v7c0 .8-.7 1.5-1.5 1.5H5.3c-.8 0-1.5-.7-1.5-1.5v-7Zm.6.1 5.6 4 5.6-4" />
    ),
  },
  { label: "Interested level of study", name: "levelOfStudy", type: "select", options: levelOfStudyOptions },
  { label: "Study destination", name: "studyDestination", type: "select", options: destinationOptions },
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

function CustomDropdown({ label, name, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const closeOnOutsidePress = (event) => {
      if (!dropdownRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeOnOutsidePress);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePress);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <span ref={dropdownRef} className="relative block">
      <select
        name={name}
        value={selected}
        onChange={(event) => setSelected(event.target.value)}
        onInvalid={() => setIsOpen(true)}
        required
        className="h-[58px] w-full cursor-pointer appearance-auto rounded-full border border-[#cfd2dc] bg-white px-5 text-[13px] text-[#242434] outline-none focus:border-secondary sm:pointer-events-none sm:absolute sm:left-0 sm:top-0 sm:h-px sm:w-px sm:opacity-0"
      >
        <option value="" disabled>
          {label}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <div className="relative hidden sm:block">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className={`flex h-[58px] w-full items-center gap-4 rounded-full border bg-white px-5 text-left text-[13px] text-[#353542] outline-none transition-all hover:border-secondary focus-visible:ring-4 focus-visible:ring-secondary/10 ${
            isOpen ? "border-secondary shadow-[0_8px_24px_rgba(14,41,105,0.08)]" : "border-[#cfd2dc]"
          }`}
        >
          <span className="min-w-0 flex-1 truncate">{selected || label}</span>
          <svg
            aria-hidden="true"
            className={`h-4 w-4 shrink-0 text-secondary transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            viewBox="0 0 20 20"
            fill="none"
          >
            <path d="m6 8 4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute inset-x-0 top-[calc(100%+10px)] z-50 overflow-hidden rounded-[26px] border border-[#d9d9de] bg-white px-5 pb-4 pt-5 text-black shadow-[0_22px_55px_rgba(14,41,105,0.14)]">
            <p className="text-[18px] font-medium leading-none text-[#202027]">
              {label === "Interested level of study" ? "Level of study" : label}
            </p>
            <ul className="mt-4 border-t border-[#202027]" role="listbox" aria-label={label}>
              {options.map((option) => (
                <li key={option} className="border-b border-[#dedee2] last:border-b-0">
                  <button
                    type="button"
                    role="option"
                    aria-selected={selected === option}
                    onClick={() => {
                      setSelected(option);
                      setIsOpen(false);
                    }}
                    className={`w-full py-3 text-left text-[17px] leading-[1.05] transition-colors hover:text-secondary focus-visible:text-secondary focus-visible:outline-none ${
                      selected === option ? "font-medium text-secondary" : "text-[#68717d]"
                    }`}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </span>
  );
}

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xeewyzoy");

  return (
    <main className="bg-[#f7f7f7] px-4 pb-12 pt-28 text-black sm:px-6 sm:pb-16 sm:pt-36 lg:px-8 lg:pt-40">
      <section className="mx-auto grid max-w-[1180px] items-stretch gap-7 lg:grid-cols-[1.08fr_0.92fr] lg:gap-9">
        <div className="order-2 flex min-w-0 flex-col gap-7 lg:order-1 lg:h-full">
          <div className="flex min-h-[320px] w-full flex-1 items-center justify-center overflow-hidden rounded-[28px] sm:min-h-[420px] lg:min-h-0">
            <Image
              src="/contact.png"
              alt="Student completing an application form"
              width={1254}
              height={1254}
              className="h-full max-h-[560px] w-full object-contain rounded-[28px]"
              preload
              fetchPriority="high"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <article className="w-full rounded-[32px] border border-black/5 bg-white/72 px-6 py-7 shadow-[0_18px_55px_rgba(17,24,39,0.035)] sm:px-9 sm:py-8">
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

        <aside className="order-1 flex min-w-0 flex-col rounded-[28px] bg-white p-5 shadow-[0_22px_70px_rgba(17,24,39,0.035)] sm:rounded-[32px] sm:p-7 lg:order-2 lg:h-full">
          <div className="relative overflow-hidden rounded-[28px] border border-black/[0.04] bg-[linear-gradient(135deg,#fff_0%,#fff_43%,#ebeefc_100%)] px-6 pb-8 pt-7 shadow-[inset_0_-18px_42px_rgba(224,37,55,0.06)] sm:px-8 sm:pt-8">
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

          {state.succeeded ? (
            <div className="mt-7 rounded-[28px] border border-secondary/20 bg-secondary/5 px-6 py-8 text-center" role="status">
              <h3 className="text-xl font-semibold text-secondary">Thank you!</h3>
              <p className="mt-2 text-sm leading-6 text-[#2c2c34]">
                Your details have been submitted. One of our counsellors will contact you soon.
              </p>
            </div>
          ) : (
          <form className="mt-7 grid items-start gap-3.5 sm:grid-cols-2" onSubmit={handleSubmit}>
            {fields.map((field) => (
              <label key={field.label} className={`block min-w-0 ${field.wide ? "sm:col-span-2" : ""}`}>
                <span className="sr-only">{field.label}</span>
                {field.type === "select" ? (
                  <CustomDropdown label={field.label} name={field.name} options={field.options} />
                ) : (
                  <span className="flex h-[58px] items-center gap-3 rounded-full border border-[#dedee4] bg-white px-5 text-[13px] text-[#242434] shadow-[0_8px_20px_rgba(17,24,39,0.015)] transition-colors focus-within:border-secondary">
                    <FieldIcon>{field.icon}</FieldIcon>
                    <input
                      type={field.inputType || "text"}
                      name={field.name}
                      className="min-w-0 flex-1 bg-transparent text-[13px] text-[#242434] outline-none placeholder:text-[#242434]"
                      placeholder={field.label}
                      required
                    />
                  </span>
                )}
              </label>
            ))}

            <label className="block sm:col-span-2">
              <span className="sr-only">Message</span>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Message"
                className="min-h-[120px] w-full resize-y rounded-[28px] border border-[#dedee4] bg-white px-5 py-4 text-[13px] text-[#242434] shadow-[0_8px_20px_rgba(17,24,39,0.015)] outline-none transition-colors placeholder:text-[#242434] focus:border-secondary"
              />
            </label>

            <label className="flex items-start gap-2 text-[10px] leading-4 text-black sm:col-span-2">
              <input type="checkbox" name="privacyConsent" value="agreed" required className="mt-0.5 h-3 w-3 shrink-0 accent-secondary" />
              <span>
                By clicking you agree to our Privacy Policy <span aria-hidden="true">*</span>
              </span>
            </label>

            <ValidationError
              className="text-sm text-primary sm:col-span-2"
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <ValidationError
              className="text-sm text-primary sm:col-span-2"
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <ValidationError
              className="text-sm text-primary sm:col-span-2"
              errors={state.errors}
            />

            <div className="pt-1 sm:col-span-2">
              <button
                type="submit"
                disabled={state.submitting}
                className="group inline-flex h-14 w-full items-center justify-center gap-4 rounded-full bg-rare px-6 text-base font-semibold text-txt-primary shadow-[0_18px_34px_rgba(14,41,105,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:-translate-y-0.5 focus-visible:bg-white disabled:cursor-not-allowed disabled:opacity-60 sm:h-16 sm:w-auto sm:min-w-[190px]"
              >
                {state.submitting ? "Submitting..." : "Submit now"}
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-colors duration-300 group-hover:bg-secondary group-focus-visible:bg-secondary">
                  <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 20 20" fill="none">
                    <path d="M8 5l5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </span>
              </button>
            </div>
          </form>
          )}
        </aside>
      </section>
    </main>
  );
}
