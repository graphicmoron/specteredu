"use client";

import React, { useCallback, useRef } from "react";

const services = [
  {
    number: "001",
    title: "Student Counselling",
    description:
      "Our advisors start with GTE eligibility and background research to find the best education options for each student.",
    tone: "secondary",
    icon: (
      <>
        <path
          d="M10 3.2 12 7l4.2.6-3 3 .7 4.1L10 12.8l-3.8 1.9.7-4.1-3-3L8 7l2-3.8Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M7.2 14.2v2.6l2.8-1.4 2.8 1.4v-2.6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </>
    ),
  },
  {
    number: "002",
    title: "Choose a Suitable University & Program",
    description:
      "Identify the ideal university that aligns with your academic aspirations and financial constraints.",
    tone: "primary",
    icon: (
      <>
        <path
          d="M10 3.2 12 7l4.2.6-3 3 .7 4.1L10 12.8l-3.8 1.9.7-4.1-3-3L8 7l2-3.8Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M7.2 14.2v2.6l2.8-1.4 2.8 1.4v-2.6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </>
    ),
  },
  {
    number: "003",
    title: "University Admission",
    description:
      "Guide students through the entire university admission process, ensuring successful applications to their desired institutions.",
    tone: "secondary",
    icon: (
      <>
        <path
          d="M10 3.2 12 7l4.2.6-3 3 .7 4.1L10 12.8l-3.8 1.9.7-4.1-3-3L8 7l2-3.8Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M7.2 14.2v2.6l2.8-1.4 2.8 1.4v-2.6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </>
    ),
  },
  {
    number: "004",
    title: "Visa Application Guidance",
    description:
      "Guide students through the visa application process, including mock interviews.",
    tone: "primary",
    icon: (
      <>
        <path
          d="M6 17V4.7c0-.5.4-.9.9-.9h6.2c.5 0 .9.4.9.9V17"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M4.5 17h11M8.2 7.2h.01M10 7.2h.01M11.8 7.2h.01M8.2 10h.01M10 10h.01M11.8 10h.01M8.2 12.8h.01M10 12.8h.01M11.8 12.8h.01"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </>
    ),
  },
];

