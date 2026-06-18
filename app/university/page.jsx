import React from 'react'
import Link from 'next/link'

const universities = [
  {
    key: 'tsmu',
    name: 'Tbilisi State Medical University',
    shortName: 'TSMU',
    logo: '/tsmu.png',
    tuition: '$8,000',
    monthlyLiving: '$300 - $350',
    yearlyLiving: '$3,600 - $4,200',
    admission: '$150',
    visa: '$500',
    consultancy: '$1,000',
    documentation: '$500',
    postArrival: '$500',
  },
  {
    key: 'dtmu',
    name: 'David Tvildiani Medical University',
    shortName: 'DTMU',
    logo: '/dtmu.png',
    tuition: '$6,000',
    monthlyLiving: '$300 - $350',
    yearlyLiving: '$3,600 - $4,200',
    admission: '$150',
    visa: '$500',
    consultancy: '$1,000',
    documentation: '$500',
    postArrival: '$500',
  },
  {
    key: 'ug',
    name: 'University of Georgia',
    shortName: 'UG',
    logo: '/ug.png',
    tuition: '$6,500',
    monthlyLiving: '$300 - $350',
    yearlyLiving: '$3,600 - $4,200',
    admission: '$150',
    visa: '$500',
    consultancy: '$1,000',
    documentation: '$500',
    postArrival: '$500',
  },
  {
    key: 'ciu',
    name: 'Caucasus International University',
    shortName: 'CIU',
    logoText: 'CIU',
    tuition: '$6,000',
    monthlyLiving: '$300 - $350',
    yearlyLiving: '$3,600 - $4,200',
    admission: '$150',
    visa: '$500',
    consultancy: '$1,000',
    documentation: '$500',
    postArrival: '$500',
  },
]

const comparisonRows = [
  { label: 'Tuition Fee (Yearly)', key: 'tuition', group: 'Fee Structure' },
  { label: 'Living Expense (Monthly)', key: 'monthlyLiving', group: 'Fee Structure', note: 'Food + accommodation' },
  { label: 'Estimated Living (Yearly)', key: 'yearlyLiving', group: 'Fee Structure' },
  { label: 'Admission Fee', key: 'admission', group: 'One-Time Charges' },
  { label: 'Visa Assistance', key: 'visa', group: 'One-Time Charges' },
  { label: 'Consultancy Fee', key: 'consultancy', group: 'One-Time Charges' },
  { label: 'Documentation Charges', key: 'documentation', group: 'One-Time Charges' },
  {
    label: 'Post-Arrival Services',
    key: 'postArrival',
    group: 'One-Time Charges',
    note: 'TRC, bank account, SIM card, airport pick-up and temporary residence support',
  },
]

const faqItems = [
  {
    id: 'item-1',
    question: 'Is Georgia safe for Indian students?',
    answer: 'Yes, Georgia is generally considered safe for international students, including Indian students. Cities like Tbilisi have a strong student community, public transport, and support services, but students should still follow normal safety habits and stay connected with the university and local coordinators.',
  },
  {
    id: 'item-2',
    question: 'Is MBBS in Georgia valid in India?',
    answer: 'MBBS from Georgia can be valid in India when the university and course meet current NMC rules. After graduation, Indian students must clear the required licensing exam in India and complete any applicable registration requirements before practicing.',
  },
  {
    id: 'item-3',
    question: 'What is the total cost to study MBBS in Georgia?',
    answer: 'For the listed universities, yearly tuition starts from about $6,000 to $6,500. Living expenses are usually around $300 to $350 per month, with additional one-time charges for admission, visa assistance, documentation, consultancy, and post-arrival support.',
  },
  {
    id: 'item-4',
    question: 'Is NEET required for MBBS in Georgia?',
    answer: 'Yes, NEET qualification is required for Indian students who want to study MBBS abroad and later practice in India. Students should keep their NEET scorecard and eligibility documents ready during admission counseling.',
  },
  {
    id: 'item-5',
    question: 'What is the duration of MBBS in Georgia?',
    answer: 'The MBBS program in Georgia is usually 6 years, including academic study and clinical exposure. Exact structure can vary slightly by university, so students should confirm the final course plan before admission.',
  },
  {
    id: 'item-6',
    question: 'Is the MBBS course taught in English?',
    answer: 'Most popular medical universities in Georgia offer MBBS programs in English for international students. Students may also learn basic Georgian for hospital interaction and daily life during clinical years.',
  },
  {
    id: 'item-7',
    question: 'Can students get hostel or accommodation support?',
    answer: 'Yes, students can get support for hostel or private accommodation depending on the university and city. The expected monthly living cost in this comparison includes food and accommodation estimates.',
  },
  {
    id: 'item-8',
    question: 'When should I apply for admission?',
    answer: 'It is better to start early after NEET results so there is enough time for university selection, document preparation, admission letter, visa processing, and travel planning.',
  },
]

function UniversityMark({ university }) {
  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_16px_34px_rgba(14,41,105,0.10)] ring-1 ring-black/[0.04]">
      {university.logo ? (
        <img src={university.logo} alt="" className="h-9 w-9 object-contain" />
      ) : (
        <span className="text-sm font-bold text-primary">{university.logoText}</span>
      )}
    </div>
  )
}

