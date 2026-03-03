import { Link } from "@tanstack/react-router";
import {
  BadgeCheck,
  CheckCircle2,
  HeartHandshake,
  Shield,
  Star,
  Stethoscope,
} from "lucide-react";
import { motion } from "motion/react";

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

const values = [
  {
    icon: HeartHandshake,
    letter: "H",
    word: "Healing",
    description:
      "We believe true healing begins when patients feel safe, heard, and respected — not just treated.",
  },
  {
    icon: Shield,
    letter: "A",
    word: "Assurance",
    description:
      "Every step of your treatment is explained clearly so you always know what's happening and why.",
  },
  {
    icon: Stethoscope,
    letter: "P",
    word: "Precision",
    description:
      "We combine modern techniques with careful attention to detail for outcomes that last.",
  },
  {
    icon: Star,
    letter: "P",
    word: "Patient-First",
    description:
      "Your comfort, timeline, and budget are at the center of every clinical decision we make.",
  },
];

const commitments = [
  "No unnecessary procedures — we recommend only what you truly need",
  "Clear upfront pricing — no surprises, no hidden costs",
  "Explaining everything in plain language before we begin",
  "Gentle techniques that minimize discomfort at every step",
  "Maintaining the highest standards of hygiene and sterilization",
  "Building long-term relationships with patients and their families",
];

const milestones = [
  {
    year: "2015",
    title: "The Beginning",
    text: "Dr. Reena opened HAPP Dental in Pattabhipuram with one vision: to create a dental clinic where patients feel safe, not scared.",
  },
  {
    year: "2017",
    title: "Growing Trust",
    text: "Word spread. The clinic became known for its gentle approach, patient education, and zero-fear environment. Families started bringing their children.",
  },
  {
    year: "2019",
    title: "Modern Upgrades",
    text: "Invested in modern dental equipment and sterilization systems, maintaining the same warm, approachable atmosphere patients had come to love.",
  },
  {
    year: "2022",
    title: "Community Choice",
    text: "Recognized as one of Guntur's most trusted dental clinics. Hundreds of families choose HAPP Dental for all their dental care needs.",
  },
  {
    year: "Today",
    title: "Still Growing",
    text: "Still led by Dr. Reena with the same patient-first philosophy that started it all. Every day is a chance to transform a fearful patient into a confident one.",
  },
];

