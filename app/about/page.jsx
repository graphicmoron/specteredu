"use client";

import React, { useState } from "react";

const milestones = [
  { id: "001", value: "500+", label: "Students Counselled" },
  { id: "002", value: "10+", label: "University Partners" },
  { id: "003", value: "236+", label: "Students Successfully Recruited" },
];

const helpTabs = [
  {
    number: "01",
    title: "Free counseling",
    displayTitle: "Free counseling",
    text: "We start with a clear conversation about your goals, budget, academic profile, and preferred destinations so you know which path fits you best.",
    image: "/about/freecoun.png",
    alt: "Student receiving study abroad counseling",
  },
  {
    number: "02",
    title: "Admission Process",
    displayTitle: "Admission Process",
    text: "From shortlisting universities to preparing documents and submitting applications, our team keeps the admission process organized and stress-free.",
    image: "/about/application.png",
    alt: "Graduates celebrating admission success",
  },
  {
    number: "03",
    title: "Visa Application",
    displayTitle: "Visa Application",
    text: "We guide you through document preparation, financial evidence, application steps, and interview readiness with practical support at every stage.",
    image: "/about/visa.png",
    alt: "Student preparing documents for a visa application",
  },
  {
    number: "04",
    title: "Pre-departure Support",
    displayTitle: "Pre-departure Support",
    text: "Before you fly, we help with travel preparation, accommodation planning, packing essentials, and the details that make your first days easier.",
    image: "about/predepart.png",
    alt: "Students preparing for international departure",
  },
  {
    number: "05",
    title: "Post-departure Support",
    displayTitle: "Post-departure Support",
    text: "After you land, we don't disappear. Our support continues well beyond your departure. We stay in regular contact to help you settle into your new environment.",
    image: "about/postdepart.png",
    alt: "Students arriving at an international airport",
  },
  {
    number: "06",
    title: "Guardianship and Welfare Services",
    displayTitle: "Guardianship and Welfare Services",
    text: "For students and families who need extra reassurance, we provide welfare guidance and ongoing care so support is available when it matters most.",
    image: "about/guard.png",
    alt: "Counselors supporting student welfare",
  },
];

const beliefs = [
  {
    number: "01",
    title: "Mission",
    text: "To empower students by providing comprehensive guidance and support, enabling them to achieve their educational and career goals abroad.",
    icon: "bars",
    image: "/about/mission.png",
    alt: "SpecterEdu team celebrating a student success",
  },
  {
    number: "02",
    title: "Values",
    text: "Honest advice, transparent processes, and student-first decisions guide every conversation we have.",
    icon: "trophy",
    image: "/about/values.png",
    alt: "Graduates raising diplomas together",
  },
  {
    number: "03",
    title: "Vision",
    text: "To become the most trusted bridge between ambitious students and global education opportunities.",
    icon: "eye",
    image: "/about/vision.png",
    alt: "Students planning global education opportunities",
  },
];

const faqItems = [
  {
    id: "item-1",
    question: "Is Georgia safe for Indian students?",
    answer: "Yes, Georgia is generally considered safe for international students, including Indian students. Cities like Tbilisi have a strong student community, public transport, and support services, but students should still follow normal safety habits and stay connected with the university and local coordinators.",
  },
  {
    id: "item-2",
    question: "Is MBBS in Georgia valid in India?",
    answer: "MBBS from Georgia can be valid in India when the university and course meet current NMC rules. After graduation, Indian students must clear the required licensing exam in India and complete any applicable registration requirements before practicing.",
  },
  {
    id: "item-3",
    question: "What is the total cost to study MBBS in Georgia?",
    answer: "For the listed universities, yearly tuition starts from about $6,000 to $6,500. Living expenses are usually around $300 to $350 per month, with additional one-time charges for admission, visa assistance, documentation, consultancy, and post-arrival support.",
  },
  {
    id: "item-4",
    question: "Is NEET required for MBBS in Georgia?",
    answer: "Yes, NEET qualification is required for Indian students who want to study MBBS abroad and later practice in India. Students should keep their NEET scorecard and eligibility documents ready during admission counseling.",
  },
  {
    id: "item-5",
    question: "What is the duration of MBBS in Georgia?",
    answer: "The MBBS program in Georgia is usually 6 years, including academic study and clinical exposure. Exact structure can vary slightly by university, so students should confirm the final course plan before admission.",
  },
  {
    id: "item-6",
    question: "Is the MBBS course taught in English?",
    answer: "Most popular medical universities in Georgia offer MBBS programs in English for international students. Students may also learn basic Georgian for hospital interaction and daily life during clinical years.",
  },
  {
    id: "item-7",
    question: "Can students get hostel or accommodation support?",
    answer: "Yes, students can get support for hostel or private accommodation depending on the university and city. The expected monthly living cost in this comparison includes food and accommodation estimates.",
  },
  {
    id: "item-8",
    question: "When should I apply for admission?",
    answer: "It is better to start early after NEET results so there is enough time for university selection, document preparation, admission letter, visa processing, and travel planning.",
  },
];

