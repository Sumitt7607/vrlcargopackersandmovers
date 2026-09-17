import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Clock,
  Cookie,
  Database,
  Eye,
  FileCheck,
  FileText,
  HelpCircle,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Scale,
  Server,
  Share2,
  Shield,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { useState } from "react";
import vrlLogo from "@/assets/vrl-logo.png";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | VRL Cargo Packers & Movers" },
      {
        name: "description",
        content:
          "Read the official Privacy Policy of VRL Cargo Packers & Movers. Learn how we collect, protect, and handle your relocation and personal data under Indian IT regulations.",
      },
      { property: "og:title", content: "Privacy Policy | VRL Cargo Packers & Movers" },
      {
        property: "og:description",
        content:
          "Official privacy guidelines and data protection practices of VRL Cargo Packers & Movers.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PrivacyPolicyPage,
});

const phone = "+919350359213";
const cleanPhone = "919350359213";
const secondaryPhone = "+919350159213";
const officialEmail = "info@vrlcargopackersandmovers.in";

const sections = [
  { id: "overview", title: "1. Overview & Commitment" },
  { id: "information-collected", title: "2. Information We Collect" },
  { id: "how-we-use", title: "3. How We Use Your Data" },
  { id: "data-sharing", title: "4. Information Sharing & Disclosure" },
  { id: "security", title: "5. Data Security & Storage" },
  { id: "cookies-ads", title: "6. Cookies & Advertising (Google Ads)" },
  { id: "your-rights", title: "7. Your Rights & Retention" },
  { id: "grievance-contact", title: "8. Grievance Officer & Contact" },
];

