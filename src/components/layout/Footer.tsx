import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterCategory {
  category: string;
  links: FooterLink[];
}

const footerLinks: FooterCategory[] = [
  {
    category: "Product",
    links: [
      { label: "Tekla & SDS/2 Intake", href: "#modules" },
      { label: "Material Traceability & Heats", href: "#modules" },
      { label: "Shop Traveler Worker PWA", href: "#modules" },
      { label: "AWS & AISC Quality Queue", href: "#modules" },
      { label: "1D Cut List & Nesting", href: "#modules" },
      { label: "AIA G702 / G703 Billing", href: "#modules" },
    ],
  },
  {
    category: "Solutions",
    links: [
      { label: "Commercial Structural Steel", href: "#features" },
      { label: "Industrial Framing & Heavy Plate", href: "#features" },
      { label: "Bridge & Infrastructure", href: "#features" },
      { label: "Miscellaneous & Ornamental Metals", href: "#features" },
      { label: "Steel Erectors & Field Crews", href: "#features" },
    ],
  },
  {
    category: "Resources",
    links: [
      { label: "AISC 303 Audit Guide", href: "#" },
      { label: "Tekla CSV Import Format", href: "#" },
      { label: "MTR Management Best Practices", href: "#" },
      { label: "Offline Bay PWA Setup", href: "#" },
      { label: "REST API Documentation", href: "#" },
    ],
  },
  {
    category: "Company",
    links: [
      { label: "About FabSimple", href: "#" },
      { label: "Customer Stories", href: "#testimonials" },
      { label: "Security & Architecture", href: "#" },
      { label: "Contact Engineering", href: "#contact" },
      { label: "Partner Network", href: "#" },
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
              The operating system for structural and miscellaneous steel fabrication shops. Built for owners, project managers, CWIs, and shop floor crews.
            </p>
            <div className="mt-6 flex gap-3">
              {["LinkedIn", "Twitter", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs text-zinc-500 hover:text-zinc-300 hover:border-zinc-700 transition-colors"
                  aria-label={`Follow FabSimple on ${social}`}
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
              AISC Compliance Standards
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
