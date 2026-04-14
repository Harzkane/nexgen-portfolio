Perfect! Since we agreed on a **single-page scrollable portfolio with deep-dive modals**, we can start by setting up a **Next.js + TypeScript + TailwindCSS** project structure for NEXGEN. I’ll provide a **scaffolded codebase** with the **Navbar, Hero, About, Projects Grid with modals, Tech Stack, Metrics, and Contact sections**.

We’ll implement it modularly so you can expand each section easily.

---

## **1️⃣ Setup Next.js + TailwindCSS**

```bash
# Create Next.js app with TypeScript
npx create-next-app@latest nexgen-portfolio --typescript
cd nexgen-portfolio

# Install TailwindCSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Tailwind config (tailwind.config.js)
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

# Add Tailwind to globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## **2️⃣ Project Structure**

```
nexgen-portfolio/
├─ components/
│  ├─ Navbar.tsx
│  ├─ Hero.tsx
│  ├─ About.tsx
│  ├─ Projects.tsx
│  ├─ ProjectModal.tsx
│  ├─ TechStack.tsx
│  ├─ Metrics.tsx
│  ├─ Contact.tsx
│  └─ Footer.tsx
├─ pages/
│  └─ index.tsx
├─ public/
│  └─ images/
├─ styles/
│  └─ globals.css
└─ package.json
```

---

## **3️⃣ Navbar Component**

```tsx
// components/Navbar.tsx
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl text-indigo-600">NEXGEN</h1>
        <ul className="hidden md:flex space-x-6">
          {["About", "Projects", "Tech", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-indigo-500">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden text-indigo-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden bg-white px-6 py-4 space-y-4">
          {["About", "Projects", "Tech", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="block">
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
```

---

## **4️⃣ Hero Component**

```tsx
// components/Hero.tsx
export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center bg-indigo-50 text-center px-6">
      <h2 className="text-5xl font-bold mb-4 text-indigo-700">Empowering Africa Through Tech</h2>
      <p className="text-xl mb-6 text-gray-700">Smart Fintech & SaaS Solutions by NEXGEN</p>
      <div className="space-x-4">
        <a href="#projects" className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-500 transition">Explore Projects</a>
        <a href="#contact" className="border border-indigo-600 px-6 py-3 rounded hover:bg-indigo-100 transition">Contact Us</a>
      </div>
    </section>
  );
}
```

---

## **5️⃣ About Section**

```tsx
// components/About.tsx
export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white text-center">
      <h3 className="text-4xl font-bold mb-6 text-indigo-700">About NEXGEN</h3>
      <p className="max-w-2xl mx-auto text-gray-700 text-lg mb-4">
        NEXGEN TECH INNOVATIONS LIMITED (RC 8370645) is a Private Company Limited by Shares, founded on Mar 26, 2025. Our mission is to build scalable African fintech and SaaS solutions.
      </p>
      <div className="mt-6 flex justify-center space-x-8">
        <div>
          <h4 className="text-2xl font-bold text-indigo-600">2025</h4>
          <p className="text-gray-600">Founded</p>
        </div>
        <div>
          <h4 className="text-2xl font-bold text-indigo-600">3+</h4>
          <p className="text-gray-600">Major Projects</p>
        </div>
        <div>
          <h4 className="text-2xl font-bold text-indigo-600">10k+</h4>
          <p className="text-gray-600">Users Impacted</p>
        </div>
      </div>
    </section>
  );
}
```

---

## **6️⃣ Projects Section + Modal Skeleton**

```tsx
// components/Projects.tsx
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const projects = [
  { id: 1, name: "PlugNG Shop", tagline: "Nigeria's Premier Phone Accessories Platform" },
  { id: 2, name: "Glotrade", tagline: "Cross-Border Trading Solution" },
  { id: 3, name: "WiFi File Shuttle", tagline: "Local Network File Transfer" },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-6 bg-indigo-50">
      <h3 className="text-4xl font-bold mb-12 text-center text-indigo-700">Projects</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-6 bg-white rounded-lg shadow hover:shadow-lg cursor-pointer transition"
            onClick={() => setSelectedProject(project)}
          >
            <h4 className="text-2xl font-bold mb-2">{project.name}</h4>
            <p className="text-gray-600">{project.tagline}</p>
            <button className="mt-4 text-indigo-600 underline">View Details</button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
```

---

```tsx
// components/ProjectModal.tsx
interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg max-w-3xl w-full p-6 relative">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-indigo-600"
          onClick={onClose}
        >
          ✕
        </button>
        <h4 className="text-3xl font-bold mb-4 text-indigo-700">{project.name}</h4>
        <p className="text-gray-700 mb-6">{project.tagline}</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-indigo-50 rounded">Feature 1</div>
          <div className="p-4 bg-indigo-50 rounded">Feature 2</div>
          <div className="p-4 bg-indigo-50 rounded">Feature 3</div>
          <div className="p-4 bg-indigo-50 rounded">Feature 4</div>
        </div>
        <a
          href="#"
          className="mt-6 inline-block bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-500 transition"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}
```

---

## **7️⃣ Pages Index.tsx**

```tsx
// pages/index.tsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Projects />
        {/* Later: TechStack, Metrics, Contact */}
      </main>
    </>
  );
}
```