function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-28">
      {/* Top Banner Bar */}
      <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-[11px] sm:text-xs font-bold lg:px-8">
          <p className="flex items-center gap-2 tracking-wide">
            <MapPin size={14} className="fill-white/20 text-white shrink-0" />
            <span>India's Trusted Packers Movers Company • ISO 9001:2015 Certified Standards</span>
          </p>
          <div className="flex items-center gap-3 sm:gap-6">
            <a
              href={`tel:${phone}`}
              className="flex items-center gap-1.5 hover:text-amber-100 transition-colors"
            >
              <Phone size={13} className="shrink-0" />
              <span>24×7 Support: +91 9350359213</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">
          <Link to="/" className="flex items-center gap-3 group" aria-label="Go to Home">
            <img
              src={vrlLogo}
              alt="VRL Cargo Packers & Movers Logo"
              className="h-14 sm:h-16 w-auto object-contain max-w-[240px] sm:max-w-[300px]"
            />
          </Link>

          <nav
            className="hidden items-center gap-6 text-[0.84rem] font-extrabold uppercase tracking-wider text-slate-800 lg:flex"
            aria-label="Main navigation"
          >
            <Link to="/" className="hover:text-orange-600 transition-colors">
              Home
            </Link>
            <a href="/#services" className="hover:text-orange-600 transition-colors">
              Services
            </a>
            <a href="/#about" className="hover:text-orange-600 transition-colors">
              About Us
            </a>
            <Link
              to="/terms-of-service"
              className="hover:text-orange-600 transition-colors"
            >
              Terms of Service
            </Link>
            <span className="text-orange-600 font-black border-b-2 border-orange-600 pb-1">
              Privacy Policy
            </span>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-slate-300 px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <ArrowLeft size={14} /> Back to Home
            </Link>
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#b91c1c] px-4 py-2 text-xs font-extrabold text-white shadow-sm hover:bg-[#991b1b] transition-all"
            >
              <Phone size={14} />
              <span>+91 9350359213</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-14 sm:py-18">
        <div className="absolute inset-0 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:20px_20px] opacity-15" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-orange-400 font-semibold">Privacy Policy</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-bold text-orange-400 mb-4">
              <ShieldCheck size={14} />
              <span>Official Privacy Policy &amp; Data Protection</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
              At <strong>VRL Cargo Packers &amp; Movers</strong>, we value the trust you place in us when
              sharing your relocation requirements and personal details. This Privacy Policy details
              how we collect, use, protect, and process your data in compliance with Indian Information
              Technology laws.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-orange-400" />
                Last Updated: <strong>September 2026</strong>
              </span>
              <span className="flex items-center gap-1.5">
                <FileCheck size={14} className="text-emerald-400" />
                Compliance: <strong>IT Act 2000 &amp; SPDI Rules</strong>
              </span>
              <span className="flex items-center gap-1.5">
                <UserCheck size={14} className="text-blue-400" />
                Zero Spam Guarantee
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sticky Table of Contents (Desktop) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-3">
              Table of Contents
            </h2>
            <nav className="flex flex-col gap-1.5 text-sm">
              {sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={() => setActiveSection(sec.id)}
                  className={`px-3 py-2 rounded-xl font-medium transition-all text-left flex items-center justify-between ${
                    activeSection === sec.id
                      ? "bg-orange-50 text-orange-700 font-bold border border-orange-200"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span>{sec.title}</span>
                  <ChevronRight size={14} className="opacity-60" />
                </a>
              ))}
            </nav>

            <hr className="my-5 border-slate-100" />

            {/* Quick Contact Widget */}
            <div className="rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 p-4 border border-orange-200/70">
              <h3 className="text-xs font-black text-orange-950 uppercase tracking-wide">
                Need Privacy Assistance?
              </h3>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                Contact our designated Grievance &amp; Data Protection Officer anytime.
              </p>
              <div className="mt-3 flex flex-col gap-2 text-xs font-bold text-slate-800">
                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-2 hover:text-orange-600 transition-colors"
                >
                  <Phone size={13} className="text-orange-600" />
                  +91 9350359213
                </a>
                <a
                  href={`mailto:${officialEmail}`}
                  className="flex items-center gap-2 hover:text-orange-600 transition-colors break-all"
                >
                  <Mail size={13} className="text-orange-600 shrink-0" />
                  {officialEmail}
                </a>
              </div>
            </div>
          </aside>

          {/* Main Legal Content */}
          <div className="lg:col-span-8 flex flex-col gap-6">

            {/* Section 1: Overview */}
            <article
              id="overview"
              className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 text-orange-600 mb-3">
                <Shield className="size-6 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  1. Overview &amp; Commitment to Privacy
                </h2>
              </div>
              <div className="prose prose-slate max-w-none text-sm leading-relaxed text-slate-600 space-y-3">
                <p>
                  This Privacy Policy applies to the official website (
                  <strong>vrlcargomoverspackers.in</strong>) and operations of{" "}
                  <strong>VRL Cargo Packers &amp; Movers</strong> ("we", "us", or "our"), headquartered
                  at Greater Noida, Uttar Pradesh, with operations spanning Delhi NCR and across India.
                </p>
                <p>
                  We are committed to safeguarding the personal privacy of our customers, website visitors,
                  and individuals who request relocation estimates. This document governs how we collect,
                  handle, safeguard, and use your personal information in accordance with the{" "}
                  <strong>
                    Information Technology Act, 2000 and the Information Technology (Reasonable Security
                    Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011
                    (SPDI Rules)
                  </strong>
                  .
                </p>
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 text-emerald-950 font-medium flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Our Core Promise:</strong> We never sell, lease, or rent your personal contact
                    or relocation information to third-party marketing companies, brokers, or data
                    aggregators. Your data is strictly used for fulfilling your packing and moving service.
                  </span>
                </div>
              </div>
            </article>

            {/* Section 2: Information We Collect */}
            <article
              id="information-collected"
              className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 text-orange-600 mb-3">
                <Database className="size-6 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  2. Information We Collect
                </h2>
              </div>
              <div className="text-sm leading-relaxed text-slate-600 space-y-4">
                <p>
                  To provide accurate price quotations, schedule inspections, and coordinate logistics, we
                  may collect the following categories of information:
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mt-2">
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2 mb-2">
                      <span className="size-2 rounded-full bg-orange-600" />
                      Contact &amp; Personal Details
                    </h3>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                      <li>Full Name of the customer/consignor</li>
                      <li>Active Contact Number (Mobile / WhatsApp)</li>
                      <li>Email Address for quotes &amp; invoice dispatch</li>
                      <li>Government ID (for interstate transit / e-Way bill only)</li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2 mb-2">
                      <span className="size-2 rounded-full bg-orange-600" />
                      Relocation Logistics Data
                    </h3>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                      <li>Pickup Address &amp; Delivery Destination Address</li>
                      <li>Moving Date, Floor Number, Lift availability</li>
                      <li>Inventory details &amp; high-value/fragile declarations</li>
                      <li>Vehicle make/model &amp; registration (for vehicle shifting)</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2 mb-2">
                    <Eye className="size-4 text-orange-600" />
                    Automatically Collected Technical Data
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When you browse our website, our web servers and analytics tools automatically record
                    technical data including IP address, browser type, device operating system, referring
                    URLs, and timestamps. This technical information is anonymized and used exclusively to
                    optimize website speed, prevent malicious bot activities, and enhance user experience.
                  </p>
                </div>
              </div>
            </article>

            {/* Section 3: How We Use Your Data */}
            <article
              id="how-we-use"
              className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 text-orange-600 mb-3">
                <FileText className="size-6 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  3. How We Use Your Information
                </h2>
              </div>
              <div className="text-sm leading-relaxed text-slate-600 space-y-3">
                <p>We process your data strictly for legitimate business and operational purposes:</p>
                <div className="space-y-2.5">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="size-4 text-orange-600 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-slate-900 text-xs sm:text-sm">Calculating Quotations &amp; Survey Scheduling:</strong>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Evaluating volume, packing material requirements, truck capacity, and distance to
                        provide transparent pricing without hidden charges.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="size-4 text-orange-600 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-slate-900 text-xs sm:text-sm">Operational Execution &amp; Dispatch:</strong>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Assigning packing crews, drivers, and supervisors to your pickup address and ensuring
                        accurate delivery to your new home or office.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="size-4 text-orange-600 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-slate-900 text-xs sm:text-sm">Live Transit Updates &amp; Notifications:</strong>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Sending booking confirmations, driver contact numbers, GPS vehicle tracking
                        checkpoints, and delivery notices via WhatsApp, SMS, or phone calls.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="size-4 text-orange-600 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-slate-900 text-xs sm:text-sm">Transit Insurance &amp; Statutory Compliance:</strong>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Issuing transit insurance policies upon request, generating GST-compliant consignment
                        notes (Bilty / Lorry Receipt), and adhering to Indian interstate toll &amp; tax rules.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Section 4: Information Sharing */}
            <article
              id="data-sharing"
              className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 text-orange-600 mb-3">
                <Share2 className="size-6 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  4. Information Sharing &amp; Disclosure
                </h2>
              </div>
              <div className="text-sm leading-relaxed text-slate-600 space-y-3">
                <p>
                  <strong>We do not sell, trade, or transfer your personal data.</strong> Your information
                  is only disclosed under strict conditions:
                </p>
                <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm pl-2">
                  <li>
                    <strong>Operational Staff &amp; Drivers:</strong> Our verified drivers and moving
                    crews receive only the necessary contact name, phone, and pickup/drop address needed to
                    execute the move safely.
                  </li>
                  <li>
                    <strong>Transit Insurance Underwriters:</strong> If you opt for transit insurance,
                    declared item value and policyholder name are shared with licensed insurance partners
                    solely to issue your insurance certificate.
                  </li>
                  <li>
                    <strong>Legal &amp; Regulatory Authorities:</strong> If required by Indian law, court
                    orders, taxation audits, or law enforcement investigations, we may disclose records
                    mandated by law.
                  </li>
                </ul>
              </div>
            </article>

            {/* Section 5: Data Security */}
            <article
              id="security"
              className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 text-orange-600 mb-3">
                <Lock className="size-6 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  5. Data Security &amp; Storage
                </h2>
              </div>
              <div className="text-sm leading-relaxed text-slate-600 space-y-3">
                <p>
                  We implement comprehensive administrative, physical, and technical safeguards to prevent
                  unauthorized access, disclosure, alteration, or destruction of your personal data:
                </p>
                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="rounded-xl bg-slate-50 border border-slate-200/70 p-3.5 text-center">
                    <Server className="size-6 text-orange-600 mx-auto mb-2" />
                    <h4 className="text-xs font-bold text-slate-900">256-Bit SSL Encryption</h4>
                    <p className="text-[11px] text-slate-500 mt-1">
                      All form submissions and data in transit are protected via HTTPS encryption.
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-50 border border-slate-200/70 p-3.5 text-center">
                    <ShieldCheck className="size-6 text-emerald-600 mx-auto mb-2" />
                    <h4 className="text-xs font-bold text-slate-900">Restricted Access</h4>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Access is limited exclusively to authorized coordinators and logistics supervisors.
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-50 border border-slate-200/70 p-3.5 text-center">
                    <Scale className="size-6 text-blue-600 mx-auto mb-2" />
                    <h4 className="text-xs font-bold text-slate-900">Regular Security Audits</h4>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Internal processes are reviewed regularly to guarantee zero unauthorized leaks.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Section 6: Cookies & Google Ads */}
            <article
              id="cookies-ads"
              className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 text-orange-600 mb-3">
                <Cookie className="size-6 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  6. Cookies &amp; Advertising Technologies (Google Ads)
                </h2>
              </div>
              <div className="text-sm leading-relaxed text-slate-600 space-y-3">
                <p>
                  Our website uses standard cookies (small text files stored in your browser) to ensure our
                  website functions properly, remember user preferences, and measure marketing campaigns.
                </p>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
                  <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">
                    Google Ads &amp; Google Analytics Compliance:
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We may utilize Google Ads conversion tracking and Google Analytics to understand how
                    users reach our website. These tools use cookies to report non-personally identifiable
                    metrics such as ad clicks and page visits. We strictly adhere to Google's Advertising
                    Policies, ensuring no sensitive personal information is transmitted to advertising
                    networks.
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    You can manage or disable cookies at any time through your browser settings or opt out
                    of Google's personalized advertising by visiting the{" "}
                    <a
                      href="https://adssettings.google.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-orange-600 font-bold underline"
                    >
                      Google Ads Settings
                    </a>
                    .
                  </p>
                </div>
              </div>
            </article>

            {/* Section 7: User Rights */}
            <article
              id="your-rights"
              className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 text-orange-600 mb-3">
                <UserCheck className="size-6 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  7. Your Privacy Rights &amp; Data Retention
                </h2>
              </div>
              <div className="text-sm leading-relaxed text-slate-600 space-y-3">
                <p>
                  Under Indian data protection norms, you have full control over your personal data:
                </p>
                <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm pl-2">
                  <li>
                    <strong>Right to Access &amp; Rectification:</strong> You can request a summary of the
                    data we hold about your booking or request corrections to your contact info.
                  </li>
                  <li>
                    <strong>Right to Erasure / Deletion:</strong> After your move is completed and all
                    invoicing/statutory transit records have cleared, you may request the deletion of your
                    phone number and address from our active records.
                  </li>
                  <li>
                    <strong>Data Retention Duration:</strong> Consignment notes, invoices, and transit records
                    are retained for the duration mandated by Indian GST and commercial transport laws (typically
                    up to 7 years), after which they are securely expunged.
                  </li>
                </ul>
              </div>
            </article>

            {/* Section 8: Grievance Officer & Contact */}
            <article
              id="grievance-contact"
              className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 text-orange-600 mb-3">
                <HelpCircle className="size-6 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  8. Grievance Redressal &amp; Contact Details
                </h2>
              </div>
              <div className="text-sm leading-relaxed text-slate-600 space-y-4">
                <p>
                  In accordance with Rule 5(9) of the Information Technology (Reasonable Security Practices
                  and Procedures and Sensitive Personal Data or Information) Rules, 2011, the details of our
                  Grievance Officer are provided below:
                </p>

                <div className="rounded-xl border border-orange-200 bg-orange-50/50 p-5">
                  <h3 className="font-extrabold text-slate-900 text-sm mb-3">
                    Designated Grievance &amp; Compliance Officer
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                    <div>
                      <p className="font-bold text-slate-900">VRL Cargo Packers &amp; Movers</p>
                      <p className="text-slate-600 mt-1">Customer Grievance Cell</p>
                      <p className="mt-2">
                        <strong>Official Email:</strong>{" "}
                        <a
                          href={`mailto:${officialEmail}`}
                          className="text-orange-600 underline font-semibold"
                        >
                          {officialEmail}
                        </a>
                      </p>
                      <p className="mt-1">
                        <strong>Primary Hotline:</strong>{" "}
                        <a
                          href={`tel:${phone}`}
                          className="text-orange-600 underline font-semibold"
                        >
                          {phone}
                        </a>
                      </p>
                      <p className="mt-1">
                        <strong>Secondary Line:</strong>{" "}
                        <a
                          href={`tel:${secondaryPhone}`}
                          className="text-orange-600 underline font-semibold"
                        >
                          {secondaryPhone}
                        </a>
                      </p>
                    </div>

                    <div className="text-xs leading-relaxed text-slate-600">
                      <p className="font-bold text-slate-900 mb-1">Registered Head Office:</p>
                      <address className="not-italic">
                        Shop 08, Village Tishiyana, Main Road,<br />
                        Near Devi Mandir, Near Hanuman Mandir,<br />
                        Tusiana Village, Knowledge Park V,<br />
                        Greater Noida, Tusyana, Uttar Pradesh – 201306
                      </address>
                      <p className="mt-2 text-slate-500">
                        Response time: Within 48 business hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 pb-28 pt-14 text-white md:pb-12 mt-16 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 border-b border-white/10 pb-10">
            {/* Col 1 */}
            <div>
              <Link to="/" className="flex items-center gap-3">
                <img
                  src={vrlLogo}
                  alt="VRL Cargo Packers & Movers Logo"
                  className="h-14 sm:h-16 w-auto object-contain drop-shadow-md"
                />
              </Link>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-400">
                Safe packing, secure transport and reliable relocation for homes, offices, cars and bikes
                across India.
              </p>
              <a
                href={`mailto:${officialEmail}`}
                className="mt-4 flex items-center gap-2 text-xs sm:text-sm text-slate-300 hover:text-orange-400 transition-colors"
              >
                <Mail size={14} className="text-orange-500" />
                {officialEmail}
              </a>
            </div>

            {/* Col 2 */}
            <div>
              <h3 className="text-sm font-extrabold text-white mb-3 uppercase tracking-wide">
                Greater Noida Office
              </h3>
              <address className="not-italic text-xs leading-relaxed text-slate-400">
                Shop 08, Village Tishiyana, Main Road,<br />
                Near Devi Mandir, Near Hanuman Mandir,<br />
                Tusiana Village, Knowledge Park V,<br />
                Greater Noida, UP – 201306
              </address>
            </div>

            {/* Col 3 */}
            <div>
              <h3 className="text-sm font-extrabold text-white mb-3 uppercase tracking-wide">
                Delhi &amp; Gurgaon Branches
              </h3>
              <address className="not-italic text-xs leading-relaxed text-slate-400">
                <strong>Delhi:</strong> Shop No.35, Near Camunity Center, Bharthal Village, Delhi – 110077
                <br />
                <br />
                <strong>Gurgaon:</strong> Shop No. 05, Near Bajal Service Center, Ashok Vihar Phase 3,
                Sector 5, Gurgaon – 122001
              </address>
            </div>

            {/* Col 4 */}
            <div>
              <h3 className="text-sm font-extrabold text-white mb-3 uppercase tracking-wide">
                Quick Legal Links
              </h3>
              <div className="flex flex-col gap-2 text-xs text-slate-300">
                <Link to="/" className="hover:text-orange-400 transition-colors">
                  Home
                </Link>
                <a href="/#services" className="hover:text-orange-400 transition-colors">
                  Relocation Services
                </a>
                <Link to="/privacy-policy" className="text-orange-400 font-bold">
                  Privacy Policy
                </Link>
                <Link to="/terms-of-service" className="hover:text-orange-400 transition-colors">
                  Terms of Service
                </Link>
                <a
                  href={`tel:${phone}`}
                  className="mt-2 inline-flex items-center gap-1.5 font-bold text-white hover:text-orange-400"
                >
                  <Phone size={13} className="text-orange-500" /> {phone}
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <p>© 2026 VRL Cargo Packers &amp; Movers. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link to="/terms-of-service" className="hover:text-slate-300 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Pill */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/95 px-4 py-2 shadow-2xl backdrop-blur-md">
        <a
          href={`https://wa.me/${cleanPhone}?text=Hello%20VRL%20Cargo,%20I%20need%20a%20moving%20quote`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-2 text-xs font-black text-white shadow-md hover:bg-emerald-700 transition-all active:scale-95"
        >
          <MessageCircle size={15} />
          <span>WhatsApp</span>
        </a>

        <a
          href={`tel:${phone}`}
          className="inline-flex items-center gap-1.5 rounded-full bg-[#b91c1c] px-4 py-2 text-xs font-black text-white shadow-md hover:bg-[#991b1b] transition-all active:scale-95"
        >
          <Phone size={15} />
          <span>Call Now</span>
        </a>

        <Link
          to="/"
          className="hidden sm:inline-flex items-center gap-1 rounded-full border border-slate-300 bg-slate-100 px-3.5 py-2 text-xs font-extrabold text-slate-800 hover:bg-slate-200 transition-colors"
        >
          <span>Get Quote</span>
        </Link>
      </div>
    </main>
  );
}
