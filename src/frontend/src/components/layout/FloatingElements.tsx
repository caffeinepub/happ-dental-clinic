import { motion } from "motion/react";
import { SiWhatsapp } from "react-icons/si";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/918008491391?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20HAPP%20Dental%20Clinic"
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="whatsapp.float_button"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-whatsapp text-white shadow-xl"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <SiWhatsapp size={26} />
    </motion.a>
  );
}
