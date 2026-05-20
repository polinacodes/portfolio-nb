import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function MobileMenu({ t, switchTarget, switchLabel }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Botón menu mobile */}
      <div className={`flex items-center gap-4 transition-opacity duration-200 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <a href={switchTarget} className="border-2 border-black px-2 py-1 font-black text-sm hover:bg-black hover:text-white transition-all">
          {switchLabel}
        </a>
        <button onClick={toggleMenu} className="flex flex-col gap-1.5 z-[70]">
          <div className="w-8 h-1.5 bg-black"></div>
          <div className="w-8 h-1.5 bg-black"></div>
          <div className="w-8 h-1.5 bg-black"></div>
        </button>
      </div>

      {/* Overlay Menú Lateral */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center gap-6 border-l-8 border-black"
          >
            <button 
              onClick={toggleMenu} 
              className="absolute top-6 right-6 w-12 h-12 bg-[#FF8A8A] border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
              aria-label="Cerrar menú"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-6 h-6 stroke-black stroke-[3.5]" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <a 
              onClick={toggleMenu} 
              className="text-3xl font-black uppercase  bg-pastel-teal border-4 border-black w-64 py-3 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all" 
              href="#about"
            >
              {t.about}
            </a>
            
            <a 
              onClick={toggleMenu} 
              className="text-3xl font-black uppercase bg-pastel-green-muted border-4 border-black w-64 py-3 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all" 
              href="#skills"
            >
              {t.skills}
            </a>
            
            <a 
              onClick={toggleMenu} 
              className="text-3xl font-black uppercase bg-pastel-light-indigo border-4 border-black w-64 py-3 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all" 
              href="#work"
            >
              {t.projects}
            </a>
            
            <a 
              onClick={toggleMenu} 
              className="text-3xl font-black uppercase bg-pastel-pink border-4 border-black w-64 py-3 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all" 
              href="#contact"
            >
              {t.contact}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}