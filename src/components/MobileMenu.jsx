import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function MobileMenu({ t, switchTarget, switchLabel }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Botón Hamburguesa */}
      <div className="flex items-center gap-4">
        <a href={switchTarget} className="border-2 border-black px-2 py-1 font-black text-sm hover:bg-black hover:text-white transition-all">
          {switchLabel}
        </a>
        <button onClick={toggleMenu} className="flex flex-col gap-1.5 z-[70]">
          <div className={`w-8 h-1.5 bg-black  duration-300 ${isOpen ? 'rotate-45 translate-y-3' : ''}`}></div>
          <div className={`w-8 h-1.5 bg-black  duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-8 h-1.5 bg-black  duration-300 ${isOpen ? '-rotate-45 -translate-y-3' : ''}`}></div>
        </button>
      </div>

      {/* Overlay Animado */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center gap-8 border-l-8 border-black"
          >
            <a onClick={toggleMenu} className="text-4xl font-black uppercase hover:bg-pastel-blue-light px-4" href="#about">{t.about}</a>
            <a onClick={toggleMenu} className="text-4xl font-black uppercase hover:bg-pastel-green-bright px-4" href="#skills">{t.skills}</a>
            <a onClick={toggleMenu} className="text-4xl font-black uppercase hover:bg-pastel-yellow-gold px-4" href="#work">{t.projects}</a>
            <a onClick={toggleMenu} className="text-4xl font-black uppercase hover:bg-pastel-pink px-4" href="#contact">{t.contact}</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}