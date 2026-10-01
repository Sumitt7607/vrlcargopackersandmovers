import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Building2,
  Check,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import vrlLogo from "@/assets/vrl-logo.png";
import { trackContactConversion } from "@/lib/gtag";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | VRL Cargo Packers & Movers | 24x7 Helpline & Free Quote" },
      {
        name: "description",
        content:
          "Get in touch with VRL Cargo Packers & Movers. Call +91 93503 59213 or chat on WhatsApp for fast moving quotes, 24x7 customer support, and branch locations across India.",
      },
      { property: "og:title", content: "Contact VRL Cargo Packers & Movers | Safe Relocation Across India" },
      {
        property: "og:description",
        content: "Call +91 93503 59213 or get an instant quote on WhatsApp for household, car, bike & corporate moves.",
      },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      {
        children: `gtag('event', 'conversion', {
  'send_to': 'AW-18457915255/vp9yCPKb3IwdEPfeteFE',
  'value': 1.0,
  'currency': 'INR'
});`,
      },
    ],
  }),
  component: ContactPage,
});

const phone = "+919350359213";
const cleanPhone = "919350359213";
const secondaryPhone = "+919350159213";
const officialEmail = "info@vrlcargopackersandmovers.in";

const branches = [
  {
    city: "Delhi NCR / Gurugram (Corporate HQ)",
    address: "Plot 42, Sector 18, Udyog Vihar, Gurugram, Haryana - 122015",
    phone: "+91 93503 59213",
  },
  {
    city: "Mumbai & Navi Mumbai",
    address: "Warehouse Complex, Sector 19C, Vashi, Navi Mumbai, Maharashtra - 400705",
    phone: "+91 93501 59213",
  },
  {
    city: "Bengaluru",
    address: "Outer Ring Road, Marathahalli, Bengaluru, Karnataka - 560037",
    phone: "+91 93503 59213",
  },
  {
    city: "Pune",
    address: "Survey No. 45, Hinjewadi Phase 1, Pune, Maharashtra - 411057",
    phone: "+91 93501 59213",
  },
  {
    city: "Hyderabad",
    address: "Kukatpally Industrial Area, Hyderabad, Telangana - 500072",
    phone: "+91 93503 59213",
  },
  {
    city: "Kolkata",
    address: "New Town Action Area II, Kolkata, West Bengal - 700156",
    phone: "+91 93503 59213",
  },
];

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    movingFrom: "",
    movingTo: "",
    service: "Household Shifting",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [waLink, setWaLink] = useState("");

  useEffect(() => {
    // Run conversion event on contact page load as per Google Ads Contact conversion tag
    trackContactConversion();
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Trigger Google Ads Contact Conversion on submission
    trackContactConversion();

    const message = `🚚 *VRL Cargo Packers & Movers - Contact / Quote Request*
------------------------------------------
👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
📍 *Moving From:* ${formData.movingFrom || "Not specified"}
🏁 *Moving To:* ${formData.movingTo || "Not specified"}
📦 *Service:* ${formData.service}
📝 *Notes:* ${formData.notes || "Standard move"}
------------------------------------------
Please share a price estimate and available schedule.`;

    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    setWaLink(url);
    setSubmitted(true);

    if (typeof window !== "undefined") {
      window.open(url, "_blank");
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-28">
      {/* Top Banner Bar */}
      <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-[11px] sm:text-xs font-bold lg:px-8">
          <p className="flex items-center gap-2 tracking-wide">
            <MapPin size={14} className="fill-white/20 text-white shrink-0" />
            <span>India's Trusted Packers Movers Company • 24x7 Customer Support</span>
          </p>
          <div className="flex items-center gap-3 sm:gap-6">
            <a
              href={`tel:${phone}`}
              onClick={() => trackContactConversion()}
              className="flex items-center gap-1.5 hover:text-amber-100 transition-colors"
            >
              <Phone size={13} className="shrink-0" />
              <span>Call: +91 9350359213</span>
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
              Contact
            </span>
            <Link to="/terms-of-service" className="hover:text-orange-600 transition-colors">
              Terms
            </Link>
            <Link to="/privacy-policy" className="hover:text-orange-600 transition-colors">
              Privacy
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
              onClick={() => trackContactConversion()}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#b91c1c] px-4 py-2 text-xs font-extrabold text-white shadow-sm hover:bg-[#991b1b] transition-all"
            >
              <Phone size={14} />
              <span>+91 9350359213</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-12 sm:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:20px_20px] opacity-15" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/15 border border-orange-400/30 px-3.5 py-1 text-xs font-bold text-orange-300 mb-4">
            <Sparkles size={14} /> 24×7 Relocation Support & Booking
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto">
            Contact VRL Cargo Packers & Movers
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed">
            Need an instant moving quote, booking confirmation, or tracking update? Reach our moving specialists directly via phone, WhatsApp, or through the contact form below.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${cleanPhone}?text=Hello%20VRL%20Cargo,%20I%20need%20a%20moving%20quote`}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackContactConversion()}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-xs sm:text-sm font-extrabold text-white shadow-lg hover:bg-emerald-700 transition-all hover:scale-[1.02] active:scale-95"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
            <a
              href={`tel:${phone}`}
              onClick={() => trackContactConversion()}
              className="inline-flex items-center gap-2 rounded-xl bg-[#b91c1c] px-6 py-3.5 text-xs sm:text-sm font-extrabold text-white shadow-lg hover:bg-[#991b1b] transition-all hover:scale-[1.02] active:scale-95"
            >
              <Phone size={18} /> Call +91 93503 59213
            </a>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Quick Contact Cards */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Form Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-orange-600 block mb-2">
                Fast Response Guaranteed
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-slate-900">
                Request a Free Relocation Estimate
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 mb-6">
                Fill out the form below. Our booking team will send you an itemized quote with packing options, transit schedules, and competitive pricing.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <span className="flex size-14 mx-auto items-center justify-center rounded-full bg-emerald-600 text-white">
                    <Check size={28} />
                  </span>
                  <h3 className="font-display text-2xl font-black text-slate-900">
                    Quote Request Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Your details have been prepared for WhatsApp chat with our relocation team at{" "}
                    <strong>+91 93503 59213</strong>.
                  </p>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-xs sm:text-sm font-black text-white shadow hover:bg-emerald-700"
                  >
                    <PackageCheck size={18} /> Open WhatsApp Chat Now
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        movingFrom: "",
                        movingTo: "",
                        service: "Household Shifting",
                        notes: "",
                      });
                    }}
                    className="block text-xs font-bold text-orange-600 hover:underline mx-auto pt-2"
                  >
                    Submit another quote request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="c-name">
                        Your Full Name *
                      </label>
                      <input
                        id="c-name"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-field rounded-xl w-full text-xs sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="c-phone">
                        Phone Number *
                      </label>
                      <input
                        id="c-phone"
                        required
                        type="tel"
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="form-field rounded-xl w-full text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="c-from">
                        Moving From (Origin City) *
                      </label>
                      <input
                        id="c-from"
                        required
                        placeholder="e.g. Delhi NCR, Bangalore, Pune"
                        value={formData.movingFrom}
                        onChange={(e) => setFormData({ ...formData, movingFrom: e.target.value })}
                        className="form-field rounded-xl w-full text-xs sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="c-to">
                        Moving To (Destination City) *
                      </label>
                      <input
                        id="c-to"
                        required
                        placeholder="e.g. Mumbai, Hyderabad, Kolkata"
                        value={formData.movingTo}
                        onChange={(e) => setFormData({ ...formData, movingTo: e.target.value })}
                        className="form-field rounded-xl w-full text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="c-service">
                      Type of Relocation Service
                    </label>
                    <select
                      id="c-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="form-field rounded-xl w-full text-xs sm:text-sm"
                    >
                      <option value="Household Shifting">Household Shifting (1BHK, 2BHK, 3BHK+)</option>
                      <option value="Car & Vehicle Transportation">Car & Bike Carrier Transportation</option>
                      <option value="Corporate & Office Shifting">Corporate & Office Relocation</option>
                      <option value="Warehousing & Storage">Secure Warehousing & Household Storage</option>
                      <option value="Pet Relocation">Pet Relocation & Safe Animal Moving</option>
                      <option value="Transit Insurance & Packing">Transit Insurance & Multi-Layer Packing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="c-notes">
                      Additional Requirements / Tentative Date
                    </label>
                    <textarea
                      id="c-notes"
                      rows={3}
                      placeholder="Mention preferred moving date, floor details, or fragile items..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="form-field rounded-xl w-full text-xs sm:text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-black py-3.5 text-xs sm:text-sm shadow-lg transition-all hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2"
                  >
                    <span>Get Instant Quote & Send to WhatsApp</span>
                    <PackageCheck size={18} />
                  </button>
                  <p className="text-[11px] text-slate-500 text-center">
                    🔒 We respect your privacy. No spam. Instant direct assistance.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Contact Details & Helplines Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="rounded-3xl border-2 border-orange-500/30 bg-white p-6 sm:p-8 shadow-xl space-y-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-orange-700">
                <Clock3 size={13} /> 24 Hours / 7 Days Available
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-black text-slate-900">
                Instant Helpline & WhatsApp
              </h3>

              <div className="space-y-3">
                <a
                  href={`tel:${phone}`}
                  onClick={() => trackContactConversion()}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-red-50 border border-red-200 hover:bg-red-100 transition-colors group"
                >
                  <div className="size-11 rounded-xl bg-[#b91c1c] text-white flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Primary Helpline (24×7)
                    </div>
                    <div className="text-base font-black text-red-700 group-hover:underline">
                      +91 93503 59213
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${secondaryPhone}`}
                  onClick={() => trackContactConversion()}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors group"
                >
                  <div className="size-11 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Alternate Helpline
                    </div>
                    <div className="text-base font-black text-slate-900 group-hover:underline">
                      +91 93501 59213
                    </div>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${cleanPhone}?text=Hello%20VRL%20Cargo,%20I%20need%20moving%20assistance`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackContactConversion()}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors group"
                >
                  <div className="size-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      WhatsApp Quick Chat
                    </div>
                    <div className="text-base font-black text-emerald-700 group-hover:underline">
                      +91 93503 59213
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${officialEmail}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-amber-50 border border-amber-200 hover:bg-amber-100 transition-colors group"
                >
                  <div className="size-11 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Official Inquiries & Support
                    </div>
                    <div className="text-xs sm:text-sm font-black text-amber-900 group-hover:underline break-all">
                      {officialEmail}
                    </div>
                  </div>
                </a>
              </div>

              <div className="pt-2 border-t border-slate-200 flex items-center gap-2 text-xs text-slate-600">
                <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
                <span>Verified Google Ads & ISO Certified Relocation Service</span>
              </div>
            </div>

            {/* Quick Assurance Badges */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
              <h4 className="font-display font-extrabold text-slate-900 text-sm">
                Why Book With VRL Cargo?
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-600 shrink-0" />
                  <span>Door-to-door packing, loading, transport & unpacking</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-600 shrink-0" />
                  <span>Transparent upfront written quotes with zero hidden fees</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-600 shrink-0" />
                  <span>Full transit insurance coverage for total peace of mind</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-600 shrink-0" />
                  <span>Trained uniformed staff with high-grade multi-layer packing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Branch Offices Across India */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
              Pan-India Network
            </span>
            <h2 className="mt-1 font-display text-2xl sm:text-3xl font-black text-slate-900">
              Our Branch Hubs & Offices
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Operated directly by VRL Cargo Packers & Movers for seamless interstate and local shifting.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {branches.map((b) => (
              <div
                key={b.city}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 font-display font-bold text-slate-900 text-sm mb-2">
                  <Building2 size={16} className="text-orange-600 shrink-0" />
                  <span>{b.city}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {b.address}
                </p>
                <a
                  href={`tel:${phone}`}
                  onClick={() => trackContactConversion()}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:underline"
                >
                  <Phone size={12} /> {b.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-200 bg-white py-8 text-xs text-slate-500">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} VRL Cargo Packers & Movers. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/" className="hover:text-slate-900">Home</Link>
            <Link to="/terms-of-service" className="hover:text-slate-900">Terms of Service</Link>
            <Link to="/privacy-policy" className="hover:text-slate-900">Privacy Policy</Link>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom Action Pill */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/95 px-4 py-2 shadow-2xl backdrop-blur-md">
        <a
          href={`https://wa.me/${cleanPhone}?text=Hello%20VRL%20Cargo,%20I%20need%20moving%20assistance`}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackContactConversion()}
          className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-2 text-xs font-black text-white shadow-md hover:bg-emerald-700 transition-all active:scale-95"
        >
          <MessageCircle size={15} />
          <span>WhatsApp</span>
        </a>

        <a
          href={`tel:${phone}`}
          onClick={() => trackContactConversion()}
          className="inline-flex items-center gap-1.5 rounded-full bg-[#b91c1c] px-4 py-2 text-xs font-black text-white shadow-md hover:bg-[#991b1b] transition-all active:scale-95"
        >
          <Phone size={15} />
          <span>Call Now</span>
        </a>

        <Link
          to="/"
          className="hidden sm:inline-flex items-center gap-1 rounded-full border border-slate-300 bg-slate-100 px-3.5 py-2 text-xs font-extrabold text-slate-800 hover:bg-slate-200 transition-colors"
        >
          <span>All Services</span>
        </Link>
      </div>
    </main>
  );
}
