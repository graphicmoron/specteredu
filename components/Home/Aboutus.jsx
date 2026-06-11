import React from "react";

const stats = [
  {
    id: "001",
    value: "3+",
    label: "Years of Experience",
    icon: (
      <path
        d="M7 3v3M13 3v3M4.5 8.5h11M6 18h8a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3Zm1.5-6.5h.01m2.49 0h.01m2.49 0h.01M7.5 14h.01m2.49 0h.01"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    ),
  },
  {
    id: "002",
    value: "10+",
    label: "University partners",
    icon: (
      <path
        d="M6 18V4.8c0-.44.36-.8.8-.8h6.4c.44 0 .8.36.8.8V18M4 18h12M8.5 7h3M8.5 10h3M8.5 13h3M8 18v-2h4v2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    ),
  },
];

export default function Aboutus() {
  return (
    <section id="about" className="bg-background px-4 py-8 text-txt-primary sm:px-6 sm:py-8 lg:px-8">
                  <div className="mb-7 flex w-full justify-center lg:justify-center">
            <div className="grid w-full max-w-[300px] grid-cols-[1fr_auto_1fr] items-center gap-3">
              <span className="relative h-px bg-gradient-to-l from-primary to-transparent">
                <span className="absolute right-[-1px] top-1/2 h-0 w-0 -translate-y-1/2 border-y-[4px] border-r-[8px] border-y-transparent border-r-primary" />
              </span>
              <span className="rounded-full bg-white px-7 py-3 text-sm font-medium text-txt-primary shadow-[0_14px_35px_rgba(14,41,105,0.08)]">
                About us
              </span>
              <span className="relative h-px bg-gradient-to-r from-primary to-transparent">
                <span className="absolute left-[-1px] top-1/2 h-0 w-0 -translate-y-1/2 border-y-[4px] border-l-[8px] border-y-transparent border-l-primary" />
              </span>
            </div>
          </div>
      <div className="mx-auto grid max-w-[1180px] items-center gap-10 lg:grid-cols-[0.82fr_1fr] lg:gap-12">
        <div className="relative z-10">


          <h2 className="max-w-[560px] text-[clamp(2.7rem,7vw,4rem)] font-medium leading-[1.05] tracking-normal text-black">
            Hello, We are Specter<span className="text-primary font-bold">Edu</span>
          </h2>

          <p className="mt-5 max-w-[500px] text-sm font-normal leading-6 text-black sm:text-base">
            Since 2023, We guide students through every step from program choice to visa application,
            including scholarships to Achieve their study abroad dream in Georgia & India!
          </p>

          <div className="mt-10 grid max-w-[500px] grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {stats.map((stat) => (
              <article
                key={stat.id}
                className="relative min-h-[210px] rounded-[34px] bg-gray-100 p-8 shadow-[inset_0_0_0_14px_rgba(255,255,255,1)] backdrop-blur"
              >
                <div className="flex items-start justify-between">
                  <span className="text-base text-black">{stat.id}</span>
                  <span className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-white text-txt-primary shadow-[0_12px_30px_rgba(14,41,105,0.05)]">
                    <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 20 20" fill="none">
                      {stat.icon}
                    </svg>
                  </span>
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <strong className="block text-[clamp(3rem,8vw,3.45rem)] font-medium leading-none text-black">
                    {stat.value}
                  </strong>
                  <span className="mt-3 block text-base text-black sm:text-lg">{stat.label}</span>
                </div>
              </article>
            ))}

            <article className="relative min-h-[170px] rounded-[34px] bg-gray-100 p-8 shadow-[inset_0_0_0_14px_rgba(255,255,255,1)] backdrop-blur sm:col-span-2">
              <div className="flex justify-end">
                <span className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-white text-txt-primary shadow-[0_12px_30px_rgba(14,41,105,0.05)]">
                  <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M7.2 10.4a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm6.2 7.1v-1.1a4.4 4.4 0 0 0-8.8 0v1.1M14.1 9.3a2.4 2.4 0 0 0 0-4.6M17.3 17.5v-1a3.6 3.6 0 0 0-2.6-3.5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.7"
                    />
                  </svg>
                </span>
              </div>
              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between gap-5">
                <div>
                  <strong className="block text-[clamp(3rem,8vw,3.45rem)] font-medium leading-none text-black">
                    236+
                  </strong>
                  <span className="mt-3 block text-base text-black sm:text-lg">
                    Students Successfully Recruited
                  </span>
                </div>
                <span className="pb-2 text-base text-black">003</span>
              </div>
            </article>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden lg:min-h-[660px]">
          <div className="absolute inset-x-0 bottom-0 mx-auto h-[78%] max-w-[620px] opacity-35">
            <svg aria-hidden="true" className="h-full w-full text-border" viewBox="0 0 620 560" fill="none">
              <path d="M65 540V250l210-170 260 210v250" stroke="currentColor" strokeWidth="1.5" />
              <path d="M170 540V315l115-95 135 112v208M250 540V285M335 540V290" stroke="currentColor" strokeWidth="1.2" />
              <path d="M90 345h75M90 405h75M90 465h75M405 362h86M405 422h86M405 482h86" stroke="currentColor" strokeWidth="1" />
              <path d="M312 176V42M312 42l34 54M312 42l-34 54" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>

          <img
            src="/studenthome.png"
            alt="Student planning study abroad"
            className="relative z-10 ml-auto h-full min-h-[420px] w-full object-contain object-bottom lg:min-h-[660px]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-t from-background to-transparent" />
        </div>
      </div>
    </section>
  );
}
