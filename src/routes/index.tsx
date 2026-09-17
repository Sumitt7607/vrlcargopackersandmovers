import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bike,
  Building2,
  Camera,
  Car,
  CarFront,
  Check,
  ChevronDown,
  Clock3,
  Compass,
  FileEdit,
  Headphones,
  House,
  Info,
  Layers,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Package,
  PackageCheck,
  PawPrint,
  Phone,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Truck,
  Users,
  Warehouse,
  Wrench,
  X,
  ZoomIn,
} from "lucide-react";
import { useState, type FormEvent } from "react";

import heroAllRelocation from "@/assets/hero-all-relocation.jpg";
import homeShifting from "@/assets/home-shifting.jpg";
import vehicleTransport from "@/assets/vehicle-transport.jpg";
import officeShifting from "@/assets/office-shifting.jpg";
import warehousing from "@/assets/warehousing.jpg";
import transitInsurance from "@/assets/transit-insurance.jpg";
import petRelocation from "@/assets/pet-relocation.jpg";
import vrlLogo from "@/assets/vrl-logo.png";
import packingBoxes from "@/assets/packing-boxes.png";
import furnitureWrapping from "@/assets/furniture-wrapping.png";
import blueSofaWrap from "@/assets/blue-sofa-wrap.jpg";
import homeInteriorPacking from "@/assets/home-interior-packing.jpg";
import bikePacking from "@/assets/bike-packing.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VRL Cargo Packers & Movers | Safe Relocation" },
      {
        name: "description",
        content:
          "India's Trusted Packers Movers Company. Reliable home shifting, office relocation, bike, car and vehicle transport with utmost care across India.",
      },
      { property: "og:title", content: "VRL Cargo Packers & Movers" },
      {
        property: "og:description",
        content: "We shift your home, office, vehicles & household goods with utmost care. Pan-India safe delivery.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const phone = "+919350359213";
const cleanPhone = "919350359213";


const categories = [
  { id: "all", label: "All Services" },
  { id: "residential", label: "Home & Office" },
  { id: "vehicles", label: "Car & Storage" },
  { id: "protection", label: "Insurance & Pets" },
];

interface ServiceItem {
  id: string;
  slug: string;
  category: string;
  categoryLabel: string;
  icon: typeof House;
  title: string;
  copy: string;
  badge: string;
  badgeColor: string;
  highlights: string[];
  timeline: string;
  included: string[];
  image: string;
  whatsappText: string;
}

const services: ServiceItem[] = [
  {
    id: "home",
    slug: "home-shifting",
    category: "residential",
    categoryLabel: "Residential Shifting",
    icon: House,
    title: "Home Shifting",
    copy: "Room-by-room multi-layer packing, fragile item crating, and door-to-door unpacking.",
    badge: "Most Popular",
    badgeColor: "bg-amber-500 text-white",
    highlights: [
      "Multi-layer bubble wrap & corrugated boxes",
      "Furniture dismantling & reassembly included",
      "Dedicated floor supervisor for safe unloading",
    ],
    timeline: "1 - 3 Days (Domestic)",
    included: [
      "Heavy duty cardboard boxes & bubble wrap",
      "Professional dismantling of beds & wardrobes",
      "Safe loading & unloading with tail-lift trucks",
      "Unpacking and item placement at new location",
    ],
    image: homeShifting,
    whatsappText: "Hello VRL Cargo, I am looking for Home Shifting services. Please share an instant quote.",
  },
  {
    id: "office",
    slug: "office-relocation",
    category: "residential",
    categoryLabel: "Commercial Shifting",
    icon: Building2,
    title: "Office Relocation",
    copy: "Organised business & IT equipment relocation structured to eliminate operational downtime.",
    badge: "Zero Downtime",
    badgeColor: "bg-blue-600 text-white",
    highlights: [
      "Server rack, PC & electronics protection",
      "Weekend & night relocation options",
      "Systematic floor plan inventory mapping",
    ],
    timeline: "24 - 48 Hours",
    included: [
      "Antistatic wrapping for IT hardware",
      "Modular workstation & conference desk moving",
      "Document & file color-coded tagging",
      "Post-move seating & desk layout setup",
    ],
    image: officeShifting,
    whatsappText: "Hello VRL Cargo, I am looking for Office Relocation services. Please share an instant quote.",
  },
  {
    id: "car",
    slug: "vehicle-transport",
    category: "vehicles",
    categoryLabel: "Vehicle Logistics",
    icon: CarFront,
    title: "Vehicle Transport",
    copy: "Enclosed hydraulic carriers & door-to-door transit for cars and two-wheelers.",
    badge: "GPS Tracked",
    badgeColor: "bg-emerald-600 text-white",
    highlights: [
      "Covered single & multi-car carriers",
      "Pre-transit 21-point damage report",
      "Real-time GPS tracking link for owner",
    ],
    timeline: "3 - 7 Days",
    included: [
      "Doorstep pickup & destination dropoff",
      "Hydraulic ramp smooth loading",
      "Wheel chocks & custom safety straps",
      "All-India carrier network coverage",
    ],
    image: vehicleTransport,
    whatsappText: "Hello VRL Cargo, I am looking for Car / Bike Vehicle Transport services. Please share an instant quote.",
  },
  {
    id: "warehouse",
    slug: "warehousing-storage",
    category: "vehicles",
    categoryLabel: "Secure Storage",
    icon: Warehouse,
    title: "Warehousing & Storage",
    copy: "Clean, CCTV-monitored, climate-controlled storage for household and commercial inventory.",
    badge: "24/7 Monitored",
    badgeColor: "bg-purple-600 text-white",
    highlights: [
      "Flexible daily, monthly or annual storage",
      "24/7 CCTV surveillance & fire safety",
      "Moisture & pest-proof raised pallets",
    ],
    timeline: "On-demand access",
    included: [
      "Palletised goods storage & shrink wrapping",
      "Weekly pest treatment & dust control",
      "Digital inventory list & barcode tracking",
      "Flexible withdrawal with 24h notice",
    ],
    image: warehousing,
    whatsappText: "Hello VRL Cargo, I am looking for Warehousing & Storage services. Please share an instant quote.",
  },
  {
    id: "insurance",
    slug: "transit-insurance",
    category: "protection",
    categoryLabel: "Risk Protection",
    icon: ShieldCheck,
    title: "Transit Insurance",
    copy: "Comprehensive all-risk goods insurance for total peace of mind throughout transit.",
    badge: "100% Covered",
    badgeColor: "bg-teal-600 text-white",
    highlights: [
      "Instant digital policy issue before pickup",
      "Full declared invoice value protection",
      "Dedicated fast-track claim manager",
    ],
    timeline: "Instant policy issue",
    included: [
      "All-risk transit coverage",
      "Fire, collision & theft protection",
      "Accidental loading/unloading cover",
      "Transparent zero-hidden-clause terms",
    ],
    image: transitInsurance,
    whatsappText: "Hello VRL Cargo, I am looking for Goods Transit Insurance. Please share an instant quote.",
  },
  {
    id: "pet",
    slug: "pet-relocation",
    category: "protection",
    categoryLabel: "Special Care",
    icon: PawPrint,
    title: "Pet Relocation",
    copy: "Personalised, comfortable, climate-controlled relocation tailored for your furry family.",
    badge: "Vet Approved",
    badgeColor: "bg-rose-600 text-white",
    highlights: [
      "IATA compliant ventilation crates",
      "In-transit hydration & pet breaks",
      "Door-to-door trained pet escort",
    ],
    timeline: "Same Day / Express",
    included: [
      "Custom sized travel crate selection",
      "Pre-travel veterinary health checklist",
      "Point-to-point AC vehicle escort",
      "Live video & photo updates to owner",
    ],
    image: petRelocation,
    whatsappText: "Hello VRL Cargo, I am looking for Pet Relocation services. Please share an instant quote.",
  },
];

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  copy: string;
  badge: string;
  badgeColor: string;
  image: string;
}

