import React from "react";

const universities = [
  {
    name: "University of Alberta",
    location: "Edmonton, Canada",
    color: "#0E2969",
    ring: "secondary",
    logo: "UA",
  },
  {
    name: "The University of British Columbia",
    location: "Kelowna, British Columbia",
    color: "#0E2969",
    ring: "secondary",
    logo: "UBC",
  },
  {
    name: "University Of Windsor",
    location: "Ontario, Canada",
    color: "#0B6EAD",
    ring: "primary",
    logo: "UW",
  },
];

function UniversityLogo({ university }) {
  return (
    <div className="university-logo-halo relative flex h-[154px] w-[154px] items-center justify-center rounded-full">
      <div className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,rgba(14,41,105,0.08),rgba(0,204,149,0.08),rgba(224,37,55,0.06))] opacity-80 blur-[1px] transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-[22px] rounded-full bg-secondary/8 transition-transform duration-500 group-hover:scale-105" />
      <div
        className={`absolute inset-[42px] rounded-full shadow-[0_18px_42px_rgba(14,41,105,0.08)] transition-transform duration-500 group-hover:scale-95 ${
          university.ring === "primary" ? "bg-primary/10" : "bg-secondary/10"
        }`}
      />
      <div className="relative flex h-[74px] w-[74px] items-center justify-center rounded-full bg-white shadow-[0_18px_38px_rgba(14,41,105,0.1)] ring-1 ring-black/[0.03] transition-transform duration-500 group-hover:scale-105">
        <svg aria-hidden="true" className="h-11 w-11" viewBox="0 0 64 64" fill="none">
          <path
            d="M18 12h28v20c0 12-7 18-14 21-7-3-14-9-14-21V12Z"
            fill="white"
            stroke={university.color}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path d="M24 20h16v8H24z" fill={university.color} opacity="0.18" />
          <path d="M24 34c5 2 11 2 16 0M25 41c4 2 10 2 14 0" stroke={university.color} strokeWidth="2" strokeLinecap="round" />
          <text
            x="32"
            y="29"
            textAnchor="middle"
            fontSize={university.logo.length > 2 ? "12" : "14"}
            fontWeight="700"
            fill={university.color}
          >
            {university.logo}
          </text>
        </svg>
      </div>
    </div>
  );
}

export default function TopUni() {
  return (
    <section id="top-universities" className="bg-background px-4 py-14 text-black sm:px-6 sm:py-18 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="max-w-[790px] text-[clamp(2.4rem,6vw,3.65rem)] font-medium leading-none tracking-normal">
              Discover top-rated <span className="text-primary font-bold">Universities</span>
            </h2>
            <p className="mt-6 max-w-[560px] text-base leading-6 text-black">
              Start your success story at a renowned university with our guidance.
            </p>
          </div>

          <a
            href="#"
            className="group flex h-[70px] w-fit items-center justify-center gap-4 rounded-full border border-border bg-white px-6 text-base font-semibold text-black transition-all duration-300 hover:bg-secondary hover:text-white focus-visible:bg-secondary focus-visible:text-white sm:min-w-[152px]"
          >
            View All
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-white transition-colors duration-300 group-hover:bg-white group-hover:text-secondary group-focus-visible:bg-white group-focus-visible:text-secondary">
              <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 20 20" fill="none">
                <path d="M8 5l5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </span>
          </a>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3 lg:mt-16">
          {universities.map((university) => (
            <article
              key={university.name}
              className="group relative flex min-h-[420px] flex-col items-center overflow-hidden rounded-[42px] bg-white px-7 pb-9 pt-8 text-center shadow-[0_18px_50px_rgba(14,41,105,0.04)] ring-1 ring-black/[0.025] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_78px_rgba(14,41,105,0.1)] sm:px-8"
            >
              <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-48 -translate-x-1/2 rounded-full bg-secondary/5 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
              <UniversityLogo university={university} />

              <h3 className="mt-8 flex min-h-[78px] max-w-[290px] items-center text-[clamp(1.9rem,4vw,2.2rem)] font-medium leading-[0.98] tracking-normal text-black">
                {university.name}
              </h3>

              <span
                className={`mt-auto inline-flex border-1  min-h-11 items-center rounded-full px-6 py-3 text-sm font-medium shadow-[0_12px_26px_rgba(14,41,105,0.04)] transition-colors duration-300  "bg-background text-black group-hover:bg-secondary hover:text-white group-hover:text-white"
                }`}
              >
                {university.location}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
