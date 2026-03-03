import { Link } from "@tanstack/react-router";
import {
  Baby,
  BadgeCheck,
  Brush,
  CheckCircle2,
  ChevronDown,
  Clock,
  Crown,
  DollarSign,
  Droplets,
  HeartHandshake,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const services = [
  {
    icon: Zap,
    name: "Root Canal Treatment",
    tagline: "Safe, painless, long-lasting.",
    what: "Root canal treatment (RCT) removes infected pulp from inside the tooth to save it from extraction. Modern techniques make it gentle and effective.",
    why: "You may need an RCT if you have severe tooth pain, sensitivity to hot/cold, swollen gums, or a darkened tooth. It's the best way to save a severely infected tooth.",
    expect:
      "Dr. Reena will numb the area completely before starting. The infected pulp is carefully removed, the canal cleaned, and a crown placed to restore full strength.",
    painful:
      "Not at all. With local anesthesia, you'll feel minimal to no discomfort. Most patients are surprised at how painless modern root canals have become.",
    duration: "1–2 sittings, 45–75 minutes each",
    cost: "₹3,000 – ₹6,000 per tooth",
    color: "oklch(0.94_0.03_187)",
  },
  {
    icon: Droplets,
    name: "Dental Cleaning & Scaling",
    tagline: "Fresh breath. Healthier gums.",
    what: "Professional cleaning removes tartar, plaque, and stains that regular brushing can't reach. Scaling cleans between teeth and below the gumline.",
    why: "Even with regular brushing, tartar builds up over time. Without cleaning, it leads to gum disease, bad breath, and eventually tooth loss.",
    expect:
      "Using ultrasonic instruments and hand scalers, we gently remove tartar buildup. Your teeth will feel noticeably smoother and cleaner after the session.",
    painful:
      "Most patients feel only mild vibrations and water spray. Sensitive teeth may feel slight discomfort, which we manage carefully.",
    duration: "30–45 minutes, usually one sitting",
    cost: "₹500 – ₹1,500",
    color: "oklch(0.96_0.02_210)",
  },
  {
    icon: Crown,
    name: "Caps & Crowns",
    tagline: "Restore strength & beauty.",
    what: "A dental crown is a tooth-shaped cap placed over a damaged tooth to restore its shape, strength, and appearance. Available in ceramic, metal, or PFM.",
    why: "Crowns are recommended after root canal treatment, for cracked or broken teeth, severely worn-down teeth, or as part of a dental bridge.",
    expect:
      "The tooth is prepared by removing a small amount of enamel. An impression is taken, a temporary crown placed while the permanent one is fabricated, then cemented.",
    painful:
      "The preparation is done under local anesthesia, so you won't feel pain. Some sensitivity for a few days after placement is normal.",
    duration: "2 sittings, 1 week apart",
    cost: "₹3,500 – ₹12,000 depending on material",
    color: "oklch(0.94_0.03_187)",
  },
  {
    icon: Brush,
    name: "Fillings",
    tagline: "Natural-looking restorations.",
    what: "Dental fillings repair cavities and minor tooth damage using tooth-colored composite resin for a natural appearance that blends seamlessly.",
    why: "Untreated cavities grow larger and can reach the nerve, causing pain and requiring more complex treatment. Early fillings are quick, painless, and affordable.",
    expect:
      "The decayed portion is removed, the area cleaned, and the composite material applied in layers and hardened with a special light. Quick and painless.",
    painful:
      "Local anesthesia ensures you feel nothing during the procedure. The area may be slightly tender for a day or two afterward.",
    duration: "30–60 minutes, single sitting",
    cost: "₹800 – ₹2,500 per tooth",
    color: "oklch(0.96_0.02_210)",
  },
  {
    icon: HeartHandshake,
    name: "Gum Treatment",
    tagline: "Gentle and effective care.",
    what: "Gum (periodontal) treatment addresses gum disease ranging from early gingivitis to more advanced periodontitis using scaling, root planing, and therapeutic rinses.",
    why: "Bleeding gums, swollen gums, receding gums, or loose teeth are signs of gum disease. Left untreated, it can lead to tooth loss and affect overall health.",
    expect:
      "Deep cleaning below the gumline, root planing to smooth tooth roots, and prescription-strength antimicrobial treatments. Multiple visits may be needed.",
    painful:
      "We use local anesthesia for deeper treatments. Most patients tolerate gum treatment very well and report feeling relief afterward.",
    duration: "1–4 sittings depending on severity",
    cost: "₹1,500 – ₹5,000 depending on extent",
    color: "oklch(0.94_0.03_187)",
  },
  {
    icon: Baby,
    name: "Pediatric Dentistry",
    tagline: "Stress-free care for kids.",
    what: "Specialized dental care designed for children, focusing on prevention, gentle treatment, and building positive associations with dental visits from an early age.",
    why: "Starting dental care early prevents cavities, guides proper tooth development, and most importantly, prevents the development of dental anxiety in children.",
    expect:
      "Dr. Reena is specially trained to work with children. We use child-friendly language, go at the child's pace, and make the experience fun and fear-free.",
    painful:
      "We use the gentlest techniques available and take cues from the child. No child is ever rushed or forced — their comfort is always the priority.",
    duration: "30–45 minutes per visit",
    cost: "₹300 – ₹3,000 depending on treatment",
    color: "oklch(0.96_0.02_210)",
  },
  {
    icon: ShieldCheck,
    name: "Tooth Extraction",
    tagline: "Safe and comfortable removal.",
    what: "Tooth extraction removes a tooth that is beyond saving due to severe decay, infection, crowding, or impaction. We always explore saving options first.",
    why: "Extraction is only recommended when the tooth cannot be saved. Wisdom tooth issues, severe infections, or preparation for orthodontic treatment may require extraction.",
    expect:
      "After thorough numbing with local anesthesia, the tooth is gently loosened and removed. Post-extraction care instructions are provided for quick healing.",
    painful:
      "You'll feel pressure but no pain during the procedure. Mild soreness for 1–2 days afterward is normal and easily managed with prescribed medication.",
    duration: "20–45 minutes per tooth",
    cost: "₹500 – ₹2,500 depending on complexity",
    color: "oklch(0.94_0.03_187)",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

function ServiceCard({
  service,
  index,
}: { service: (typeof services)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      custom={index}
      variants={fadeUp}
      className="card-soft overflow-hidden"
    >
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start gap-4 mb-4">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: `oklch(${service.color})` }}
          >
            <service.icon size={22} className="text-[oklch(0.47_0.09_202)]" />
          </div>
          <div className="flex-1">
            <h2 className="font-display font-bold text-lg text-[oklch(0.22_0.045_210)] leading-tight">
              {service.name}
            </h2>
            <p className="font-body text-sm text-[oklch(0.55_0.05_202)] italic mt-0.5">
              {service.tagline}
            </p>
          </div>
        </div>

        <p className="font-body text-sm text-[oklch(0.45_0.04_220)] leading-relaxed mb-4">
          {service.what}
        </p>

        {/* Quick stats */}
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex items-center gap-1.5 text-xs font-body text-[oklch(0.47_0.09_202)] bg-[oklch(0.94_0.03_187)] px-3 py-1.5 rounded-full">
            <Clock size={12} />
            <span>{service.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-body text-[oklch(0.47_0.09_202)] bg-[oklch(0.94_0.03_187)] px-3 py-1.5 rounded-full">
            <DollarSign size={12} />
            <span>{service.cost}</span>
          </div>
        </div>

        {/* Painless badge */}
        <div className="flex items-start gap-2 bg-[oklch(0.96_0.02_190)] border border-[oklch(0.88_0.035_190)] rounded-xl p-3 mb-4">
          <CheckCircle2
            size={15}
            className="text-[oklch(0.8_0.108_187)] flex-shrink-0 mt-0.5"
          />
          <p className="font-body text-xs text-[oklch(0.45_0.04_220)] leading-relaxed">
            <span className="font-semibold text-[oklch(0.47_0.09_202)]">
              Is it painful?{" "}
            </span>
            {service.painful}
          </p>
        </div>
      </div>

      {/* Expandable */}
      <button
        type="button"
        className="w-full flex items-center justify-between px-6 py-3 border-t border-[oklch(0.88_0.035_190)] text-sm font-body font-semibold text-[oklch(0.47_0.09_202)] hover:bg-[oklch(0.97_0.01_190)] transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <span>{expanded ? "Show less" : "More details"}</span>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-4 space-y-4 border-t border-[oklch(0.88_0.035_190)]">
              <div>
                <h4 className="font-display font-semibold text-sm text-[oklch(0.22_0.045_210)] mb-1">
                  Why you might need it
                </h4>
                <p className="font-body text-sm text-[oklch(0.45_0.04_220)] leading-relaxed">
                  {service.why}
                </p>
              </div>
              <div>
                <h4 className="font-display font-semibold text-sm text-[oklch(0.22_0.045_210)] mb-1">
                  What to expect
                </h4>
                <p className="font-body text-sm text-[oklch(0.45_0.04_220)] leading-relaxed">
                  {service.expect}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function ServicesPage() {
  return (
    <div className="w-full pt-20 lg:pt-24">
      {/* Hero */}
      <section className="py-16 lg:py-24 gradient-teal-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/3 w-80 h-80 rounded-full bg-[oklch(0.85_0.1_187)] blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 mb-5">
              <BadgeCheck size={14} className="text-[oklch(0.85_0.1_187)]" />
              <span className="text-white text-xs font-body font-semibold tracking-wide">
                Comprehensive Dental Care
              </span>
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl text-white leading-tight mb-4">
              Our <span className="text-[oklch(0.85_0.1_187)]">Services</span>
            </h1>
            <p className="font-body text-white/85 text-lg leading-relaxed">
              Every treatment at HAPP Dental is performed with precision,
              patience, and a commitment to your comfort.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust banner */}
      <div className="bg-[oklch(0.94_0.03_187)] border-b border-[oklch(0.88_0.035_190)] py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {[
            "Painless Procedures",
            "Clear Pricing",
            "Expert Care",
            "Hygienic Environment",
          ].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-[oklch(0.47_0.09_202)]" />
              <span className="text-xs font-body font-semibold text-[oklch(0.35_0.04_220)]">
                {t}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.name} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-teal-hero">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-4">
              Not sure which treatment you need?
            </h2>
            <p className="font-body text-white/80 mb-8">
              Come in for a consultation. Dr. Reena will explain everything
              clearly before recommending anything.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-[oklch(0.47_0.09_202)] font-body font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
            >
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
