"use client";

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center items-center bg-transparent text-gray-100 px-6 py-20"
    >
      {/* Fondo con ruido + capa morada translúcida */}
      <div className="absolute inset-0 bg-tv-static"></div>
      <div className=""></div>

      {/* Contenido */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 p-10 max-w-3xl text-center "
      >
        <h2 className="text-5xl font-bold mb-8">Conecta conmigo</h2>

        <p className="text-lg text-gray-300 mb-10">
          Si deseas colaborar, crear algo nuevo o simplemente conversar sobre diseño, 
          desarrollo o música, estoy disponible.
        </p>

        <div className="flex gap-6 justify-center">
          <a
            href="mailto:brikmanoaul34@gmail.com"
            className="px-6 py-3 border border- rounded-full text- hover:bg- hover:text-white transition-all"
          >
            Escríbeme
          </a>
          <a
            href="https://www.linkedin.com/in/brikmanpaulmorales/"
            target="_blank"
            className="px-6 py-3 border border-gray-500 rounded-full hover:border-hover:text-transition-all"
          >
            LinkedIn
          </a>
        </div>

        <p className="mt-16 text-xs text-gray-500">
          © {new Date().getFullYear()} Brikman Morales — Creado con pasión y código.
        </p>
      </motion.div>
    </section>
  );
}
