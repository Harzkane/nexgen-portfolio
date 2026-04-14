const links = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const contactLinks = [
  { label: "Email", href: "mailto:codewithharz@gmail.com", value: "codewithharz@gmail.com" },
  { label: "Call", href: "tel:+2348107060160", value: "+2348107060160" },
];

export default function Footer() {
  return (
    <footer className="px-6 pb-10 pt-6 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-white/8 bg-black/25 px-6 py-8 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-display text-2xl font-bold tracking-[0.18em] text-white">
              NEXGEN
            </p>
            <p className="mt-4 max-w-lg text-sm leading-7 text-white/58">
              Product strategy, engineering, and execution for African businesses building
              serious digital systems.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm text-white/66">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-full border border-white/10 px-4 py-2 hover:text-white"
                >
                  {link.label}: {link.value}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/66 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-white/8 pt-6 text-sm text-white/38">
          &copy; {new Date().getFullYear()} NEXGEN TECH INNOVATIONS LIMITED
        </div>
      </div>
    </footer>
  );
}