const gallery: GalleryItem[] = [
  {
    id: "sofa-blue",
    title: "50-Micron Blue Waterproof Sofa Protection",
    category: "Luxury Living Room",
    copy: "Heavy-duty waterproof shrink film shielding velvet & leather sofa sets from dust, rain & transport stains.",
    badge: "Waterproof Shield",
    badgeColor: "bg-blue-600 text-white",
    image: blueSofaWrap,
  },
  {
    id: "furniture-wrap",
    title: "Custom Wooden & Furniture Wrapping",
    category: "Furniture & Chairs",
    copy: "Scratch-resistant padding and high-tensile stretch film for wooden tables, dining sets & delicate home decor.",
    badge: "Zero-Scratch Shield",
    badgeColor: "bg-amber-600 text-white",
    image: furnitureWrapping,
  },
  {
    id: "home-interior",
    title: "Complete Villa & Room-by-Room Packing",
    category: "Full Home Relocation",
    copy: "Floor protection and systematic item tagging before loading into specialized VRL Cargo transport trucks.",
    badge: "Organized Packing",
    badgeColor: "bg-emerald-600 text-white",
    image: homeInteriorPacking,
  },
  {
    id: "bike-wrap",
    title: "Shock-Absorbing Two-Wheeler Wrapping",
    category: "Vehicle Transport",
    copy: "3-layer shock-absorbing bubble wrap & film protecting mirrors, body panels & paintwork during transit.",
    badge: "Transit-Safe Bike Care",
    badgeColor: "bg-purple-600 text-white",
    image: bikePacking,
  },
  {
    id: "boxes-stack",
    title: "Multi-Layer Cardboard Box Wrapping",
    category: "Household Goods",
    copy: "Reinforced corrugated boxes sealed with moisture-resistant stretch wrap & edge chocks for safe stacking.",
    badge: "Heavy-Duty Protection",
    badgeColor: "bg-teal-600 text-white",
    image: packingBoxes,
  },
];

const faqs = [
  [
    "How can I track my shipment?",
    "Once your move is confirmed, you receive a tracking ID. Our support team can also provide live updates throughout transit.",
  ],
  [
    "How long does delivery usually take?",
    "Timing depends on distance, load and route. Your move coordinator shares a clear delivery window before pickup.",
  ],
  [
    "Are my belongings insured?",
    "Transit insurance is available for added protection. We explain the coverage options before your move begins.",
  ],
];

function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-3 group" aria-label="VRL Cargo Packers & Movers home">
      <div
        className={`relative flex items-center justify-center transition-all duration-300 group-hover:scale-[1.02] ${
          inverse ? "drop-shadow-lg" : ""
        }`}
      >
        <img
          src={vrlLogo}
          alt="VRL Cargo Packers & Movers Logo"
          className="h-14 sm:h-16 md:h-20 w-auto object-contain max-w-[280px] sm:max-w-[350px]"
        />
      </div>
    </a>
  );
}

