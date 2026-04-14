import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const coreSystems = [
  "Property marketplace with search, filtering, listing creation, featured properties, and landlord-managed inventory.",
  "Trust layer built around physical property verification, ID and document upload flows, landlord credibility signals, and verified badges.",
  "Direct communication system with property-linked conversations, inbox management, and dashboard messaging instead of agent-mediated contact.",
  "Tour scheduling and rental transaction workflows that move from property discovery to inspection booking, payment, escrow, and release.",
  "Tenant and landlord support surfaces including receipts, reviews, trust-and-safety resources, onboarding, and monetization tools.",
];

const stack = [
  "Next.js 16",
  "React 19",
  "Express 5",
  "TypeScript",
  "Prisma",
  "PostgreSQL",
  "Clerk",
  "Tailwind CSS",
  "Mapbox",
  "Cloudinary",
  "Paystack",
  "Flutterwave",
  "Termii",
  "BullMQ",
  "Redis",
];

const metrics = [
  { value: "2", label: "primary app surfaces inside the monorepo: web experience and API" },
  { value: "43", label: "backend source files covering properties, tours, messaging, transactions, reviews, uploads, and verification" },
  { value: "68", label: "web source files across marketplace, dashboard, resources, onboarding, and payment flows" },
  { value: "14", label: "database models documented for users, properties, tours, transactions, reviews, favorites, and more" },
];

const valueThemes = [
  {
    title: "Trust as product design",
    text: "RentHub is framed around a real market failure in Nigerian rentals: fragmented discovery, weak accountability, and exploitative agent fees. The repo reflects that by treating verification, escrow, and reviews as core platform features rather than optional extras.",
  },
  {
    title: "Landlord and tenant workflows both matter",
    text: "The product is not just a browse-and-contact interface. There are landlord tools for listings, monetization, approvals, and property management alongside tenant flows for search, tours, payment, and protected communication.",
  },
  {
    title: "Payments are operational, not decorative",
    text: "Escrow status tracking, gateway handling, transaction history, receipts, and release logic make the marketplace feel much more serious than a listing site with a pay button attached at the end.",
  },
  {
    title: "Education and safety are built into the platform",
    text: "Resources for tenant rights, inspection checklists, scam awareness, verification, escrow, landlord legal templates, and photography guidance show a broader product strategy around trust and conversion.",
  },
];

const architecture = [
  "Turborepo monorepo with a Next.js web app, Express TypeScript API, and shared type-safe backend patterns",
  "Prisma and PostgreSQL foundation for users, properties, tours, transactions, reviews, conversations, favorites, notifications, and verification-related entities",
  "Clerk-based identity layer with onboarding, role-aware flows, protected dashboard sections, and verification-oriented profile tooling",
  "Marketplace infrastructure connected to Cloudinary uploads, Mapbox map flows, SMS notifications, escrow-capable payment gateways, and Redis/BullMQ operational support",
];

const systemBreakdown = [
  {
    title: "Property and search layer",
    text: "The marketplace supports listing creation, rich property metadata, image handling, search filters, favorites, featured listings, and route-level pages for browsing, property detail, and rental initiation.",
  },
  {
    title: "Messaging and tour coordination",
    text: "The backend includes conversation and messaging services tied to properties, while the frontend includes inbox management and tour-request pages. That creates a stronger bridge from discovery to real-world inspection.",
  },
  {
    title: "Escrow and transaction flow",
    text: "Transaction services calculate fees, track gateway references, move payments into escrow states, and support release to landlords. The dashboard UI also includes escrow status and transaction history views.",
  },
  {
    title: "Verification and review systems",
    text: "Document upload, verification controllers, verified reviewer support, multi-dimensional ratings, and trust score UI components show a serious attempt to model rental reputation rather than relying on bare listings.",
  },
];

const evidencePoints = [
  "The root README explicitly positions RentHub as a platform built to remove the 'agent tax' through verified listings, escrow protection, and direct landlord-to-tenant connection.",
  "The progress tracker shows core phase completion across messaging, tours, escrow payments, reviews, verification workflows, and monetization features.",
  "The web app includes dedicated routes for search, onboarding, support, community, resources, landlord guides, trust-and-safety education, property creation, tours, rent flow, payment verification, and dashboard messaging.",
  "The API is separated into controllers and services for properties, users, tours, favorites, payments, transactions, reviews, messages, uploads, service transactions, and verification.",
];

export default function RentHubCaseStudyPage() {
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
                RentHub is a trust-first rental marketplace designed to replace agent friction with verification, direct connection, and escrow-backed transactions.
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/68 sm:text-lg">
                The project is much more than a property listings site. The monorepo shows a
                multi-role rental platform built around search, property management, tours,
                messaging, reviews, verification, and transaction protection for both tenants
                and landlords.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://renthub.shop"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#d7ff64] px-7 py-4 font-semibold text-[#091014]"
                >
                  Visit live project
                </a>
                <div className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white/72">
                  Category: Rental trust platform
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
                A property marketplace shaped around trust infrastructure instead of middlemen.
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
                  The strongest design decision is making trust visible at every stage of the rental journey.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-8 text-white/62">
                RentHub’s differentiation is not just direct landlord access. It is the way the
                platform combines discovery, verification, communication, tours, and payments
                into one coherent flow.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {valueThemes.map((item, index) => (
                <article
                  key={item.title}
                  className={`rounded-[30px] border p-7 ${
                    index === 0
                      ? "border-[#ff7d9c]/25 bg-[#ff7d9c]/10"
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
                A modern marketplace stack with clear separation between customer experience and platform operations.
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
                        ? "border-[#ff7d9c]/30 bg-[#ff7d9c]/10 text-[#ffe3ea]"
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
                <p className="text-sm uppercase tracking-[0.22em] text-white/45">Why it stands out</p>
                <p className="mt-4 text-base leading-8 text-white/72">
                  RentHub stands out because it treats local rental friction as a systems
                  problem. Listings, tours, verification, payments, resources, and reviews all
                  work together to reduce the trust gap that normally pushes people back to
                  informal agents.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-20 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[32px] border border-white/8 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-[#7df9c6]">System breakdown</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white">
                The repo shows a marketplace built around real rental workflows, not just posting inventory.
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
                The implementation backs up the trust-first positioning.
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
