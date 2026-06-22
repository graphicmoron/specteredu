import React from "react";
import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Service", href: "/service" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Specter-EDU-International/61591367570654/?mibextid=wwXIfr&rdid=l6v7WuKpC2PapduD&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DDx3WCdPj%2F%3Fmibextid%3DwwXIfr",
    icon: (
      <path
        d="M11.6 7.2V5.7c0-.7.4-1.1 1.2-1.1h1.1V2.2c-.6-.1-1.3-.2-2-.2-2.1 0-3.6 1.3-3.6 3.5v1.7H6v2.7h2.3V18h3.3V9.9h2.2l.4-2.7h-2.6Z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <>
        <path d="M5.2 7.4H2.8V18h2.4V7.4ZM4 6.1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="currentColor" />
        <path d="M8 7.4h2.3v1.4h.1c.3-.7 1.2-1.6 2.6-1.6 2.7 0 3.2 1.8 3.2 4.1V18h-2.4v-5.9c0-1.4 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5v6H8V7.4Z" fill="currentColor" />
      </>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/specteredu",
    icon: (
      <>
        <rect x="3" y="3" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="14.4" cy="5.6" r="1" fill="currentColor" />
      </>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    icon: (
      <>
        <path d="M17 7.1c-.2-.9-.8-1.5-1.7-1.7C13.9 5 10 5 10 5s-3.9 0-5.3.4C3.8 5.6 3.2 6.2 3 7.1 2.6 8.5 2.6 10 2.6 10s0 1.5.4 2.9c.2.9.8 1.5 1.7 1.7 1.4.4 5.3.4 5.3.4s3.9 0 5.3-.4c.9-.2 1.5-.8 1.7-1.7.4-1.4.4-2.9.4-2.9s0-1.5-.4-2.9Z" fill="currentColor" />
        <path d="m8.8 12.4 3.6-2.4-3.6-2.4v4.8Z" fill="#fff" />
      </>
    ),
  },
  // {
  //   label: "X",
  //   href: "https://x.com/",
  //   icon: (
  //     <path
  //       d="m12 8.7 5.1-5.9h-2.3l-3.9 4.6-3.1-4.6H3l5.3 7.7-5.5 6.4h2.3l4.3-5.1 3.5 5.1h4.8L12 8.7Zm-1.5 1.8-1-1.4-3-4.4h1.2l2.4 3.5 1 1.4 3.2 4.7h-1.2l-2.6-4.4Z"
  //       fill="currentColor"
  //     />
  //   ),
  // },
];



export default function Footer() {
  return (
    <footer className="bg-background px-4 pb-6 pt-10 text-txt-primary sm:px-6 sm:pb-8 sm:pt-14 lg:px-8">
      <div className="mx-auto max-w-[1360px]">
        <section className="relative overflow-hidden rounded-[28px] bg-primary text-center text-white shadow-[0_22px_60px_rgba(224,37,55,0.18)] sm:rounded-[34px]">
          <img
            src="/hero1.png"
            alt="Graduates celebrating"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(14,41,105,0.65)_0%,rgba(224,37,55,0.86)_42%,rgba(224,37,55,0.72)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(224,37,55,0.94)_0%,rgba(224,37,55,0.7)_36%,rgba(14,41,105,0.62)_100%)] mix-blend-multiply" />
          <div className="absolute -left-[12%] top-[-32%] h-[72%] w-[56%] rounded-full bg-secondary/60 blur-3xl" />
          <div className="absolute bottom-[-38%] left-[22%] h-[72%] w-[58%] rounded-full bg-primary/80 blur-3xl" />
          <div className="absolute right-[-10%] top-[5%] h-[72%] w-[46%] rounded-full bg-rare/35 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.28))]" />

          <div className="relative z-10 mx-auto flex min-h-[260px] max-w-[720px] flex-col items-center justify-center px-5 py-12 sm:min-h-[330px] sm:px-8">
            <h2 className="text-[clamp(2.35rem,7vw,4.15rem)] font-medium leading-[0.98] tracking-normal">
              Looking for a one-stop solution?
            </h2>
            <p className="mt-5 text-base font-normal leading-6 text-white/90 sm:text-xl">
              Let us guide you through every step.
            </p>
            <a
              href="/contact"
              className="group mt-7 flex h-14 min-w-[220px] items-center justify-center gap-4 rounded-full bg-rare px-6 text-base font-semibold text-txt-primary shadow-[0_18px_34px_rgba(14,41,105,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:-translate-y-0.5 focus-visible:bg-white sm:h-16 sm:min-w-[240px]"
            >
              Get started for free
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-colors duration-300 group-hover:bg-secondary group-focus-visible:bg-secondary">
                <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 20 20" fill="none">
                  <path d="M8 5l5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </span>
            </a>
          </div>
        </section>

        <section className="mt-20 rounded-[36px] bg-white px-6 py-9 shadow-[0_18px_50px_rgba(14,41,105,0.035)] sm:mt-24 sm:px-10 sm:py-12 lg:rounded-[44px] lg:px-12">
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr_0.85fr_1.5fr] lg:items-start">
            <div>
              <a href="#" className="inline-flex items-center" aria-label="SpecterEdu Study Abroad home">
                <img src="/logo.png" alt="SpecterEdu Study Abroad" className="h-14 w-auto object-contain" />
              </a>
            </div>

            <div>
              <h3 className="text-base font-semibold text-txt-primary">Head office</h3>
              <p className="mt-3 max-w-[230px] text-sm leading-6 text-txt-secondary">
                SpecterEdu Study Abroad
                <br />
                Mirtskhulavas 9/11 Tbilisi, Georgia
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-txt-primary">Contact us</h3>
              <p className="mt-3 text-sm leading-6 text-txt-secondary">
                Phone: +995 592143783
                <br />
                Email: info@specteredu.com
              </p>
            </div>

            <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-8 gap-y-4 lg:justify-end">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-txt-primary transition-colors duration-300 hover:text-primary focus-visible:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-10 border-t border-border pt-7">
            <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-txt-secondary">
                Copyright 2026 <span className="font-semibold text-txt-primary">SpecterEdu Study Abroad</span> All rights reserved
              </p>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 ${
                      index === 0
                        ? "border-black bg-black text-white hover:border-secondary hover:bg-secondary"
                        : "border-border bg-white text-txt-primary hover:border-secondary hover:bg-secondary hover:text-white"
                    }`}
                  >
                    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 20 20" fill="none">
                      {social.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
