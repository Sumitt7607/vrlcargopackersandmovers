import homeShiftingImg from "@/assets/home-shifting.jpg";
import officeShiftingImg from "@/assets/office-shifting.jpg";
import vehicleTransportImg from "@/assets/vehicle-transport.jpg";
import warehousingImg from "@/assets/warehousing.jpg";
import transitInsuranceImg from "@/assets/transit-insurance.jpg";
import petRelocationImg from "@/assets/pet-relocation.jpg";
import sofaWrapImg from "@/assets/blue-sofa-wrap.jpg";
import furnitureWrapImg from "@/assets/furniture-wrapping.png";
import villaPackingImg from "@/assets/home-interior-packing.jpg";
import bikeWrapImg from "@/assets/bike-packing.jpg";
import boxesWrapImg from "@/assets/packing-boxes.png";
import teamMovingImg from "@/assets/vrl-moving-team.jpg";
import heroCarrierImg from "@/assets/hero-carrier-live.jpg";

export interface ServiceDetail {
  id: string;
  slug: string;
  category: "residential" | "vehicles" | "protection";
  categoryLabel: string;
  title: string;
  tagline: string;
  badge: string;
  badgeColor: string;
  copy: string;
  heroImage: string;
  galleryImages: { url: string; caption: string }[];
  highlights: string[];
  timeline: string;
  coverage: string;
  included: string[];
  process: { step: string; title: string; desc: string }[];
  whyChoose: string[];
  faq: { q: string; a: string }[];
  whatsappText: string;
}

