"use client";

const CONTACT_EMAIL = "codewithharz@gmail.com";
const CONTACT_PHONE = "+2348107060160";
const CONTACT_NAME = "Haruna Bah Jibril";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[34px] border border-white/8 bg-white/[0.03] p-8 lg:p-10">
          <p className="text-sm uppercase tracking-[0.28em] text-[#7df9c6]">Contact</p>
          <h3 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
            Have a product idea worth building properly?
          </h3>
          <p className="mt-5 max-w-md text-base leading-8 text-white/66">
            Tell us what you are building, where the bottlenecks are, and what kind of
            growth you are targeting. We will help shape the right product path.
          </p>

          <div className="mt-10 space-y-4 text-sm text-white/72">
            <div className="rounded-2xl border border-white/8 bg-black/18 px-4 py-4">
              Founder-led clarity for ambiguous products
            </div>
            <div className="rounded-2xl border border-white/8 bg-black/18 px-4 py-4">
              Practical systems for payments, operations, and growth
            </div>
            <div className="rounded-2xl border border-white/8 bg-black/18 px-4 py-4">
              Tight communication and execution without unnecessary layers
            </div>
          </div>

          {/* <div className="mt-10 grid gap-4 text-sm text-white/76">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="rounded-2xl border border-white/8 bg-[#d7ff64]/8 px-4 py-4 transition-colors hover:border-[#d7ff64]/25 hover:bg-[#d7ff64]/12"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-white/42">Email</p>
              <p className="mt-2 font-semibold text-white">{CONTACT_EMAIL}</p>
            </a>
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="rounded-2xl border border-white/8 bg-black/18 px-4 py-4 transition-colors hover:border-white/14 hover:bg-white/[0.04]"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-white/42">Call Haruna Bah Jibril</p>
              <p className="mt-2 font-semibold text-white">{CONTACT_PHONE}</p>
            </a>
          </div> */}
        </div>

        <div className="rounded-[34px] border border-white/8 bg-[#12181d] p-8 lg:p-10">
          <p className="text-sm uppercase tracking-[0.28em] text-[#d7ff64]">Direct contact</p>
          <h4 className="mt-4 max-w-xl font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
            Reach out directly and we can move faster.
          </h4>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/64">
            For serious inquiries, email or call {CONTACT_NAME} directly. That keeps the
            first conversation simple and avoids form friction.
          </p>

          <div className="mt-10 grid gap-4">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Project inquiry from portfolio")}`}
              className="rounded-[28px] border border-[#d7ff64]/20 bg-[#d7ff64]/8 p-6 transition-colors hover:border-[#d7ff64]/35 hover:bg-[#d7ff64]/12"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-white/42">Email Haruna Bah Jibril</p>
              <p className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                {CONTACT_EMAIL}
              </p>
              <p className="mt-3 text-sm leading-7 text-white/58">
                Best for project briefs, product strategy conversations, and partnership discussions.
              </p>
            </a>

            <a
              href={`tel:${CONTACT_PHONE}`}
              className="rounded-[28px] border border-white/8 bg-black/18 p-6 transition-colors hover:border-white/14 hover:bg-white/[0.04]"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-white/42">Call directly</p>
              <p className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                {CONTACT_PHONE}
              </p>
              <p className="mt-3 text-sm leading-7 text-white/58">
                Best for urgent conversations or when you already know what you want to build.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
