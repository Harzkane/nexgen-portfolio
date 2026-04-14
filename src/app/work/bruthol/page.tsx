import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const capabilities = [
  "Customer marketplace with product discovery, categories, cart, checkout, orders, reviews, and account flows",
  "Seller tooling for storefront management, product publishing, promotions, analytics, inventory, and payout setup",
  "Admin operations covering users, sellers, products, categories, orders, payments, and platform settings",
  "Internationalization support with English and French rollout planning across customer, seller, and admin experiences",
  "Multi-gateway payment and payout infrastructure spanning Paystack, OPay, PayDunya, and Orange Money",
];

const stack = [
  "Vue 3",
  "Vite",
  "Pinia",
  "Vue Router",
  "Vue I18n",
  "Tailwind CSS",
  "Express",
  "MongoDB",
  "Mongoose",
  "JWT auth",
  "Cloudinary",
  "Nodemailer",
  "Twilio",
];

const codebaseSignals = [
  { value: "160", label: "frontend view files in the Bruthol app surface" },
  { value: "33", label: "backend route files supporting platform flows" },
  { value: "2", label: "languages wired into the internationalization layer" },
  { value: "4", label: "payment and payout services represented in the backend stack" },
];

const deliveryAreas = [
  {
    title: "Marketplace experience",
    text: "Bruthol covers the public-facing commerce journey from browsing and search through product detail, cart, checkout, and order confirmation. The repo structure shows a serious focus on customer flows rather than a thin landing page plus product list.",
  },
  {
    title: "Seller operating system",
    text: "The seller area includes analytics, product management, promotions, reporting, inventory, order handling, and payout setup. That makes Bruthol feel more like an operational commerce platform than a buyer-only storefront.",
  },
  {
    title: "Admin command layer",
    text: "There is a dedicated admin surface with dashboards, user and seller management, product moderation, categories, order oversight, payments, and settings. That gives the platform the internal tooling needed to run at marketplace level.",
  },
  {
    title: "Payments and settlement",
    text: "The backend contains direct work around payment and vendor payout orchestration, including gateway-specific services and payout modeling. That is one of the strongest differentiators in the project story.",
  },
];

const architecture = [
  "Monorepo structure with root workspace orchestration plus separate `frontend` and `backend` apps",
  "Vue/Vite frontend with Pinia stores, Vue Router route map, and localized UI copy",
  "Express API backed by MongoDB and Mongoose models for products, orders, payouts, inventory, notifications, roles, reports, and more",
  "Operational services for email, notifications, uploads, currency handling, and multi-gateway payout routing",
];

export default function BrutholCaseStudyPage() {
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
                Bruthol is a full-stack multi-vendor marketplace built for real commerce operations, not just product display.
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/68 sm:text-lg">
                The codebase shows a serious platform with customer journeys, seller tooling,
                admin control surfaces, internationalization work, and payout infrastructure.
                This page documents the shape of the product NEXGEN built from the repository
                itself.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://bruthol.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#d7ff64] px-7 py-4 font-semibold text-[#091014]"
                >
                  Visit live project
                </a>
                <div className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white/72">
                  Category: E-commerce marketplace
                </div>
              </div>
            </div>

            <div className="rounded-[34px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
              <p className="text-sm uppercase tracking-[0.25em] text-[#d7ff64]">Project snapshot</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {codebaseSignals.map((item) => (
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

          <section className="mt-20 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="rounded-[30px] border border-white/8 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-[#7df9c6]">What NEXGEN built</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white">
                A layered commerce system with public, seller, and admin experiences.
              </h2>
            </div>

            <div className="rounded-[30px] border border-white/8 bg-[#12181d] p-8">
              <div className="grid gap-4">
                {capabilities.map((item) => (
                  <div key={item} className="rounded-[24px] border border-white/8 bg-black/18 px-5 py-5">
                    <p className="text-sm leading-7 text-white/72">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-20">
            <div className="grid gap-5 lg:grid-cols-2">
              {deliveryAreas.map((area, index) => (
                <article
                  key={area.title}
                  className={`rounded-[30px] border p-7 ${
                    index === 0
                      ? "border-[#d7ff64]/25 bg-[#d7ff64]/10"
                      : index === 1
                        ? "border-[#7df9c6]/20 bg-[#7df9c6]/10"
                        : "border-white/8 bg-white/[0.03]"
                  }`}
                >
                  <p className="text-sm uppercase tracking-[0.24em] text-white/46">{area.title}</p>
                  <p className="mt-4 text-base leading-8 text-white/74">{area.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-20 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[32px] border border-white/8 bg-[#12181d] p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-[#f4c98b]">Architecture</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white">
                Full-stack architecture shaped around marketplace complexity.
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
                        ? "border-[#d7ff64]/30 bg-[#d7ff64]/10 text-[#f5ffc7]"
                        : index % 3 === 1
                          ? "border-[#7df9c6]/25 bg-[#7df9c6]/10 text-[#d6fff0]"
                          : "border-white/10 bg-white/[0.04] text-white/72"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-[24px] border border-white/8 bg-black/16 p-6">
                <p className="text-sm uppercase tracking-[0.22em] text-white/45">Notable strength</p>
                <p className="mt-4 text-base leading-8 text-white/72">
                  The strongest part of the Bruthol story is the operational depth behind the
                  storefront: seller analytics, payout handling, admin governance, and support
                  for multiple payment flows across different contexts.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-20 rounded-[34px] border border-white/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-[#7df9c6]">Project readout</p>
                <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white">
                  Why this work matters in the portfolio.
                </h2>
              </div>
              <div className="space-y-5 text-base leading-8 text-white/68">
                <p>
                  Bruthol proves that NEXGEN can build beyond presentation-layer websites. The
                  repository shows end-to-end product engineering across buyer journeys, seller
                  operations, platform administration, and financial workflow handling.
                </p>
                <p>
                  It also gives us a better standard for future case-study pages: less hype,
                  more evidence. Instead of saying we build serious products, this project lets
                  us show the actual system surface and delivery depth behind that claim.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
