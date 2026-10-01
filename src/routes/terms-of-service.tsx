import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowLeft,
  Banknote,
  CheckCircle2,
  ChevronRight,
  Clock,
  CreditCard,
  FileCheck,
  FileText,
  Gavel,
  HelpCircle,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Scale,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Truck,
  UserCheck,
} from "lucide-react";
import { useState } from "react";
import vrlLogo from "@/assets/vrl-logo.png";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service | VRL Cargo Packers & Movers" },
      {
        name: "description",
        content:
          "Official Terms and Conditions for VRL Cargo Packers & Movers. Review our booking policies, pricing estimates, transit insurance, liability, and customer responsibilities across India.",
      },
      { property: "og:title", content: "Terms of Service | VRL Cargo Packers & Movers" },
      {
        property: "og:description",
        content:
          "Official Terms & Conditions governing relocation, transport, and warehousing by VRL Cargo Packers & Movers.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: TermsOfServicePage,
});

const phone = "+919350359213";
const cleanPhone = "919350359213";
const secondaryPhone = "+919350159213";
const officialEmail = "info@vrlcargopackersandmovers.in";

const sections = [
  { id: "acceptance", title: "1. Acceptance & Scope of Service" },
  { id: "pricing-quotes", title: "2. Quotations, Pricing & Survey" },
  { id: "booking-payment", title: "3. Booking, Payment & Advances" },
  { id: "customer-obligations", title: "4. Customer Obligations & Prohibited Goods" },
  { id: "insurance-liability", title: "5. Transit Insurance & Claims" },
  { id: "cancellation-refund", title: "6. Rescheduling & Cancellation Policy" },
  { id: "delivery-force-majeure", title: "7. Delivery Timelines & Force Majeure" },
  { id: "jurisdiction", title: "8. Governing Law & Dispute Resolution" },
  { id: "contact-support", title: "9. Customer Support & Inquiries" },
];

