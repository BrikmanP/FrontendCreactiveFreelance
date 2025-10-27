"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: "Inicio", href: "#home" },
    { name: "Acerca de Mí", href: "#about" },
    { name: "Proyectos", href: "#work" },
    { name: "Contacto", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const top = (element as HTMLElement).offsetTop;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    // Fade-in suave al cargar
    const timeout = setTimeout(() => setIsVisible(true), 200);

    // Cambia el fondo cuando se hace scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : -20,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(0, 0, 0, 0.8)"
            : "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(15px)",
          borderBottom: scrolled
            ? "1px solid rgba(255, 255, 255, 0.15)"
            : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* === Logo/Nombre === */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="text-3xl font-semibold tracking-tight select-none"
            style={{
              fontFamily: '"Segoe Script", cursive',
              color: "#ff0000",
              textShadow: `
                0 0 10px rgba(255,0,0,0.7),
                0 0 25px rgba(255,0,0,0.5)
              `,
              cursor: "pointer",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Brikman Paul
          </motion.a>

          {/* === Menú Desktop === */}
          <div className="hidden md:flex items-center gap-10">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="relative text-base tracking-wide"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  color: "rgba(255, 255, 255, 0.7)",
                  fontWeight: 400,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
                whileHover={{
                  color: "#fff",
                  transition: { duration: 0.2 },
                }}
              >
                {item.name}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-600"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: "left" }}
                />
              </motion.a>
            ))}
          </div>

          {/* === Botón Hamburguesa (solo mobile) === */}
          <motion.button
            className="md:hidden flex flex-col gap-1.5 w-6 h-6 relative z-50"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <motion.span
              className="w-full h-0.5 bg-white block"
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 8 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-full h-0.5 bg-white block"
              animate={{
                opacity: isOpen ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-full h-0.5 bg-white block"
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -8 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </motion.nav>

      {/* === Menú Mobile (Fullscreen) === */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{
              background: "rgba(0, 0, 0, 0.95)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="text-3xl tracking-wide"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    color: "rgba(255, 255, 255, 0.9)",
                    fontWeight: 300,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
