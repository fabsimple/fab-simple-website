import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ShieldCheck, Mail, Globe, MapPin, CheckCircle2, Lock, Smartphone, FileText, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | FabSimple Structural Steel Fabrication Software",
  description: "FabSimple Privacy Policy — Learn how we collect, protect, and manage your structural steel detailing data, CAD drawings, and shop-floor telemetry.",
};

const permissions = [
  {
    permission: "CAMERA",
    purpose: "QR Code & Assembly Scanning: Used strictly to scan QR codes attached to physical steel members, cut parts, assemblies, and drawing title blocks for real-time station routing.",
  },
  {
    permission: "STORAGE / MEDIA",
    purpose: "Blueprint Caching & Offline PDF Viewing: Allows workers to download, render, and view structural vector blueprints, revision history, and PDF drawing packages locally on the device when offline.",
  },
  {
    permission: "INTERNET",
    purpose: "Cloud Database Synchronization: Enables real-time data sync with our secure Supabase database and Edge API functions for live project tracking across shop managers and mobile field teams.",
  },
];

const dataCollected = [
  {
    title: "Account & Identity Data",
    description: "User profile details including email address, full name, user role (Owner, Project Manager, Shop Foreman, QC Inspector, Fitter/Welder), and company/shop organizational assignment managed securely via Supabase Authentication.",
  },
  {
    title: "CAD, Structural Drawings & BOM Data",
    description: "Structural steel detailing data imported or uploaded into FabSimple, including PDF blueprints, part marks, assembly marks, dimensions, heat numbers, material test reports (MTR), and Tekla Structures / SDS2 / KISS export files (.kss, .eje, .csv, .xlsx).",
  },
  {
    title: "Photos & QC Documentation",
    description: "Inspection photographs, weld verification images, paint dry-film thickness (DFT) logs, shipping photographs, and non-conformance report (NCR) attachments taken via mobile devices.",
  },
  {
    title: "Technical & Device Information",
    description: "Device hardware model, operating system version, network status, app diagnostic logs, and temporary performance telemetry required to operate under shop-floor network conditions.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 flex flex-col font-sans selection:bg-zinc-900 selection:text-zinc-50">
      <Navbar />

      <main className="flex-1 pt-24 pb-20">
        {/* Header section */}
        <section className="border-b border-zinc-200 bg-white py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 hover:text-zinc-900 uppercase tracking-wider mb-6 transition-colors"
            >
              <ArrowLeft size={14} />
              Back to Home
            </Link>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="badge">Privacy Policy</span>
              <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200">
                v5.1
              </span>
              <span className="text-xs font-mono text-zinc-400">
                Google Play Console Compliant
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4">
              FabSimple Privacy Policy
            </h1>

            <p className="text-sm font-mono text-zinc-500">
              Last Updated: September 28, 2026
            </p>
          </div>
        </section>

        {/* Content body */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
          
          {/* Section 1 */}
          <section id="overview" className="bg-white rounded-xl border border-zinc-200 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-3 border-b border-zinc-100 pb-4">
              <div className="w-8 h-8 rounded-md bg-zinc-100 flex items-center justify-center text-zinc-700">
                <FileText size={18} />
              </div>
              <h2 className="text-xl font-bold text-zinc-900 tracking-tight">1. Overview & Scope</h2>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">
              FabSimple (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) provides an end-to-end structural steel fabrication management platform designed for shop-floor tracking, quality assurance compliance (AISC 303, AWS D1.1, SSPC paint inspection), production scheduling, material procurement, and mobile execution.
            </p>
            <p className="text-sm text-zinc-600 leading-relaxed">
              This Privacy Policy applies to all users of our web dashboard and mobile application across Android (Target SDK 35, Min SDK 26) and iOS platforms. By accessing or using FabSimple, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          {/* Section 2 */}
          <section id="information-collected" className="bg-white rounded-xl border border-zinc-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center gap-3 border-b border-zinc-100 pb-4">
              <div className="w-8 h-8 rounded-md bg-zinc-100 flex items-center justify-center text-zinc-700">
                <ShieldCheck size={18} />
              </div>
              <h2 className="text-xl font-bold text-zinc-900 tracking-tight">2. Information We Collect</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dataCollected.map((item, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-zinc-50 border border-zinc-200/80 space-y-2">
                  <h3 className="text-sm font-bold text-zinc-900">{item.title}</h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 */}
          <section id="device-permissions" className="bg-white rounded-xl border border-zinc-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center gap-3 border-b border-zinc-100 pb-4">
              <div className="w-8 h-8 rounded-md bg-zinc-100 flex items-center justify-center text-zinc-700">
                <Smartphone size={18} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-zinc-900 tracking-tight">3. Device Permissions Disclosures (Android & iOS)</h2>
                <p className="text-xs text-zinc-500 mt-0.5">Necessary permissions for core shop-floor operational features</p>
              </div>
            </div>

            <div className="overflow-x-auto rounded-lg border border-zinc-200">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-zinc-100 border-b border-zinc-200 text-zinc-700 uppercase font-mono tracking-wider">
                    <th className="py-3 px-4 w-48 font-semibold">Permission</th>
                    <th className="py-3 px-4 font-semibold">Operational Purpose in FabSimple</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 bg-white">
                  {permissions.map((p, i) => (
                    <tr key={i} className="hover:bg-zinc-50/80 transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-zinc-900">{p.permission}</td>
                      <td className="py-3.5 px-4 text-zinc-600 leading-relaxed">{p.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4 */}
          <section id="cad-erp-integrations" className="bg-white rounded-xl border border-zinc-200 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-3 border-b border-zinc-100 pb-4">
              <div className="w-8 h-8 rounded-md bg-zinc-100 flex items-center justify-center text-zinc-700">
                <FileText size={18} />
              </div>
              <h2 className="text-xl font-bold text-zinc-900 tracking-tight">
                4. Third-Party CAD & ERP Integration Disclosures (Tekla, SDS2, & Standard Formats)
              </h2>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">
              FabSimple supports import and synchronization with external structural detailing software including Tekla Structures, SDS2, and standard KISS / EJE data formats.
            </p>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Files uploaded from Tekla or SDS2 (such as KISS .kss or CSV exports) are parsed strictly to create material requirements, part marks, assembly lists, and drawing metadata inside your shop&apos;s isolated tenant workspace.
            </p>
            <div className="p-4 rounded-lg bg-zinc-900 text-zinc-100 text-xs leading-relaxed font-mono">
              We do not transfer your CAD/structural drawing files, bill of materials (BOM), or project data to third-party advertisers or unauthorized data brokers. Your structural steel project data remains exclusively owned by your enterprise organization.
            </div>
          </section>

          {/* Section 5 */}
          <section id="data-protection" className="bg-white rounded-xl border border-zinc-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center gap-3 border-b border-zinc-100 pb-4">
              <div className="w-8 h-8 rounded-md bg-zinc-100 flex items-center justify-center text-zinc-700">
                <Lock size={18} />
              </div>
              <h2 className="text-xl font-bold text-zinc-900 tracking-tight">5. Data Protection & Encryption</h2>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-zinc-50 border border-zinc-200/80">
                <CheckCircle2 size={18} className="text-zinc-700 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xs font-bold text-zinc-900 uppercase tracking-wider font-mono">TLS / HTTPS Encryption</h3>
                  <p className="text-xs text-zinc-600 mt-0.5">All network traffic between client applications and backend servers uses HTTPS / TLS 1.3 256-bit encryption.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-zinc-50 border border-zinc-200/80">
                <CheckCircle2 size={18} className="text-zinc-700 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xs font-bold text-zinc-900 uppercase tracking-wider font-mono">Multi-Tenant Row-Level Security</h3>
                  <p className="text-xs text-zinc-600 mt-0.5">Supabase PostgreSQL Row-Level Security (RLS) policies enforce multi-tenant isolation per shop.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-zinc-50 border border-zinc-200/80">
                <CheckCircle2 size={18} className="text-zinc-700 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xs font-bold text-zinc-900 uppercase tracking-wider font-mono">Role-Based Access Control</h3>
                  <p className="text-xs text-zinc-600 mt-0.5">Access to shop data is governed strictly by user role permissions (Owner, PM, Foreman, QC Inspector, Worker).</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="account-deletion" className="bg-white rounded-xl border border-zinc-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center gap-3 border-b border-zinc-100 pb-4">
              <div className="w-8 h-8 rounded-md bg-zinc-100 flex items-center justify-center text-zinc-700">
                <FileText size={18} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-zinc-900 tracking-tight">6. Account & Data Deletion Policy</h2>
                <p className="text-xs text-zinc-500 mt-0.5">Google Play Store User Data Compliance Requirement</p>
              </div>
            </div>

            <p className="text-sm text-zinc-600 leading-relaxed">
              In compliance with Google Play Store User Data policies, FabSimple provides users and shop administrators full control over their account data:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-zinc-50 border border-zinc-200 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-zinc-900 text-white font-mono text-xs flex items-center justify-center font-bold">1</span>
                  <h3 className="text-sm font-bold text-zinc-900">In-App Request</h3>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Open the FabSimple Mobile or Web App, navigate to <span className="font-semibold text-zinc-900">Settings &gt; Profile</span>, and select <span className="font-semibold text-zinc-900">&quot;Request Account Deletion.&quot;</span>
                </p>
              </div>

              <div className="p-4 rounded-lg bg-zinc-50 border border-zinc-200 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-zinc-900 text-white font-mono text-xs flex items-center justify-center font-bold">2</span>
                  <h3 className="text-sm font-bold text-zinc-900">Email Request</h3>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Send an email from your registered user account email to <a href="mailto:fabsimpleus@gmail.com" className="font-semibold text-zinc-900 underline hover:text-zinc-600">fabsimpleus@gmail.com</a> with the subject line <span className="font-semibold text-zinc-900">&quot;Account Deletion Request.&quot;</span>
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-zinc-100 text-xs text-zinc-600 border border-zinc-200">
              Upon request verification, all associated user account credentials, personal metadata, and active session tokens will be permanently deleted within 30 days.
            </div>
          </section>

          {/* Section 7 */}
          <section id="childrens-privacy" className="bg-white rounded-xl border border-zinc-200 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-3 border-b border-zinc-100 pb-4">
              <div className="w-8 h-8 rounded-md bg-zinc-100 flex items-center justify-center text-zinc-700">
                <ShieldCheck size={18} />
              </div>
              <h2 className="text-xl font-bold text-zinc-900 tracking-tight">7. Children&apos;s Privacy</h2>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">
              FabSimple is a commercial enterprise software suite intended exclusively for structural steel fabrication professionals and shop-floor personnel. We do not knowingly collect or solicit personal information from children under the age of 13.
            </p>
          </section>

          {/* Section 8 */}
          <section id="contact-office" className="bg-zinc-900 text-white rounded-xl p-6 sm:p-8 shadow-md space-y-6">
            <div className="border-b border-zinc-800 pb-4">
              <h2 className="text-xl font-bold text-white tracking-tight">8. Contact Privacy Office</h2>
              <p className="text-xs text-zinc-400 mt-1">If you have any questions, concerns, or requests regarding this Privacy Policy or your data, please contact our dedicated security team:</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href="mailto:fabsimpleus@gmail.com"
                className="flex items-center gap-3 p-4 rounded-lg bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors group"
              >
                <div className="w-8 h-8 rounded-md bg-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-white">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider">Email</p>
                  <p className="text-xs font-semibold text-zinc-200 group-hover:text-white truncate">fabsimpleus@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.fabsimpleus.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors group"
              >
                <div className="w-8 h-8 rounded-md bg-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-white">
                  <Globe size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider">Website</p>
                  <p className="text-xs font-semibold text-zinc-200 group-hover:text-white truncate">fabsimpleus.com</p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-4 rounded-lg bg-zinc-950 border border-zinc-800">
                <div className="w-8 h-8 rounded-md bg-zinc-800 flex items-center justify-center text-zinc-300">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider">Address</p>
                  <p className="text-xs font-semibold text-zinc-200 truncate">FabSimple Technologies</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
