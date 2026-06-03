import React from "react";

const discussionCards = [
  {
    number: "001",
    title: "Academic Assessment",
    description: "We review your academic background and career interests.",
  },
  {
    number: "002",
    title: "Choosing a Suitable University",
    description: "We assist you in selecting the right university based on your preferences and requirements.",
  },
  {
    number: "003",
    title: "Scholarship Opportunities",
    description: "We guide you in finding and applying for scholarships based on your achievements.",
  },
  {
    number: "004",
    title: "Financial Planning",
    description: "We help you find affordable study options and plan your education budget.",
  },
];

const serviceSections = [
  {
    title: "University Application",
    image: "/hero-graduates.png",
    cta: "Request a call back",
  },
  {
    title: "Visa application Guidance",
    image: "/hero1.png",
    cta: "Request a service",
  },
  {
    title: "Accommodation Advice",
    image: "/hero1.png",
    cta: "Request a service",
  },
  {
    title: "Pre-Departure briefing",
    image: "/hero-graduates.png",
    cta: "Request a service",
  },
];

const checklist = [
  "Bring the required documents",
  "Choose a suitable university",
  "Our counsellor will process the application",
  "Accept offer letter and pay your tuition fee",
  "Get your enrolment confirmation",
];

function DotLabel({ children, light = false }) {
  return (
    <span
      className={`inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold ${
        light ? "border-white/75 text-white" : "border-border bg-white text-black"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-white" : "bg-black"}`} />
      {children}
    </span>
  );
}

function MiniIcon() {
  return (
    <span className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-background text-black">
      <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 20 20" fill="none">
        <path
          d="M6 17V4.7c0-.5.4-.9.9-.9h6.2c.5 0 .9.4.9.9V17M4.5 17h11M8.2 7.4h3.6M8.2 10h3.6M8.2 12.6h3.6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    </span>
  );
}

function ThemeButton({ children }) {
  return (
    <a
      href="/contact"
      className="group inline-flex h-16 min-w-[236px] items-center justify-center gap-4 rounded-full bg-rare px-7 text-base font-semibold text-txt-primary shadow-[0_18px_34px_rgba(14,41,105,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:-translate-y-0.5 focus-visible:bg-white sm:h-[74px] sm:min-w-[270px] sm:text-lg"
    >
      {children}
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-colors duration-300 group-hover:bg-secondary group-focus-visible:bg-secondary">
        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 20 20" fill="none">
          <path d="M8 5l5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </span>
    </a>
  );
}

function ServiceDetail({ service, index }) {
  const reverse = index % 2 === 1;

  return (
    <article
      className={`grid gap-9 rounded-[34px] bg-white px-7 py-9 shadow-[0_18px_55px_rgba(14,41,105,0.035)] ring-1 ring-black/[0.025] sm:rounded-[42px] sm:px-10 sm:py-10 lg:gap-20 lg:px-12 lg:py-14 ${
        reverse ? "lg:grid-cols-[1.14fr_0.86fr]" : "lg:grid-cols-[0.86fr_1.14fr]"
      }`}
    >
      <div className={`flex flex-col justify-between lg:max-w-[470px] ${reverse ? "lg:order-2 lg:ml-auto" : ""}`}>
        <div>
          <h2 className="max-w-[430px] text-[clamp(2.25rem,5vw,3.45rem)] font-medium leading-[0.92] tracking-normal text-black">
            {service.title}
          </h2>
          <p className="mt-6 max-w-[470px] text-sm leading-6 text-txt-secondary sm:text-[15px]">
            After you have received your enrolment confirmation, we provide a detailed document
            checklist and guide you through each and every step with clear, practical support.
          </p>

          <div className="mt-8">
            <DotLabel>What we discuss</DotLabel>
            <ul className="mt-5 space-y-3 text-sm text-txt-secondary">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border text-secondary">
                    <svg aria-hidden="true" className="h-3 w-3" viewBox="0 0 20 20" fill="none">
                      <path d="m5.5 10.2 3 3 6-6.4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <ThemeButton>{service.cta}</ThemeButton>
        </div>
      </div>

      <div className={`relative min-h-[290px] overflow-hidden rounded-[28px] bg-secondary shadow-[0_24px_70px_rgba(14,41,105,0.1)] sm:min-h-[380px] sm:rounded-[34px] lg:min-h-[460px] ${reverse ? "lg:order-1" : ""}`}>
        <img src={service.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.08)_24%,rgba(224,37,55,0.34)_58%,rgba(14,41,105,0.46)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_65%,rgba(224,37,55,0.58)_0%,rgba(224,37,55,0.32)_30%,rgba(14,41,105,0.30)_70%,rgba(14,41,105,0.42)_100%)] mix-blend-multiply" />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-[radial-gradient(circle_at_50%_0%,rgba(0,204,149,0.18),transparent_58%)]" />
      </div>
    </article>
  );
}

