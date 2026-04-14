import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const coreSystems = [
  "Public hotel booking experience with room discovery, room detail pages, a room-type-first search engine, date-aware availability, and booking-intent handling.",
  "Property operations dashboard for reservations, guests, billing, payments, room inventory, room types, housekeeping, maintenance, staff, reports, and audit workflows.",
  "Hotel control surfaces for night audit review, manager insights, supervision, settings, and role-aware operational pages built for daily front-desk and back-office use.",
  "Backend business layer for rooms, reservations, billing, guest records, jobs, ops metrics, audit history, background processing, and notification dispatch.",
  "Reliability and governance tooling around RBAC, login throttling, webhook verification, audit logs, observability endpoints, backup runbooks, and payment incident procedures.",
];

const stack = [
  "Next.js 14",
  "React 18",
  "Express",
  "TypeScript",
  "Prisma",
  "PostgreSQL",
  "JWT",
  "Zod",
  "Paystack",
  "Tailwind CSS",
  "GSAP",
  "Cloudflare R2",
  "Termii",
  "Resend",
];

const metrics = [
  { value: "171", label: "frontend source files spanning public hotel pages, dashboard pages, API proxies, room search, ops, and admin workflows" },
  { value: "78", label: "backend source files across controllers, services, routes, validators, middleware, and background worker logic" },
  { value: "10+", label: "hotel operation domains implemented across reservations, guests, rooms, billing, housekeeping, maintenance, staff, audit, reports, jobs, and ops" },
  { value: "2", label: "distinct product surfaces working together: public booking experience and internal hotel operations console" },
];

const valueThemes = [
  {
    title: "A real hotel system, not a marketing site",
    text: "The repo goes well beyond room pages and search. It includes the operational layers that actually make hospitality software useful: reservations, room inventory, billing, housekeeping, maintenance, staff, audit, and night closeout trust.",
  },
  {
    title: "Search is modeled around booking intent",
    text: "The docs repeatedly emphasize moving from raw room lookup toward room-type-first booking search with adults, children, beds, availability, stay pricing, and alternate room-type recovery. That is much closer to modern hospitality behavior than a static listing form.",
  },
  {
    title: "Operations and finance are visible together",
    text: "Dashboard specs focus on occupancy, arrivals, departures, unpaid stays, rooms not ready, maintenance blockers, and payment status because hotel work depends on seeing operations and revenue risk in the same place.",
  },
  {
    title: "Governance is built into day-to-day admin use",
    text: "Role-aware access, staff lifecycle management, audit browsing, job monitoring, payment-incident runbooks, and night-audit review all point to a product designed for accountable daily hotel use rather than one-off demos.",
  },
];

const architecture = [
  "Split frontend and backend structure with a Next.js app for the public site and dashboard UI, plus an Express and Prisma API for hotel operations and booking logic",
  "Backend modules organized by business domain, with rooms, reservations, billing, guests, staff, housekeeping, maintenance, jobs, ops, and audit handled in separate service areas",
  "Frontend routes covering public content, room pages, booking APIs, staff-facing dashboard pages, and operational proxies for metrics, settings, audit, night audit, guests, reservations, and rooms",
  "Operational reliability layer including background worker processes, observability endpoints, RBAC, throttling, webhook verification, backup procedures, and protected troubleshooting surfaces",
];

const systemBreakdown = [
  {
    title: "Booking and room search engine",
    text: "The public side is built around room-type-first search, not raw inventory dumps. The contract and production spec talk through guest fit, date-aware availability, stay pricing, filters, ranking, and alternate recovery paths when exact inventory does not match intent.",
  },
  {
    title: "Front-desk and room operations",
    text: "Reservations, guests, rooms, check-in, check-out, room readiness, and housekeeping tasks are all surfaced in the dashboard so staff can run the property instead of only monitoring a booking inbox.",
  },
  {
    title: "Finance, closeout, and trust surfaces",
    text: "Billing, payments, outstanding balances, night audit review, settings activity, and audit browser flows help the hotel verify that money movement and end-of-day closeout are trustworthy, not just recorded.",
  },
  {
    title: "Staff and operational governance",
    text: "Dedicated staff and audit specs, RBAC middleware, assignable user APIs, ops metrics, background jobs, and readiness endpoints show that internal accountability is part of the product design.",
  },
];

const evidencePoints = [
  "The root README positions NEXGEN Hotel as both a public booking experience and a multi-surface admin dashboard, with reservations, guests, billing, payments, housekeeping, maintenance, audit, and staff modules all called out directly.",
  "The backend source tree includes controllers, routes, services, validators, and middleware for auth, staff, rooms, reservations, billing, housekeeping, maintenance, reports, jobs, ops, and audit.",
  "The frontend route tree includes dashboard pages for reservations, guests, billing, payments, rooms, room types, staff, maintenance, housekeeping, reports, manager insights, supervision, settings, audit, and night audit, alongside public booking and content pages.",
  "The production-spec docs for overview, staff, audit, night audit, and search show a strong operational design mindset focused on exception handling, room readiness, payment issues, closeout trust, and role-aware hotel workflows.",
];

