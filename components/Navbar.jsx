"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "University", href: "/university" },
  { label: "Service", href: "/service" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActiveLink = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed left-0 right-0 top-0 isolate z-[10000] px-0 pt-2 sm:px-3.5 sm:pt-8">
      <nav className="mx-auto hidden h-[92px] max-w-[1366px] items-center rounded-[48px] bg-white px-10 shadow-[0_20px_40px_rgba(17,24,39,0.08)] md:flex">
        <Link href="/" className="flex min-w-[210px] items-center" aria-label="SpecterEdu home">
          <img src="/logo.png" alt="SpecterEdu Study Abroad" className="h-14 w-auto object-contain" />
        </Link>

        <div className="flex flex-1 items-center justify-center gap-10 text-[16px] text-[#77777d]">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-current={isActiveLink(item.href) ? "page" : undefined}
              className={`flex items-center gap-1.5 leading-none transition-colors hover:text-primary ${
                isActiveLink(item.href) ? "font-medium text-[#050505]" : ""
              }`}
            >
              {item.label}
              {item.hasChevron && (
                <svg
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M6 8l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </Link>
          ))}
        </div>

        <a
          href="#feedback"
          className="group flex h-[68px] min-w-[154px] items-center justify-center gap-4 rounded-full border border-[#e5e5eb] bg-white px-6 text-[17px] font-semibold text-txt-primary shadow-[0_8px_24px_rgba(17,24,39,0.04)] transition-all duration-300 hover:bg-secondary hover:text-white hover:tracking-normal focus-visible:bg-secondary focus-visible:text-white"
        >
          Apply now
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-secondary bg-secondary text-white transition-colors duration-300 group-hover:bg-white group-hover:text-secondary group-focus-visible:bg-white group-focus-visible:text-secondary">
            <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 20 20" fill="none">
              <path
                d="M8 5l5 5-5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      </nav>

      <nav className="mobile-nav relative z-[10000] mx-auto flex min-h-[60px] w-[calc(100%-20px)] max-w-[350px] flex-col overflow-hidden rounded-[28px] bg-white px-7 pb-0 pt-2.5 shadow-[0_18px_36px_rgba(17,24,39,0.12)] transition-all duration-300 ease-out md:hidden">
        <input
          id="mobile-menu-toggle"
          type="checkbox"
          className="mobile-menu-toggle sr-only"
          aria-label="Toggle menu"
        />

        <div className="mobile-nav-row flex h-10 items-center justify-between">
          <Link href="/" aria-label="SpecterEdu home">
            <img src="/logo.png" alt="SpecterEdu Study Abroad" className="h-7 w-auto object-contain" />
          </Link>

          <label
            htmlFor="mobile-menu-toggle"
            aria-label="Open menu"
            className="mobile-menu-button relative z-20 flex h-10 w-10 shrink-0 touch-manipulation cursor-pointer items-center justify-center rounded-full border border-[#eeeeef] bg-white text-[#202020] shadow-[0_6px_18px_rgba(17,24,39,0.08)] transition-colors duration-300"
          >
            <span className="relative h-4 w-4" aria-hidden="true">
              <span className="mobile-menu-line mobile-menu-line-top absolute left-0 top-[3px] h-0.5 w-4 rounded-full bg-current transition-transform duration-300" />
              <span className="mobile-menu-line mobile-menu-line-middle absolute left-0 top-[8px] h-0.5 w-4 rounded-full bg-current transition-all duration-300" />
              <span className="mobile-menu-line mobile-menu-line-bottom absolute left-0 top-[13px] h-0.5 w-4 rounded-full bg-current transition-transform duration-300" />
            </span>
          </label>
        </div>

        <div className="mobile-nav-menu pointer-events-none flex max-h-0 -translate-y-2 flex-col justify-between overflow-hidden text-[15px] opacity-0 transition-all duration-300 ease-out">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-current={isActiveLink(item.href) ? "page" : undefined}
              className={`flex items-center justify-between py-2 leading-none ${
                isActiveLink(item.href) ? "font-medium text-[#050505]" : "text-txt-secondary"
              }`}
            >
              {item.label}
              {item.hasChevron && (
                <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M6 8l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </Link>
          ))}
          <Link
            href="#feedback"
            className="group flex items-center justify-between py-2 leading-none text-txt-secondary transition-colors duration-300 hover:text-secondary focus-visible:text-secondary active:text-secondary"
          >
            Apply Now
            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-txt-secondary transition-colors duration-300 group-hover:border-secondary group-hover:bg-secondary group-hover:text-white group-focus-visible:border-secondary group-focus-visible:bg-secondary group-focus-visible:text-white group-active:border-secondary group-active:bg-secondary group-active:text-white">
              <svg aria-hidden="true" className="h-2.5 w-2.5" viewBox="0 0 20 20" fill="none">
                <path
                  d="M8 5l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
