"use client";

import React, { useState } from "react";

const reviews = [
  {
    name: "Rohan Mehta",
    school: "Brock University",
    quote:
      "I have received my Canadian study permit by submitting my application through CSB. Just within 20 days i have gotten my study permit. Throughout this journey, Team CSB helped me a lot.\n\nI highly recommend CSB to anyone who wants to study abroad.",
    avatar: "RM",
  },
  {
    name: "Aarav Shah",
    school: "Thompson Rivers University",
    quote:
      "I received my ppr within 10 days. Thanks to CSB Study abroad for the greatest service I could ever receive.\n\nThey have blessed me with the best advice and have helped me throughout the whole process.",
    avatar: "AS",
  },
  {
    name: "Kunal Jain",
    school: "University of Windsor",
    quote:
      "I got my PPR within 20 days. Thanks to the Team CSB for supporting me like family throughout this journey and helping turn my dream into reality.\n\nI highly recommend CSB study for those who are dreaming to go to Canada for higher education.",
    avatar: "KJ",
  },
  {
    name: "Nikhil Patel",
    school: "Vancouver Island University",
    quote:
      "I have got my study permit from Canada. and im extremely satisfied with their services. So i would highly reccomend CSB Study Abroad, if you want to continue your studies at Canada.\n\nThanks to the entire CSB team",
    avatar: "NP",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-black" aria-label="5 star review">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} aria-hidden="true" className="h-[15px] w-[15px]" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 2.7 12.2 7l4.8.7-3.5 3.4.8 4.8L10 13.6l-4.3 2.3.8-4.8L3 7.7 7.8 7 10 2.7Z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <article className="group flex min-h-[320px] flex-col rounded-[28px] border-[5px] border-white bg-background px-5 pb-5 pt-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_54px_rgba(14,41,105,0.08)]">
      <Stars />
      <p className="mt-4 whitespace-pre-line text-[14px] leading-[1.35] text-black">"{review.quote}"</p>

      <div className="mt-auto pt-6">
        <div className="h-px border-t border-dashed border-border" />
        <div className="mt-5 flex items-center gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-white transition-colors duration-300 group-hover:bg-primary">
            {review.avatar}
          </span>
          <span>
            <span className="block text-[18px] font-semibold leading-5 text-black">{review.name}</span>
            <span className="mt-1 block text-[14px] leading-4 text-black">{review.school}</span>
          </span>
        </div>
      </div>
    </article>
  );
}

export default function Feedback() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="feedback" className="bg-background px-4 py-14 text-black sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-14 flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between lg:mb-16">
          <h2 className="max-w-[470px] text-[clamp(3rem,6vw,4rem)] font-medium leading-[0.92] tracking-normal text-black">
            What our <span className="text-primary font-bold">Students say</span> 
          </h2>

          <div className="max-w-[350px] sm:text-right">
            <p className="text-[18px] font-normal leading-[1.25] text-black">
              Read more student reviews on our Google and leave your own
            </p>
            <a
              href="#"
              className="group mt-7 inline-flex h-[74px] items-center justify-center gap-4 rounded-full bg-rare px-7 text-[17px] font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:text-white focus-visible:bg-secondary focus-visible:text-white"
            >
              See More Reviews
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-colors duration-300 group-hover:bg-white group-hover:text-secondary group-focus-visible:bg-white group-focus-visible:text-secondary">
                <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 20 20" fill="none">
                  <path d="M8 5l5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          <div className="grid gap-5">
            {reviews.slice(0, 2).map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>

          <article className="flex min-h-[660px] flex-col items-center justify-center rounded-[28px] bg-white px-4 py-8 text-center">
            <div className="mb-4 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-xs font-medium text-black">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                Student
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsVideoOpen(true)}
              className="group relative h-[282px] w-full overflow-hidden rounded-[22px] bg-secondary text-white"
              aria-label="Open student feedback video"
            >
              <img
                src="https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg"
                alt=""
                className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,41,105,0.04),rgba(14,41,105,0.34))]" />
              <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-[0_16px_36px_rgba(14,41,105,0.22)] transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                <svg aria-hidden="true" className="ml-1 h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M7 4.8v10.4L15 10 7 4.8Z" />
                </svg>
              </span>
            </button>

            <h3 className="mt-6 text-[24px] font-semibold leading-none text-black">
              Aditya Jain
            </h3>
            <span className="mt-6 inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-[12px] font-semibold text-black">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              University of Waikato, New Zealand
            </span>
          </article>

          <div className="grid gap-5">
            {reviews.slice(2).map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>
        </div>
      </div>

      {isVideoOpen && (
        <div
          className="fixed inset-0 z-[10050] flex items-center justify-center bg-black/70 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-label="Student feedback video"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-[920px] overflow-hidden rounded-[24px] bg-black shadow-[0_28px_90px_rgba(0,0,0,0.35)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-[0_10px_28px_rgba(0,0,0,0.22)] transition-colors duration-300 hover:bg-primary hover:text-white focus-visible:bg-primary focus-visible:text-white"
              aria-label="Close student feedback video"
            >
              <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 20 20" fill="none">
                <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </button>
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/ysz5S6PUM-U?autoplay=1"
              title="SpecterEdu student feedback video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
