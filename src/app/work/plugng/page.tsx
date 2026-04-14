import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const coreSystems = [
  "Customer storefront for product discovery, device-compatible filtering, product detail pages, cart, checkout, wallet usage, order history, and public tracking.",
  "Commerce backend for products, categories, carts, wishlists, coupons, orders, reviews, wallets, notifications, support tickets, newsletters, and admin activity logging.",
  "Payment and order flow built around Paystack verification, wallet-based purchases, webhook confirmation, stock reservation, and privacy-safe order tracking.",
  "Admin command center for analytics, inventory, promotions, moderation, support, customer management, wallet operations, and rich activity audit views.",
  "Catalog and content tooling shaped for mobile shopping in Nigeria, including multi-level category hierarchies, brand-first navigation, and low-stock or order alerts.",
];

const stack = [
  "Next.js 16",
  "React 19",
  "Express",
  "TypeScript",
  "MongoDB Atlas",
  "Mongoose",
  "Redis",
  "Bull",
  "Paystack",
  "Termii",
  "Resend",
  "Cloudflare R2",
  "Sharp",
  "Zod",
];

const metrics = [
  { value: "56", label: "backend source files covering commerce, payment, wallet, support, notifications, uploads, and admin operations" },
  { value: "98", label: "frontend source files across storefront, checkout, profile, wallet, tracking, and admin dashboard surfaces" },
  { value: "3", label: "category hierarchy levels used to keep mobile navigation clean while preserving brand and product specificity" },
  { value: "30m", label: "stock reservation window documented to prevent overselling during checkout" },
];

const valueThemes = [
  {
    title: "Built around Nigerian buying behavior",
    text: "PlugNG is framed explicitly for the local market: mobile-first browsing, 3G-conscious performance, bank-transfer incentives, wallet usage, state-based delivery logic, and no reliance on assumptions that only work in richer logistics environments.",
  },
  {
    title: "Commerce operations are treated seriously",
    text: "This is not a brochure shop with a checkout button. The codebase includes stock reservation, webhook-confirmed payments, wallet balances, notification flows, support tickets, low-stock alerts, and admin audit logs.",
  },
  {
    title: "Customer confidence is part of the product",
    text: "Public order tracking, verification steps, transparent payment choices, reviews, trust messaging, and tracked order timelines all help reduce the uncertainty that often hurts online retail conversion.",
  },
  {
    title: "Admin tooling is a real business surface",
    text: "The repo supports analytics, inventory, support, promotions, moderation, activity diff views, customer records, and category management because the business side of commerce matters as much as the storefront.",
  },
];

const architecture = [
  "Next.js frontend split into shop and admin route groups, with dedicated customer and operator journeys inside one product surface",
  "Express and TypeScript backend with controllers, routes, models, storage and notification services, plus validation and auth middleware",
  "MongoDB-backed commerce data for products, categories, carts, orders, reviews, notifications, tickets, users, and wallets",
  "Operational layer connected to Redis and Bull for timing-sensitive tasks, Paystack webhooks for payment confirmation, and local-market messaging via Termii and Resend",
];

const systemBreakdown = [
  {
    title: "Shopping and compatibility flow",
    text: "The store is optimized for finding the right accessory quickly. Product discovery is organized around brand and compatibility, while product and category structures reduce the risk of ordering the wrong item for a device.",
  },
  {
    title: "Payment, wallet, and stock logic",
    text: "The project documents a deliberate payment hierarchy, verifies payments through webhooks, supports wallet-funded orders, and reserves stock during checkout so sales do not outrun inventory.",
  },
  {
    title: "Post-purchase visibility",
    text: "Orders can be tracked without login through a privacy-guarded tracking flow, and customers also have profile, orders, wallet, and support surfaces that continue the experience beyond checkout.",
  },
  {
    title: "Admin and catalog operations",
    text: "The admin dashboard covers analytics, products, orders, customers, inventory, promotions, support, moderation, activity logs, wallet operations, and a structured category tree designed for both SEO and mobile usability.",
  },
];

const evidencePoints = [
  "The root README positions PlugNG as a purpose-built Nigerian e-commerce platform with local payment methods, wallet incentives, 3G-minded performance, delivery-zone logic, and public tracking.",
  "The backend source tree includes models and routes for carts, wishlists, coupons, orders, notifications, wallets, tickets, reviews, newsletters, and admin activity, which is far beyond a minimal shop API.",
  "The frontend app includes separate shop and admin route groups with pages for checkout, wallet, orders, tracking, support, analytics, customers, moderation, promotions, inventory, and category management.",
  "The admin guide documents a three-level category system, continuous category creation workflows, bulk import, safety checks on deletion, and UX choices made specifically for mobile navigation and SEO.",
];

export default function PlugNGCaseStudyPage() {
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
                PlugNG is a Nigeria-first commerce platform built around mobile shopping, payment reliability, inventory control, and operational visibility.
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/68 sm:text-lg">
                The repo shows much more than a simple accessories storefront. It combines a
                customer shopping experience, wallet and Paystack payment flows, public order
                tracking, and a full admin operations layer for catalog, inventory, analytics,
                support, and moderation.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://plugng.shop"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#d7ff64] px-7 py-4 font-semibold text-[#091014]"
                >
                  Visit live project
                </a>
                <div className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white/72">
                  Category: Commerce platform
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
                A full retail system for discovery, conversion, fulfillment, and commerce operations.
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
                  The strongest part of PlugNG is how clearly it is designed for its market and operating reality.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-8 text-white/62">
                Payment behavior, logistics friction, device compatibility, slow networks, and
                customer trust are all visible in the way the product is structured.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {valueThemes.map((item, index) => (
                <article
                  key={item.title}
                  className={`rounded-[30px] border p-7 ${
                    index === 0
                      ? "border-[#f274df]/25 bg-[#f274df]/10"
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
                A dual-surface commerce build with one layer for shoppers and another for business operations.
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
                        ? "border-[#f274df]/30 bg-[#f274df]/10 text-[#ffe3fb]"
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
                  PlugNG stands out because the operational rules are explicit. Payment
                  verification, stock control, delivery logic, wallet usage, and customer
                  communication are all treated as core parts of the product instead of loose
                  add-ons.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-20 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[32px] border border-white/8 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-[#7df9c6]">System breakdown</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white">
                The repo shows a commerce product built around conversion, control, and post-purchase trust.
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
                The implementation backs up the market-specific retail story.
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
