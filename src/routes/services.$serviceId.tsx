import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Calendar,
  Camera,
  CarFront,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  Clock3,
  HelpCircle,
  House,
  MapPin,
  Menu,
  MessageCircle,
  Package,
  PackageCheck,
  PawPrint,
  Phone,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Warehouse,
  Wrench,
  X,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { servicesData, type ServiceDetail } from "@/lib/servicesData";
import vrlLogo from "@/assets/vrl-logo.png";

export const Route = createFileRoute("/services/$serviceId")({
  loader: ({ params }) => {
    const service = servicesData.find(
      (s) => s.id === params.serviceId || s.slug === params.serviceId
    );
    if (!service) {
      throw notFound();
    }
    return { service };
  },
  head: ({ loaderData }) => {
    const title = loaderData?.service?.title
      ? `${loaderData.service.title} | VRL Cargo Packers & Movers`
      : "Relocation Services | VRL Cargo";
    const description = loaderData?.service?.copy || "Safe and secure packing and moving services across India.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ServiceDetailPage,
});

const phone = "+919350359213";
const cleanPhone = "919350359213";

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"included" | "process" | "gallery" | "faq">("included");

  // Quote Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    movingFrom: "",
    movingTo: "",
    moveDate: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [waLink, setWaLink] = useState("");

  const otherServices = servicesData.filter((s) => s.id !== service.id);

  function handleQuoteSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const msg = `🚚 *VRL Cargo Quote Request - ${service.title}*
------------------------------------------
👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
📍 *Moving From:* ${formData.movingFrom || "Not specified"}
🏁 *Moving To:* ${formData.movingTo || "Not specified"}
📅 *Target Date:* ${formData.moveDate || "Flexible"}
📦 *Service:* ${service.title}
📝 *Notes:* ${formData.notes || "Standard move"}
------------------------------------------
Please share an estimated price and available schedule.`;

    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`;
    setWaLink(url);
    setSubmitted(true);

    if (typeof window !== "undefined") {
      window.open(url, "_blank");
    }
  }

  const directWhatsAppUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(service.whatsappText)}`;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-24">
      {/* Top Banner Bar */}
      <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-[11px] sm:text-xs font-bold lg:px-8">
          <p className="flex items-center gap-2 tracking-wide">
            <MapPin size={14} className="fill-white/20 text-white shrink-0" />
            <span>India's Trusted Packers Movers Company</span>
          </p>
          <div className="flex items-center gap-3 sm:gap-6">
            <a href={`tel:${phone}`} className="flex items-center gap-1.5 hover:text-amber-100 transition-colors">
              <Phone size={13} className="shrink-0" />
              <span>Call : +91 9350359213</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={vrlLogo}
              alt="VRL Cargo Packers & Movers Logo"
              className="h-14 sm:h-16 w-auto object-contain max-w-[240px] sm:max-w-[300px]"
            />
          </Link>
          <nav
            className="hidden items-center gap-4 lg:gap-7 text-[0.84rem] font-extrabold uppercase tracking-wider text-slate-800 lg:flex"
            aria-label="Main navigation"
          >
            <Link to="/" className="hover:text-orange-600 transition-colors">
              Home
            </Link>
            <a href="/#about" className="hover:text-orange-600 transition-colors">
              About
            </a>
            <a href="/#services" className="text-orange-600 font-black transition-colors">
              Services
            </a>
            <a href="/#gallery" className="hover:text-orange-600 transition-colors">
              Gallery
            </a>
            <a href="/#faq" className="hover:text-orange-600 transition-colors">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${phone}`}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#b91c1c] text-white text-xs font-bold shadow hover:bg-[#991b1b] transition-all"
            >
              <Phone size={14} /> Call Now
            </a>
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-600 text-white text-xs font-bold shadow hover:bg-emerald-700 transition-all"
            >
              <MessageCircle size={14} /> WhatsApp
            </a>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-800 lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="grid border-t border-border bg-white px-5 py-4 text-sm font-bold uppercase tracking-wider text-slate-800 lg:hidden shadow-xl gap-2">
            <Link to="/" className="py-2 px-3 rounded-lg hover:bg-slate-100" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <a href="/#services" className="py-2 px-3 rounded-lg hover:bg-slate-100" onClick={() => setMenuOpen(false)}>
              All Services
            </a>
            <a href="/#quote" className="py-2 px-3 rounded-lg bg-orange-500 text-white text-center mt-2" onClick={() => setMenuOpen(false)}>
              Get a Quote
            </a>
          </nav>
        )}
      </header>

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8 text-xs font-bold text-slate-500 flex items-center gap-2">
          <Link to="/" className="hover:text-orange-600 flex items-center gap-1 transition-colors">
            <House size={13} /> Home
          </Link>
          <ChevronRight size={13} />
          <a href="/#services" className="hover:text-orange-600 transition-colors">
            Services
          </a>
          <ChevronRight size={13} />
          <span className="text-orange-600 font-extrabold">{service.title}</span>
        </div>
      </div>

      {/* Service Hero Banner */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-8 sm:py-14">
        <img
          src={service.heroImage}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover opacity-20 filter blur-xs"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/80" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-sm ${service.badgeColor}`}>
                  {service.badge}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-bold text-slate-200">
                  <Clock3 size={12} className="text-amber-400" /> {service.timeline}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-bold text-slate-200">
                  <MapPin size={12} className="text-amber-400" /> {service.coverage}
                </span>
              </div>

              <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                {service.title}
              </h1>
              <p className="mt-2 sm:mt-3 text-sm sm:text-lg font-medium text-orange-400">
                {service.tagline}
              </p>
              <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-300">
                {service.copy}
              </p>

              {/* High-Impact Action Button Trio */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {/* 1. WhatsApp Button (Green) */}
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 transition-all hover:scale-[1.02] active:scale-95"
                >
                  <MessageCircle size={19} />
                  <span>WhatsApp for Quote</span>
                </a>

                {/* 2. Call Now Button (Red) */}
                <a
                  href={`tel:${phone}`}
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#b91c1c] px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-red-700/30 hover:bg-[#991b1b] transition-all hover:scale-[1.02] active:scale-95"
                >
                  <Phone size={19} />
                  <span>Call Now: 9350359213</span>
                </a>

                {/* 3. Get Quote Button */}
                <a
                  href="#quote-section"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/15 border border-white/30 px-5 py-3.5 text-sm font-bold text-white hover:bg-white/25 transition-all"
                >
                  <span>Instant Estimate</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Service Featured Image Card */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border-4 border-white/10 bg-slate-900 shadow-2xl">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-auto object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 sm:bottom-4 sm:left-4 rounded-2xl bg-white p-3.5 sm:p-4 text-slate-900 shadow-2xl border border-slate-200">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                    <ShieldCheck size={24} />
                  </span>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">
                      VRL Quality Seal
                    </span>
                    <strong className="text-sm font-extrabold text-slate-900">
                      100% Insured &amp; Verified
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation for Service Sections */}
      <div className="sticky top-20 z-30 bg-white border-b border-slate-200 shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto hide-scrollbar gap-1.5 sm:gap-2 py-2 sm:py-3">
            <button
              onClick={() => setActiveTab("included")}
              className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-extrabold uppercase tracking-wider whitespace-nowrap transition-all ${
                activeTab === "included"
                  ? "bg-slate-900 text-white shadow"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              What's Included ({service.included.length})
            </button>
            <button
              onClick={() => setActiveTab("process")}
              className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-extrabold uppercase tracking-wider whitespace-nowrap transition-all ${
                activeTab === "process"
                  ? "bg-slate-900 text-white shadow"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              How It Works (4 Steps)
            </button>
            <button
              onClick={() => setActiveTab("gallery")}
              className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-extrabold uppercase tracking-wider whitespace-nowrap transition-all ${
                activeTab === "gallery"
                  ? "bg-slate-900 text-white shadow"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Real Work Photos ({service.galleryImages.length})
            </button>
            <button
              onClick={() => setActiveTab("faq")}
              className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-extrabold uppercase tracking-wider whitespace-nowrap transition-all ${
                activeTab === "faq"
                  ? "bg-slate-900 text-white shadow"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              FAQs &amp; Guidance
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Details Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Left Main Content */}
          <div className="space-y-6 sm:space-y-10">
            {/* Section 1: What is Included + Advantages */}
            {(activeTab === "included" || activeTab === undefined) && (
              <>
                <section className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:p-8 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-orange-600 mb-2">
                    <CheckCircle2 size={16} /> Complete Service Inclusions
                  </div>
                  <h2 className="font-display text-xl sm:text-3xl font-black text-slate-900">
                    What is included in {service.title}
                  </h2>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    We manage every single detail from start to finish. Here is what is covered in your moving package:
                  </p>

                  <div className="mt-4 sm:mt-6 grid gap-2.5 sm:gap-3 sm:grid-cols-2">
                    {service.included.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 sm:gap-3 rounded-xl sm:rounded-2xl border border-slate-100 bg-slate-50/80 p-3 sm:p-4 shadow-2xs"
                      >
                        <span className="flex size-5 sm:size-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                          <Check size={13} strokeWidth={3} />
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Direct Action Banner in Inclusions */}
                  <div className="mt-6 sm:mt-8 rounded-xl sm:rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                    <div>
                      <strong className="text-xs sm:text-sm font-extrabold text-slate-900 block">
                        Need custom packing requirements?
                      </strong>
                      <span className="text-[11px] sm:text-xs text-slate-600">
                        Our coordinator will customize the box counts and vehicle sizes to your needs.
                      </span>
                    </div>
                    <a
                      href={directWhatsAppUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-black text-white hover:bg-emerald-700 shadow"
                    >
                      <MessageCircle size={15} /> Chat on WhatsApp
                    </a>
                  </div>
                </section>

                {/* Section: Why Choose VRL Cargo */}
                <section className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:p-8 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-orange-600 mb-2">
                    <Sparkles size={16} /> The VRL Advantage
                  </div>
                  <h2 className="font-display text-xl sm:text-3xl font-black text-slate-900">
                    Why customers choose VRL Cargo for {service.title}
                  </h2>
                  <div className="mt-4 sm:mt-6 space-y-2.5 sm:space-y-3">
                    {service.whyChoose.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                        <span className="flex size-5 items-center justify-center rounded-full bg-orange-100 text-orange-600 shrink-0 mt-0.5">
                          <Check size={12} strokeWidth={3} />
                        </span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            )}

            {/* Section 2: 4-Step Process */}
            {activeTab === "process" && (
              <section className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-orange-600 mb-2">
                  <Clock size={16} /> Step-by-Step Procedure
                </div>
                <h2 className="font-display text-xl sm:text-3xl font-black text-slate-900">
                  How {service.title} works with VRL Cargo
                </h2>

                <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {service.process.map((step) => (
                    <div
                      key={step.step}
                      className="relative rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 hover:border-orange-400 hover:shadow-md transition-all"
                    >
                      <span className="font-display text-xl sm:text-2xl font-black text-orange-500 block mb-1">
                        {step.step}
                      </span>
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900">{step.title}</h3>
                      <p className="mt-1 text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Section 3: Real Work Photos for this service */}
            {activeTab === "gallery" && (
              <section className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-orange-600 mb-2">
                  <Camera size={16} /> Real Packing Proof
                </div>
                <h2 className="font-display text-xl sm:text-3xl font-black text-slate-900">
                  Packing &amp; Handling Gallery for {service.title}
                </h2>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-600">
                  Inspect the materials, shrink wraps, and techniques we use to keep your goods safe:
                </p>

                <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                  {service.galleryImages.map((img, i) => (
                    <div
                      key={i}
                      className="group overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-100 shadow-sm"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                        <img
                          src={img.url}
                          alt={img.caption}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-2 sm:p-3.5 bg-white">
                        <p className="text-[11px] sm:text-xs font-bold text-slate-800 line-clamp-1">{img.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Section 4: FAQs */}
            {activeTab === "faq" && (
              <section className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-orange-600 mb-2">
                  <HelpCircle size={16} /> Clear Answers
                </div>
                <h2 className="font-display text-xl sm:text-3xl font-black text-slate-900">
                  Frequently asked questions about {service.title}
                </h2>
                <div className="mt-4 sm:mt-6 space-y-2.5 sm:space-y-3">
                  {service.faq.map((item, idx) => (
                    <details
                      key={idx}
                      className="faq-item rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/60 p-3 sm:p-4"
                      open={idx === 0}
                    >
                      <summary className="font-bold text-xs sm:text-sm text-slate-900 cursor-pointer flex items-center justify-between">
                        <span>{item.q}</span>
                        <ChevronRight size={16} className="text-orange-500 transition-transform shrink-0" />
                      </summary>
                      <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
                        {item.a}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Sidebar: WhatsApp & Direct Quote Form */}
          <div className="space-y-6">
            {/* Quick Contact Box in Vivid Cards */}
            <div className="rounded-3xl border-2 border-orange-500/30 bg-white p-6 shadow-xl space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-orange-700">
                <Sparkles size={12} /> Direct Booking Helpline
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-black text-slate-900">
                Talk to a {service.title} Specialist
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connect with our dedicated moving officer for instant pricing, availability, and packing slots.
              </p>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                {/* Green WhatsApp Button */}
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-xs sm:text-sm font-black text-white shadow-md hover:bg-emerald-700 transition-all hover:scale-[1.01] active:scale-95"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp for {service.title}</span>
                </a>

                {/* Red Call Now Button */}
                <a
                  href={`tel:${phone}`}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#b91c1c] px-5 py-3 text-xs sm:text-sm font-black text-white shadow-md hover:bg-[#991b1b] transition-all hover:scale-[1.01] active:scale-95"
                >
                  <Phone size={18} />
                  <span>Call +91 93503 59213</span>
                </a>
              </div>
            </div>

            {/* Custom Moving Quote Form */}
            <aside
              id="quote-section"
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl scroll-mt-28"
            >
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-orange-600 block mb-1">
                Fast Quote Calculator
              </span>
              <h3 className="font-display text-xl font-black text-slate-900">
                Get Quote for {service.title}
              </h3>
              <p className="mt-1 text-xs text-slate-500 mb-5">
                Submit your details to receive an exact quotation on WhatsApp within minutes.
              </p>

              {submitted ? (
                <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <span className="flex size-12 mx-auto items-center justify-center rounded-full bg-emerald-600 text-white">
                    <Check size={24} />
                  </span>
                  <h4 className="font-extrabold text-base text-slate-900">Request Forwarded!</h4>
                  <p className="text-xs text-slate-600">
                    Your request details have been prepared for WhatsApp chat.
                  </p>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-black text-white shadow hover:bg-emerald-700"
                  >
                    <PackageCheck size={16} /> Continue on WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="block text-xs font-bold text-orange-600 hover:underline mx-auto pt-2"
                  >
                    Submit another quote
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="space-y-3">
                  <div>
                    <label className="sr-only" htmlFor="form-name">Your name</label>
                    <input
                      id="form-name"
                      required
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-field rounded-xl text-xs"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="form-phone">Phone number</label>
                    <input
                      id="form-phone"
                      required
                      type="tel"
                      placeholder="Phone Number (WhatsApp) *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-field rounded-xl text-xs"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="form-from">Moving from</label>
                    <input
                      id="form-from"
                      placeholder="Pickup City (e.g. Delhi)"
                      value={formData.movingFrom}
                      onChange={(e) => setFormData({ ...formData, movingFrom: e.target.value })}
                      className="form-field rounded-xl text-xs"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="form-to">Moving to</label>
                    <input
                      id="form-to"
                      placeholder="Destination City (e.g. Mumbai)"
                      value={formData.movingTo}
                      onChange={(e) => setFormData({ ...formData, movingTo: e.target.value })}
                      className="form-field rounded-xl text-xs"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="form-date">Move Date</label>
                    <input
                      id="form-date"
                      type="date"
                      value={formData.moveDate}
                      onChange={(e) => setFormData({ ...formData, moveDate: e.target.value })}
                      className="form-field rounded-xl text-xs text-slate-700"
                    />
                  </div>
                  <button
                    type="submit"
                    className="button-accent w-full rounded-xl flex items-center justify-center gap-2 text-xs font-black shadow-md mt-2"
                  >
                    Calculate &amp; Send to WhatsApp <ArrowRight size={16} />
                  </button>
                  <p className="text-center text-[10px] text-slate-500 pt-1">
                    🔒 Zero spam · Instant digital quotation
                  </p>
                </form>
              )}
            </aside>

            {/* Other Services Cards */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h4 className="font-extrabold text-sm uppercase tracking-wider text-slate-900 mb-4">
                Explore Other Services
              </h4>
              <div className="space-y-3">
                {otherServices.map((other) => (
                  <Link
                    key={other.id}
                    to="/services/$serviceId"
                    params={{ serviceId: other.slug }}
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50 hover:bg-orange-50 hover:border-orange-200 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <img src={other.heroImage} alt={other.title} className="size-10 rounded-lg object-cover" />
                      <div>
                        <strong className="text-xs font-bold text-slate-900 group-hover:text-orange-600 block transition-colors">
                          {other.title}
                        </strong>
                        <span className="text-[10px] text-slate-500">{other.categoryLabel}</span>
                      </div>
                    </div>
                    <ChevronRight size={16} className="text-slate-400 group-hover:text-orange-600 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 pb-28 pt-12 text-slate-300 md:pb-12 border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-4 md:flex-row md:items-end lg:px-8">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img
                src={vrlLogo}
                alt="VRL Cargo Packers & Movers Logo"
                className="h-14 sm:h-16 w-auto object-contain drop-shadow-md"
              />
            </Link>
            <p className="mt-4 max-w-sm text-xs sm:text-sm leading-relaxed text-slate-400">
              Safe packing, secure transport and reliable relocation for homes, offices, cars and bikes across India.
            </p>
          </div>
          <div className="text-xs sm:text-sm text-slate-400">
            <p className="font-bold text-white">
              Call 24×7:{" "}
              <a href={`tel:${phone}`} className="hover:text-orange-400">
                +91 93503 59213
              </a>
            </p>
            <p className="mt-2">© 2026 VRL Cargo Packers &amp; Movers. All rights reserved.</p>
            <div className="mt-2 flex items-center gap-3 text-xs">
              <Link to="/privacy-policy" className="hover:text-slate-200 transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link to="/terms-of-service" className="hover:text-slate-200 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom Action Pill with Green WhatsApp and Red Call */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/95 px-4 py-2 shadow-2xl backdrop-blur-md">
        <a
          href={directWhatsAppUrl}
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

        <a
          href="#quote-section"
          className="hidden sm:inline-flex items-center gap-1 rounded-full border border-slate-300 bg-slate-100 px-3.5 py-2 text-xs font-extrabold text-slate-800 hover:bg-slate-200 transition-colors"
        >
          <span>Get Quote</span>
        </a>
      </div>
    </main>
  );
}