export default function ServicePage() {
  return (
    <main className="bg-background px-4 pb-14 pt-28 text-black sm:px-6 sm:pb-20 sm:pt-36 lg:px-8 lg:pt-40">
      <section className="mx-auto max-w-[1368px]">
        <div className="relative min-h-[420px] overflow-hidden rounded-[34px] bg-secondary shadow-[0_24px_70px_rgba(14,41,105,0.12)] sm:min-h-[500px] sm:rounded-[44px] lg:min-h-[540px]">
          <img src="/hero1.png" alt="Student counselling session" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.32)_27%,rgba(224,37,55,0.52)_55%,rgba(14,41,105,0.68)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_65%,rgba(224,37,55,0.86)_0%,rgba(224,37,55,0.48)_30%,rgba(14,41,105,0.48)_70%,rgba(14,41,105,0.62)_100%)] mix-blend-multiply" />
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-[radial-gradient(circle_at_50%_0%,rgba(0,204,149,0.20),transparent_58%)]" />

          <div className="relative z-10 flex min-h-[420px] flex-col items-center justify-center px-6 py-16 text-center text-white sm:min-h-[500px] lg:min-h-[540px]">
            <DotLabel light>Services</DotLabel>
            <h1 className="mt-8 max-w-[760px] text-[clamp(3.2rem,10vw,6.7rem)] font-semibold leading-[0.92] tracking-normal">
              Services for students
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-[1368px] rounded-[34px] bg-white px-7 py-10 shadow-[0_18px_55px_rgba(14,41,105,0.035)] ring-1 ring-black/[0.02] sm:mt-16 sm:rounded-[42px] sm:px-10 sm:py-12 lg:px-12 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1fr] lg:gap-20">
          <h2 className="relative max-w-[390px] pl-7 text-[clamp(2.8rem,5.8vw,4.25rem)] font-medium leading-[0.9] tracking-normal text-black">
            <span className="absolute left-0 top-4 h-3 w-3 rounded-full bg-black sm:top-5" />
            Student
            <br />
            counselling
          </h2>
          <div className="max-w-[640px] space-y-5 text-base leading-7 text-black lg:pt-2">
            <p>
              At CSB, we simplify your study abroad journey through personalized
              consultations. Our goal is to provide accurate information and guidance to help you
              make informed decisions.
            </p>
            <p>
              We are partnered with over 230+ educational institutions across Australia, Canada,
              Denmark, New Zealand, Sweden, the UK & the USA. Our counselors will evaluate your
              academic achievements, financial situation, and other factors to help you choose the
              best university for you.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <DotLabel>What we discuss</DotLabel>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {discussionCards.map((card) => (
              <article
                key={card.number}
                className="group flex min-h-[294px] flex-col rounded-[30px] bg-white px-8 py-8 shadow-[0_18px_54px_rgba(14,41,105,0.045)] ring-1 ring-black/[0.015] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_64px_rgba(14,41,105,0.08)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <MiniIcon />
                  <span className="pt-3 text-sm font-medium text-txt-secondary">{card.number}</span>
                </div>
                <h3 className="relative mt-auto max-w-[220px] pl-5 text-lg font-semibold leading-[0.98] text-black">
                  <span className="absolute left-0 top-1.5 h-1.5 w-1.5 rounded-full bg-black" />
                  {card.title}
                </h3>
                <p className="mt-6 text-sm leading-5 text-black">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 grid max-w-[1368px] gap-10 sm:mt-12">
        {serviceSections.map((service, index) => (
          <ServiceDetail key={service.title} service={service} index={index} />
        ))}
      </section>
    </main>
  );
}
