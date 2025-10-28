"use client";
import { motion } from 'framer-motion';

export function ImageCard() {
  return (
    <div
      className="absolute"
      style={{
        top: 'clamp(10%, 45%, 90%)', 
        transform: 'translate(-50%, -50%)',
        zIndex: 10,
        width: 'clamp(250px, 35vw, 480px)',
        maxWidth: '480px'
      }}
    >
      <motion.div
        animate={{ rotate: [-0.5, 0.5, -0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ y: -100, opacity: 0, scale: 0.1 }}
        animate={{ 
          y: 0, 
          opacity: 1, 
          scale: 1,
          rotate: [-1, 1, -1]
        }}
        transition={{ 
          y: { duration: 1.5, delay: 0.8 },
          opacity: { duration: 1.5, delay: 0.8 },
          scale: { duration: 1.5, delay: 0.8 },
          rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        style={{ transformOrigin: 'top center' }}
      >
        <img
          src="/images/briks.png"
          alt="Brikman Portfolio"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            border: 'none',
            outline: 'none',
            borderRadius: '0',
            opacity: 1
          }}
        />
      </motion.div>
    </div>
  );
}
