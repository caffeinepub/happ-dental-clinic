import { Link } from "@tanstack/react-router";
import {
  Baby,
  BadgeCheck,
  Banknote,
  Brush,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Crown,
  Droplets,
  HeartHandshake,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { SiWhatsapp } from "react-icons/si";

const trustBadges = [
  { icon: CheckCircle2, label: "Painless Treatments" },
  { icon: HeartHandshake, label: "Friendly Doctors" },
  { icon: Banknote, label: "Affordable Care" },
  { icon: ShieldCheck, label: "Hygienic & Safe" },
];

const whyCards = [
  {
    icon: Zap,
    title: "Gentle & Painless Procedures",
    quotes: [
      '"Procedure was absolutely painless."',
      '"Root canal done very safely, no discomfort."',
    ],
    color: "oklch(0.94_0.03_187)",
    iconColor: "oklch(0.47_0.09_202)",
  },
  {
    icon: Stethoscope,
    title: "Clear Explanations",
    quotes: [
      '"Doctor explained everything patiently."',
      '"Listens carefully and responds clearly."',
    ],
    color: "oklch(0.96_0.02_210)",
    iconColor: "oklch(0.47_0.09_202)",
  },
  {
    icon: Sparkles,
    title: "Hygienic & Modern Clinic",
    quotes: [
      '"Very clean and hygienic environment."',
      '"Ambience really impressed me."',
    ],
    color: "oklch(0.94_0.03_187)",
    iconColor: "oklch(0.47_0.09_202)",
  },
  {
    icon: Banknote,
    title: "Affordable & Honest Pricing",
    quotes: [
      '"Treatment not too expensive at all."',
      '"Reasonable cost compared to others."',
    ],
    color: "oklch(0.96_0.02_210)",
    iconColor: "oklch(0.47_0.09_202)",
  },
  {
    icon: HeartHandshake,
    title: "Friendly & Caring Doctors",
    quotes: [
      '"Feels like a family atmosphere."',
      '"Doctor was very cordial and kind."',
    ],
    color: "oklch(0.94_0.03_187)",
    iconColor: "oklch(0.47_0.09_202)",
  },
  {
    icon: Baby,
    title: "Family & Child Friendly",
    quotes: [
      '"So careful with my 7-year-old daughter."',
      '"Kids feel safe and comfortable here."',
    ],
    color: "oklch(0.96_0.02_210)",
    iconColor: "oklch(0.47_0.09_202)",
  },
];

const services = [
  {
    icon: Zap,
    name: "Root Canal Treatment",
    tagline: "Safe, painless, long-lasting.",
  },
  {
    icon: Droplets,
    name: "Dental Cleaning & Scaling",
    tagline: "Fresh breath. Healthier gums.",
  },
  { icon: Crown, name: "Caps & Crowns", tagline: "Restore strength & beauty." },
  { icon: Brush, name: "Fillings", tagline: "Natural-looking restorations." },
  {
    icon: HeartHandshake,
    name: "Gum Treatment",
    tagline: "Gentle and effective care.",
  },
  {
    icon: Baby,
    name: "Pediatric Dentistry",
    tagline: "Stress-free care for kids.",
  },
  {
    icon: ShieldCheck,
    name: "Tooth Extraction",
    tagline: "Safe and comfortable removal.",
  },
];

const testimonials = [
  {
    id: 1,
    text: "I had fear earlier but this clinic completely changed my mindset. Dr. Reena made me feel so safe and comfortable throughout.",
    name: "Ravi K.",
    location: "Guntur",
  },
  {
    id: 2,
    text: "Very patient doctor. Explained everything clearly before starting any procedure. I finally understand my dental health!",
    name: "Priya M.",
    location: "Pattabhipuram",
  },
  {
    id: 3,
    text: "Feels exactly like a family atmosphere. The entire staff is warm, welcoming, and genuinely caring.",
    name: "Sai R.",
    location: "Guntur",
  },
  {
    id: 4,
    text: "The procedure was completely painless. I was so worried before but everything went smoothly. Highly recommend!",
    name: "Anitha D.",
    location: "Guntur",
  },
  {
    id: 5,
    text: "One of the best dental services in Guntur. Professional, hygienic, and affordable. Will definitely return!",
    name: "Kiran P.",
    location: "Pattabhipuram",
  },
];

const faqs = [
  {
    q: "Is root canal painful?",
    a: "Not at all! At HAPP Dental, we use modern techniques and local anesthesia to ensure your root canal is completely comfortable. Most patients are surprised at how painless the procedure is. Dr. Reena takes extra care to ensure zero discomfort.",
  },
  {
    q: "How much does treatment cost?",
    a: "We believe in transparent, affordable pricing. Costs vary by treatment: Cleaning starts at ₹500, Fillings from ₹800, Root Canal from ₹3,000–₹6,000, Caps/Crowns from ₹3,500. We always discuss costs upfront before starting any treatment.",
  },
  {
    q: "How many sittings do I need?",
    a: "It depends on the treatment. Cleaning and simple fillings are usually done in one sitting. Root canal treatment typically takes 2–3 appointments. We'll give you a clear treatment plan during your first visit so you know exactly what to expect.",
  },
  {
    q: "Do you treat children?",
    a: "Absolutely! We specialize in child-friendly dentistry. Our gentle approach, friendly staff, and calming clinic environment make dental visits stress-free for children. We encourage parents to bring children early to build positive dental habits.",
  },
  {
    q: "Do you accept EHS?",
    a: "Please contact us directly at 08008491391 or visit the clinic for the latest information on insurance and EHS acceptance. We're happy to work with patients on payment options to make quality dental care accessible to everyone.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function HomePage() {
  const [anxietyBannerVisible, setAnxietyBannerVisible] = useState(true);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevTestimonial = () =>
    setTestimonialIndex(
      (i) => (i - 1 + testimonials.length) % testimonials.length,
    );
  const nextTestimonial = () =>
    setTestimonialIndex((i) => (i + 1) % testimonials.length);

  return (
    <div className="w-full">
      {/* Anxiety Banner */}
      <AnimatePresence>
        {anxietyBannerVisible && (
          <motion.div
            initial={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
            style={{ marginTop: "64px" }}
          >
            <div className="bg-peach-soft border-b border-[oklch(0.83_0.1_40/0.4)] py-2.5 px-4">
              <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
                <span className="text-sm font-body font-medium text-[oklch(0.4_0.08_35)]">
                  😊 Scared of dental treatments?{" "}
                  <a
                    href="tel:08008491391"
                    className="font-semibold underline hover:no-underline"
                  >
                    Talk to us first — we promise to listen.
                  </a>
                </span>
                <button
                  type="button"
                  onClick={() => setAnxietyBannerVisible(false)}
                  className="ml-2 p-1 rounded-full hover:bg-[oklch(0.83_0.1_40/0.3)] transition-colors text-[oklch(0.4_0.08_35)]"
                  aria-label="Dismiss"
                >
                  <X size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section
        className={`relative min-h-screen flex items-center justify-center overflow-hidden hero-noise ${!anxietyBannerVisible ? "mt-16 lg:mt-20" : ""}`}
      >
        {/* Base gradient — deep, luminous, multi-layer */}
        <div className="absolute inset-0 gradient-teal-hero" />

        {/* Photo overlay — soft luminosity blend */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-clinic.dim_1400x800.jpg')",
            opacity: 0.12,
            mixBlendMode: "luminosity",
          }}
        />

        {/* Bottom cinematic fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 40%, oklch(0.24 0.07 210 / 0.7) 100%)",
          }}
        />

        {/* Top-left bloom orb */}
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.75 0.16 183 / 0.22) 0%, transparent 70%)",
            filter: "blur(1px)",
          }}
        />

        {/* Bottom-right deep orb */}
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.38 0.1 200 / 0.3) 0%, transparent 65%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
          {/* "We Explain Before We Treat" badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{
              background: "oklch(1 0 0 / 0.12)",
              backdropFilter: "blur(12px)",
              border: "1px solid oklch(1 0 0 / 0.22)",
              boxShadow: "0 2px 12px -2px oklch(0 0 0 / 0.15)",
            }}
          >
            <BadgeCheck size={15} className="text-[oklch(0.88_0.1_184)]" />
            <span className="text-white text-xs font-body font-semibold tracking-wide">
              We Explain Before We Treat
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white leading-[1.1] mb-6"
            style={{ textShadow: "0 2px 24px oklch(0.2 0.08 210 / 0.5)" }}
          >
            Confident Smiles.
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.88 0.12 182), oklch(0.78 0.14 188))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 20px oklch(0.8 0.108 187 / 0.45))",
              }}
            >
              Compassionate Care.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="font-body text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
            style={{ color: "oklch(0.96 0.01 190 / 0.9)" }}
          >
            At HAPP Dental Clinic, we don't just treat teeth. We listen. We
            explain. We care. And we make every visit comfortable.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
          >
            <Link
              to="/contact"
              data-ocid="hero.book_button"
              className="font-body font-bold text-base px-9 py-4 rounded-full transition-all duration-200 hover:scale-[1.04]"
              style={{
                background: "white",
                color: "oklch(0.38 0.09 202)",
                boxShadow:
                  "0 4px 24px -4px oklch(0.2 0.08 210 / 0.35), 0 1px 4px -1px rgba(0,0,0,0.12)",
              }}
            >
              Book Appointment
            </Link>
            <a
              href="tel:08008491391"
              data-ocid="hero.call_button"
              className="flex items-center justify-center gap-2 font-body font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:scale-[1.02]"
              style={{
                background: "oklch(1 0 0 / 0.13)",
                backdropFilter: "blur(16px)",
                border: "1.5px solid oklch(1 0 0 / 0.38)",
                color: "white",
              }}
            >
              <Phone size={18} />
              Call Now → 08008491391
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {trustBadges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full px-4 py-2"
                style={{
                  background: "oklch(1 0 0 / 0.1)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid oklch(1 0 0 / 0.18)",
                }}
              >
                <Icon size={14} className="text-[oklch(0.88_0.12_184)]" />
                <span
                  className="text-xs font-body font-medium"
                  style={{ color: "oklch(0.97 0.01 190)" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          style={{ color: "oklch(1 0 0 / 0.45)" }}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.2 }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* SECTION 2 — Emotional Connection */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={0}
              variants={fadeUp}
            >
              <div className="inline-flex items-center gap-2 bg-[oklch(0.94_0.03_187)] rounded-full px-4 py-1.5 mb-5">
                <HeartHandshake
                  size={14}
                  className="text-[oklch(0.47_0.09_202)]"
                />
                <span className="text-xs font-body font-semibold text-[oklch(0.47_0.09_202)] tracking-wide">
                  Gentle Dentistry
                </span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[oklch(0.22_0.045_210)] leading-tight mb-6">
                Afraid of dental treatments?{" "}
                <span className="text-gradient-teal">You're not alone.</span>
              </h2>
              <p className="font-body text-[oklch(0.45_0.04_220)] text-lg leading-relaxed mb-6">
                Many of our patients came to us with fear. They left with
                confidence.
              </p>
              <p className="font-body text-[oklch(0.45_0.04_220)] leading-relaxed mb-8">
                We believe dental care should never be stressful. At HAPP
                Dental, we've created a sanctuary where every visit feels like a
                conversation with a friend who happens to know everything about
                teeth.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  "No rushing",
                  "No confusion",
                  "No unnecessary treatment",
                  "No pain",
                ].map((belief) => (
                  <div key={belief} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full gradient-teal flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={11} className="text-white" />
                    </div>
                    <span className="font-body text-sm font-medium text-[oklch(0.35_0.04_220)]">
                      {belief}
                    </span>
                  </div>
                ))}
              </div>

              <p className="font-body text-base font-semibold text-[oklch(0.35_0.04_220)] mb-6 italic">
                Only clarity, comfort, and care.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 gradient-teal text-white font-body font-bold px-7 py-3.5 rounded-full shadow-teal-glow hover:shadow-teal-glow-lg transition-all duration-200 hover:scale-[1.02]"
              >
                Experience Gentle Dentistry
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-teal-glow-lg">
                <img
                  src="/assets/generated/happy-family-smiles.dim_800x600.jpg"
                  alt="Happy family after dental visit"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[oklch(0.47_0.09_202/0.15)] to-transparent" />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-teal-glow border border-[oklch(0.88_0.035_190)]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-teal flex items-center justify-center">
                    <Star size={18} className="text-white fill-white" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-lg text-[oklch(0.22_0.045_210)]">
                      500+
                    </div>
                    <div className="text-xs font-body text-[oklch(0.55_0.05_210)]">
                      Happy Patients
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Why Patients Love Us */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={0}
              variants={fadeUp}
            >
              <div className="inline-flex items-center gap-2 bg-[oklch(0.94_0.03_187)] rounded-full px-4 py-1.5 mb-4">
                <Star size={14} className="text-[oklch(0.47_0.09_202)]" />
                <span className="text-xs font-body font-semibold text-[oklch(0.47_0.09_202)] tracking-wide">
                  Patient Reviews
                </span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[oklch(0.22_0.045_210)] leading-tight">
                Why Patients <span className="text-gradient-teal">Love Us</span>
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={i}
                variants={fadeUp}
                className="card-why p-6 group"
              >
                {/* Icon with glow ring on hover */}
                <div className="mb-5 relative w-fit">
                  <div
                    className="w-13 h-13 w-[52px] h-[52px] rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.96 0.03 186), oklch(0.91 0.05 192))",
                      boxShadow: "0 2px 8px -2px oklch(0.8 0.108 187 / 0.0)",
                    }}
                  >
                    <card.icon
                      size={22}
                      style={{ color: "oklch(0.44 0.1 200)" }}
                    />
                  </div>
                  {/* Glow ring — appears on hover via group */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      boxShadow:
                        "0 0 0 4px oklch(0.8 0.108 187 / 0.18), 0 4px 16px -4px oklch(0.7 0.12 187 / 0.35)",
                    }}
                  />
                </div>

                <h3 className="font-display font-bold text-[15px] text-[oklch(0.2_0.04_215)] mb-3 leading-snug">
                  {card.title}
                </h3>
                <div className="space-y-2.5">
                  {card.quotes.map((q) => (
                    <p
                      key={q}
                      className="text-sm font-body italic leading-relaxed"
                      style={{ color: "oklch(0.54 0.055 205)" }}
                    >
                      {q}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET DR. REENA */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative">
                <div className="w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden border-teal-glow">
                  <img
                    src="/assets/generated/dr-reena-portrait.dim_600x700.jpg"
                    alt="Dr. Reena — Chief Dentist at HAPP Dental Clinic"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {/* "We Explain Before We Treat" badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-3 shadow-teal-glow border border-[oklch(0.88_0.035_190)] max-w-[160px]">
                  <div className="flex items-start gap-2">
                    <BadgeCheck
                      size={16}
                      className="text-[oklch(0.47_0.09_202)] flex-shrink-0 mt-0.5"
                    />
                    <span className="text-xs font-body font-semibold text-[oklch(0.35_0.04_220)] leading-snug">
                      We Explain Before We Treat
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={0}
              variants={fadeUp}
            >
              <div className="inline-flex items-center gap-2 bg-[oklch(0.94_0.03_187)] rounded-full px-4 py-1.5 mb-5">
                <Stethoscope
                  size={14}
                  className="text-[oklch(0.47_0.09_202)]"
                />
                <span className="text-xs font-body font-semibold text-[oklch(0.47_0.09_202)] tracking-wide">
                  Chief Dentist
                </span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[oklch(0.22_0.045_210)] leading-tight mb-3">
                Meet Dr. Reena
              </h2>
              <p className="font-body text-lg text-[oklch(0.47_0.09_202)] font-medium italic mb-6">
                A dentist who listens. A doctor who explains. A human who cares.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Patient-first approach — your comfort is always the priority",
                  "Gentle treatment style tailored to reduce anxiety",
                  "Clear communication — explains every step before acting",
                  "Ethical recommendations — no unnecessary procedures",
                  "Community trusted — hundreds of families rely on her care",
                ].map((quality) => (
                  <div key={quality} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-[oklch(0.8_0.108_187)] flex-shrink-0 mt-0.5"
                    />
                    <p className="font-body text-[oklch(0.4_0.04_220)] text-sm leading-relaxed">
                      {quality}
                    </p>
                  </div>
                ))}
              </div>

              <blockquote className="border-l-4 border-[oklch(0.8_0.108_187)] pl-5 py-2 bg-[oklch(0.96_0.015_190)] rounded-r-xl">
                <p className="font-display font-semibold text-base text-[oklch(0.35_0.04_220)] italic leading-relaxed">
                  "My goal is not just to treat teeth — but to remove fear."
                </p>
                <cite className="block mt-1 text-xs font-body text-[oklch(0.55_0.05_202)] not-italic font-medium">
                  — Dr. Reena, HAPP Dental Clinic
                </cite>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
            >
              <div className="inline-flex items-center gap-2 bg-[oklch(0.94_0.03_187)] rounded-full px-4 py-1.5 mb-4">
                <Stethoscope
                  size={14}
                  className="text-[oklch(0.47_0.09_202)]"
                />
                <span className="text-xs font-body font-semibold text-[oklch(0.47_0.09_202)] tracking-wide">
                  What We Offer
                </span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[oklch(0.22_0.045_210)]">
                Our <span className="text-gradient-teal">Services</span>
              </h2>
              <p className="mt-3 font-body text-[oklch(0.52_0.05_210)]">
                Comprehensive dental care for every member of your family
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {services.map((service, i) => (
              <motion.div
                key={service.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={i}
                variants={fadeUp}
                className="card-soft p-5 group hover:shadow-teal-glow-lg transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[oklch(0.94_0.03_187)] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <service.icon
                    size={20}
                    className="text-[oklch(0.47_0.09_202)]"
                  />
                </div>
                <h3 className="font-display font-bold text-sm text-[oklch(0.22_0.045_210)] mb-1">
                  {service.name}
                </h3>
                <p className="font-body text-xs text-[oklch(0.55_0.05_210)]">
                  {service.tagline}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              data-ocid="services.view_all_button"
              className="inline-flex items-center gap-2 gradient-teal text-white font-body font-bold px-8 py-4 rounded-full shadow-teal-glow hover:shadow-teal-glow-lg transition-all duration-200 hover:scale-[1.02]"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* HYGIENE & SAFETY */}
      <section
        className="py-20 lg:py-28 relative overflow-hidden"
        style={{ background: "oklch(0.32 0.075 205)" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('/assets/generated/clinic-hygiene.dim_800x500.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.32_0.075_205/0.9)] to-[oklch(0.22_0.045_210/0.7)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
            >
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 mb-5">
                <ShieldCheck size={14} className="text-[oklch(0.85_0.1_187)]" />
                <span className="text-xs font-body font-semibold text-[oklch(0.85_0.1_187)] tracking-wide">
                  Safety First
                </span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-8">
                Your Safety Is Our{" "}
                <span className="text-[oklch(0.85_0.1_187)]">Priority</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Sparkles,
                    text: "Sterilized instruments for every patient",
                  },
                  { icon: ShieldCheck, text: "Spotlessly clean environment" },
                  {
                    icon: CheckCircle2,
                    text: "Organized, systematic processes",
                  },
                  { icon: BadgeCheck, text: "Professionally trained team" },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/15"
                  >
                    <Icon
                      size={18}
                      className="text-[oklch(0.85_0.1_187)] flex-shrink-0 mt-0.5"
                    />
                    <p className="font-body text-sm text-white/90 leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="/assets/generated/clinic-hygiene.dim_800x500.jpg"
                alt="Hygienic dental clinic"
                className="w-full h-72 lg:h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.045_210/0.4)] to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS CAROUSEL */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
            >
              <div className="inline-flex items-center gap-2 bg-[oklch(0.94_0.03_187)] rounded-full px-4 py-1.5 mb-4">
                <Star size={14} className="text-[oklch(0.47_0.09_202)]" />
                <span className="text-xs font-body font-semibold text-[oklch(0.47_0.09_202)] tracking-wide">
                  Testimonials
                </span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-[oklch(0.22_0.045_210)]">
                What Our{" "}
                <span className="text-gradient-teal">Patients Say</span>
              </h2>
            </motion.div>
          </div>

          <div className="relative">
            {/* Testimonial card */}
            <div className="card-testimonial px-8 sm:px-12 py-10 sm:py-12 mb-8">
              {/* Typographic quote ornament */}
              <div
                className="font-display font-black leading-none select-none mb-2 text-left"
                style={{
                  fontSize: "5rem",
                  lineHeight: 0.8,
                  color: "oklch(0.85 0.1 187 / 0.25)",
                }}
                aria-hidden="true"
              >
                "
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={18}
                    className="text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Carousel slide */}
              <div className="relative overflow-hidden min-h-[200px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={testimonialIndex}
                    initial={{ opacity: 0, x: 32, y: 6 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: -32, y: -6 }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1] as [
                        number,
                        number,
                        number,
                        number,
                      ],
                    }}
                    data-ocid={`testimonials.item.${testimonialIndex + 1}`}
                    className="text-center"
                  >
                    <blockquote
                      className="font-body text-lg sm:text-xl leading-relaxed font-medium mb-8"
                      style={{ color: "oklch(0.32 0.04 220)" }}
                    >
                      {testimonials[testimonialIndex].text}
                    </blockquote>

                    {/* Avatar + name */}
                    <div className="flex items-center justify-center gap-4">
                      <div
                        className="w-14 h-14 rounded-full gradient-teal flex items-center justify-center flex-shrink-0"
                        style={{
                          boxShadow:
                            "0 0 0 3px oklch(0.8 0.108 187 / 0.25), 0 0 0 6px oklch(0.8 0.108 187 / 0.1), 0 4px 16px -4px oklch(0.47 0.09 202 / 0.4)",
                        }}
                      >
                        <span className="font-display font-black text-white text-lg">
                          {testimonials[testimonialIndex].name[0]}
                        </span>
                      </div>
                      <div className="text-left">
                        <p
                          className="font-display font-bold text-base"
                          style={{ color: "oklch(0.22 0.045 210)" }}
                        >
                          {testimonials[testimonialIndex].name}
                        </p>
                        <p className="font-body text-xs mt-0.5 flex items-center gap-1.5">
                          <span style={{ color: "oklch(0.58 0.055 205)" }}>
                            {testimonials[testimonialIndex].location}
                          </span>
                          <span
                            className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                            style={{
                              background: "oklch(0.94 0.03 187)",
                              color: "oklch(0.44 0.1 200)",
                            }}
                          >
                            <CheckCircle2 size={9} />
                            Verified Patient
                          </span>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-5">
              <button
                type="button"
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  border: "1.5px solid oklch(0.88 0.035 190)",
                  color: "oklch(0.55 0.055 205)",
                }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={17} />
              </button>

              <div className="flex gap-2 items-center">
                {testimonials.map((t, i) => (
                  <button
                    type="button"
                    key={t.id}
                    onClick={() => setTestimonialIndex(i)}
                    className="rounded-full transition-all duration-350"
                    style={{
                      width: i === testimonialIndex ? "24px" : "8px",
                      height: "8px",
                      background:
                        i === testimonialIndex
                          ? "linear-gradient(135deg, oklch(0.8 0.108 187), oklch(0.47 0.09 202))"
                          : "oklch(0.87 0.03 190)",
                    }}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  border: "1.5px solid oklch(0.88 0.035 190)",
                  color: "oklch(0.55 0.055 205)",
                }}
                aria-label="Next testimonial"
              >
                <ChevronRight size={17} />
              </button>
            </div>

            <div className="text-center mt-6">
              <Link
                to="/testimonials"
                className="text-sm font-body font-semibold hover:underline"
                style={{ color: "oklch(0.47 0.09 202)" }}
              >
                Read all patient stories →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
            >
              <h2 className="font-display font-black text-3xl sm:text-4xl text-[oklch(0.22_0.045_210)]">
                Common <span className="text-gradient-teal">Questions</span>
              </h2>
              <p className="mt-3 font-body text-[oklch(0.52_0.05_210)]">
                Answers to what patients ask most
              </p>
            </motion.div>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={i}
                variants={fadeUp}
                data-ocid={`faq.item.${i + 1}`}
                className="card-soft overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="font-display font-semibold text-base text-[oklch(0.22_0.045_210)] pr-4">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-7 h-7 rounded-full bg-[oklch(0.94_0.03_187)] flex items-center justify-center"
                  >
                    <ChevronDown
                      size={16}
                      className="text-[oklch(0.47_0.09_202)]"
                    />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1] as [
                          number,
                          number,
                          number,
                          number,
                        ],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <div className="border-t border-[oklch(0.88_0.035_190)] pt-4">
                          <p className="font-body text-sm text-[oklch(0.45_0.04_220)] leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION & CONTACT */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
            >
              <h2 className="font-display font-black text-3xl sm:text-4xl text-[oklch(0.22_0.045_210)]">
                Find <span className="text-gradient-teal">Us</span>
              </h2>
              <p className="mt-3 font-body text-[oklch(0.52_0.05_210)]">
                Conveniently located in Pattabhipuram, Guntur
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl overflow-hidden shadow-teal-glow border border-[oklch(0.88_0.035_190)] h-80 lg:h-96"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.2!2d80.4516!3d16.3066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDE4JzIzLjgiTiA4MMKwMjcnMDUuOCJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HAPP Dental Clinic Location"
              />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
              className="space-y-5"
            >
              <div className="card-soft p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl gradient-teal flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-[oklch(0.22_0.045_210)] mb-1">
                      Address
                    </h3>
                    <p className="font-body text-sm text-[oklch(0.45_0.04_220)] leading-relaxed">
                      D NO: 3-1-326/3, Pattabhipuram main road,
                      <br />
                      KRISHNA NAGAR 1st line, opp. MASJID,
                      <br />
                      beside HP PETROL BUNK,
                      <br />
                      Pattabhipuram, Guntur, Andhra Pradesh 522006
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-soft p-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl gradient-teal flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-[oklch(0.22_0.045_210)] mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:08008491391"
                      className="font-body text-sm text-[oklch(0.47_0.09_202)] font-semibold hover:underline"
                    >
                      08008491391
                    </a>
                  </div>
                </div>
              </div>

              <div className="card-soft p-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#25d366] flex items-center justify-center flex-shrink-0">
                    <SiWhatsapp size={18} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-[oklch(0.22_0.045_210)] mb-1">
                      WhatsApp
                    </h3>
                    <a
                      href="https://wa.me/918008491391?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20HAPP%20Dental%20Clinic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25d366] text-white font-body font-semibold text-sm px-4 py-2 rounded-full hover:bg-[#22c55e] transition-colors"
                    >
                      <SiWhatsapp size={14} />
                      Book via WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="card-soft p-5">
                <p className="font-body text-sm font-semibold text-[oklch(0.35_0.04_220)] mb-2">
                  Clinic Hours
                </p>
                <div className="space-y-1 text-sm font-body text-[oklch(0.52_0.05_210)]">
                  <div className="flex justify-between">
                    <span>Monday – Saturday</span>
                    <span className="font-semibold text-[oklch(0.47_0.09_202)]">
                      9:00 AM – 7:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold text-[oklch(0.6_0.05_20)]">
                      By Appointment
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 lg:py-28 gradient-teal-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[oklch(0.85_0.1_187)] blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[oklch(0.8_0.108_187)] blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-4">
              Ready for a Healthier,
              <br />
              <span className="text-[oklch(0.85_0.1_187)]">Happier Smile?</span>
            </h2>
            <p className="font-body text-white/80 text-lg mb-10">
              Because you deserve dental care without fear.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-[oklch(0.47_0.09_202)] font-body font-bold text-lg px-10 py-5 rounded-full shadow-2xl hover:shadow-xl transition-all duration-200 hover:scale-[1.03]"
            >
              Book Appointment Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
