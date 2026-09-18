import Link from "next/link";

const footerLinks = {
  Product: ["Features", "Modules", "Integrations", "Pricing", "Release Notes", "Security"],
  Solutions: ["Structural Steel", "Miscellaneous Steel", "Metal Buildings", "Erectors", "Large Shops"],
  Resources: ["Documentation", "Help Center", "Implementation Guide", "API Reference", "Community"],
  Company: ["About Us", "Careers", "Blog", "Press", "Contact", "Partners"],
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
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
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
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
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
