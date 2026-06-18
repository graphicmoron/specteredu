import React from "react";

export default function Hero() {
  return (
    <section id="home" className="bg-background px-3 pb-10 pt-20 sm:px-5 sm:pb-14 sm:pt-28 lg:px-8 lg:pt-40">
      <div className="mx-auto max-w-[1374px]">
        <div className="relative min-h-[620px] overflow-hidden rounded-[28px] bg-secondary shadow-[0_24px_70px_rgba(14,41,105,0.14)] sm:min-h-[660px] sm:rounded-[36px] lg:min-h-[720px]">
          <img
            src="/hero1.png"
            alt="Graduates celebrating on a university campus"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(224,37,55,0.42)_0%,rgba(224,37,55,0.18)_28%,rgba(14,41,105,0.25)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(224,37,55,0.88)_0%,rgba(224,37,55,0.68)_22%,rgba(14,41,105,0.5)_58%,rgba(14,41,105,0.68)_100%)] mix-blend-multiply" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,41,105,0.2)_0%,rgba(224,37,55,0.15)_45%,rgba(14,41,105,0.7)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-[radial-gradient(circle_at_50%_0%,rgba(0,204,149,0.18),transparent_56%)]" />

          <div className="relative z-10 flex min-h-[620px] items-center justify-center px-5 py-16 text-center text-white sm:min-h-[660px] sm:px-8 lg:min-h-[720px]">
            <div className="mx-auto flex w-full max-w-[780px] flex-col items-center">
              <h1 className="text-[clamp(3rem,9vw,5.6rem)] font-semibold leading-[0.96] tracking-normal">
                Study abroad is closer than you think
              </h1>

              <p className="mt-8 max-w-[620px] text-base font-medium leading-7 text-white sm:text-lg">
                From course selection to campus arrival, SpecterEdu guides you every step of the way with clear advice and trusted support.
              </p>

              <a
                href="/contact"
                className="group mt-9 flex h-16 min-w-[236px] items-center justify-center gap-4 rounded-full bg-rare px-7 text-base font-semibold text-txt-primary shadow-[0_18px_34px_rgba(14,41,105,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:-translate-y-0.5 focus-visible:bg-white sm:h-[74px] sm:min-w-[270px] sm:text-lg"
              >
                Start your journey now
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#050505] text-white transition-colors duration-300 group-hover:bg-secondary group-focus-visible:bg-secondary">
                  <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M8 5l5 5-5 5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
