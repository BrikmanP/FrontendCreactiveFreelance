"use client";
import { motion } from "framer-motion";
import { ImageCard } from "@/components/ui/ImageCard";

export function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-white px-6 bg-transparent">
      
      {/* Gradiente sutil de fondo */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* TEXTO GIGANTE NEÓN */}
      <div 
        className="absolute flex flex-col items-center justify-center gap-2 md:flex-row md:items-start md:pl-16 pt-16 md:pt-0"
        style={{ zIndex: 1, top: '5%' }} // Controla la distancia desde arriba en móviles
      >
        <motion.h1
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          style={{
            fontSize: 'clamp(2rem, 6vw, 5rem)', // Reducido en pantallas pequeñas
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: '-0.04em',
            color: '#ff0000',
            textShadow: `
              0 0 15px rgba(255, 0, 0, 0.8),
              0 0 35px rgba(255, 0, 0, 0.6),
              0 0 55px rgba(255, 0, 0, 0.4),
              0 0 80px rgba(255, 0, 0, 0.2)
            `,
            userSelect: 'none',
            textTransform: 'uppercase',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
          }}
        >
          BRIKMAN
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          style={{
            fontSize: 'clamp(2rem, 6vw, 5rem)', // Reducido en pantallas pequeñas
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: '-0.04em',
            color: '#ff0000',
            textShadow: `
              0 0 15px rgba(255, 0, 0, 0.8),
              0 0 35px rgba(255, 0, 0, 0.6),
              0 0 55px rgba(255, 0, 0, 0.4),
              0 0 80px rgba(255, 0, 0, 0.2)
            `,
            userSelect: 'none',
            textTransform: 'uppercase',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
          }}
        >
          PAUL
        </motion.h1>
      </div>

      {/* TARJETA COLGANTE */}
      <ImageCard /> 

      {/* TEXTO DESCRIPTIVO */}
      <div className="relative max-w-2xl text-center mt-[40vh] md:mt-[32rem] z-10">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-gray-400 text-center text-lg md:text-xl leading-relaxed"
        >
          <strong className="text-gray-200">Frontend Developer Freelance y Productor Musical</strong> Uniendo código y sensibilidad artística para generar experiencias digitales y sonoras que conecten con las personas.
        </motion.p>
      </div>

      {/* Botón de scroll */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 text-sm text-gray-500 hover:text-red-500 transition-all duration-300 animate-bounce"
        style={{ zIndex: 20 }}
      >
        ↓ Desliza para saber más
      </motion.button>
    </section>
  );
}