export default function Page() {
  return (
    <div>
      <section className="mx-auto max-w-[1374px] px-4 pb-16 xl:pt-40 lg:pt-40 pt-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px]">
          <img
            src="/university/hero.png"
            alt="Universities in Georgia"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(14,41,105,0.30)_0%,rgba(224,37,55,0.10)_42%,rgba(224,37,55,0.20)_100%)]" />
          <div className="relative z-10 mx-auto flex min-h-[220px] max-w-[1180px] flex-col items-start justify-center px-8 py-24 sm:py-28">
            <h1 className="text-white text-[clamp(2.4rem,6vw,4rem)] font-medium leading-[0.95]">
              Universities in <span className="font-bold ">Georgia</span>
            </h1>

            <p className="mt-6 max-w-[720px] text-white/90 text-lg">
              Explore top-ranked medical and general universities across Georgia - expert guidance for admissions, visas and scholarships.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex h-14 items-center justify-center gap-4 rounded-full bg-rare px-6 text-base font-semibold text-black shadow-[0_18px_34px_rgba(14,41,105,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              Get started for free
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black bg-black text-white transition-colors duration-300 group-hover:bg-secondary group-hover:text-black">
                <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 20 20" fill="none">
                  <path d="M8 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background px-4 pb-20 text-black sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                Final fee comparison
              </p>
              <h2 className="mt-3 max-w-[760px] text-[clamp(2.25rem,5vw,3.65rem)] font-medium leading-none tracking-normal text-black">
                Compare Georgia <span className="font-bold text-primary">Universities</span>
              </h2>
            </div>
            <p className="max-w-[420px] text-base leading-7 text-black/70">
              A clean side-by-side view of yearly tuition, living costs and one-time charges for the selected universities.
            </p>
          </div>

          <div className="mt-10 hidden overflow-hidden rounded-[28px] bg-white shadow-[0_26px_70px_rgba(14,41,105,0.07)] ring-1 ring-black/[0.04] xl:block">
            <div className="grid grid-cols-[0.95fr_repeat(4,minmax(0,1fr))] bg-secondary text-white">
              <div className="flex min-h-[118px] items-end px-5 pb-7 text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
                Particulars
              </div>
              {universities.map((university) => (
                <div key={university.key} className="border-l border-white/15 px-4 py-6">
                  <div className="flex items-center gap-3">
                    <UniversityMark university={university} />
                    <div>
                      <p className="text-lg font-semibold leading-tight">{university.shortName}</p>
                      <p className="mt-1 max-w-[190px] text-xs leading-5 text-white/78">{university.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {comparisonRows.map((row, index) => {
              const isNewGroup = index === 0 || row.group !== comparisonRows[index - 1].group

              return (
                <React.Fragment key={row.key}>
                  {isNewGroup && (
                    <div className="grid grid-cols-[0.95fr_repeat(4,minmax(0,1fr))] border-t border-border bg-background/80">
                      <div className="px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                        {row.group}
                      </div>
                      {universities.map((university) => (
                        <div key={university.key} className="border-l border-border" />
                      ))}
                    </div>
                  )}
                  <div className="grid grid-cols-[0.95fr_repeat(4,minmax(0,1fr))] border-t border-border">
                    <div className="px-5 py-5">
                      <p className="font-semibold text-black">{row.label}</p>
                      {row.note && <p className="mt-1 max-w-[250px] text-xs leading-5 text-black/55">{row.note}</p>}
                    </div>
                    {universities.map((university) => (
                      <div key={university.key} className="flex items-center border-l border-border px-4 py-5">
                        <span className="rounded-full bg-secondary/7 px-3 py-2 text-sm font-bold text-secondary">
                          {university[row.key]}
                        </span>
                      </div>
                    ))}
                  </div>
                </React.Fragment>
              )
            })}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:hidden">
            {universities.map((university) => (
              <article
                key={university.key}
                className="overflow-hidden rounded-[28px] bg-white shadow-[0_20px_56px_rgba(14,41,105,0.07)] ring-1 ring-black/[0.04]"
              >
                <div className="flex items-center gap-4 bg-secondary px-5 py-5 text-white">
                  <UniversityMark university={university} />
                  <div>
                    <p className="text-xl font-semibold leading-tight">{university.shortName}</p>
                    <h3 className="mt-1 text-sm leading-5 text-white/78">{university.name}</h3>
                  </div>
                </div>

                <div className="divide-y divide-border">
                  {comparisonRows.map((row, index) => {
                    const isNewGroup = index === 0 || row.group !== comparisonRows[index - 1].group

                    return (
                      <div key={row.key}>
                        {isNewGroup && (
                          <div className="bg-background px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                            {row.group}
                          </div>
                        )}
                        <div className="grid grid-cols-[1fr_auto] gap-4 px-5 py-4">
                          <div>
                            <p className="font-semibold text-black">{row.label}</p>
                            {row.note && <p className="mt-1 text-xs leading-5 text-black/55">{row.note}</p>}
                          </div>
                          <p className="self-start rounded-full bg-secondary/7 px-3 py-1.5 text-sm font-bold text-secondary">
                            {university[row.key]}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-[24px] border border-border bg-white px-5 py-5 shadow-[0_18px_48px_rgba(14,41,105,0.05)] sm:flex-row sm:items-center sm:px-7">
            <p className="text-sm leading-6 text-black/70">
              Booking amount stays the same across all three options.
              <span className="font-bold text-primary"> Pay just $150 to book your seat.</span>
            </p>
            <Link
              href="/contact"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-rare px-6 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:text-white"
            >
              Start admission
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background px-4 pb-24 text-black sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Student FAQs
            </p>
            <h2 className="mt-3 max-w-[620px] text-[clamp(2.25rem,5vw,3.55rem)] font-medium leading-none tracking-normal text-black">
              Questions before choosing <span className="font-bold text-primary">Georgia</span>
            </h2>
            <p className="mt-5 max-w-[520px] text-base leading-7 text-black/70">
              Quick answers about safety, NEET, validity in India, costs, accommodation and the admission process.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-rare px-6 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:text-white"
            >
              Ask a counselor
            </Link>
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
        </div>
      </section>
    </div>
  )
}
