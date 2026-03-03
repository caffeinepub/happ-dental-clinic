import { Link } from "@tanstack/react-router";
import { Heart, MapPin, Phone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[oklch(0.22_0.045_210)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full gradient-teal flex items-center justify-center">
                <span className="text-white font-display font-black text-base">
                  H
                </span>
              </div>
              <div>
                <span className="font-display font-bold text-lg tracking-tight block text-white">
                  HAPP DENTAL CLINIC
                </span>
                <span className="text-xs text-[oklch(0.72_0.1_187)] tracking-wider block">
                  Gentle Dentistry. Genuine Care.
                </span>
              </div>
            </div>
            <p className="text-[oklch(0.75_0.04_210)] text-sm leading-relaxed max-w-sm font-body">
              Where fear ends and happy smiles begin. We listen, we explain, and
              we make every visit comfortable.
            </p>
            <div className="mt-4 flex items-start gap-2 text-sm text-[oklch(0.72_0.07_200)]">
              <MapPin
                size={16}
                className="mt-0.5 flex-shrink-0 text-[oklch(0.72_0.1_187)]"
              />
              <span className="font-body leading-relaxed">
                D NO: 3-1-326/3, Pattabhipuram main road,
                <br />
                KRISHNA NAGAR 1st line, opp. MASJID,
                <br />
                Pattabhipuram, Guntur, AP 522006
              </span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-[oklch(0.72_0.07_200)]">
              <Phone
                size={16}
                className="flex-shrink-0 text-[oklch(0.72_0.1_187)]"
              />
              <a
                href="tel:08008491391"
                className="font-body hover:text-[oklch(0.8_0.108_187)] transition-colors"
              >
                08008491391
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-widest text-[oklch(0.72_0.1_187)] mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/testimonials", label: "Testimonials" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm font-body text-[oklch(0.75_0.04_210)] hover:text-[oklch(0.8_0.108_187)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-widest text-[oklch(0.72_0.1_187)] mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {[
                "Root Canal Treatment",
                "Dental Cleaning",
                "Caps & Crowns",
                "Pediatric Dentistry",
                "Gum Treatment",
                "Tooth Extraction",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm font-body text-[oklch(0.75_0.04_210)] hover:text-[oklch(0.8_0.108_187)] transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[oklch(0.6_0.04_210)] font-body">
            © {year} HAPP Dental Clinic. All rights reserved.
          </p>
          <p className="text-xs text-[oklch(0.6_0.04_210)] font-body flex items-center gap-1">
            Built with{" "}
            <Heart size={12} className="text-[oklch(0.72_0.1_187)]" /> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[oklch(0.8_0.108_187)] transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