export function AboutPage() {
  return (
    <div className="w-full pt-20 lg:pt-24">
      {/* Hero */}
      <section className="py-20 lg:py-28 gradient-teal-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[oklch(0.85_0.1_187)] blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
          >
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 mb-6">
              <BadgeCheck size={14} className="text-[oklch(0.85_0.1_187)]" />
              <span className="text-white text-xs font-body font-semibold tracking-wide">
                Our Story
              </span>
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              About{" "}
              <span className="text-[oklch(0.85_0.1_187)]">HAPP Dental</span>
            </h1>
            <p className="font-body text-white/85 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              A clinic built not just to treat teeth, but to transform the way
              people experience dental care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* HAPP Meaning */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
            >
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[oklch(0.22_0.045_210)] mb-6">
                The Name <span className="text-gradient-teal">HAPP</span>
              </h2>
              <p className="font-body text-lg text-[oklch(0.45_0.04_220)] leading-relaxed mb-6">
                Every letter in HAPP represents a commitment we make to every
                patient who walks through our doors:
              </p>
              <p className="font-body text-[oklch(0.45_0.04_220)] leading-relaxed">
                When Dr. Reena named this clinic, she wanted it to reflect
                something real — the four principles she refuses to compromise
                on, no matter what.
              </p>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 gradient-teal text-white font-body font-bold px-7 py-3.5 rounded-full shadow-teal-glow hover:shadow-teal-glow-lg transition-all duration-200 hover:scale-[1.02]"
                >
                  Book Your Visit
                </Link>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((v, i) => (
                <motion.div
                  key={v.word}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="card-soft p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-2xl gradient-teal flex items-center justify-center flex-shrink-0">
                      <span className="font-display font-black text-xl text-white">
                        {v.letter}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-[oklch(0.22_0.045_210)]">
                      {v.word}
                    </h3>
                  </div>
                  <p className="font-body text-sm text-[oklch(0.45_0.04_220)] leading-relaxed">
                    {v.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Reena Section */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-96 rounded-3xl overflow-hidden border-teal-glow">
                  <img
                    src="/assets/generated/dr-reena-portrait.dim_600x700.jpg"
                    alt="Dr. Reena — Chief Dentist"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-teal-glow border border-[oklch(0.88_0.035_190)]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full gradient-teal flex items-center justify-center">
                      <Star size={14} className="text-white fill-white" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm text-[oklch(0.22_0.045_210)]">
                        Trusted
                      </div>
                      <div className="text-xs font-body text-[oklch(0.55_0.05_210)]">
                        Since 2015
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

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
                  The Doctor
                </span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-[oklch(0.22_0.045_210)] mb-3">
                Dr. Reena
              </h2>
              <p className="font-body text-lg text-[oklch(0.47_0.09_202)] italic font-medium mb-6">
                A dentist who listens. A doctor who explains. A human who cares.
              </p>
              <p className="font-body text-[oklch(0.45_0.04_220)] leading-relaxed mb-6">
                Dr. Reena built HAPP Dental Clinic on a simple but powerful
                idea: that the biggest problem in dentistry isn't the procedures
                — it's the fear. When patients are afraid, they avoid care until
                problems become serious.
              </p>
              <p className="font-body text-[oklch(0.45_0.04_220)] leading-relaxed mb-8">
                Her approach has earned the trust of hundreds of families in
                Guntur. Parents bring their children knowing they'll be treated
                gently. Adults who once avoided dentists now come regularly for
                checkups.
              </p>
              <blockquote className="border-l-4 border-[oklch(0.8_0.108_187)] pl-5 py-2 bg-white rounded-r-xl shadow-sm">
                <p className="font-display font-semibold text-base text-[oklch(0.35_0.04_220)] italic">
                  "My goal is not just to treat teeth — but to remove fear."
                </p>
                <cite className="block mt-1 text-xs font-body text-[oklch(0.55_0.05_202)] not-italic font-medium">
                  — Dr. Reena
                </cite>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
            >
              <h2 className="font-display font-black text-3xl sm:text-4xl text-[oklch(0.22_0.045_210)]">
                Our <span className="text-gradient-teal">Journey</span>
              </h2>
            </motion.div>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-[oklch(0.88_0.035_190)] -translate-x-px" />

            <div className="space-y-10">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={i}
                  variants={fadeUp}
                  className={`relative flex items-start gap-6 sm:gap-0 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full gradient-teal border-2 border-white shadow-teal-glow z-10" />

                  {/* Card */}
                  <div
                    className={`ml-16 sm:ml-0 sm:w-5/12 card-soft p-6 ${
                      i % 2 === 0 ? "sm:mr-auto sm:pr-8" : "sm:ml-auto sm:pl-8"
                    }`}
                  >
                    <span className="inline-block gradient-teal text-white text-xs font-body font-bold px-3 py-1 rounded-full mb-3">
                      {milestone.year}
                    </span>
                    <h3 className="font-display font-bold text-base text-[oklch(0.22_0.045_210)] mb-2">
                      {milestone.title}
                    </h3>
                    <p className="font-body text-sm text-[oklch(0.45_0.04_220)] leading-relaxed">
                      {milestone.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-20 lg:py-24 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[oklch(0.22_0.045_210)] mb-10">
              Our Commitments to <span className="text-gradient-teal">You</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {commitments.map((c, i) => (
                <motion.div
                  key={c}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="flex items-start gap-3 card-soft p-4"
                >
                  <CheckCircle2
                    size={18}
                    className="text-[oklch(0.8_0.108_187)] flex-shrink-0 mt-0.5"
                  />
                  <p className="font-body text-sm text-[oklch(0.4_0.04_220)] leading-relaxed">
                    {c}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
