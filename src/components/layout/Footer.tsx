import Link from "next/link";

const footerLinks = [
  {
    category: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Modules", href: "/#modules" },
      { label: "Integrations", href: "/#integrations" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Release Notes", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
  {
    category: "Solutions",
    links: [
      { label: "Structural Steel", href: "#" },
      { label: "Miscellaneous Steel", href: "#" },
      { label: "Metal Buildings", href: "#" },
      { label: "Erectors", href: "#" },
      { label: "Large Shops", href: "#" },
    ],
  },
  {
    category: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Implementation Guide", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Community", href: "#" },
    ],
  },
  {
    category: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Press", href: "#" },
      { label: "Contact", href: "/#contact" },
      { label: "Partners", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 bg-zinc-800 rounded-sm flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="2" width="6" height="6" fill="white" opacity="0.9" />
                  <rect x="10" y="2" width="6" height="6" fill="white" opacity="0.4" />
                  <rect x="2" y="10" width="6" height="6" fill="white" opacity="0.4" />
                  <rect x="10" y="10" width="6" height="6" fill="white" opacity="0.9" />
                </svg>
              </div>
              <span className="text-zinc-200 font-semibold text-lg tracking-tight">
                Fab<span className="text-zinc-500">Simple</span>
              </span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              The all-in-one management platform built from the ground up for structural steel fabricators.
            </p>
            <div className="mt-6 flex gap-3">
              {["LinkedIn", "Twitter", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs text-zinc-500 hover:text-zinc-300 hover:border-zinc-700 transition-colors"
                >
                  {social.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map(({ category, links }) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-900 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} FabSimple Technologies, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors font-medium">
              Privacy Policy
            </Link>
            <a href="#" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
