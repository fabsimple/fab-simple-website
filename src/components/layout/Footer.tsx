import Link from "next/link";

const footerLinks = {
  Product: [
    "Tekla & SDS/2 Intake",
    "Material Traceability & Heats",
    "Shop Traveler Worker PWA",
    "AWS & AISC Quality Queue",
    "1D Cut List & Nesting",
    "AIA G702 / G703 Billing",
  ],
  Solutions: [
    "Commercial Structural Steel",
    "Industrial Framing & Heavy Plate",
    "Bridge & Infrastructure",
    "Miscellaneous & Ornamental Metals",
    "Steel Erectors & Field Crews",
  ],
  Resources: [
    "AISC 303 Audit Guide",
    "Tekla CSV Import Format",
    "MTR Management Best Practices",
    "Offline Bay PWA Setup",
    "REST API Documentation",
  ],
  Company: [
    "About FabSimple",
    "Customer Stories",
    "Security & Architecture",
    "Contact Engineering",
    "Partner Network",
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-zinc-800 rounded-sm flex items-center justify-center">
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
            </div>
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
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#demo"
                      className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                    >
                      {link}
                    </a>
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
            {["Privacy Policy", "Terms of Service", "AISC Compliance Standards"].map((link) => (
              <a key={link} href="#" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