function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    movingFrom: "",
    movingTo: "",
    service: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [waLink, setWaLink] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const message = `🚚 *VRL Cargo Packers & Movers - Quote Request*
------------------------------------------
👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
📍 *Moving From:* ${formData.movingFrom || "Not specified"}
🏁 *Moving To:* ${formData.movingTo || "Not specified"}
📦 *Service:* ${formData.service || "General Relocation"}
------------------------------------------
Please share a price estimate and schedule for my move.`;

    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    setWaLink(url);
    setSubmitted(true);

    if (typeof window !== "undefined") {
      window.open(url, "_blank");
    }
  }

  if (submitted) {
    return (
      <div
        className="flex min-h-[260px] flex-col items-center justify-center text-center p-6 bg-background/95 rounded-2xl border border-border shadow-xl animate-in fade-in"
        role="status"
      >
        <span className="mb-4 flex size-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
          <Check size={30} />
        </span>
        <h3 className="font-display text-2xl font-extrabold text-primary">Redirecting to WhatsApp...</h3>
        <p className="mt-2 max-w-sm text-xs sm:text-sm leading-relaxed text-muted-foreground">
          Your quote details are being sent to <strong>+91 93503 59213</strong> via WhatsApp.
        </p>
        <a
          href={waLink}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-xs font-extrabold text-white shadow-lg hover:bg-emerald-700 transition-transform active:scale-95"
        >
          <PackageCheck size={18} /> Open WhatsApp Chat Now
        </a>
        <button
          type="button"
          className="mt-4 text-xs font-bold text-accent hover:underline transition-colors"
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", phone: "", movingFrom: "", movingTo: "", service: "" });
          }}
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "grid gap-3 sm:grid-cols-2 lg:grid-cols-5" : "grid gap-3.5"}>
      <div>
        <label className="sr-only" htmlFor={compact ? "name-compact" : "name"}>
          Your name
        </label>
        <input
          id={compact ? "name-compact" : "name"}
          required
          placeholder="Your name *"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="form-field rounded-xl"
        />
      </div>
      <div>
        <label className="sr-only" htmlFor={compact ? "phone-compact" : "phone"}>
          Phone number
        </label>
        <input
          id={compact ? "phone-compact" : "phone"}
          required
          type="tel"
          placeholder="Phone number *"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="form-field rounded-xl"
        />
      </div>
      <div>
        <label className="sr-only" htmlFor={compact ? "from-compact" : "movingFrom"}>
          Moving From
        </label>
        <input
          id={compact ? "from-compact" : "movingFrom"}
          placeholder="Moving From (e.g. Delhi)"
          value={formData.movingFrom}
          onChange={(e) => setFormData({ ...formData, movingFrom: e.target.value })}
          className="form-field rounded-xl"
        />
      </div>
      <div>
        <label className="sr-only" htmlFor={compact ? "to-compact" : "movingTo"}>
          Moving To
        </label>
        <input
          id={compact ? "to-compact" : "movingTo"}
          placeholder="Moving To (e.g. Mumbai)"
          value={formData.movingTo}
          onChange={(e) => setFormData({ ...formData, movingTo: e.target.value })}
          className="form-field rounded-xl"
        />
      </div>
      <div className={compact ? "" : "sm:col-span-2"}>
        <label className="sr-only" htmlFor={compact ? "service-compact" : "service"}>
          Select service
        </label>
        <select
          id={compact ? "service-compact" : "service"}
          required
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="form-field rounded-xl text-foreground"
        >
          <option value="">Select service *</option>
          {services.map((service) => (
            <option key={service.id} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </div>
      <div className={compact ? "sm:col-span-2 lg:col-span-5" : ""}>
        <button
          type="submit"
          className={`${
            compact ? "button-primary" : "button-accent"
          } group w-full rounded-xl flex items-center justify-center gap-2 shadow-md`}
        >
          Send Request via WhatsApp{" "}
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </form>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filteredServices =
    activeCategory === "all" ? services : services.filter((s) => s.category === activeCategory);

  return (
    <main id="top" className="overflow-hidden bg-background">
      {/* Top Banner Bar in Vivid Orange/Red Gradient */}
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
      <header className="sticky top-0 z-50 border-b border-border/60 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">
          <Brand />
          <nav
            className="hidden items-center gap-3 md:gap-5 lg:gap-7 text-[0.82rem] lg:text-[0.88rem] font-extrabold uppercase tracking-wider text-slate-800 lg:flex"
            aria-label="Main navigation"
          >
            <a href="#top" className="hover:text-orange-600 transition-colors py-1">
              Home
            </a>
            <a href="#about" className="hover:text-orange-600 transition-colors py-1">
              About
            </a>
            <a href="#services" className="hover:text-orange-600 transition-colors py-1 flex items-center gap-1">
              Services <ChevronDown size={14} />
            </a>
            <a href="#gallery" className="hover:text-orange-600 transition-colors py-1">
              Locations
            </a>
            <a href="#gallery" className="hover:text-orange-600 transition-colors py-1">
              Gallery
            </a>
            <a href="#contact" className="hover:text-orange-600 transition-colors py-1">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#quote"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#b91c1c] text-white text-xs sm:text-sm font-extrabold shadow-md hover:bg-[#991b1b] transition-all hover:scale-[1.02] active:scale-95"
            >
              <span>Quote Now</span>
              <span className="flex size-5 items-center justify-center rounded-full bg-white text-[#b91c1c]">
                <ArrowRight size={12} strokeWidth={3} />
              </span>
            </a>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-800 hover:bg-slate-100 transition-colors lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="grid border-t border-border bg-white px-5 py-5 text-sm font-bold uppercase tracking-wider text-slate-800 lg:hidden shadow-xl gap-2">
            <a href="#top" className="py-2.5 px-3 rounded-lg hover:bg-slate-100" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#about" className="py-2.5 px-3 rounded-lg hover:bg-slate-100" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#services" className="py-2.5 px-3 rounded-lg hover:bg-slate-100" onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a href="#gallery" className="py-2.5 px-3 rounded-lg hover:bg-slate-100" onClick={() => setMenuOpen(false)}>
              Gallery
            </a>
            <a href="#faq" className="py-2.5 px-3 rounded-lg hover:bg-slate-100" onClick={() => setMenuOpen(false)}>
              FAQ
            </a>
            <a href="#quote" className="py-2.5 px-3 rounded-lg bg-orange-500 text-white text-center mt-2" onClick={() => setMenuOpen(false)}>
              Get a Quote
            </a>
          </nav>
        )}
      </header>

      {/* ALL-INCLUSIVE HERO SECTION */}
      <section className="hero-section relative pt-4 pb-10 sm:pt-6 sm:pb-16 lg:pt-10 lg:pb-24">
        {/* Blurred blobs – decorative */}
        <div className="pointer-events-none absolute -left-40 top-0 h-[550px] w-[550px] rounded-full bg-orange-200/30 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-20 h-[450px] w-[450px] rounded-full bg-blue-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-6 sm:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
            {/* Left Hero Column */}
            <div className="flex flex-col items-start text-left">
              {/* Top Trust Badge */}
              <div className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 sm:px-3.5 sm:py-1.5 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-orange-600 shadow-sm">
                <Star size={13} className="fill-orange-500 text-orange-500 animate-pulse" />
                India's Trusted Relocation Partner
              </div>

              {/* Main Headline with shimmer on the gradient span */}
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] sm:leading-[1.08]">
                Moving your world.{" "}<br />
                <span className="shimmer-text">
                  Handled with care.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-3 sm:mt-4 max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-slate-600">
                From household goods and office setups to vehicles and secure storage, our certified moving teams make your entire relocation completely safe, smooth, and effortless.
              </p>

              {/* Quick Action CTA Line */}
              <div className="mt-5 sm:mt-7 flex flex-wrap items-center gap-2.5 sm:gap-3">
                <a
                  href={`https://wa.me/${cleanPhone}?text=Hello%20VRL%20Cargo,%20I%20need%20a%20moving%20quote`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 sm:px-6 py-2.5 sm:py-3.5 text-xs sm:text-sm font-extrabold text-white shadow-lg hover:bg-emerald-700 transition-all hover:scale-[1.02] active:scale-95"
                >
                  <MessageCircle size={16} className="shrink-0 sm:size-[18px]" /> Instant WhatsApp Quote
                </a>
                <a
                  href={`tel:${phone}`}
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-900 bg-slate-900 px-4 sm:px-6 py-2.5 sm:py-3.5 text-xs sm:text-sm font-extrabold text-white shadow-md hover:bg-slate-800 transition-all hover:scale-[1.01] active:scale-95"
                >
                  <Phone size={16} className="text-orange-400 shrink-0 sm:size-[18px]" /> +91 93503 59213
                </a>
              </div>
            </div>

            {/* Right Hero Column: Comprehensive All-Relocation Visual & Badges */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border-3 sm:border-4 border-white bg-slate-950 shadow-xl sm:shadow-2xl ring-1 ring-slate-200 max-h-[260px] sm:max-h-[380px] lg:max-h-none">
                <img
                  src={heroAllRelocation}
                  alt="VRL Cargo professional movers packing household furniture, moving boxes, car and loading onto cargo logistics truck"
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover aspect-[16/10] hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Circular Navy Blue Door-To-Door Badge */}
                <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 flex size-20 sm:size-28 flex-col items-center justify-center rounded-full bg-[#0c1829] text-white shadow-2xl border-2 border-dashed border-orange-400 p-1.5 sm:p-2 text-center animate-[float_5s_ease-in-out_infinite]">
                  <span className="text-[8px] sm:text-[11px] font-black uppercase tracking-wider text-orange-400">
                    DOOR TO
                  </span>
                  <span className="font-display text-xs sm:text-base font-black tracking-tight text-white leading-none">
                    DOOR
                  </span>
                  <span className="text-[8px] sm:text-[10px] font-extrabold uppercase tracking-wider text-slate-300">
                    SERVICE
                  </span>
                  <div className="flex gap-0.5 mt-0.5 text-amber-400">
                    <Star size={7} fill="currentColor" />
                    <Star size={7} fill="currentColor" />
                    <Star size={7} fill="currentColor" />
                  </div>
                </div>

                {/* Top Relocation Live Tag */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-600 px-2.5 sm:px-3.5 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wide text-white shadow-lg">
                    <Sparkles size={11} /> All-India Relocation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMINENT CALL 24X7 FLOATING BANNER CARD (From Screenshot) */}
      <section className="relative z-30 -mt-6 sm:-mt-12 mx-auto max-w-4xl px-4 sm:px-6">
        <div className="call-banner rounded-2xl sm:rounded-3xl text-white shadow-2xl p-4 sm:p-7 text-center border-2 border-red-500/30">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
            <div className="inline-flex items-center justify-center rounded-xl bg-black/30 px-3 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-xs font-black uppercase tracking-widest border border-white/20 animate-pulse">
              📞 CALL 24x7
            </div>
            <a
              href={`tel:${phone}`}
              className="call-ripple font-display text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white hover:text-amber-200 transition-colors"
            >
              9350359213
            </a>
          </div>
          <p className="mt-1.5 sm:mt-2.5 text-xs sm:text-base font-bold text-red-100">
            For all home, office &amp; logistics shifting solutions
          </p>
          <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-red-400/30 text-[11px] sm:text-sm font-semibold text-red-100">
            Move smart, move safe — call for a quick quote!
          </div>
        </div>
      </section>

      {/* TRACK YOUR SHIPMENT & STATS SECTION */}
      <section className="pt-8 pb-10 sm:pt-14 sm:pb-16 bg-slate-50 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <a
            href={`https://wa.me/${cleanPhone}?text=Hello%20VRL%20Cargo,%20I%20want%20to%20track%20my%20shipment`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-red-600 bg-white px-5 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-red-600 hover:bg-red-600 hover:text-white shadow-sm transition-all"
          >
            <Truck size={15} /> TRACK YOUR SHIPMENT
          </a>

          <p className="mt-6 sm:mt-8 text-[11px] sm:text-sm font-bold uppercase tracking-widest text-slate-500">
            Our Strengths, Which makes us
          </p>
          <h2 className="mt-1 font-display text-2xl sm:text-4xl font-black text-slate-800">
            the most preferable moving brand
          </h2>

          <div className="mt-6 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-6 max-w-5xl mx-auto">
            <div className="stat-card stagger-1 rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-3.5 sm:p-6 shadow-sm text-center">
              <strong className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-red-600">27+</strong>
              <h3 className="mt-1 sm:mt-2 text-xs sm:text-base font-extrabold text-slate-800">Years of Trust</h3>
              <p className="mt-0.5 text-[10px] sm:text-xs text-slate-500">Delivering Smiles Since 1998</p>
            </div>
            <div className="stat-card stagger-2 rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-3.5 sm:p-6 shadow-sm text-center">
              <strong className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-red-600">52,340+</strong>
              <h3 className="mt-1 sm:mt-2 text-xs sm:text-base font-extrabold text-slate-800">Moves Annually</h3>
              <p className="mt-0.5 text-[10px] sm:text-xs text-slate-500">Verified Happy Customers</p>
            </div>
            <div className="stat-card stagger-3 col-span-2 sm:col-span-1 rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-3.5 sm:p-6 shadow-sm text-center">
              <strong className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-red-600">2+</strong>
              <h3 className="mt-1 sm:mt-2 text-xs sm:text-base font-extrabold text-slate-800">Million sq.feet</h3>
              <p className="mt-0.5 text-[10px] sm:text-xs text-slate-500">Warehousing &amp; Storage Space</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section relative bg-gradient-to-b from-surface via-background to-surface scroll-mt-20 py-8 sm:py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow inline-flex items-center gap-2 text-xs">
                <Sparkles size={14} className="text-accent" /> What we move
              </p>
              <h2 className="mt-1 sm:mt-2 font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary">
                One team for every kind of move.
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-base leading-relaxed text-muted-foreground">
              End-to-end packing and moving built around safe handling, transparent coordination, and dependable delivery.
            </p>
          </div>

          {/* Categories Tab Bar */}
          <div className="mt-6 sm:mt-10 flex flex-nowrap sm:flex-wrap overflow-x-auto hide-scrollbar items-center gap-2 border-b border-border/80 pb-3 sm:pb-4">
            {categories.map((cat) => {
              const count = cat.id === "all" ? services.length : services.filter((s) => s.category === cat.id).length;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 sm:gap-2 rounded-full px-3.5 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-bold whitespace-nowrap shrink-0 transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-[1.02]"
                      : "bg-background text-muted-foreground hover:bg-surface hover:text-foreground border border-border"
                  }`}
                >
                  {cat.label}
                  <span
                    className={`flex size-4 sm:size-5 items-center justify-center rounded-full text-[9px] sm:text-[10px] ${
                      isActive ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Service Cards Grid (One after another) */}
          <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.id}
                  className="service-card group flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  {/* Card Image with Click-through to Service Detail Page */}
                  <Link
                    to="/services/$serviceId"
                    params={{ serviceId: service.slug }}
                    className="card-image-wrap block relative cursor-pointer overflow-hidden h-40 sm:h-52"
                    title={`View ${service.title} details`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="card-image-overlay opacity-25 group-hover:opacity-10 transition-opacity" />
                    <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 z-10">
                      <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-[11px] font-extrabold tracking-wide uppercase shadow-md ${service.badgeColor}`}>
                        {service.badge}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 z-10">
                      <span className="flex size-6 sm:size-7 items-center justify-center rounded-full bg-black/60 backdrop-blur-md text-[10px] sm:text-[11px] font-extrabold text-white">
                        0{index + 1}
                      </span>
                    </div>
                    {/* Hover Hint */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-black text-slate-900 shadow-xl">
                        View Service Page <ArrowRight size={13} />
                      </span>
                    </div>
                  </Link>

                  {/* Service Content */}
                  <div className="service-content flex-1 flex flex-col justify-between p-4 sm:p-6 bg-background">
                    <div>
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <span className="service-icon shrink-0">
                          <Icon size={20} className="sm:size-[22px]" />
                        </span>
                        <div>
                          <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-accent">
                            {service.categoryLabel}
                          </span>
                          <Link
                            to="/services/$serviceId"
                            params={{ serviceId: service.slug }}
                            className="block text-lg sm:text-xl font-extrabold text-primary leading-snug hover:text-accent transition-colors"
                          >
                            <h3>{service.title}</h3>
                          </Link>
                        </div>
                      </div>
                      <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-2 sm:line-clamp-none">{service.copy}</p>
                      <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 pt-2.5 sm:pt-3 border-t border-border/60">
                        {service.highlights.slice(0, 2).map((h, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 sm:gap-1.5 rounded-md bg-surface px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-[11px] font-medium text-foreground/80 border border-border/60"
                          >
                            <Check size={11} className="text-accent shrink-0" />
                            <span>{h}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Area: Top Get Quote Button, Bottom Green WhatsApp & Red Call Now */}
                    <div className="mt-4 sm:mt-6 flex flex-col gap-2 sm:gap-2.5 border-t border-border/80 pt-3 sm:pt-4">
                      {/* Top Button: Get Quote */}
                      <Link
                        to="/services/$serviceId"
                        params={{ serviceId: service.slug }}
                        className="w-full inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-accent px-3.5 py-2 sm:px-4 sm:py-2.5 text-xs font-black uppercase tracking-wider text-accent-foreground shadow-md hover:bg-accent/90 transition-all hover:scale-[1.01] active:scale-95"
                      >
                        <span>Get Quote</span>
                        <ArrowRight size={14} />
                      </Link>

                      {/* Bottom Row: Green WhatsApp & Red Call Now */}
                      <div className="grid grid-cols-2 gap-2">
                        <a
                          href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(service.whatsappText)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-1 rounded-xl bg-emerald-600 px-2 sm:px-3 py-1.5 sm:py-2 text-[11px] sm:text-xs font-extrabold text-white shadow-sm hover:bg-emerald-700 transition-all hover:scale-[1.02] active:scale-95"
                          title="Chat on WhatsApp"
                        >
                          <MessageCircle size={14} />
                          <span>WhatsApp</span>
                        </a>
                        <a
                          href={`tel:${phone}`}
                          className="inline-flex items-center justify-center gap-1 rounded-xl bg-[#b91c1c] px-2 sm:px-3 py-1.5 sm:py-2 text-[11px] sm:text-xs font-extrabold text-white shadow-sm hover:bg-[#991b1b] transition-all hover:scale-[1.02] active:scale-95"
                          title="Call Now"
                        >
                          <Phone size={14} />
                          <span>Call Now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Service Details Modal */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-background shadow-2xl border border-border">
              <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                <img src={selectedService.image} alt={selectedService.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black transition-colors"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
                <div className="absolute bottom-4 left-6 right-6">
                  <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold shadow-sm ${selectedService.badgeColor}`}>
                    {selectedService.badge}
                  </span>
                  <h3 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-foreground">
                    {selectedService.title}
                  </h3>
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">{selectedService.copy}</p>
                <div className="grid grid-cols-2 gap-4 rounded-xl bg-surface p-4 border border-border">
                  <div>
                    <span className="block text-[11px] font-extrabold uppercase tracking-wider text-muted-foreground">
                      Timeline
                    </span>
                    <strong className="text-sm font-bold text-foreground">{selectedService.timeline}</strong>
                  </div>
                  <div>
                    <span className="block text-[11px] font-extrabold uppercase tracking-wider text-muted-foreground">
                      Category
                    </span>
                    <strong className="text-sm font-bold text-foreground">{selectedService.categoryLabel}</strong>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
                    <Shield size={16} className="text-accent" /> What's Included in {selectedService.title}
                  </h4>
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    {selectedService.included.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-foreground">
                        <span className="flex size-5 items-center justify-center rounded-full bg-accent/15 text-accent">
                          <Check size={12} />
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-border pt-5">
                  <a
                    href={`tel:${phone}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-input bg-background px-5 py-2.5 text-xs font-bold text-foreground hover:bg-accent/10 transition-colors"
                  >
                    <Phone size={15} className="text-accent" /> Call +91 93503 59213
                  </a>
                  <a
                    href="#quote"
                    onClick={() => setSelectedService(null)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-2.5 text-xs font-extrabold text-accent-foreground shadow-md hover:bg-accent/90 transition-transform active:scale-95"
                  >
                    Get Free Quote <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Gallery / Proof of Quality Section */}
      <section id="gallery" className="section bg-background border-y border-border scroll-mt-20 py-8 sm:py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow inline-flex items-center gap-2 text-xs">
                <Camera size={14} className="text-accent" /> Proof of Quality
              </p>
              <h2 className="mt-1 sm:mt-2 font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-primary">
                Real packing photos from our moves.
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-base leading-relaxed text-muted-foreground">
              See how our trained teams wrap, cushion, and seal your household goods, furniture, and vehicles before
              loading.
            </p>
          </div>
          <div className="mt-6 sm:mt-12 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
            {gallery.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl border border-border bg-surface shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 z-10">
                    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-[11px] font-extrabold tracking-wide uppercase shadow-md ${photo.badgeColor}`}>
                      {photo.badge}
                    </span>
                  </div>
                  <div className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 z-10 flex size-7 sm:size-9 items-center justify-center rounded-full bg-black/60 backdrop-blur-md text-white opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all">
                    <ZoomIn size={13} className="sm:size-4" />
                  </div>
                </div>
                <div className="p-2.5 sm:p-5 bg-background">
                  <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-accent">
                    {photo.category}
                  </span>
                  <h3 className="mt-0.5 sm:mt-1 text-xs sm:text-base font-extrabold text-primary group-hover:text-accent transition-colors line-clamp-1">
                    {photo.title}
                  </h3>
                  <p className="mt-1 text-[10px] sm:text-xs leading-relaxed text-muted-foreground line-clamp-2">{photo.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Lightbox Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-background shadow-2xl border border-border">
              <div className="relative max-h-[60vh] w-full overflow-hidden bg-black flex items-center justify-center">
                <img src={selectedPhoto.image} alt={selectedPhoto.title} className="max-h-[60vh] w-full object-contain" />
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black transition-colors"
                  aria-label="Close photo"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-extrabold shadow-sm ${selectedPhoto.badgeColor}`}>
                    {selectedPhoto.badge}
                  </span>
                  <span className="text-xs font-bold text-muted-foreground">{selectedPhoto.category}</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-extrabold text-foreground">{selectedPhoto.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{selectedPhoto.copy}</p>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-border pt-4">
                  <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
                    <Check size={14} className="text-emerald-500" /> Multi-layer protective packaging standard
                  </span>
                  <a
                    href="#quote"
                    onClick={() => setSelectedPhoto(null)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-2.5 text-xs font-extrabold text-accent-foreground shadow-md hover:bg-accent/90 transition-transform active:scale-95"
                  >
                    Get Packing Quote <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* About Section */}
      <section id="about" className="section bg-background relative overflow-hidden scroll-mt-20 py-8 sm:py-14 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto grid max-w-7xl gap-8 lg:gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 relative z-10">
          <div className="relative pr-4 pb-4 sm:pr-8 sm:pb-8 md:pr-10 md:pb-10">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl ring-1 ring-border/50 bg-accent/5 max-h-[280px] sm:max-h-none">
              <img
                src={homeShifting}
                alt="VRL Cargo movers professionally packing a living room"
                width={1200}
                height={900}
                loading="lazy"
                className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
            </div>
            <div className="absolute bottom-0 right-0 bg-background/90 backdrop-blur-xl border border-border p-3.5 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl shadow-primary/10 flex flex-col items-center justify-center animate-[float_6s_ease-in-out_infinite]">
              <div className="flex items-center gap-1 text-primary font-display font-black text-3xl sm:text-5xl">
                27<span className="text-accent">+</span>
              </div>
              <span className="text-[9px] sm:text-[0.7rem] font-extrabold uppercase tracking-widest text-muted-foreground mt-1 sm:mt-2">
                Years Moving India
              </span>
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:py-1.5 rounded-full bg-primary/5 text-primary font-bold text-[11px] sm:text-xs uppercase tracking-wider mb-3 sm:mb-6 border border-primary/10">
              <Trophy size={14} className="text-accent" /> Why VRL Cargo
            </div>
            <h2 className="section-title text-2xl sm:text-4xl">The confidence to move without the chaos.</h2>
            <p className="mt-3 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground">
              Every move gets a dedicated coordinator, trained handling crew, and a clear plan. We use quality packing
              material, GPS-enabled vehicles, and proven processes to protect what matters most.
            </p>
            <div className="mt-5 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
              {[
                { title: "Professional packing", copy: "Right materials for every item.", icon: Layers },
                { title: "Secure transit", copy: "GPS-enabled safe vehicles.", icon: Truck },
                { title: "Clear communication", copy: "Updates from pickup to delivery.", icon: Headphones },
                { title: "Nationwide coverage", copy: "39+ branches, 1,264 locations.", icon: MapPin },
              ].map(({ title, copy, icon: Icon }) => (
                <div
                  key={title}
                  className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border border-border bg-surface/30 hover:bg-surface hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group cursor-default"
                >
                  <div className="flex-shrink-0 w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl bg-primary/5 text-primary group-hover:-translate-y-1 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                    <Icon size={18} className="sm:size-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-xs sm:text-[0.95rem]">{title}</h3>
                    <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs leading-relaxed text-muted-foreground">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href={`tel:${phone}`} className="button-primary mt-6 sm:mt-10 shadow-xl shadow-primary/20 hover:shadow-primary/40 group text-xs sm:text-sm">
              Speak to a move expert <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform sm:size-[18px]" />
            </a>
          </div>
        </div>
      </section>

      {/* Process / How It Works */}
      <section id="process" className="section bg-primary text-primary-foreground scroll-mt-20 py-8 sm:py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="section-heading section-heading-dark mb-6 sm:mb-8">
            <div>
              <p className="eyebrow text-accent/90 text-xs">Simple by design</p>
              <h2 className="text-2xl sm:text-4xl">Your move, in four clear steps.</h2>
            </div>
            <p className="text-xs sm:text-base">A single team coordinates the details so you always know what happens next.</p>
          </div>
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4">
            {[
              ["01", "Request a quote", "Tell us where, when and what you are moving."],
              ["02", "Plan & pack", "We survey, schedule and pack with the right materials."],
              ["03", "Track the move", "Your shipment travels securely with regular updates."],
              ["04", "Settle in", "We deliver carefully and place items where they belong."],
            ].map(([num, title, copy]) => (
              <article key={num} className="rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 p-3.5 sm:p-5 hover:bg-white/10 transition-colors">
                <span className="text-2xl sm:text-3xl font-black text-accent">{num}</span>
                <h3 className="mt-2 sm:mt-3 font-bold text-xs sm:text-base">{title}</h3>
                <p className="mt-1 text-[11px] sm:text-[0.85rem] text-hero-muted leading-tight sm:leading-snug">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section bg-surface scroll-mt-20 py-8 sm:py-14 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 sm:gap-12 px-4 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
          <div>
            <p className="eyebrow text-xs">Questions, answered</p>
            <h2 className="section-title text-2xl sm:text-4xl">Know before you move.</h2>
            <p className="mt-3 sm:mt-5 text-xs sm:text-base leading-relaxed sm:leading-7 text-muted-foreground">
              Still deciding? Call our team for straightforward advice about your route and requirements.
            </p>
            <div className="mt-5 sm:mt-7 flex items-center gap-3 text-sm font-bold text-primary">
              <span className="flex size-10 sm:size-11 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Phone size={18} className="sm:size-[19px]" />
              </span>
              <span>
                <small className="block font-medium text-muted-foreground text-[10px] sm:text-xs">Talk to us</small>
                +91 93503 59213
              </span>
            </div>
          </div>
          <div className="grid gap-2.5 sm:gap-3">
            {faqs.map(([question, answer], i) => (
              <details key={question} className="faq-item rounded-xl" open={i === 0}>
                <summary className="text-xs sm:text-base font-bold py-3 sm:py-4 px-3.5 sm:px-5">
                  <span>{question}</span>
                  <ChevronDown size={18} className="shrink-0" />
                </summary>
                <p className="text-xs sm:text-sm px-3.5 sm:px-5 pb-3.5 sm:pb-5">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote" className="bg-accent py-8 sm:py-14 text-accent-foreground scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-5 sm:mb-7 flex flex-col justify-between gap-2 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em]">Instant Price Estimate</p>
              <h2 className="mt-1 sm:mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-extrabold">Get your free moving estimate.</h2>
            </div>
            <div className="flex items-center gap-1 text-xs sm:text-sm">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="currentColor" />
              ))}
              <span className="ml-2 font-semibold">Trusted by 52,000+ families across India</span>
            </div>
          </div>
          <QuoteForm compact />
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 pb-28 pt-12 text-white md:pb-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          {/* Top grid: Brand + offices */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 border-b border-white/10 pb-10">

            {/* Col 1 – Brand + about */}
            <div className="lg:col-span-1">
              <Brand inverse />
              <p className="mt-4 text-sm leading-6 text-slate-400">
                Welcome to VRL Cargo Packers and Movers, trusted name for reliable and hassle-free packing and moving services across India.
              </p>
              <a
                href="mailto:info@vrlcargopackersandmovers.in"
                className="mt-4 flex items-center gap-2 text-sm text-slate-300 hover:text-red-400 transition-colors"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-red-700/80">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </span>
                info@vrlcargopackersandmovers.in
              </a>
            </div>

            {/* Col 2 – Head Office */}
            <div>
              <h3 className="text-base font-extrabold text-white mb-3 uppercase tracking-wide">Head Office</h3>
              <div className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-red-700/80 mt-0.5">
                  <MapPin size={14} className="text-white" />
                </span>
                <address className="not-italic">
                  Shop 08, Village Tishiyana,<br />
                  Main Road, Near Devi Mandir,<br />
                  Near Hanuman Mandir,<br />
                  Tusiana Village, Knowledge Park V,<br />
                  Greater Noida, Tusyana,<br />
                  Uttar Pradesh – 201306
                </address>
              </div>
            </div>

            {/* Col 3 – Branch Offices */}
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-base font-extrabold text-white mb-3 uppercase tracking-wide">Delhi Branch Office</h3>
                <div className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-red-700/80 mt-0.5">
                    <MapPin size={14} className="text-white" />
                  </span>
                  <address className="not-italic">
                    Shop No.35, Near Camunity Center,<br />
                    Bharthal Village, Delhi – 110077
                  </address>
                </div>
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white mb-3 uppercase tracking-wide">Gurgaon Branch Office</h3>
                <div className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-red-700/80 mt-0.5">
                    <MapPin size={14} className="text-white" />
                  </span>
                  <address className="not-italic">
                    Shop No. 05,<br />
                    Near Bajal Service Center,<br />
                    Ashok Vihar Phase 3,<br />
                    Sector 5, Gurgaon – 122001
                  </address>
                </div>
              </div>
            </div>

            {/* Col 4 – Phone + quick links */}
            <div>
              <h3 className="text-base font-extrabold text-white mb-3 uppercase tracking-wide">Contact Us</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+919350359213"
                  className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-red-400 transition-colors"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-red-700/80">
                    <Phone size={14} className="text-white" />
                  </span>
                  +91 9350359213
                </a>
                <a
                  href="tel:+919350159213"
                  className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-red-400 transition-colors"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-red-700/80">
                    <Phone size={14} className="text-white" />
                  </span>
                  +91 9350159213
                </a>
                <a
                  href={`https://wa.me/${cleanPhone}?text=Hello%20VRL%20Cargo,%20I%20need%20a%20moving%20quote`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-extrabold text-white shadow hover:bg-emerald-700 transition-all"
                >
                  <MessageCircle size={16} /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
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
            <p>Trusted by 52,000+ families across India 🇮🇳</p>
          </div>

        </div>
      </footer>

      {/* FLOATING ACTION PILL AT BOTTOM (From Screenshot) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 sm:gap-2 rounded-full border border-red-300/60 bg-white/95 px-3 py-1.5 sm:px-5 sm:py-2 shadow-2xl backdrop-blur-md">
        <a
          href="#services"
          className="flex flex-col sm:flex-row items-center gap-1 px-2.5 py-1 text-[10px] sm:text-xs font-extrabold text-slate-700 hover:text-red-600 transition-colors"
        >
          <Wrench size={15} className="text-red-600" />
          <span>Services</span>
        </a>
        <div className="h-4 w-px bg-slate-200" />
        <a
          href={`https://wa.me/${cleanPhone}?text=Hello%20VRL%20Cargo,%20I%20need%20a%20quote`}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col sm:flex-row items-center gap-1 px-2.5 py-1 text-[10px] sm:text-xs font-extrabold text-slate-700 hover:text-emerald-600 transition-colors"
        >
          <MessageCircle size={15} className="text-emerald-600" />
          <span>WhatsApp</span>
        </a>
        <div className="h-4 w-px bg-slate-200" />
        <a
          href={`tel:${phone}`}
          className="flex flex-col sm:flex-row items-center gap-1 px-2.5 py-1 text-[10px] sm:text-xs font-extrabold text-slate-700 hover:text-red-600 transition-colors"
        >
          <Phone size={15} className="text-red-600" />
          <span>Call</span>
        </a>
        <div className="h-4 w-px bg-slate-200" />
        <a
          href="#quote"
          className="flex flex-col sm:flex-row items-center gap-1 px-2.5 py-1 text-[10px] sm:text-xs font-extrabold text-red-600 hover:text-red-700 transition-colors"
        >
          <FileEdit size={15} className="text-red-600" />
          <span>Get Quote</span>
        </a>
      </div>
    </main>
  );
}