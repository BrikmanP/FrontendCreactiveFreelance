"use client";

import { motion } from "framer-motion";

const ACCENT_PINK = "#FF0077";
// ¡Ruta verificada: si el archivo está en public/images/chupeta.avif, esta es la ruta correcta!
const IMAGE_PATH = "/images/chupeta.png";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center items-center bg-black text-white px-6 py-20 overflow-hidden" 
    >
      {/* 1. Fondo con Ruido */}
      <div className="absolute inset-0 bg-tv-static opacity-50 z-0"></div> 
      
      {/* 2. Chupeta Flotante (Lollipop) */}
      <div 
        className="absolute top-0 right-0 md:right-10 lg:right-20 z-20"
      >
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ 
                y: [0, -10, 0], 
                rotate: [0, 2, -2, 0] 
            }}
            transition={{ 
                duration: 10, 
                repeat: Infinity, 
                ease: "easeInOut" 
            }}
            // Clase de depuración temporal: verifica si este div es visible
            // Si ves un cuadrado rojo en la esquina superior, el contenedor está ahí.
            // Si no ves el cuadrado, el problema es la posición o z-index.
            className="w-48 h-48 sm:w-64 sm:h-64 pt-10 border-red-500 border-4" 
        >
            <img 
                src={IMAGE_PATH} 
                alt="Lollipop rosa brillante"
                // object-contain asegura que la imagen se ajuste
                className="w-full h-auto object-contain drop-shadow-2xl"
                style={{ filter: `drop-shadow(0 0 15px ${ACCENT_PINK})` }}
            />
        </motion.div>
      </div>

      {/* 3. Contenido Principal (El resto del código se mantiene igual) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 p-4 max-w-4xl text-center" 
      >
        {/* ... (código del titular y botones) */}
        
        {/* "CONÉCTAME" */}
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-6 border-b border-gray-700 pb-2 inline-block">
          CONÉCTAME ✦
        </p>

        <h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-light italic leading-snug text-white mb-6"
            style={{ fontFamily: 'Nombre-De-Tu-Fuente-Script', fontWeight: 400 }} 
        >
          <span className="block">¿Tienes un proyecto dulce</span> 
          <span className="block">para mí?</span> 
          <span className="block">Hagamos 
            <span style={{ color: ACCENT_PINK }} className="mx-2">CONEXIÓN</span>.
          </span>
        </h1>

        <p className="text-lg sm:text-xl font-normal leading-snug text-gray-300 max-w-xl mx-auto mt-8 mb-10">
          Ya sea copia creativa o traducciones, estoy listo para tu proyecto.
        </p>
        
        <div className="flex gap-4 sm:gap-6 justify-center mt-8">
          <a
            href="mailto:brikmanoaul34@gmail.com"
            style={{ borderColor: ACCENT_PINK, color: ACCENT_PINK }}
            className="px-8 py-4 border-2 rounded-full font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300" 
          >
            ESCRÍBEME
          </a>
          
          <a
            href="https://www.linkedin.com/in/brikmanpaulmorales/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-gray-600 rounded-full text-gray-300 font-bold uppercase tracking-widest hover:bg-gray-700 hover:border-gray-700 transition-all duration-300"
          >
            LINKEDIN
          </a>
        </div>

        <p className="mt-20 text-xs text-gray-700">
          © {new Date().getFullYear()} Brikman Morales — Creado con pasión y código.
        </p>
      </motion.div>
    </section>
  );
}