export default function Services() {
  const scrollRef = useRef(null);

  const scrollServices = useCallback((direction) => {
    const rail = scrollRef.current;

    if (!rail) {
      return;
    }

    const firstCard = rail.querySelector("article");
    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 360;
    const gap = parseFloat(window.getComputedStyle(rail).columnGap) || 20;
    const step = cardWidth + gap;
    const maxScrollLeft = rail.scrollWidth - rail.clientWidth;
    const currentPosition = rail.scrollLeft;
    const nextPosition = currentPosition + direction * step;

    if (direction > 0 && currentPosition >= maxScrollLeft - 8) {
      rail.scrollTo({
        left: 0,
        behavior: "smooth",
      });

      return;
    }

    if (direction < 0 && currentPosition <= 8) {
      rail.scrollTo({
        left: maxScrollLeft,
        behavior: "smooth",
      });

      return;
    }

    rail.scrollTo({
      left: Math.max(0, Math.min(nextPosition, maxScrollLeft)),
      behavior: "smooth",
    });
  }, []);

  return (
    <section id="services" className="overflow-hidden bg-background px-4 py-16 text-txt-primary sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-7 flex w-full justify-center">
          <div className="grid w-full max-w-[300px] grid-cols-[1fr_auto_1fr] items-center gap-3">
              <span className="relative h-px bg-gradient-to-l from-primary to-transparent">
                <span className="absolute right-[-1px] top-1/2 h-0 w-0 -translate-y-1/2 border-y-[4px] border-r-[8px] border-y-transparent border-r-primary" />
              </span>
              <span className="rounded-full bg-white px-7 py-3 text-sm font-medium text-txt-primary shadow-[0_14px_35px_rgba(14,41,105,0.08)]">
                Services
              </span>
              <span className="relative h-px bg-gradient-to-r from-primary to-transparent">
                <span className="absolute left-[-1px] top-1/2 h-0 w-0 -translate-y-1/2 border-y-[4px] border-l-[8px] border-y-transparent border-l-primary" />
              </span>
          </div>
        </div>

        <div className="mb-10 lg:mb-14">
          <div>
            <h2 className="max-w-[560px] text-[clamp(2.7rem,7vw,4rem)] font-medium leading-[1.05] tracking-normal text-black">
              Services for <span className="text-primary font-bold">Students</span> 
            </h2>
          </div>
        </div>

        <div className="service-carousel relative">
          <button
            type="button"
            onClick={() => scrollServices(-1)}
            className="absolute left-0 top-1/2 z-20 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-txt-primary shadow-[0_10px_24px_rgba(14,41,105,0.08)] transition-all duration-300 hover:-translate-x-[54%] hover:bg-secondary hover:text-white focus-visible:bg-secondary focus-visible:text-white md:flex"
            aria-label="Previous service"
          >
            <svg aria-hidden="true" className="h-5 w-5 rotate-180" viewBox="0 0 20 20" fill="none">
              <path d="M5 10h10m-4-4 4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="service-scroll flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5"
            aria-label="Student services"
          >
            {services.map((service, index) => {
              const isPrimary = service.tone === "primary";

              return (
                <article
                  key={service.number}
                  className="service-card group relative flex min-h-[430px] w-[82vw] max-w-[390px] shrink-0 snap-start flex-col overflow-hidden rounded-[34px] bg-white px-7 pb-8 pt-7 shadow-[0_16px_42px_rgba(14,41,105,0.045)] ring-1 ring-black/[0.035] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_22px_54px_rgba(14,41,105,0.09)] focus-within:-translate-y-1.5 sm:min-h-[470px] sm:w-[380px] sm:px-9 sm:pb-10 sm:pt-8 lg:w-[368px]"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div
                    className={`service-card-accent absolute inset-x-8 top-0 h-1 rounded-b-full ${
                      isPrimary ? "bg-primary" : "bg-secondary"
                    }`}
                  />

                  <div className="flex items-start justify-between gap-4">
                    <h3 className="max-w-[260px] text-[clamp(1.55rem,3vw,2rem)] font-medium leading-[1.05] tracking-normal text-black">
                      {service.title}
                    </h3>
                    <span className="pt-1 text-sm font-medium text-txt-secondary">{service.number}</span>
                  </div>

                  <div className="flex flex-1 items-center justify-center py-10 sm:py-12">
                    <div
                      className={`service-orbit relative flex h-[136px] w-[136px] items-center justify-center rounded-full ${
                        isPrimary ? "bg-primary/5 text-primary" : "bg-secondary/5 text-secondary"
                      }`}
                    >
                      <span
                        className={`absolute h-[106px] w-[106px] rounded-full ${
                          isPrimary ? "bg-primary/5" : "bg-secondary/5"
                        }`}
                      />
                      <span
                        className={`relative z-10 flex h-[58px] w-[58px] items-center justify-center rounded-full text-white shadow-[0_14px_28px_rgba(14,41,105,0.1)] ${
                          isPrimary ? "bg-primary" : "bg-secondary"
                        }`}
                      >
                        <svg aria-hidden="true" className="h-7 w-7" viewBox="0 0 20 20" fill="none">
                          {service.icon}
                        </svg>
                      </span>
                    </div>
                  </div>

                  <p className="mt-auto max-w-[300px] text-base font-normal leading-7 text-black">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => scrollServices(1)}
            className="absolute right-0 top-1/2 z-20 hidden h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-txt-primary shadow-[0_10px_24px_rgba(14,41,105,0.08)] transition-all duration-300 hover:translate-x-[54%] hover:bg-secondary hover:text-white focus-visible:bg-secondary focus-visible:text-white md:flex"
            aria-label="Next service"
          >
            <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 20 20" fill="none">
              <path d="M5 10h10m-4-4 4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
            </svg>
          </button>
        </div>

        <div className="mt-3 flex items-center justify-center gap-4 md:hidden">
          <button
            type="button"
            onClick={() => scrollServices(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-txt-primary shadow-[0_10px_24px_rgba(14,41,105,0.08)] transition-all duration-300 active:scale-95"
            aria-label="Previous service"
          >
            <svg aria-hidden="true" className="h-5 w-5 rotate-180" viewBox="0 0 20 20" fill="none">
              <path d="M5 10h10m-4-4 4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => scrollServices(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-txt-primary shadow-[0_10px_24px_rgba(14,41,105,0.08)] transition-all duration-300 active:scale-95"
            aria-label="Next service"
          >
            <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 20 20" fill="none">
              <path d="M5 10h10m-4-4 4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
