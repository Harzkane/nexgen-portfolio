const techs = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "Tailwind CSS",
  "WebSockets",
  "Payment APIs",
];

export default function TechStack() {
  return (
    <section id="tech" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-[36px] border border-white/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[#f4c98b]">Technology stack</p>
            <h3 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white">
              Modern tools, chosen for speed, resilience, and scale.
            </h3>
            <p className="mt-5 max-w-md text-base leading-8 text-white/68">
              We prefer battle-tested technologies that let teams move quickly today
              without creating technical debt tomorrow.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {techs.map((tech, index) => (
              <div
                key={tech}
                className={`rounded-full border px-5 py-3 text-sm font-semibold ${
                  index % 3 === 0
                    ? "border-[#d7ff64]/30 bg-[#d7ff64]/10 text-[#f5ffc7]"
                    : index % 3 === 1
                      ? "border-[#7df9c6]/25 bg-[#7df9c6]/10 text-[#d6fff0]"
                      : "border-white/10 bg-white/5 text-white/78"
                }`}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