function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState("acceptance");

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-28">
      {/* Top Banner Bar */}
      <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-[11px] sm:text-xs font-bold lg:px-8">
          <p className="flex items-center gap-2 tracking-wide">
            <MapPin size={14} className="fill-white/20 text-white shrink-0" />
            <span>India's Trusted Packers Movers Company • Transparent &amp; Fair Terms</span>
          </p>
          <div className="flex items-center gap-3 sm:gap-6">
            <a
              href={`tel:${phone}`}
              className="flex items-center gap-1.5 hover:text-amber-100 transition-colors"
            >
              <Phone size={13} className="shrink-0" />
              <span>Support: +91 9350359213</span>
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
            <span className="text-orange-600 font-black border-b-2 border-orange-600 pb-1">
              Terms of Service
            </span>
            <Link
              to="/privacy-policy"
              className="hover:text-orange-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact"
              className="hover:text-orange-600 transition-colors"
            >
              Contact
            </Link>
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
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-orange-400 font-semibold">Terms of Service</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-bold text-orange-400 mb-4">
              <Scale size={14} />
              <span>Legal Service Agreement &amp; Policies</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Terms of Service
            </h1>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
              Please review these Terms of Service carefully before booking packing, moving, vehicle
              transport, or warehousing services with <strong>VRL Cargo Packers &amp; Movers</strong>.
              By booking our services or requesting an estimate, you agree to be bound by the terms
              outlined herein.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-orange-400" />
                Effective Date: <strong>September 2026</strong>
              </span>
              <span className="flex items-center gap-1.5">
                <Gavel size={14} className="text-emerald-400" />
                Carriage by Road Act, 2007 Compliant
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-blue-400" />
                Transparent Pricing Guarantee
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
                Booking Inquiries?
              </h3>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                Need clarification on our service agreement or custom commercial terms?
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

            {/* Section 1: Acceptance & Scope */}
            <article
              id="acceptance"
              className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 text-orange-600 mb-3">
                <Truck className="size-6 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  1. Acceptance &amp; Scope of Service
                </h2>
              </div>
              <div className="text-sm leading-relaxed text-slate-600 space-y-3">
                <p>
                  These Terms of Service ("Terms") constitute a legally binding agreement between you ("Customer",
                  "Consignor", or "Client") and <strong>VRL Cargo Packers &amp; Movers</strong> ("Company", "we",
                  "us", or "our"), governing the provision of:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-orange-600 shrink-0" />
                    <span className="text-xs font-bold text-slate-800">Household Packing &amp; Moving</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-orange-600 shrink-0" />
                    <span className="text-xs font-bold text-slate-800">Commercial &amp; Office Relocation</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-orange-600 shrink-0" />
                    <span className="text-xs font-bold text-slate-800">Car Carrier &amp; Bike Transport</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-orange-600 shrink-0" />
                    <span className="text-xs font-bold text-slate-800">Warehousing &amp; Short/Long-Term Storage</span>
                  </div>
                </div>
                <p>
                  By hiring our crews, authorizing consignment loading, signing a Lorry Receipt / Bilty, or
                  submitting an advance payment, you acknowledge that you have read, understood, and agreed to
                  all terms herein.
                </p>
              </div>
            </article>

            {/* Section 2: Quotations, Pricing & Survey */}
            <article
              id="pricing-quotes"
              className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 text-orange-600 mb-3">
                <FileText className="size-6 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  2. Quotations, Pricing &amp; Survey
                </h2>
              </div>
              <div className="text-sm leading-relaxed text-slate-600 space-y-3">
                <p>
                  All initial price estimates provided via phone, WhatsApp, or email are tentative calculations
                  based on customer-provided item inventories. A binding quote is confirmed following physical
                  or video survey:
                </p>
                <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm pl-2">
                  <li>
                    <strong>Inventory Revisions:</strong> If additional goods, boxes, or large furniture items
                    are added on moving day that were not included in the pre-agreed survey list, additional
                    labor and truck volume charges will be added pro-rata.
                  </li>
                  <li>
                    <strong>Accessibility Charges:</strong> Estimates assume standard vehicle parking access
                    within 30 meters of the building entrance, functional service elevators, and unobstructed
                    stairs. Long-carry distances (&gt; 50 meters), rope hoisting of oversized furniture, or
                    walk-ups beyond the 2nd floor without elevator will be billed based on crew effort.
                  </li>
                  <li>
                    <strong>Tolls &amp; State Taxes:</strong> Statutory tolls, green tax, octroi, and interstate
                    border entry permits are itemized transparently in the quotation.
                  </li>
                </ul>
              </div>
            </article>

            {/* Section 3: Booking & Payments */}
            <article
              id="booking-payment"
              className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 text-orange-600 mb-3">
                <CreditCard className="size-6 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  3. Booking, Payment &amp; Advances
                </h2>
              </div>
              <div className="text-sm leading-relaxed text-slate-600 space-y-3">
                <p>To guarantee crew mobilization and reserve vehicle slots, our payment milestones are:</p>
                <div className="space-y-2.5">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="flex size-7 items-center justify-center rounded-full bg-orange-100 text-orange-700 text-xs font-black shrink-0">
                      1
                    </span>
                    <div>
                      <strong className="text-slate-900 text-xs sm:text-sm">Booking Token Advance:</strong>
                      <p className="text-xs text-slate-500 mt-0.5">
                        A nominal booking advance (typically 10% to 20% of total estimated freight) is payable
                        upon booking confirmation to reserve materials and transport slot.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="flex size-7 items-center justify-center rounded-full bg-orange-100 text-orange-700 text-xs font-black shrink-0">
                      2
                    </span>
                    <div>
                      <strong className="text-slate-900 text-xs sm:text-sm">Loading &amp; Dispatch Payment:</strong>
                      <p className="text-xs text-slate-500 mt-0.5">
                        70% to 80% of total freight is payable upon completion of packing and loading at the origin
                        point prior to interstate dispatch.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="flex size-7 items-center justify-center rounded-full bg-orange-100 text-orange-700 text-xs font-black shrink-0">
                      3
                    </span>
                    <div>
                      <strong className="text-slate-900 text-xs sm:text-sm">Balance on Delivery:</strong>
                      <p className="text-xs text-slate-500 mt-0.5">
                        The final remaining balance is due prior to unloading and arrangement at the destination
                        premises. Payments are accepted via verified UPI, Net Banking, or Bank Transfer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Section 4: Customer Obligations & Prohibited Goods */}
            <article
              id="customer-obligations"
              className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 text-orange-600 mb-3">
                <ShieldAlert className="size-6 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  4. Customer Obligations &amp; Prohibited Goods
                </h2>
              </div>
              <div className="text-sm leading-relaxed text-slate-600 space-y-4">
                <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-4">
                  <div className="flex items-start gap-2.5">
                    <AlertTriangle className="size-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-extrabold text-amber-950 text-xs sm:text-sm">
                        Strictly Prohibited &amp; Non-Transportable Items:
                      </h3>
                      <p className="text-xs text-amber-900 mt-1 leading-relaxed">
                        Under Indian commercial carrier regulations, we do NOT transport currency notes,
                        gold, jewelry, precious stones, legal documents / property deeds, firearms / ammunition,
                        firecrackers, pressurized gas cylinders, fuel, flammable chemicals, or illegal narcotics.
                        Customers are strictly advised to transport cash, jewelry, and critical certificates personally.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600">
                  <strong>Customer Responsibilities:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm pl-2">
                  <li>Disconnecting and defrosting refrigerators at least 6 hours prior to packing.</li>
                  <li>Securing society/gated community gate passes or elevator booking permissions.</li>
                  <li>Ensuring a responsible adult family member is present throughout packing &amp; delivery.</li>
                  <li>Checking and verifying the complete inventory list before signing the consignment slip.</li>
                </ul>
              </div>
            </article>

            {/* Section 5: Transit Insurance & Claims */}
            <article
              id="insurance-liability"
              className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 text-orange-600 mb-3">
                <ShieldCheck className="size-6 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  5. Transit Insurance &amp; Damage Claims
                </h2>
              </div>
              <div className="text-sm leading-relaxed text-slate-600 space-y-3">
                <p>
                  While our trained staff uses multi-layer bubble wrap, corner guards, and corrugated boxes,
                  long-distance road transport across Indian highways carries inherent external risks
                  (accidents, natural elements, overturns):
                </p>
                <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-4 space-y-2 text-xs sm:text-sm">
                  <p>
                    <strong>All-Risk Transit Insurance:</strong> We strongly recommend taking optional transit
                    insurance for all intercity moves. Transit insurance is issued through registered general
                    insurance firms based on your declared inventory value. Premium is typically 3% of declared
                    goods value.
                  </p>
                  <p>
                    <strong>Carrier Risk Limitation:</strong> In the absence of third-party transit insurance,
                    the carrier's liability for accidental damage during transit is strictly governed and limited
                    by the provisions of the <em>Carriage by Road Act, 2007</em>.
                  </p>
                  <p>
                    <strong>Claim Procedure:</strong> Any visible damage or shortage must be clearly endorsed on
                    the consignment note / delivery copy at the time of unloading. Written notification with
                    photographic evidence must be submitted within <strong>24 hours of delivery</strong> to{" "}
                    <a href={`mailto:${officialEmail}`} className="text-orange-600 underline font-bold">
                      {officialEmail}
                    </a>
                    . Unendorsed claims made days after departure of the crew cannot be entertained.
                  </p>
                </div>
              </div>
            </article>

            {/* Section 6: Rescheduling & Cancellation */}
            <article
              id="cancellation-refund"
              className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 text-orange-600 mb-3">
                <Clock className="size-6 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  6. Rescheduling &amp; Cancellation Policy
                </h2>
              </div>
              <div className="text-sm leading-relaxed text-slate-600 space-y-3">
                <p>
                  We understand relocation schedules can shift due to rental lease adjustments or unforeseen
                  circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm pl-2">
                  <li>
                    <strong>Rescheduling Notice:</strong> Customers can reschedule their moving date without penalty
                    by notifying us at least <strong>48 hours</strong> in advance, subject to slot and vehicle
                    availability.
                  </li>
                  <li>
                    <strong>Cancellation 48+ Hours Ahead:</strong> Advance token is refundable less a 10%
                    processing/handling deduction.
                  </li>
                  <li>
                    <strong>Same-Day or Late Cancellation (&lt; 24 Hours):</strong> If cancellation occurs after
                    truck and packing labor have already been mobilized or arrived at your residence, the token
                    advance is forfeited to compensate the labor crew for day mobilization wages.
                  </li>
                </ul>
              </div>
            </article>

            {/* Section 7: Delivery Timelines & Force Majeure */}
            <article
              id="delivery-force-majeure"
              className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 text-orange-600 mb-3">
                <Truck className="size-6 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  7. Delivery Timelines &amp; Force Majeure
                </h2>
              </div>
              <div className="text-sm leading-relaxed text-slate-600 space-y-3">
                <p>
                  Delivery timelines provided in quotations are estimated in good faith based on average national
                  highway transit speeds and typical interstate border clearances:
                </p>
                <p className="text-xs sm:text-sm">
                  <strong>Force Majeure Exemptions:</strong> The Company shall not be held liable for transit delays
                  or failures resulting from acts of God (floods, heavy monsoon landslides, earthquakes), regional
                  curfews, civil unrest, national highway closures, unexpected vehicle mechanical breakdown,
                  statutory RTO/commercial tax border checks, or national emergencies beyond reasonable control.
                </p>
              </div>
            </article>

            {/* Section 8: Governing Law & Jurisdiction */}
            <article
              id="jurisdiction"
              className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 text-orange-600 mb-3">
                <Gavel className="size-6 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  8. Governing Law &amp; Dispute Resolution
                </h2>
              </div>
              <div className="text-sm leading-relaxed text-slate-600 space-y-3">
                <p>
                  These Terms shall be interpreted and governed in accordance with the substantive laws of the
                  Republic of India.
                </p>
                <p className="text-xs sm:text-sm">
                  Any dispute, controversy, or claim arising out of or relating to this agreement shall first be
                  amicably resolved through mutual good-faith discussion between our management and the customer. If
                  unresolved, disputes shall be subject to the exclusive jurisdiction of the competent courts in{" "}
                  <strong>Gautam Buddha Nagar (Greater Noida) / New Delhi NCR, India</strong>.
                </p>
              </div>
            </article>

            {/* Section 9: Customer Support */}
            <article
              id="contact-support"
              className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 text-orange-600 mb-3">
                <HelpCircle className="size-6 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  9. Customer Support &amp; Official Inquiries
                </h2>
              </div>
              <div className="text-sm leading-relaxed text-slate-600 space-y-4">
                <p>
                  If you have questions regarding these Terms of Service or need customized corporate relocation
                  agreements, please reach out directly:
                </p>

                <div className="rounded-xl border border-orange-200 bg-orange-50/50 p-5">
                  <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                    <div>
                      <p className="font-bold text-slate-900">VRL Cargo Packers &amp; Movers</p>
                      <p className="text-slate-600 mt-1">Customer Support &amp; Relocation Desk</p>
                      <p className="mt-2">
                        <strong>Primary Hotline:</strong>{" "}
                        <a href={`tel:${phone}`} className="text-orange-600 underline font-semibold">
                          {phone}
                        </a>
                      </p>
                      <p className="mt-1">
                        <strong>Alternate Support:</strong>{" "}
                        <a href={`tel:${secondaryPhone}`} className="text-orange-600 underline font-semibold">
                          {secondaryPhone}
                        </a>
                      </p>
                      <p className="mt-1">
                        <strong>Official Email:</strong>{" "}
                        <a href={`mailto:${officialEmail}`} className="text-orange-600 underline font-semibold break-all">
                          {officialEmail}
                        </a>
                      </p>
                    </div>

                    <div className="text-xs leading-relaxed text-slate-600">
                      <p className="font-bold text-slate-900 mb-1">Head Office Address:</p>
                      <address className="not-italic">
                        Shop 08, Village Tishiyana, Main Road,<br />
                        Near Devi Mandir, Near Hanuman Mandir,<br />
                        Tusiana Village, Knowledge Park V,<br />
                        Greater Noida, Tusyana, Uttar Pradesh – 201306
                      </address>
                      <p className="mt-2 text-slate-500">
                        Operational Hours: 24 Hours × 7 Days
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
                <Link to="/terms-of-service" className="text-orange-400 font-bold">
                  Terms of Service
                </Link>
                <Link to="/privacy-policy" className="hover:text-orange-400 transition-colors">
                  Privacy Policy
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