export const servicesData: ServiceDetail[] = [
  {
    id: "home",
    slug: "home-shifting",
    category: "residential",
    categoryLabel: "Residential Shifting",
    title: "Home Shifting",
    tagline: "Stress-Free Door-to-Door Household Relocation Across India",
    badge: "Most Popular",
    badgeColor: "bg-amber-500 text-white",
    copy: "Room-by-room multi-layer packing, fragile item crating, and door-to-door unpacking with zero damage guarantee.",
    heroImage: homeShiftingImg,
    galleryImages: [
      { url: sofaWrapImg, caption: "50-Micron Waterproof Sofa Wrap Protection" },
      { url: furnitureWrapImg, caption: "Heavy-Duty Wooden Furniture Padding" },
      { url: villaPackingImg, caption: "Complete Room-by-Room Packing & Tagging" },
      { url: boxesWrapImg, caption: "Multi-Layer Corrugated Box Sealing" },
    ],
    highlights: [
      "Multi-layer bubble wrap & corrugated boxes",
      "Furniture dismantling & reassembly included",
      "Dedicated floor supervisor for safe unloading",
      "Electronic & glassware wooden crating",
    ],
    timeline: "1 - 3 Days (Domestic Relocation)",
    coverage: "All-India Door-to-Door Coverage",
    included: [
      "Heavy duty cardboard boxes & 3-layer bubble wrap",
      "Professional dismantling of beds, wardrobes & dining tables",
      "Safe loading & unloading with tail-lift hydraulic trucks",
      "Unpacking and item placement at your new residence",
      "Floor protection & scratch-proof transit blanket layers",
      "Debris removal and post-move cleanup assistance",
    ],
    process: [
      { step: "01", title: "Pre-Move Survey", desc: "Digital or in-person evaluation of inventory to give transparent, fixed pricing." },
      { step: "02", title: "Room-by-Room Packing", desc: "Color-coded labeling with multi-layer bubble wrap, edge guards & foam." },
      { step: "03", title: "Safe Loading & Transit", desc: "GPS-tracked enclosed container trucks with shock-absorbing suspension." },
      { step: "04", title: "Unpacking & Setup", desc: "Careful unloading, furniture re-assembly and placing goods where you want." },
    ],
    whyChoose: [
      "27+ years of experience with 52,000+ verified moves.",
      "100% background-verified professional packing team.",
      "Complete transit insurance options for total peace of mind.",
      "Zero hidden charges with all tolls, taxes, and packing included.",
    ],
    faq: [
      { q: "How much time before moving should I book?", a: "We recommend booking 2 to 4 days in advance, though urgent same-day or next-day moves can also be accommodated based on slot availability." },
      { q: "Do you provide packing boxes and materials?", a: "Yes, our team brings high-grade bubble wrap, corrugated sheets, waterproof stretch film, foam chocks, and heavy-duty cartons." },
      { q: "Are appliances like refrigerators and AC dismantled?", a: "Yes, our technicians handle standard appliance unplugging, secure packing, and basic furniture dismantling." },
    ],
    whatsappText: "Hello VRL Cargo, I am looking for Home Shifting services. Please share an instant quote.",
  },
  {
    id: "office",
    slug: "office-relocation",
    category: "residential",
    categoryLabel: "Commercial Shifting",
    title: "Office Relocation",
    tagline: "Organised Corporate & IT Infrastructure Relocation with Zero Downtime",
    badge: "Zero Downtime",
    badgeColor: "bg-blue-600 text-white",
    copy: "Organised business & IT equipment relocation structured to eliminate operational downtime.",
    heroImage: officeShiftingImg,
    galleryImages: [
      { url: officeShiftingImg, caption: "Office Modular Desks & IT Hardware Relocation" },
      { url: boxesWrapImg, caption: "Confidential File & Document Tagged Crates" },
      { url: teamMovingImg, caption: "Trained Corporate Moving Crew" },
    ],
    highlights: [
      "Server rack, PC & electronics protection",
      "Weekend & night relocation options",
      "Systematic floor plan inventory mapping",
      "Anti-static packaging for servers & laptops",
    ],
    timeline: "24 - 48 Hours Express Execution",
    coverage: "Pan-India Corporate Transfer",
    included: [
      "Antistatic wrapping for IT hardware, servers & monitors",
      "Modular workstation & conference desk moving",
      "Document & file color-coded tagging by department",
      "Post-move seating & desk layout setup",
      "Dedicated corporate move coordinator on-site",
      "Weekend or overnight moving to ensure zero office downtime",
    ],
    process: [
      { step: "01", title: "Floor Plan Mapping", desc: "Pre-numbering workstations, cubicles, server rooms and files." },
      { step: "02", title: "IT & Server Packing", desc: "Anti-static bubble wrap, screen protectors, and reinforced crates." },
      { step: "03", title: "Swift Transit", desc: "Dedicated fleets with synchronized logistics and real-time tracking." },
      { step: "04", title: "Immediate Desk Setup", desc: "Deploying items according to the new office blueprint so work resumes on Monday." },
    ],
    whyChoose: [
      "Trusted by over 450+ corporate enterprises across India.",
      "Dedicated weekend execution ensuring zero productive hours lost.",
      "Strict data privacy and sealed document crates for confidentiality.",
      "Single-point account manager throughout the relocation lifecycle.",
    ],
    faq: [
      { q: "Can the move happen during weekend or holidays?", a: "Yes, most of our corporate relocations happen on Friday night or over the weekend so your employees resume work normally on Monday morning." },
      { q: "How do you protect sensitive server room equipment?", a: "We use anti-static foam wraps, padded thermal crates, and dedicated air-suspension vehicles for server racks." },
    ],
    whatsappText: "Hello VRL Cargo, I need an Office Relocation proposal for our business. Please connect with me.",
  },
  {
    id: "car",
    slug: "vehicle-transport",
    category: "vehicles",
    categoryLabel: "Vehicle Logistics",
    title: "Vehicle Transport",
    tagline: "Closed Hydraulic Car & Bike Carriers with Real-Time GPS Tracking",
    badge: "GPS Tracked",
    badgeColor: "bg-emerald-600 text-white",
    copy: "Enclosed hydraulic carriers & door-to-door transit for luxury cars and two-wheelers with zero transit scratches.",
    heroImage: vehicleTransportImg,
    galleryImages: [
      { url: heroCarrierImg, caption: "Modern Hydraulic Multi-Level Car Carrier" },
      { url: bikeWrapImg, caption: "3-Layer Shock Absorbing Bike Bubble Wrap" },
      { url: vehicleTransportImg, caption: "Hydraulic Ramp Vehicle Loading" },
    ],
    highlights: [
      "Covered single & multi-car carriers",
      "Pre-transit 21-point damage report",
      "Real-time GPS tracking link for owner",
      "Wheel chocks & custom safety straps",
    ],
    timeline: "3 - 7 Days (Depending on Distance)",
    coverage: "Doorstep Pickup & Delivery Nationwide",
    included: [
      "Doorstep pickup & destination dropoff",
      "Hydraulic ramp smooth loading (no chassis scrape)",
      "Wheel chocks & custom safety harness straps",
      "All-India covered carrier network coverage",
      "21-point vehicle inspection report with photos",
      "Real-time GPS tracking updates provided via WhatsApp",
    ],
    process: [
      { step: "01", title: "Inspection & Report", desc: "21-point condition check with photo logging before loading." },
      { step: "02", title: "Protective Wrapping", desc: "Bubble wrap & film for bike mirrors, exhaust, paintwork, and car glass." },
      { step: "03", title: "Hydraulic Loading", desc: "Loaded onto covered carriers with non-scratch wheel chocks & safety belts." },
      { step: "04", title: "Doorstep Handover", desc: "Final verification and handover with fuel/battery checklist." },
    ],
    whyChoose: [
      "100% enclosed car carriers protecting against dust, rain & highway stone chips.",
      "Zero unnecessary driving — your vehicle travels securely on our carrier.",
      "Live GPS tracking link so you always know vehicle location.",
      "Comprehensive insurance cover included with declared value protection.",
    ],
    faq: [
      { q: "Can I keep personal belongings inside the car?", a: "You can keep light household luggage in the boot (trunk), provided no hazardous or prohibited items are placed." },
      { q: "How is my two-wheeler/bike protected during transit?", a: "Bikes are wrapped in 3 layers of heavy-duty bubble wrap and secured upright on dedicated carrier mounts." },
    ],
    whatsappText: "Hello VRL Cargo, I want to transport my car/bike. Please share price and delivery timeline.",
  },
  {
    id: "warehouse",
    slug: "warehousing-storage",
    category: "vehicles",
    categoryLabel: "Secure Storage",
    title: "Warehousing & Storage",
    tagline: "CCTV-Monitored, Climate-Controlled Household & Commercial Storage",
    badge: "24/7 Monitored",
    badgeColor: "bg-purple-600 text-white",
    copy: "Clean, CCTV-monitored, climate-controlled storage for household goods, furniture, and commercial inventory.",
    heroImage: warehousingImg,
    galleryImages: [
      { url: warehousingImg, caption: "Modern High-Ceiling CCTV Monitored Warehouse" },
      { url: boxesWrapImg, caption: "Palletised & Moisture-Proof Stacked Goods" },
      { url: furnitureWrapImg, caption: "Sealed Long-Term Furniture Protection" },
    ],
    highlights: [
      "Flexible daily, monthly or annual storage",
      "24/7 CCTV surveillance & fire safety",
      "Moisture & pest-proof raised pallets",
      "Digital inventory list with barcode tags",
    ],
    timeline: "Instant Storage & 24h Retrieval Notice",
    coverage: "Major Hubs Across India (2M+ Sq. Ft.)",
    included: [
      "Palletised goods storage & shrink wrapping",
      "Weekly pest treatment & automated dust control",
      "Digital inventory list & barcode tracking",
      "Flexible withdrawal with 24h notice",
      "24/7 round-the-clock security guards & CCTV recording",
      "Fire-safe, flood-proof raised platform warehousing",
    ],
    process: [
      { step: "01", title: "Inventory Barcoding", desc: "Every item is tagged and catalogued into a digital receipt." },
      { step: "02", title: "Protective Shrink Wrapping", desc: "Long-term moisture barrier shrink film for furniture & cartons." },
      { step: "03", title: "Pallet Placement", desc: "Stored on raised, climate-controlled pallets away from floor humidity." },
      { step: "04", title: "On-Demand Delivery", desc: "Delivered to your chosen address whenever you are ready." },
    ],
    whyChoose: [
      "2+ Million sq. ft. of clean, modern warehousing space across India.",
      "Flexible billing — pay only for the volume and duration you use.",
      "Clean, pest-free, climate-managed storage maintaining item condition.",
      "Full insurance coverage available during storage tenure.",
    ],
    faq: [
      { q: "What is the minimum storage period?", a: "We offer flexible storage starting from 1 week up to several years with simple monthly billing." },
      { q: "Can I inspect my goods while in storage?", a: "Yes, you can visit the facility during working hours with a prior appointment." },
    ],
    whatsappText: "Hello VRL Cargo, I need safe Warehousing/Storage space for my goods. Please provide details.",
  },
  {
    id: "insurance",
    slug: "transit-insurance",
    category: "protection",
    categoryLabel: "Risk Protection",
    title: "Transit Insurance",
    tagline: "Comprehensive 100% Declared Value All-Risk Moving Protection",
    badge: "100% Covered",
    badgeColor: "bg-teal-600 text-white",
    copy: "Comprehensive all-risk goods insurance for total peace of mind throughout pickup, transit, and unloading.",
    heroImage: transitInsuranceImg,
    galleryImages: [
      { url: transitInsuranceImg, caption: "Verified Digital Policy Documentation" },
      { url: boxesWrapImg, caption: "Inspected & Sealed Cargo Handling" },
    ],
    highlights: [
      "Instant digital policy issue before pickup",
      "Full declared invoice value protection",
      "Dedicated fast-track claim manager",
      "Zero hidden deductibles or obscure clauses",
    ],
    timeline: "Instant Digital Policy Issuance",
    coverage: "All National Highway & City Routes",
    included: [
      "All-risk transit coverage against accidents & natural hazards",
      "Fire, collision, overturning & theft protection",
      "Accidental loading & unloading handling cover",
      "Transparent zero-hidden-clause terms",
      "Fast-track claims assistance within 7 working days",
      "Digital policy certificate issued directly to your email/phone",
    ],
    process: [
      { step: "01", title: "Value Declaration", desc: "Simple checklist to list declared value of your household items." },
      { step: "02", title: "Instant Policy", desc: "Underwritten by leading national insurance providers." },
      { step: "03", title: "Protected Transit", desc: "Complete coverage active from doorstep loading to delivery." },
      { step: "04", title: "Claim Support", desc: "Quick assessment and settlement in the rare event of damage." },
    ],
    whyChoose: [
      "Partnered with leading government-approved insurance companies.",
      "Full protection for electronics, appliances, furniture, and vehicles.",
      "Clear, upfront policy terms without complicated paperwork.",
      "Direct claim assistance team to help you at every stage.",
    ],
    faq: [
      { q: "How is the insurance premium calculated?", a: "Transit insurance is typically a small percentage (around 1.5% - 3%) of the total declared value of your items." },
      { q: "When is the insurance policy issued?", a: "The digital insurance certificate is generated and sent to you before loading commences." },
    ],
    whatsappText: "Hello VRL Cargo, I want to inquire about Transit Insurance for my upcoming move.",
  },
  {
    id: "pet",
    slug: "pet-relocation",
    category: "protection",
    categoryLabel: "Special Care",
    title: "Pet Relocation",
    tagline: "Safe, Gentle & Climate-Controlled Relocation for Your Furry Family",
    badge: "Vet Approved",
    badgeColor: "bg-rose-600 text-white",
    copy: "Personalised, comfortable, climate-controlled relocation tailored for dogs, cats, and pets across India.",
    heroImage: petRelocationImg,
    galleryImages: [
      { url: petRelocationImg, caption: "Comfortable Air-Conditioned Pet Escort Vehicle" },
      { url: teamMovingImg, caption: "Dedicated Trained Handlers & Hydration Breaks" },
    ],
    highlights: [
      "IATA compliant ventilation crates",
      "In-transit hydration & exercise breaks",
      "Door-to-door trained pet escort handler",
      "Live photo & video WhatsApp updates to owner",
    ],
    timeline: "Express Same-Day / Fast Route",
    coverage: "Pan-India Dedicated Pet Transport",
    included: [
      "Custom sized IATA compliant travel crate selection",
      "Pre-travel veterinary health checklist & comfort kit",
      "Point-to-point AC vehicle escort with gentle driver",
      "Regular scheduled hydration, food & walking breaks",
      "Live video & photo updates sent to pet parents",
      "Door-to-door delivery directly into your hands",
    ],
    process: [
      { step: "01", title: "Pet Comfort Assessment", desc: "Understanding pet breed, diet, temperament, and health needs." },
      { step: "02", title: "Crate Sizing & Prep", desc: "Spacious, breathable, padded travel crates with familiar bedding." },
      { step: "03", title: "Monitored Journey", desc: "Dedicated AC transit with frequent hydration & comfort stops." },
      { step: "04", title: "Happy Reunion", desc: "Safe arrival and delivery directly to your new doorstep." },
    ],
    whyChoose: [
      "Trained, pet-loving handlers who treat your pets like family.",
      "Stress-free temperature controlled environment throughout the trip.",
      "Regular video calls and photos shared during transit.",
      "Zero co-loading with cargo or heavy machinery — dedicated pet care.",
    ],
    faq: [
      { q: "What should I prepare before my pet travels?", a: "Ensure your pet is vaccinated, fed a light meal 3 hours prior, and provide their favorite blanket or toy for comfort." },
      { q: "Can my pet travel by flight or AC road vehicle?", a: "We offer both dedicated AC road transportation and flight cargo relocation based on destination and breed requirements." },
    ],
    whatsappText: "Hello VRL Cargo, I want to book Pet Relocation for my pet. Please share details and quote.",
  },
];
