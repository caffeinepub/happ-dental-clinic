import { BadgeCheck, CheckCircle2, Star } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Ravi Kumar",
    location: "Guntur",
    rating: 5,
    text: "I had severe dental fear and had been avoiding the dentist for years. Dr. Reena completely changed my mindset. She explained every single step before doing anything, and the procedure was absolutely painless. I finally understand why dental care matters!",
    treatment: "Root Canal Treatment",
  },
  {
    name: "Priya Malhotra",
    location: "Pattabhipuram",
    rating: 5,
    text: "Very patient doctor. Dr. Reena listened to all my concerns and explained everything clearly. She never rushed me and made sure I was comfortable. The clinic is immaculately clean and hygienic. Highly recommend to everyone!",
    treatment: "Dental Cleaning",
  },
  {
    name: "Sai Ramesh",
    location: "Guntur",
    rating: 5,
    text: "Feels exactly like a family atmosphere here. The staff is warm, welcoming, and remembers your name. My whole family now comes to Dr. Reena for all our dental needs. Best decision we made!",
    treatment: "Family Dentistry",
  },
  {
    name: "Anitha Devi",
    location: "Guntur",
    rating: 5,
    text: "I was terrified of getting a filling, but the procedure was completely painless. Dr. Reena talked me through everything and I barely felt anything. The before and after difference is amazing — my tooth looks perfectly natural!",
    treatment: "Composite Filling",
  },
  {
    name: "Kiran Prasad",
    location: "Pattabhipuram",
    rating: 5,
    text: "One of the best dental services I've experienced. Professional, hygienic, and very affordable compared to other clinics in Guntur. Dr. Reena's honesty about treatment options really impressed me — no unnecessary upselling.",
    treatment: "Scaling & Cleaning",
  },
  {
    name: "Lakshmi Reddy",
    location: "Guntur",
    rating: 5,
    text: "Brought my 7-year-old daughter here and Dr. Reena was incredible with her. She made my daughter feel safe and comfortable. The cavity treatment was done so gently — my daughter actually wants to come back! That says everything.",
    treatment: "Pediatric Dentistry",
  },
  {
    name: "Venkat Naidu",
    location: "Guntur",
    rating: 5,
    text: "The clinic ambience is clean and modern. Dr. Reena explained my gum treatment thoroughly and I could see immediate improvement. Reasonable cost and excellent service. I've recommended this clinic to all my colleagues.",
    treatment: "Gum Treatment",
  },
  {
    name: "Suresh Babu",
    location: "Pattabhipuram",
    rating: 5,
    text: "Had my wisdom tooth extraction done here. I was expecting a traumatic experience but Dr. Reena made it smooth and painless. Recovery was quick and she gave excellent aftercare instructions. Truly a skilled and caring doctor.",
    treatment: "Tooth Extraction",
  },
  {
    name: "Meena Kumari",
    location: "Guntur",
    rating: 5,
    text: "I was recommended HAPP Dental by three different friends and I understand why now. Dr. Reena is everything they said — patient, gentle, thorough, and genuinely caring. She treats you like a person, not just a patient.",
    treatment: "Cap & Crown",
  },
  {
    name: "Rajesh Varma",
    location: "Guntur",
    rating: 5,
    text: "Coming from someone who hadn't been to a dentist in 8 years — Dr. Reena made my return to dentistry completely fear-free. No judgment, no rush, just clear explanations and gentle treatment. HAPP Dental deserves every star.",
    treatment: "Full Dental Checkup",
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

export function TestimonialsPage() {
  return (
    <div className="w-full pt-20 lg:pt-24">
      {/* Hero */}
      <section className="py-16 lg:py-24 gradient-teal-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[oklch(0.85_0.1_187)] blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 mb-5">
              <Star size={14} className="text-[oklch(0.85_0.1_187)]" />
              <span className="text-white text-xs font-body font-semibold tracking-wide">
                Patient Stories
              </span>
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl text-white leading-tight mb-4">
              Real Patients,{" "}
              <span className="text-[oklch(0.85_0.1_187)]">Real Smiles</span>
            </h1>
            <p className="font-body text-white/85 text-lg leading-relaxed">
              The most honest measure of our care is the experience of our
              patients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust badges banner */}
      <div className="bg-white border-b border-[oklch(0.88_0.035_190)] py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-12">
          {[
            { label: "5-Star Ratings", value: "10+" },
            { label: "Happy Patients", value: "500+" },
            { label: "Years of Trust", value: "9+" },
            { label: "Families Served", value: "200+" },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-center gap-3 text-center">
              <div>
                <div className="font-display font-black text-2xl text-gradient-teal">
                  {value}
                </div>
                <div className="text-xs font-body text-[oklch(0.55_0.05_210)]">
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Grid */}
      <section className="py-16 lg:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={i}
                variants={fadeUp}
                data-ocid={i < 5 ? `testimonials.item.${i + 1}` : undefined}
                className="card-soft p-6 flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={15}
                      className={
                        s <= t.rating
                          ? "text-amber-400 fill-amber-400"
                          : "text-[oklch(0.88_0.035_190)]"
                      }
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-body text-sm text-[oklch(0.4_0.04_220)] leading-relaxed flex-1 mb-4 italic">
                  "{t.text}"
                </blockquote>

                {/* Treatment tag */}
                <div className="mb-4">
                  <span className="inline-block text-xs font-body font-semibold text-[oklch(0.47_0.09_202)] bg-[oklch(0.94_0.03_187)] px-3 py-1 rounded-full">
                    {t.treatment}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center justify-between border-t border-[oklch(0.88_0.035_190)] pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full gradient-teal flex items-center justify-center flex-shrink-0">
                      <span className="font-display font-bold text-white text-sm">
                        {t.name[0]}
                      </span>
                    </div>
                    <div>
                      <p className="font-display font-semibold text-sm text-[oklch(0.22_0.045_210)]">
                        {t.name}
                      </p>
                      <p className="text-xs font-body text-[oklch(0.55_0.05_210)]">
                        {t.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-body text-[oklch(0.55_0.05_202)]">
                    <CheckCircle2
                      size={12}
                      className="text-[oklch(0.8_0.108_187)]"
                    />
                    <span>Verified</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  size={28}
                  className="text-amber-400 fill-amber-400"
                />
              ))}
            </div>
            <h2 className="font-display font-black text-3xl text-[oklch(0.22_0.045_210)] mb-3">
              Join Our Growing Family
            </h2>
            <p className="font-body text-[oklch(0.52_0.05_210)] mb-8">
              Experience the HAPP difference for yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="gradient-teal text-white font-body font-bold px-8 py-4 rounded-full shadow-teal-glow hover:shadow-teal-glow-lg transition-all duration-200 hover:scale-[1.02] inline-block"
              >
                Book Appointment
              </a>
              <a
                href="https://wa.me/918008491391?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20HAPP%20Dental%20Clinic"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[oklch(0.88_0.035_190)] text-[oklch(0.47_0.09_202)] font-body font-bold px-8 py-4 rounded-full hover:border-[oklch(0.8_0.108_187)] transition-all duration-200 inline-block"
              >
                Chat on WhatsApp
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm font-body text-[oklch(0.52_0.05_210)]">
              <BadgeCheck size={16} className="text-[oklch(0.8_0.108_187)]" />
              <span>All reviews from verified patients</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
