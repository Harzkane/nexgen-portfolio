import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const coreSystems = [
  "Map-first sender experience for searching routes, viewing available transporters, exploring driver density, and choosing intercity parcel corridors visually instead of through a text-heavy marketplace.",
  "Transporter-side driver console for route posting, fleet visibility, trip management, earnings telemetry, and an industrial-style dashboard optimized for professional road operators.",
  "Live parcel tracking environment with progress milestones, route geometry, driver contact surfaces, and secure payment-release confirmation at delivery completion.",
  "Route intelligence layer that enriches corridors with demand levels, active driver counts, and average pricing, turning logistics routes into a searchable operational market.",
  "Unified identity and account surfaces that let users move between sender and transporter modes while keeping delivery history, trust indicators, and logistics stats connected.",
];

const stack = [
  "Expo SDK 54",
  "React Native",
  "TypeScript",
  "Expo Router",
  "Mapbox",
  "React Native Reanimated",
  "Gesture Handler",
  "Bottom Sheet",
  "Expo Location",
  "Expo Blur",
  "Expo Haptics",
  "React Native SVG",
];

const metrics = [
  { value: "23", label: "documented product phases in the premium UI refinement journey from planning to route intelligence and driver console polish" },
  { value: "17", label: "mock drivers distributed across major Nigerian corridors to support map, route, and tracking experiences" },
  { value: "9", label: "app screens and route files covering home, drivers, trips, profile, tracking, route explorer, and transporter flow" },
  { value: "14", label: "reusable component files spanning map, search, service cards, driver cards, and shared UI infrastructure" },
];

const valueThemes = [
  {
    title: "Map-first by product philosophy",
    text: "TripCarry is intentionally designed around geography and route visibility rather than list-based delivery browsing. The docs make it clear that the product should feel like a command center for intercity logistics, not a generic courier app.",
  },
  {
    title: "Built for Nigerian route reality",
    text: "The mocked route network, city coverage, corridor popularity, and driver distribution all point to a product thinking about actual Nigerian movement patterns instead of abstract logistics flows.",
  },
  {
    title: "Different surfaces for sender and transporter",
    text: "The app is not only for booking a delivery. It includes a dedicated driver console and identity model that supports both shipment customers and the transport operators moving goods between cities.",
  },
  {
    title: "Premium UX as trust signal",
    text: "Industrial styling, glassmorphism overlays, route previews, tracking milestones, and payment-release confirmation are doing more than looking polished. They help the product feel serious, modern, and operationally trustworthy.",
  },
];

const architecture = [
  "Single Expo and React Native application using Expo Router for a multi-tab mobile experience with dedicated feature screens for tracking and route exploration",
  "Mapbox-centric interaction layer with route geometry, live marker logic, route previews, and map-driven context preserved behind overlays and sheets",
  "Component system split across map, search, UI cards, and themed primitives so route intelligence, driver lists, and tracking surfaces can share one visual language",
  "Data layer currently powered by structured Nigerian route and driver mocks, designed to support future real-time driver sync, search velocity, and backend-powered logistics intelligence",
];

const systemBreakdown = [
  {
    title: "Home and search command center",
    text: "The main screen is structured around a large map, a partially open service drawer, search overlay, and route shortcuts. That makes route selection, nearby-driver awareness, and service entry feel immediate and spatial.",
  },
  {
    title: "Route intelligence and fleet visibility",
    text: "Popular routes are modeled with demand levels, driver counts, ratings, and average prices. The dedicated route explorer turns logistics corridors into something users can compare and understand quickly.",
  },
  {
    title: "Tracking and escrow-style completion",
    text: "The tracking screen includes movement along actual route geometry, milestone-based progress, driver identity, and a release-payment confirmation pattern that protects both sender and transporter at the end of delivery.",
  },
  {
    title: "Transporter workflow",
    text: "The driver tab is not a minimal profile page. It is framed as a command console with earnings, active trips, trip posting, and fleet-management style visibility, which gives supply-side users a stronger product identity.",
  },
];

const evidencePoints = [
  "The root README explicitly positions TripCarry as a logistics intelligence platform for the Nigerian ecosystem, connecting senders and transporters through a map-first command-center model.",
  "The premium refinement document lays out 23 phased improvements including route visualization, real-time movement simulation, live parcel tracking, delivery completion, driver console upgrades, and route market intelligence.",
  "The app route tree includes tabs for home, trips, profile, drivers, and driver mode, plus dedicated `tracking` and `routes-explorer` screens that support the marketplace and visibility story.",
  "The component and mock-data layers include route-matching search, Mapbox views, driver cards, route metrics, and structured Nigerian corridor data with demand, pricing, and fleet presence signals.",
];

export default function TripCarryCaseStudyPage() {
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
                TripCarry is a map-first intercity logistics platform designed to make parcel movement feel visual, transparent, and route-intelligent.
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/68 sm:text-lg">
                The product is not a generic delivery app. The repo shows a sender and
                transporter marketplace shaped around Nigerian corridors, live route previews,
                parcel tracking, driver visibility, and industrial-grade mobile UX inspired by
                modern mobility platforms.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <div className="inline-flex items-center justify-center rounded-full bg-[#d7ff64] px-7 py-4 font-semibold text-[#091014]">
                  Case study only
                </div>
                <div className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white/72">
                  Category: Logistics
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
                A logistics marketplace where route visibility and transport intelligence drive the experience.
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
                  The strongest move here is treating logistics as a live route market, not a generic request form.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-8 text-white/62">
                TripCarry feels differentiated because the route, the driver network, and the
                parcel journey are all visible. That makes logistics more understandable for
                users and gives transporters a clearer operating role.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {valueThemes.map((item, index) => (
                <article
                  key={item.title}
                  className={`rounded-[30px] border p-7 ${
                    index === 0
                      ? "border-[#59e0d0]/25 bg-[#59e0d0]/10"
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
                One mobile app unifying sender search, transporter operations, tracking, and route intelligence.
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
                        ? "border-[#59e0d0]/30 bg-[#59e0d0]/10 text-[#e6fffb]"
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
                  TripCarry stands out because it brings mobility-style UX into intercity
                  parcel logistics. The map, route, and fleet all stay visible enough to make
                  the system feel alive and trustworthy.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-20 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[32px] border border-white/8 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-[#7df9c6]">System breakdown</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white">
                The implementation is strongest where logistics visibility meets user confidence.
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
                The app structure and premium refinement docs both support the logistics-intelligence story.
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
