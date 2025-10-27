// src/components/sections/HeroSection.tsx
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
      
      {/* =======================================================
          1. TEXTO GIGANTE NEÓN (BRIKMAN PAUL) - IZQUIERDA
          ======================================================= */}
      <div 
        className="absolute left-0 top-0 bottom-0 flex items-center pl-8 md:pl-16"
        style={{ zIndex: 1 }}
      >
        {/* Contenedor de texto alineado a la izquierda */}
        <div className="flex items-center gap-4 md:gap-8">
          
          {/* Primera palabra: BRIKMAN */}
          <motion.h1
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 6rem)',
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

          {/* Segunda palabra: PAUL */}
          <motion.h1
            initial={{ opacity: 15, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 6rem)',
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
      </div>

      {/* =======================================================
          2. TARJETA COLGANTE - Capa frontal (z-10)
          ======================================================= */}
      <ImageCard /> 

      {/* =======================================================
          3. TEXTO DESCRIPTIVO - Debajo de la tarjeta
          ======================================================= */}
      <div 
        className="relative max-w-2xl text-center" 
        style={{ 
          marginTop: '32rem',
          zIndex: 10 
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-gray-400 text-center text-lg md:text-xl leading-relaxed"
        >
          <strong className="text-gray-200">Frontend Developer Freelance y Productor Musical</strong> Uniendo código y sensibilidad artística para generar experiencias digitales y sonoras que conecten con las personas.
        </motion.p>
      </div>

      {/* Botón de scroll hacia abajo */}
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