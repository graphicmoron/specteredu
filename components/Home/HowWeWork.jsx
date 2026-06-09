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
  <img
    src="./register.svg"
    alt="About Us"
    className="w-full h-full object-contain"
  />
    );
  }

  if (scene === "fly") {
    return (
  <img
    src="./traveler.svg"
    alt="About Us"
    className="w-full h-full object-contain"
  />
    );
  }

  return (
  <img
    src="./consult.svg"
    alt="About Us"
    className="w-full h-full object-contain"
  />
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
