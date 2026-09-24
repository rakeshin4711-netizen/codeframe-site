import { navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line py-14">
      <div className="container-x">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span className="font-serif text-xl font-semibold tracking-tight text-ink">
              CODEFRAME
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-stone">
              Digital Systems • AI • Software • Automation
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-x-10 gap-y-3 sm:flex sm:gap-8">
            {[...navLinks, { label: "Contact", href: "#contact" }].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-charcoal/70 transition-colors duration-200 hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 border-t border-line pt-6 text-xs text-stone">
          © 2026 CODEFRAME. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