const students = [
  {
    university: "University of Windsor",
    image: "/hero-graduates.png",
    name: "Mahmuda Khatun Anamika",
    program: "Master of Medical Biotechnology",
  },
  {
    university: "Vancouver Island University",
    image: "/hero1.png",
    name: "Mohammad Sadman Sadaf",
    program: "Bachelor of Business Administration program",
  },
  {
    university: "Algoma University",
    image: "/hero-graduates.png",
    name: "Nahin Afrin Nuha",
    program: "Bachelor of Computer Science",
  },
];

function ArrowButton({ label, href = "/contact", light = false }) {
  return (
    <a
      href={href}
      className={`group inline-flex h-14 items-center justify-center gap-4 rounded-full px-6 text-sm font-semibold shadow-[0_18px_34px_rgba(14,41,105,0.12)] transition-all duration-300 hover:-translate-y-0.5 focus-visible:-translate-y-0.5 sm:h-16 sm:px-8 sm:text-base ${
        light
          ? "bg-rare text-txt-primary hover:bg-white"
          : "bg-rare text-txt-primary hover:bg-white"
      }`}
    >
      {label}
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-colors duration-300 group-hover:bg-secondary group-focus-visible:bg-secondary">
        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 20 20" fill="none">
          <path d="M8 5l5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </span>
    </a>
  );
}

function DotPill({ children, active = false, light = false }) {
  return (
    <span
      className={`inline-flex w-fit items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-xs font-medium sm:text-sm ${
        active
          ? "border-primary bg-primary text-white shadow-[0_12px_30px_rgba(224,37,55,0.18)]"
          : light
            ? "border-white/75 bg-white/10 text-white"
            : "border-border bg-white text-txt-secondary"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${active ? "bg-white" : light ? "bg-white" : "bg-secondary"}`} />
      {children}
    </span>
  );
}

function BuildingIcon() {
  return (
    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-[0_12px_28px_rgba(14,41,105,0.045)]">
      <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 20 20" fill="none">
        <path d="M6 17V4.8c0-.44.36-.8.8-.8h6.4c.44 0 .8.36.8.8V17M4 17h12M8.5 7h3M8.5 10h3M8.5 13h3M8 17v-2h4v2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
      </svg>
    </span>
  );
}

function BeliefIcon({ type }) {
  if (type === "trophy") {
    return (
      <path d="M6 4h8v2.5a4 4 0 0 1-8 0V4Zm0 1H3.8v1.1A3.4 3.4 0 0 0 6.5 9.4M14 5h2.2v1.1a3.4 3.4 0 0 1-2.7 3.3M10 10.5V14m-3 3h6m-5-3h4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
    );
  }

  if (type === "eye") {
    return (
      <>
        <path d="M2.8 10s2.6-4.5 7.2-4.5S17.2 10 17.2 10 14.6 14.5 10 14.5 2.8 10 2.8 10Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
        <circle cx="10" cy="10" r="2" stroke="currentColor" strokeWidth="1.7" />
      </>
    );
  }

  return (
    <>
      <path d="M4 15h2.5v-5H4v5Zm5 0h2.5V6H9v9Zm5 0h2.5V9H14v6Z" fill="currentColor" />
      <path d="m14.5 4 .5 1.2 1.3.1-1 .8.3 1.2-1.1-.7-1.1.7.3-1.2-1-.8 1.3-.1.5-1.2Z" fill="currentColor" />
    </>
  );
}

