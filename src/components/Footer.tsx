const links = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const contactLinks = [
  { label: "Email", href: "mailto:hello@nexgentech.dev", value: "hello@nexgentech.dev" },
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

        <div className="mt-8 border-t border-white/8 pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-white/38">
          <div>
            &copy; {new Date().getFullYear()} NEXGEN TECH INNOVATIONS LIMITED
          </div>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