export default function NexgenHotelCaseStudyPage() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main className="min-h-screen px-6 pb-16 pt-28 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/#projects"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70"
          >
            Back to selected work
          </Link>

          <section className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#f4c98b]">Case study</p>
              <h1 className="mt-4 max-w-5xl font-display text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                NEXGEN Hotel is a hospitality operations and booking platform built to unify guest booking, room control, staff workflows, billing, and closeout trust.
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/68 sm:text-lg">
                The product is much broader than a hotel website. The repo shows a real
                operational platform with room-type-first search, reservations, guests,
                payments, housekeeping, maintenance, staff management, audit views, and
                night-audit reliability surfaces.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://nexgen-hotel.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#d7ff64] px-7 py-4 font-semibold text-[#091014]"
                >
                  Visit live project
                </a>
                <div className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white/72">
                  Category: Hospitality
                </div>
              </div>
            </div>

            <div className="rounded-[34px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
              <p className="text-sm uppercase tracking-[0.25em] text-[#d7ff64]">Project snapshot</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {metrics.map((item) => (
                  <div key={item.label} className="rounded-[24px] border border-white/8 bg-black/16 p-5">
                    <p className="font-display text-3xl font-bold tracking-[-0.04em] text-white">
                      {item.value}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/60">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-20 grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="rounded-[30px] border border-white/8 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-[#7df9c6]">What NEXGEN built</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white">
                A property-management and booking stack with real operational depth behind the public experience.
              </h2>
            </div>

            <div className="rounded-[30px] border border-white/8 bg-[#12181d] p-8">
              <div className="grid gap-4">
                {coreSystems.map((item) => (
                  <div key={item} className="rounded-[24px] border border-white/8 bg-black/18 px-5 py-5">
                    <p className="text-sm leading-7 text-white/72">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-20">
            <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-[#d7ff64]">Product framing</p>
                <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
                  The strongest move is treating hotel operations as the real product, not just the booking funnel.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-8 text-white/62">
                The platform consistently prioritizes live operations, exception handling,
                room readiness, payment visibility, and closeout trust. That makes it feel
                much closer to hospitality software than a polished landing page with room cards.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {valueThemes.map((item, index) => (
                <article
                  key={item.title}
                  className={`rounded-[30px] border p-7 ${
                    index === 0
                      ? "border-[#8fd3ff]/25 bg-[#8fd3ff]/10"
                      : index === 1
                        ? "border-[#d7ff64]/25 bg-[#d7ff64]/10"
                        : "border-white/8 bg-white/[0.03]"
                  }`}
                >
                  <p className="text-sm uppercase tracking-[0.24em] text-white/46">{item.title}</p>
                  <p className="mt-4 text-base leading-8 text-white/74">{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-20 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[32px] border border-white/8 bg-[#12181d] p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-[#f4c98b]">Architecture</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white">
                Two coordinated surfaces: a public booking layer and an internal hotel control layer.
              </h2>
              <div className="mt-8 space-y-3">
                {architecture.map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-white/8 bg-black/18 px-4 py-4 text-sm leading-7 text-white/70"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/8 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-[#d7ff64]">Technology stack</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {stack.map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-full border px-4 py-2.5 text-sm font-semibold ${
                      index % 3 === 0
                        ? "border-[#8fd3ff]/30 bg-[#8fd3ff]/10 text-[#e8f8ff]"
                        : index % 3 === 1
                          ? "border-[#d7ff64]/30 bg-[#d7ff64]/10 text-[#f5ffc7]"
                          : "border-white/10 bg-white/[0.04] text-white/72"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-[24px] border border-white/8 bg-black/16 p-6">
                <p className="text-sm uppercase tracking-[0.22em] text-white/45">What stands out</p>
                <p className="mt-4 text-base leading-8 text-white/72">
                  NEXGEN Hotel stands out because it models the hotel as a live operating
                  system. Search, arrivals, readiness, housekeeping, payments, and night
                  closeout are all treated as connected workflows rather than separate screens.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-20 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[32px] border border-white/8 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-[#7df9c6]">System breakdown</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white">
                The codebase shows a booking product backed by operational hotel discipline.
              </h2>
              <div className="mt-8 grid gap-4">
                {systemBreakdown.map((item) => (
                  <div key={item.title} className="rounded-[24px] border border-white/8 bg-black/18 p-5">
                    <p className="text-sm uppercase tracking-[0.22em] text-white/45">{item.title}</p>
                    <p className="mt-3 text-sm leading-7 text-white/70">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/8 bg-[#12181d] p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-[#f4c98b]">Repo evidence</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white">
                The implementation and product specs both support the hospitality platform story.
              </h2>
              <div className="mt-8 space-y-4">
                {evidencePoints.map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-white/8 bg-black/18 px-4 py-4 text-sm leading-7 text-white/70"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
