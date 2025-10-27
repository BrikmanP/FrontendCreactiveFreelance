"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex justify-center items-center px-6 py-24 overflow-hidden"
    >
      {/* === VIDEO DE FONDO === */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.youtube.com/embed/JGBlMMR8YzM?autoplay=1&mute=1&loop=1&playlist=JGBlMMR8YzM&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&playsinline=1"
          allow="autoplay; encrypted-media"
          className="absolute inset-0 w-full h-full"
          style={{
            pointerEvents: "none",
            border: "none",
            objectFit: "cover",
            transform: "scale(1.2)",
            opacity: 1,
            filter: "brightness(0.6) contrast(1.1)",
            mixBlendMode: "multiply",
          }}
        />

        {/* Overlay para contraste */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `
              linear-gradient(
                to right,
                rgba(0, 0, 0, 0.85) 0%,
                rgba(0, 0, 0, 0.4) 50%,
                rgba(0, 0, 0, 0.85) 100%
              ),
              linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.6) 0%,
                transparent 30%,
                transparent 70%,
                rgba(0, 0, 0, 0.6) 100%
              )
            `,
          }}
        />

        {/* Ruido sutil */}
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: `
              repeating-radial-gradient(
                circle at 0 0,
                transparent 0,
                rgba(255, 255, 255, 0.03) 1px,
                transparent 2px
              )
            `,
            backgroundSize: "4px 4px",
            opacity: 0.3,
            mixBlendMode: "overlay",
          }}
        />
      </div>

      {/* Línea superior */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent z-20" />

      {/* === CONTENIDO PRINCIPAL === */}
      <div className="relative z-10 max-w-7xl w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* === IMAGEN SIN BORDE CUADRADO === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-shrink-0 relative lg:flex-1 flex justify-center items-center"
        >
          {/* Glow ambiental */}
          <div className="absolute w-[460px] h-[460px] rounded-full bg-purple-600/25 blur-3xl animate-pulse" />

          <img
  src="/images/nueva.png"
  alt="Brikman Morales"
  className="w-[340px] lg:w-[480px] h-auto object-contain relative z-20 select-none rounded-full"
  style={{
    backgroundColor: "transparent",
    borderRadius: "50%",
    opacity: 12, // semitransparente
    filter: `
      brightness(1.1)
      contrast(1.1)
      drop-shadow(0 0 50px rgba(91,0,167,0.8))
      drop-shadow(0 0 25px rgba(91,0,167,0.5))
    `,
    mixBlendMode: "screen",
    transition:
      "transform 0.6s ease-in-out, filter 0.5s ease-in-out, opacity 0.3s ease-in-out",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.08)";
    e.currentTarget.style.opacity = "0.9";
    e.currentTarget.style.filter = `
      grayscale(100%)
      brightness(1.2)
      contrast(1.2)
      drop-shadow(0 0 70px rgba(91,0,167,0.9))
      drop-shadow(0 0 35px rgba(91,0,167,0.6))
    `;
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.opacity = "0.8";
    e.currentTarget.style.filter = `
      brightness(1.1)
      contrast(1.1)
      drop-shadow(0 0 50px rgba(91,0,167,0.8))
      drop-shadow(0 0 25px rgba(91,0,167,0.5))
    `;
  }}
/>

        </motion.div>

        {/* === TEXTO === */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 text-left max-w-xl"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight"
            style={{
              fontFamily: 'var(--font-dancing), "Dancing Script", cursive',
              color: "#f5f5f5",
              textShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
            }}
          >
            Acerca de Mí
          </h2>

          <p
            className="text-base md:text-lg leading-relaxed text-gray-300 mb-6"
            style={{
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.8)",
              fontFamily: 'var(--font-inter), sans-serif',
              fontWeight: 400,
              letterSpacing: "0.01em",
            }}
          >
            Hola, soy <strong>Brikman Paul</strong>. Frontend Developer freelance y
            creador de experiencias musicales y visuales. Paso mis días alternando
            entre escribir código limpio, producir beats, diseñar escenarios
            sonoros cinematográficos y editar videos que cuentan historias. Mi
            objetivo: crear proyectos que conecten, emocionen y funcionen.
          </p>

          <p
            className="text-sm md:text-base leading-relaxed text-gray-400 mb-8"
            style={{
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.8)",
              fontFamily: 'var(--font-inter), sans-serif',
              fontWeight: 300,
            }}
          >
            Especializado en React/Next.js, diseño de interfaces y experiencias de
            usuario centradas en rendimiento, accesibilidad y narrativa visual.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex gap-4 flex-wrap"
          >
            {["React / Next.js", "Tailwind CSS", "UI / UX Design", "Systems Design"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm tracking-wide text-gray-300 border border-purple-500/30 rounded backdrop-blur-sm"
                  style={{
                    background: "rgba(139, 92, 246, 0.1)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {skill}
                </span>
              )
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Línea inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent z-20" />
    </section>
  );
}
