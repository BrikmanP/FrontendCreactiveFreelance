"use client";

export function TVNoise() {
  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none z-[1]"
      style={{
        backgroundImage: 'url(https://media.tenor.com/LMfmi77yCFMAAAAM/static-glitch.gif)',
        backgroundSize: '200px',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center center',
        opacity: 0.08,
        mixBlendMode: 'overlay'
      }}
    />
  );
}