function TimelineSplit({ children, image, alt }) {
  return (
    <article className="grid gap-8 rounded-[34px] bg-white px-6 py-8 shadow-[0_18px_55px_rgba(14,41,105,0.035)] ring-1 ring-black/[0.02] sm:rounded-[42px] sm:px-9 sm:py-10 lg:grid-cols-[0.88fr_auto_1fr] lg:gap-14 lg:px-12">
      <div>{children}</div>
      <div className="relative hidden w-px bg-border lg:block">
        <span className="absolute left-1/2 top-1/2 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_8px_20px_rgba(14,41,105,0.08)]">
          <span className="h-2 w-2 rounded-full bg-secondary" />
        </span>
      </div>
      <div className="relative min-h-[250px] overflow-hidden rounded-[28px] bg-secondary sm:min-h-[340px] lg:min-h-[390px]">
        <img src={image} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      </div>
    </article>
  );
}

export default function AboutPage() {
  const [activeHelp, setActiveHelp] = useState(4);
  const [activeBelief, setActiveBelief] = useState(0);
  const activeHelpItem = helpTabs[activeHelp];
  const activeBeliefItem = beliefs[activeBelief];

  return (
    <main className="bg-background px-3 pb-14 pt-24 text-black sm:px-5 sm:pb-20 sm:pt-32 lg:px-8 lg:pt-40">
      <section className="mx-auto max-w-[1374px]">
        <div className="relative min-h-[430px] overflow-hidden rounded-[30px] bg-secondary shadow-[0_24px_70px_rgba(14,41,105,0.14)] sm:min-h-[500px] sm:rounded-[42px]">
          <img src="/aboutus.jpg" alt="SpecterEdu students and counsellors" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(224,37,55,0.44)_0%,rgba(255,255,255,0.18)_42%,rgba(14,41,105,0.52)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_62%,rgba(224,37,55,0.82)_0%,rgba(224,37,55,0.58)_31%,rgba(14,41,105,0.42)_72%,rgba(14,41,105,0.62)_100%)] mix-blend-multiply" />
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-[linear-gradient(0deg,rgba(224,37,55,0.55),transparent)]" />

          <div className="relative z-10 flex min-h-[430px] flex-col items-center justify-center px-5 py-16 text-center text-white sm:min-h-[500px]">
            <DotPill light>Helping you amplify your global reach</DotPill>
            <h1 className="mt-7 text-[clamp(3.3rem,9vw,5.8rem)] font-semibold leading-[0.94] tracking-normal">About us</h1>
            <div className="mt-8">
              <ArrowButton label="Start your journey now" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-[1374px] rounded-[34px] bg-white px-6 py-9 shadow-[0_18px_55px_rgba(14,41,105,0.035)] ring-1 ring-black/[0.02] sm:mt-16 sm:rounded-[42px] sm:px-10 sm:py-12 lg:px-12 lg:py-16">
        <div className="grid items-center gap-9 lg:grid-cols-[0.92fr_1fr] lg:gap-14">
          <div>
            <h2 className="max-w-[600px] text-[clamp(2.45rem,5.5vw,3.6rem)] font-medium leading-[0.95] tracking-normal text-black">
              We're here to turn your ambitions into reality
            </h2>
            <p className="mt-6 max-w-[610px] text-sm leading-6 text-black sm:text-base">
              SpecterEdu is a leading student recruitment agency helping 9,500+ students achieve
              their study abroad dreams in Australia, Canada, New Zealand, the USA, and the UK. We
              offer personalized support and tailored opportunities to meet your educational goals.
            </p>
            <div className="mt-9">
              <ArrowButton label="Get a free counseling" light />
            </div>
          </div>
          <div className="relative min-h-[290px] overflow-hidden rounded-[28px] bg-background sm:min-h-[360px] lg:min-h-[390px]">
            <img src="/about/about2.jpg" alt="Graduates celebrating with diplomas" className="absolute inset-0 h-full w-full object-cover object-center" />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-[1374px] rounded-[34px] bg-white px-6 py-9 shadow-[0_18px_55px_rgba(14,41,105,0.035)] ring-1 ring-black/[0.02] sm:mt-12 sm:rounded-[42px] sm:px-10 sm:py-12 lg:px-12">
        <h2 className="text-center text-[clamp(2.2rem,5vw,3rem)] font-medium leading-none tracking-normal">Our Milestone</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {milestones.map((item) => (
            <article key={item.id} className="relative min-h-[255px] rounded-[30px] bg-background p-8 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.85)] sm:min-h-[320px]">
              <div className="flex items-start justify-between">
                <strong className="text-[clamp(2.8rem,6vw,3.25rem)] font-medium leading-none text-black">{item.value}</strong>
                <BuildingIcon />
              </div>
              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between gap-5">
                <h3 className="relative max-w-[230px] pl-6 text-xl font-medium leading-[0.98] text-black sm:text-2xl">
                  <span className="absolute left-0 top-2.5 h-2 w-2 rounded-full bg-black" />
                  {item.label}
                </h3>
                <span className="text-2xl font-semibold text-border">{item.id}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-[1374px]">
        <h2 className="text-[clamp(2.6rem,6vw,3.75rem)] font-medium leading-none tracking-normal">How we help?</h2>
        <div className="mt-8 flex flex-wrap gap-3 rounded-[34px] bg-white p-4 shadow-[0_18px_55px_rgba(14,41,105,0.035)] ring-1 ring-black/[0.02]">
          {helpTabs.map((tab, index) => (
            <button
              key={tab.title}
              type="button"
              onClick={() => setActiveHelp(index)}
              className={`cursor-pointer rounded-full px-5 py-3 text-xs font-medium transition-all duration-300 sm:text-sm ${
                activeHelp === index
                  ? "bg-primary text-white shadow-[0_12px_28px_rgba(224,37,55,0.18)]"
                  : "bg-background text-txt-secondary hover:bg-white hover:text-secondary"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="mt-6">
          <TimelineSplit image={activeHelpItem.image} alt={activeHelpItem.alt}>
            <div key={activeHelpItem.title} className="flex min-h-[390px] flex-col justify-between text-center transition-opacity duration-300 lg:text-left">
              <div>
                <h3 className="relative mx-auto max-w-[360px] pl-7 text-left text-[clamp(2.3rem,5vw,3rem)] font-medium leading-[0.92] tracking-normal text-black lg:mx-0">
                  <span className="absolute left-0 top-3 h-2 w-2 rounded-full bg-black" />
                  {activeHelpItem.displayTitle}
                </h3>
                <p className="mx-auto mt-6 max-w-[500px] text-base leading-6 text-black lg:mx-0">
                  {activeHelpItem.text}
                </p>
              </div>
              <span className="mt-8 flex h-16 w-16 items-center justify-center rounded-full bg-background text-base text-black">{activeHelpItem.number}</span>
            </div>
          </TimelineSplit>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1374px] text-center">
        <h2 className="text-[clamp(2.6rem,6vw,3.75rem)] font-medium leading-none tracking-normal">What we believe in</h2>
        <p className="mt-4 text-base text-black sm:text-lg">Since 2007, SpecterEdu has been inspiring students to excel</p>
        <div className="mx-auto mt-7 flex w-fit flex-wrap justify-center gap-2 rounded-full bg-white p-2 shadow-[0_16px_42px_rgba(14,41,105,0.04)]">
          {beliefs.map((belief, index) => (
            <button
              key={belief.title}
              type="button"
              onClick={() => setActiveBelief(index)}
              className={`inline-flex cursor-pointer items-center gap-3 rounded-full px-4 py-3 text-sm font-medium transition-all duration-300 ${
                activeBelief === index
                  ? "bg-primary text-white shadow-[0_12px_28px_rgba(224,37,55,0.18)]"
                  : "bg-background text-black hover:bg-white hover:text-secondary"
              }`}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
                <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 20 20" fill="none">
                  <BeliefIcon type={belief.icon} />
                </svg>
              </span>
              {belief.title}
            </button>
          ))}
        </div>
        <div className="mt-[-18px]">
          <TimelineSplit image={activeBeliefItem.image} alt={activeBeliefItem.alt}>
            <div key={activeBeliefItem.title} className="flex min-h-[390px] flex-col justify-center text-center transition-opacity duration-300 lg:text-left">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-background text-base text-black lg:mx-0">{activeBeliefItem.number}</span>
              <h3 className="mt-8 text-[clamp(2.2rem,5vw,2.75rem)] font-medium leading-none tracking-normal text-black">{activeBeliefItem.title}</h3>
              <p className="mx-auto mt-6 max-w-[430px] text-base leading-6 text-black lg:mx-0">{activeBeliefItem.text}</p>
            </div>
          </TimelineSplit>
        </div>
      </section>

      <section className="mx-auto mt-16 grid max-w-[1374px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Student FAQs
          </p>
          <h2 className="mt-3 max-w-[620px] text-[clamp(2.25rem,5vw,3.55rem)] font-medium leading-none tracking-normal text-black">
            Questions before choosing <span className="font-bold text-secondary">Georgia</span>
          </h2>
          <p className="mt-5 max-w-[520px] text-base leading-7 text-black/70">
            Quick answers about safety, NEET, validity in India, costs, accommodation and the admission process.
          </p>
          <a
            href="/contact"
            className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-rare px-6 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:text-white"
          >
            Ask a counselor
          </a>
        </div>

        <div className="rounded-[28px] bg-white p-2 shadow-[0_26px_70px_rgba(14,41,105,0.07)] ring-1 ring-black/[0.04]">
          {faqItems.map((item, index) => (
            <details
              key={item.id}
              className="group rounded-[20px] px-5 py-1 open:bg-background open:shadow-[0_16px_36px_rgba(14,41,105,0.05)] sm:px-7"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-base font-semibold text-black marker:hidden sm:text-lg">
                <span>{item.question}</span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-white transition-transform duration-300 group-open:rotate-45">
                  <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3.5v9M3.5 8h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="pb-5 pr-2 text-sm leading-7 text-black/68 sm:text-base">
                {item.answer}
              </p>
              {index !== faqItems.length - 1 && <hr className="border-dashed border-border group-open:opacity-0" />}
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1374px]">
        <h2 className="text-center text-[clamp(2.6rem,6vw,3.75rem)] font-medium leading-none tracking-normal">What Student say</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {students.map((student, index) => (
            <article key={student.name} className="rounded-[32px] bg-white px-5 py-6 text-center shadow-[0_18px_55px_rgba(14,41,105,0.035)] ring-1 ring-black/[0.02] sm:px-7 lg:min-h-[610px] hover:cursor-pointer hover:border-primary hover:ring-primary">
              <div className="flex justify-center">
                <DotPill>{student.university}</DotPill>
              </div>
              <div className="relative mt-5 min-h-[330px] overflow-hidden rounded-[28px] bg-background">
                <img src={student.image} alt={`${student.name}, student testimonial`} className={`absolute inset-0 h-full w-full object-cover ${index === 1 ? "object-left" : "object-center"}`} />
                <button aria-label={`Play ${student.name} testimonial`} className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-[0_14px_34px_rgba(14,41,105,0.18)]">
                  <svg aria-hidden="true" className="h-5 w-5 translate-x-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M7 4.8v10.4L15 10 7 4.8Z" />
                  </svg>
                </button>
              </div>
              <h3 className="mx-auto mt-8 max-w-[300px] text-[clamp(1.75rem,4vw,2rem)] font-medium leading-[0.98] tracking-normal text-black">{student.name}</h3>
              <div className="mt-6 flex justify-center">
                <DotPill>{student.program}</DotPill>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
