import Image from "next/image";

const principles = [
  "Advice before admission",
  "Clarity at every step",
  "Support beyond departure",
];

export default function Founders() {
  return (
    <section
      id="founders"
      className="overflow-hidden bg-background px-4 pb-20 pt-10 text-black sm:px-6 sm:pb-24 sm:pt-14 lg:px-8 lg:pb-28"
    >
      <div className="mx-auto max-w-[1280px]">

        <div className="mb-8 grid lg:grid-cols-[0.94fr_1.06fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Founders&apos; story
            </span>
            <h2 className="mt-4 max-w-[610px] text-[clamp(2.7rem,5vw,4.7rem)] font-medium leading-[0.96] tracking-[-0.045em]">
              It started with a need for <span className="font-bold text-primary">honest guidance.</span>
            </h2>
          </div>
        </div>

        <div className="grid overflow-hidden rounded-[30px] bg-white shadow-[0_30px_90px_rgba(14,41,105,0.10)] sm:rounded-[42px] lg:grid-cols-[0.94fr_1.06fr]">
          <div className="relative min-h-[400px] overflow-hidden sm:min-h-[500px] lg:min-h-[650px]">
            <Image
              src="/founder.png"
              alt="Graduates celebrating the future SpecterEdu helps students build"
              fill
              sizes="(max-width: 1024px) 100vw, 47vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,41,105,0.02)_35%,rgba(14,41,105,0.78)_100%)]" />

            <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-secondary backdrop-blur-md sm:left-8 sm:top-8">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Our beginning
            </span>

            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-9 lg:p-11">
              <div className="flex items-end justify-between gap-6 border-t border-white/30 pt-6">
                <div>
                  <span className="block text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                    Founded in
                  </span>
                  <strong className="mt-2 block text-[clamp(3.5rem,7vw,5.5rem)] font-medium leading-none tracking-[-0.05em]">
                    2023
                  </strong>
                </div>
                <p className="max-w-[210px] text-right text-sm leading-6 text-white/80">
                  One idea, built around better decisions for every student.
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col px-6 py-9 sm:px-10 sm:py-11 lg:px-14 lg:py-12 xl:px-16">
            <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-bl-full bg-secondary/[0.035]" />

            <div className="relative [&>h2]:hidden">
              <div className="h-px w-full bg-border" />

              <div className="mt-7 space-y-4 text-[15px] leading-7 text-txt-secondary sm:text-base sm:leading-7">
                <p>
                  SpecterEdu began after seeing too many students choose a country before they truly understood their future. Families were receiving information, but not always the clarity or care a life-changing decision deserved.
                </p>
                <p>
                  We built a different kind of education consultancy: one that listens first, explains every option honestly, and stays involved long after the paperwork is complete. The right journey should begin with the student, not the application form.
                </p>
              </div>

              <blockquote className="mt-7 border-l-2 border-primary pl-5 text-[clamp(1.25rem,2vw,1.6rem)] font-medium leading-[1.35] text-secondary sm:mt-8 sm:pl-7">
                &ldquo;We did not set out to make study abroad feel easy. We set out to make every decision feel clear.&rdquo;
              </blockquote>
            </div>

            <div className="relative mt-8 border-t border-border pt-6 lg:mt-auto">
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {principles.map((principle, index) => (
                  <div key={principle} className="flex items-center gap-3 rounded-[16px] bg-background px-4 py-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs font-semibold leading-5 text-secondary">{principle}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-4">
                <Image
                  src="/founder.png"
                  alt="Founder Avatar"
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-primary object-cover"
                />
                <span>
                  <strong className="block text-base font-semibold text-black">Nayan Sankhala</strong>
                  <span className="mt-0.5 block text-sm text-txt-secondary">Founder, SpecterEdu</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
