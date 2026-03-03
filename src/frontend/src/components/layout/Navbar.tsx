import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking any link (handled by Link onClick)
  const closeMobileMenu = () => setMobileOpen(false);

  const links = [
    { to: "/", label: "Home", ocid: "nav.home_link" },
    { to: "/about", label: "About", ocid: "nav.about_link" },
    { to: "/services", label: "Services", ocid: "nav.services_link" },
    {
      to: "/testimonials",
      label: "Testimonials",
      ocid: "nav.testimonials_link",
    },
    { to: "/contact", label: "Contact", ocid: "nav.contact_link" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[oklch(0.88_0.035_190)]"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-full gradient-teal flex items-center justify-center shadow-teal-glow flex-shrink-0">
                <span className="text-white font-display font-black text-sm">
                  H
                </span>
              </div>
              <div className="leading-tight">
                <span className="font-display font-bold text-base text-teal tracking-tight block">
                  HAPP DENTAL
                </span>
                <span className="text-[10px] text-[oklch(0.6_0.06_202)] font-body tracking-widest uppercase block -mt-0.5">
                  CLINIC
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid={link.ocid}
                  className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all duration-200 ${
                    location.pathname === link.to
                      ? "text-[oklch(0.47_0.09_202)] bg-[oklch(0.94_0.02_190)]"
                      : "text-[oklch(0.35_0.04_220)] hover:text-[oklch(0.47_0.09_202)] hover:bg-[oklch(0.96_0.015_190)]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Book CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/contact"
                data-ocid="nav.book_button"
                className="gradient-teal text-white font-body font-semibold text-sm px-5 py-2.5 rounded-full shadow-teal-glow hover:shadow-teal-glow-lg transition-all duration-200 hover:scale-[1.03]"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-lg text-[oklch(0.35_0.04_220)] hover:bg-[oklch(0.94_0.02_190)] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-[oklch(0.88_0.035_190)] shadow-lg lg:hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid={link.ocid}
                  onClick={closeMobileMenu}
                  className={`px-4 py-3 rounded-xl text-sm font-body font-medium transition-all ${
                    location.pathname === link.to
                      ? "text-[oklch(0.47_0.09_202)] bg-[oklch(0.94_0.02_190)]"
                      : "text-[oklch(0.35_0.04_220)] hover:bg-[oklch(0.96_0.015_190)]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                data-ocid="nav.book_button"
                onClick={closeMobileMenu}
                className="mt-2 gradient-teal text-white font-body font-semibold text-sm px-5 py-3 rounded-xl text-center shadow-teal-glow"
              >
                Book Appointment
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
