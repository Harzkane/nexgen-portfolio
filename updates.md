Perfect! Let’s add a **dynamic, interactive 3–5 year roadmap page** to your portfolio for **NEXGEN TECH INNOVATIONS**. This will showcase **wallet, marketplace, credit, regional expansion, and global plans**, all in a **scrollable and visually appealing format**.

We’ll integrate it into your **single-page portfolio** with **interactive milestone blocks**.

---

## **1️⃣ Roadmap Section Component**

```tsx
// components/Roadmap.tsx
"use client";
import { motion } from "framer-motion";

const roadmapData = [
  {
    phase: "Phase 1: Nigerian SMEs (Foundation)",
    year: "2026",
    goals: [
      "Wallet infrastructure fully operational",
      "SME onboarding + simple marketplace",
      "Transaction monitoring & security hardened",
      "Data collection on merchant behaviors",
    ],
    color: "bg-indigo-500",
  },
  {
    phase: "Phase 2: West Africa (Regional Expansion)",
    year: "2027",
    goals: [
      "Expand into Ghana, Kenya, Ivory Coast, Senegal",
      "Multi-currency support",
      "Local payment partnerships",
      "Cross-border settlement",
    ],
    color: "bg-purple-500",
  },
  {
    phase: "Phase 3: Pan-African (Continental Vision)",
    year: "2028",
    goals: [
      "Expand to multiple countries simultaneously",
      "API-first infrastructure for developers/platforms",
      "Introduce SME credit, embedded insurance, GDIP-style investments",
      "Data-driven insights across regions",
    ],
    color: "bg-pink-500",
  },
  {
    phase: "Phase 4: Global African Diaspora",
    year: "2029",
    goals: [
      "Enable SMEs to sell to diaspora",
      "Enable diaspora investments & payments",
      "Launch international remittance & cross-border loans",
      "Global marketing & partnerships",
    ],
    color: "bg-rose-500",
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 px-6 bg-gray-50 text-center max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-primary">3–5 Year Roadmap</h2>
      <div className="relative flex flex-col md:flex-row md:justify-between gap-12">
        {roadmapData.map((phase, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6 flex-1 relative"
          >
            <div
              className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 flex items-center justify-center rounded-full text-white text-lg font-bold ${phase.color}`}
            >
              {phase.year}
            </div>
            <h3 className="text-2xl font-bold mt-12 mb-4">{phase.phase}</h3>
            <ul className="text-gray-700 list-disc list-inside space-y-2">
              {phase.goals.map((goal, i) => (
                <li key={i}>{goal}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
```

---

## **2️⃣ Integrating Roadmap in `page.tsx`**

```tsx
// app/page.tsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Roadmap from "../components/Roadmap";
import TechStack from "../components/TechStack";
import Metrics from "../components/Metrics";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Roadmap />      {/* ✅ Our interactive roadmap */}
      <TechStack />
      <Metrics />
      <Contact />
      <Footer />
    </>
  );
}
```
