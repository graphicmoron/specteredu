import React from "react";

const steps = [
  {
    id: "001",
    title: "Consult",
    description: "Connect with our experts to assess your educational goals and visa requirements",
    scene: "consult",
  },
  {
    id: "002",
    title: "Apply",
    description:
      "We guide you in selecting the right program, university and provide full support for your visa application.",
    scene: "apply",
  },
  {
    id: "003",
    title: "Fly",
    description: "Once approved, you're ready to start your journey to your dream destination.",
    scene: "fly",
  },
];

function StepIllustration({ scene }) {
  if (scene === "apply") {
    return (
      <svg aria-hidden="true" className="h-full w-full" viewBox="0 0 260 160" fill="none">
        <path d="M70 120h122M62 45h50v66H62zM88 30h50v66H88zM130 28h72v70h-72z" stroke="#E5E5EB" strokeWidth="2" />
        <path d="M97 56h44v9H97zM140 42h34v9h-34z" fill="#D9D9D9" />
        <path d="M68 96c10-11 28-12 41 0" stroke="#E5E5EB" strokeWidth="6" strokeLinecap="round" />
        <path d="M126 105c10-5 34-5 46 4" stroke="#E5E5EB" strokeWidth="6" strokeLinecap="round" />
        <path d="M116 127l-38-9 3-10 38 9-3 10Z" fill="#fff" stroke="#BDBDBD" />
        <path d="M83 111l32 8M82 116l25 6" stroke="#BDBDBD" strokeWidth="1.4" />
        <path d="M154 65c18 0 30 15 30 36v29h-67v-26c0-24 14-39 37-39Z" fill="#4B2B21" />
        <path d="M130 133h68c-4-27-18-45-38-45h-8c-18 0-25 20-22 45Z" fill="#3F332C" />
        <path d="M147 89c-5 9-3 23 9 23 11 0 17-10 17-22V76h-24l-2 13Z" fill="#F2A087" />
        <path d="M144 80c7 4 20 4 31-4-4-14-25-18-34-3-3 5-2 11 3 17v-10Z" fill="#3B2018" />
        <path d="M157 111c-3 10-12 15-26 17l4 11h56l3-10c-17-2-29-8-37-18Z" fill="#F35B2D" />
        <path d="M122 102h20" stroke="#F35B2D" strokeWidth="8" strokeLinecap="round" />
      </svg>
    );
  }

  if (scene === "fly") {
    return (
      <svg aria-hidden="true" className="h-full w-full" viewBox="0 0 260 160" fill="none">
        <path d="M80 130h106" stroke="#E5E5EB" strokeWidth="2" />
        <path d="M101 37c36-23 89 5 75 53-8 29-40 49-72 34" stroke="#DCDCE2" strokeDasharray="3 4" />
        <path d="M76 88c18-18 42-23 70-14" stroke="#E5E5EB" strokeWidth="2" />
        <path d="M167 33c8 0 14 6 14 14 0 10-14 24-14 24s-14-14-14-24c0-8 6-14 14-14Z" fill="#FF4B1F" />
        <circle cx="167" cy="47" r="4" fill="#fff" />
        <path d="M62 86c5-6 11-6 16 0M196 85c6-7 14-7 20 0" stroke="#E5E5EB" strokeWidth="2" />
        <path d="M108 133h60c-2-34-12-51-30-51h-5c-17 0-26 17-25 51Z" fill="#FF4B1F" />
        <path d="M122 82c-7 8-7 24 6 25 13 1 22-9 22-24V68h-24l-4 14Z" fill="#F2A087" />
        <path d="M121 78c10-2 25-8 33 0 0-18-30-23-38-7-3 7 0 15 5 20V78Z" fill="#3B2018" />
        <path d="M115 112l-22-8-6-41 27-5 12 40-11 14Z" fill="#1E1E1E" />
        <path d="M94 69l12-2M96 78l12-2M98 87l10-2" stroke="#fff" strokeWidth="1.4" />
        <path d="M151 96l33-14v33l-33 14V96Z" fill="#fff" stroke="#E5E5EB" />
        <path d="M184 82l20 8-32 14-21-8" stroke="#DCDCE2" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="h-full w-full" viewBox="0 0 260 160" fill="none">
      <path d="M34 120h192M55 41h74v75H55zM142 33h75v75h-75z" stroke="#FF7A59" strokeWidth="1.6" />
      <path d="M62 109h44M153 101h44" stroke="#E5E5EB" strokeWidth="12" strokeLinecap="round" />
      <path d="M46 35h19M205 29h8M42 95h10M222 98h12M130 28h7M128 123h8" stroke="#E5E5EB" strokeWidth="4" strokeLinecap="round" />
      <path d="M120 72l26-11M121 83l21 7" stroke="#E5E5EB" strokeWidth="2" />
      <circle cx="122" cy="72" r="4" fill="#E5E5EB" />
      <path d="M75 115h51c0-29-8-48-26-48H91c-15 0-22 19-16 48Z" fill="#FF4B1F" />
      <path d="M87 70c-5 9-4 24 8 25 11 1 19-8 19-21V61H91l-4 9Z" fill="#F2A087" />
      <path d="M86 67c9 3 21 0 28-7-7-13-28-13-34 2-3 7 0 15 7 20l-1-15Z" fill="#3B2018" />
      <path d="M99 95l-29-12-6 15 35 17V95Z" fill="#F2A087" />
      <path d="M101 95l23-18" stroke="#F2A087" strokeWidth="6" strokeLinecap="round" />
      <path d="M148 107h54c-1-32-10-50-27-50h-7c-16 0-24 19-20 50Z" fill="#313131" />
      <path d="M162 60c-5 9-3 24 9 24 11 0 18-10 18-23V47h-23l-4 13Z" fill="#F2A087" />
      <path d="M160 58c10 2 23-2 29-10-8-13-30-12-36 3-2 7 1 15 8 20l-1-13Z" fill="#3B2018" />
      <path d="M151 82l-21-13" stroke="#F2A087" strokeWidth="6" strokeLinecap="round" />
      <path d="M169 83l38 12 6-17-34-13-10 18Z" fill="#F2A087" />
    </svg>
  );
}

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="bg-background px-4 py-12 text-black sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <h2 className="text-[clamp(2.4rem,6vw,3.65rem)] font-medium leading-none tracking-normal">
            How we <span className="text-primary font-bold">Work</span>
          </h2>
          <p className="max-w-[210px] text-left text-sm font-medium leading-4 sm:text-right">
            Make your first step the only step
          </p>
        </div>

        <div className="space-y-5">
          {steps.map((step) => (
            <article
              key={step.id}
              className="grid min-h-[186px] items-center gap-8 rounded-[32px] bg-white px-6 py-8 shadow-[0_16px_40px_rgba(14,41,105,0.035)] ring-1 ring-black/[0.025] sm:px-8 lg:grid-cols-[240px_1fr_260px] lg:px-8"
            >
              <div>
                <span className="inline-flex rounded-full border border-border bg-white px-4 py-1.5 text-xs font-medium text-black">
                  Step-{step.id}
                </span>
                <h3 className="mt-14 text-[clamp(2rem,5vw,2.9rem)] font-medium leading-none tracking-normal sm:mt-12">
                  {step.title}
                </h3>
              </div>

              <div className="mx-auto h-[132px] w-full max-w-[260px] lg:h-[150px]">
                <StepIllustration scene={step.scene} />
              </div>

              <p className="max-w-[230px] text-sm font-normal leading-5 text-black lg:justify-self-end">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
