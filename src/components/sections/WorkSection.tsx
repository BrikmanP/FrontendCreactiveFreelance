"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "pagina-oficial-brikman-paul",
    description: "Sitio web personal con enfoque artístico y portafolio de proyectos digitales.",
    url: "https://github.com/BrikmanP",
  },
  {
    title: "portafolio_brikman",
    description: "Versión inicial de mi portafolio interactivo hecho con React y Tailwind.",
    url: "https://github.com/BrikmanP",
  },
  {
    title: "Kinsta-developer-portfolio",
    description: "Diseño inspirado en el desafío de Kinsta Developers, optimizado para rendimiento.",
    url: "https://github.com/BrikmanP",
  },
  {
    title: "MovieApp",
    description: "Aplicación que consume una API de películas con búsqueda dinámica y reseñas.",
    url: "https://github.com/BrikmanP",
  },
  {
    title: "conversorMonedas",
    description: "Conversor de divisas en tiempo real con tasas actualizadas desde una API externa.",
    url: "https://github.com/BrikmanP",
  },
  {
    title: "encriptador",
    description: "Proyecto de práctica para cifrar y descifrar mensajes de texto en el navegador.",
    url: "https://github.com/BrikmanP",
  },
  {
    title: "buscador-mapas",
    description: "Buscador interactivo de ubicaciones usando la API de Mapbox.",
    url: "https://github.com/BrikmanP",
  },
  {
    title: "paginaTramite",
    description: "Diseño institucional para un sitio de trámites digitales responsivo.",
    url: "https://github.com/BrikmanP",
  },
  {
    title: "tramite",
    description: "Versión mejorada del sistema de trámites con integración de formularios dinámicos.",
    url: "https://github.com/BrikmanP",
  },
];

export function WorkSection() {
  return (
    <section
      id="work"
      className="relative min-h-screen w-full flex justify-center items-center px-6 py-24 bg-transparent"
    >
      <div className="relative z-10 max-w-4xl text-gray-100">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Proyectos personales y de práctica
        </motion.h2>

        <div className="flex flex-col gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="border-b border-gray-700 pb-6"
            >
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg md:text-xl font-semibold text-gray-100 hover:text-red-500 transition-all duration-300"
              >
                {p.title}
              </a>
              <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
