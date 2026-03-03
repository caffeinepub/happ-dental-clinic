import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Loader2,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { useBookAppointment } from "../hooks/useQueries";

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

export function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    concern: "",
    preferredTime: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const {
    mutate: bookAppointment,
    isPending,
    isError,
    error,
  } = useBookAppointment();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.preferredTime) return;

    bookAppointment(
      {
        name: form.name,
        phone: form.phone,
        concern: form.concern,
        preferredTime: form.preferredTime,
      },
      {
        onSuccess: () => {
          setSubmitted(true);
          setForm({ name: "", phone: "", concern: "", preferredTime: "" });
        },
      },
    );
  };

  return (
    <div className="w-full pt-20 lg:pt-24">
      {/* Hero */}
      <section className="py-16 lg:py-20 gradient-teal-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-[oklch(0.85_0.1_187)] blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display font-black text-4xl sm:text-5xl text-white leading-tight mb-4">
              Book Your{" "}
              <span className="text-[oklch(0.85_0.1_187)]">Appointment</span>
            </h1>
            <p className="font-body text-white/85 text-lg leading-relaxed">
              Take the first step toward a healthier, happier smile. We're here
              and ready to listen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial="hidden"
                animate="visible"
                custom={0}
                variants={fadeUp}
                className="card-soft p-8"
              >
                <h2 className="font-display font-bold text-2xl text-[oklch(0.22_0.045_210)] mb-2">
                  Request an Appointment
                </h2>
                <p className="font-body text-sm text-[oklch(0.52_0.05_210)] mb-8">
                  Fill in the form below and we'll confirm your appointment
                  shortly via WhatsApp or call.
                </p>

                {/* Success State */}
                {submitted && (
                  <motion.div
                    data-ocid="contact.success_state"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-[oklch(0.94_0.03_187)] border border-[oklch(0.8_0.108_187/0.4)] rounded-2xl p-6 mb-6"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full gradient-teal flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-[oklch(0.22_0.045_210)] mb-1">
                          Appointment Requested!
                        </h3>
                        <p className="font-body text-sm text-[oklch(0.45_0.04_220)] leading-relaxed">
                          Thank you! We've received your request and will
                          contact you shortly to confirm your appointment. You
                          can also reach us directly at{" "}
                          <a
                            href="tel:08008491391"
                            className="font-semibold text-[oklch(0.47_0.09_202)] hover:underline"
                          >
                            08008491391
                          </a>
                          .
                        </p>
                        <button
                          type="button"
                          onClick={() => setSubmitted(false)}
                          className="mt-3 text-xs font-body font-semibold text-[oklch(0.47_0.09_202)] hover:underline"
                        >
                          Book another appointment
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Error State */}
                {isError && (
                  <div
                    data-ocid="contact.error_state"
                    className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6 flex items-start gap-3"
                  >
                    <AlertCircle
                      size={18}
                      className="text-red-500 flex-shrink-0 mt-0.5"
                    />
                    <p className="font-body text-sm text-red-700">
                      There was an issue submitting your request.{" "}
                      {error instanceof Error
                        ? error.message
                        : "Please try again or call us directly."}
                    </p>
                  </div>
                )}

                {!submitted && (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="font-body text-sm font-semibold text-[oklch(0.35_0.04_220)]"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          data-ocid="contact.name_input"
                          placeholder="Your full name"
                          value={form.name}
                          onChange={(e) =>
                            setForm((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                          required
                          className="h-11 font-body border-[oklch(0.88_0.035_190)] focus-visible:ring-[oklch(0.8_0.108_187)] rounded-xl"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="font-body text-sm font-semibold text-[oklch(0.35_0.04_220)]"
                        >
                          Phone Number <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="phone"
                          data-ocid="contact.phone_input"
                          type="tel"
                          placeholder="10-digit mobile number"
                          value={form.phone}
                          onChange={(e) =>
                            setForm((prev) => ({
                              ...prev,
                              phone: e.target.value,
                            }))
                          }
                          required
                          className="h-11 font-body border-[oklch(0.88_0.035_190)] focus-visible:ring-[oklch(0.8_0.108_187)] rounded-xl"
                        />
                      </div>
                    </div>

                    {/* Concern */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="concern"
                        className="font-body text-sm font-semibold text-[oklch(0.35_0.04_220)]"
                      >
                        Dental Issue / Concern
                      </Label>
                      <Textarea
                        id="concern"
                        data-ocid="contact.concern_input"
                        placeholder="Describe your dental concern, tooth pain, sensitivity, or any other issue you'd like to discuss..."
                        value={form.concern}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            concern: e.target.value,
                          }))
                        }
                        rows={4}
                        className="font-body border-[oklch(0.88_0.035_190)] focus-visible:ring-[oklch(0.8_0.108_187)] rounded-xl resize-none"
                      />
                    </div>

                    {/* Preferred Time */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="time"
                        className="font-body text-sm font-semibold text-[oklch(0.35_0.04_220)]"
                      >
                        Preferred Time <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={form.preferredTime}
                        onValueChange={(val) =>
                          setForm((prev) => ({ ...prev, preferredTime: val }))
                        }
                        required
                      >
                        <SelectTrigger
                          id="time"
                          data-ocid="contact.time_select"
                          className="h-11 font-body border-[oklch(0.88_0.035_190)] focus:ring-[oklch(0.8_0.108_187)] rounded-xl"
                        >
                          <SelectValue placeholder="Select preferred time slot" />
                        </SelectTrigger>
                        <SelectContent className="font-body">
                          <SelectItem value="Morning (9AM – 12PM)">
                            Morning (9AM – 12PM)
                          </SelectItem>
                          <SelectItem value="Afternoon (12PM – 4PM)">
                            Afternoon (12PM – 4PM)
                          </SelectItem>
                          <SelectItem value="Evening (4PM – 7PM)">
                            Evening (4PM – 7PM)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Submit */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        data-ocid="contact.submit_button"
                        disabled={
                          isPending ||
                          !form.name ||
                          !form.phone ||
                          !form.preferredTime
                        }
                        className="w-full h-12 gradient-teal text-white font-body font-bold text-base rounded-xl shadow-teal-glow hover:shadow-teal-glow-lg transition-all hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                      >
                        {isPending ? (
                          <span
                            data-ocid="contact.loading_state"
                            className="flex items-center gap-2"
                          >
                            <Loader2 size={18} className="animate-spin" />
                            Submitting...
                          </span>
                        ) : (
                          "Book Appointment"
                        )}
                      </Button>
                    </div>

                    <p className="text-center font-body text-xs text-[oklch(0.6_0.04_220)]">
                      We'll confirm via WhatsApp or call within a few hours.
                    </p>
                  </form>
                )}
              </motion.div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-5">
              <motion.div
                initial="hidden"
                animate="visible"
                custom={1}
                variants={fadeUp}
              >
                {/* Quick contact */}
                <div className="card-soft p-6 mb-5">
                  <h3 className="font-display font-bold text-base text-[oklch(0.22_0.045_210)] mb-4">
                    Contact Us Directly
                  </h3>

                  <div className="space-y-3">
                    <a
                      href="tel:08008491391"
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-[oklch(0.96_0.015_190)] transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-full gradient-teal flex items-center justify-center flex-shrink-0">
                        <Phone size={15} className="text-white" />
                      </div>
                      <div>
                        <p className="font-body text-xs text-[oklch(0.55_0.05_210)]">
                          Call us
                        </p>
                        <p className="font-display font-semibold text-sm text-[oklch(0.22_0.045_210)] group-hover:text-[oklch(0.47_0.09_202)] transition-colors">
                          08008491391
                        </p>
                      </div>
                    </a>

                    <a
                      href="https://wa.me/918008491391?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20HAPP%20Dental%20Clinic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-full bg-[#25d366] flex items-center justify-center flex-shrink-0">
                        <SiWhatsapp size={15} className="text-white" />
                      </div>
                      <div>
                        <p className="font-body text-xs text-[oklch(0.55_0.05_210)]">
                          WhatsApp
                        </p>
                        <p className="font-display font-semibold text-sm text-[oklch(0.22_0.045_210)] group-hover:text-green-600 transition-colors">
                          +91 80084 91391
                        </p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="card-soft p-6 mb-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full gradient-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin size={15} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm text-[oklch(0.22_0.045_210)] mb-2">
                        Our Clinic
                      </h3>
                      <p className="font-body text-sm text-[oklch(0.45_0.04_220)] leading-relaxed">
                        D NO: 3-1-326/3, Pattabhipuram main road,
                        <br />
                        KRISHNA NAGAR 1st line,
                        <br />
                        opp. MASJID, beside HP PETROL BUNK,
                        <br />
                        Pattabhipuram, Guntur,
                        <br />
                        Andhra Pradesh 522006
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="card-soft p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full gradient-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock size={15} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-sm text-[oklch(0.22_0.045_210)] mb-3">
                        Clinic Hours
                      </h3>
                      <div className="space-y-1.5">
                        {[
                          { day: "Mon – Fri", time: "9:00 AM – 7:00 PM" },
                          { day: "Saturday", time: "9:00 AM – 5:00 PM" },
                          { day: "Sunday", time: "By Appointment" },
                        ].map(({ day, time }) => (
                          <div
                            key={day}
                            className="flex justify-between text-xs font-body"
                          >
                            <span className="text-[oklch(0.55_0.05_210)]">
                              {day}
                            </span>
                            <span className="font-semibold text-[oklch(0.35_0.04_220)]">
                              {time}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust notes */}
                <div className="mt-5 bg-[oklch(0.94_0.03_187)] border border-[oklch(0.88_0.035_190)] rounded-2xl p-4">
                  <p className="font-display font-semibold text-sm text-[oklch(0.35_0.04_220)] mb-3">
                    What happens after booking?
                  </p>
                  <div className="space-y-2">
                    {[
                      "We'll call or WhatsApp to confirm your slot",
                      "Dr. Reena will review your concern in advance",
                      "Arrive 5 minutes early for your first visit",
                      "We explain everything before we begin",
                    ].map((step, i) => (
                      <div key={step} className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full gradient-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-[10px] font-bold">
                            {i + 1}
                          </span>
                        </div>
                        <p className="font-body text-xs text-[oklch(0.45_0.04_220)] leading-relaxed">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-0">
        <div className="h-80 w-full">
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
        </div>
      </section>
    </div>
  );
}
