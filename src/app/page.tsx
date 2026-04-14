import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Metrics from "@/components/Metrics";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main className="flex flex-col pt-20">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Metrics />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
