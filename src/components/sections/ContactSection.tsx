"use client";

import { motion } from "framer-motion";

const ACCENT_PINK = "#FF0077";
const IMAGE_PATH = "/images/chupeta.png";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center items-center text-white px-6 py-20 bg-transparent"
    >
      {/* Fondo con textura */}
      <div className="absolute inset-0 bg-tv-static opacity-50 z-0"></div>

      {/* Imagen de chupeta flotante */}
<div className="absolute top-1/2 right-[-80px] md:right-[-100px] lg:right-[-140px] -translate-y-1/2 z-30">
  <motion.div
    initial={{ y: 0, opacity: 1 }}
    animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    className="w-28 h-28 sm:w-40 sm:h-40 lg:w-52 lg:h-52"
  >
    <img
      src={IMAGE_PATH}
      alt="Chupeta rosa brillante"
      className="w-full h-auto object-contain drop-shadow-[0_0_25px_rgba(255,0,119,0.5)]"
    />
  </motion.div>
</div>


      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-20 p-4 max-w-4xl text-center bg-transparent"
      >
        <p className="text-sm uppercase tracking-widest text-gray-300 mb-6 border-b border-gray-700 pb-2 inline-block">
          CONÉCTAME ✦
        </p>

        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-snug mb-6"
          style={{
            color: "#fff",
            textTransform: "uppercase",
            textShadow: `0 0 10px ${ACCENT_PINK}66`,
            lineHeight: "1.1",
          }}
        >
          ¿Tienes un{" "}
          <span style={{ color: ACCENT_PINK }}>proyecto dulce</span> para mí?{" "}
          <br />
          Hagamos{" "}
          <span style={{ color: ACCENT_PINK }} className="font-extrabold">
            CONEXIÓN
          </span>
          .
        </h1>

        <p className="text-lg sm:text-xl font-normal leading-snug text-gray-300 max-w-xl mx-auto mt-8 mb-10">
          Ya sea texto creativo o desarrollo digital, estoy listo para hacer tu
          idea realidad.
        </p>

        {/* Botones */}
        <div className="flex gap-4 sm:gap-6 justify-center mt-8">
          <a
            href="mailto:brikmanoaul34@gmail.com"
            style={{ borderColor: ACCENT_PINK, color: ACCENT_PINK }}
            className="px-8 py-4 border-2 rounded-full font-bold uppercase tracking-widest hover:bg-pink-600 hover:text-white transition-all duration-300"
          >
            Escríbeme
          </a>

          <a
            href="https://www.linkedin.com/in/brikmanpaulmorales/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-gray-600 rounded-full text-gray-300 font-bold uppercase tracking-widest hover:bg-gray-700 hover:border-gray-700 transition-all duration-300"
          >
            LinkedIn
          </a>
        </div>

        <p className="mt-20 text-xs text-gray-600">
          © {new Date().getFullYear()} Brikman Morales - Todos los derechos reservados.
        </p>
      </motion.div>
    </section>
  );
}
