"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Download } from "lucide-react";
import { profile, rotatingRoles } from "@/lib/data";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const imageX = useTransform(springX, [-1, 1], [-14, 14]);
  const imageY = useTransform(springY, [-1, 1], [-14, 14]);
  const glowX = useTransform(springX, [-1, 1], [-30, 30]);
  const glowY = useTransform(springY, [-1, 1], [-30, 30]);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % rotatingRoles.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  function handlePointerMove(e: React.PointerEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(relX * 2);
    mouseY.set(relY * 2);
  }

  return (
    <section
      id="home"
      ref={ref}
      onPointerMove={handlePointerMove}
      className="relative min-h-screen flex items-center overflow-hidden grid-field pt-28 pb-16"
    >
      {/* floating ambient gradient shapes */}
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="pointer-events-none absolute -top-24 -right-24 h-[440px] w-[440px] rounded-full bg-signal/20 blur-[120px] animate-float"
      />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-signal/10 blur-[100px]" />

      {/* faint particles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-signal/40"
            style={{
              width: 3,
              height: 3,
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
              opacity: 0.4,
            }}
          />
        ))}
      </div>

      <div className="section-shell relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow mb-6">Hi, I&apos;m</p>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-paper">
            {profile.name}
          </h1>

          <h2 className="mt-4 font-display text-2xl sm:text-3xl text-muted">
            {profile.title}
          </h2>

          <div className="mt-6 h-7 overflow-hidden font-mono text-sm text-signal">
            <motion.div
              key={roleIndex}
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {rotatingRoles[roleIndex]}
            </motion.div>
          </div>

          <p className="mt-8 max-w-md text-muted leading-relaxed">
            {profile.intro}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-medium text-black transition-transform duration-200 hover:scale-[1.03]"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm text-paper hover:border-signal hover:text-signal transition-colors duration-200"
            >
              View My Work
            </a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative mx-auto aspect-[4/5] w-full max-w-sm"
        >
          <motion.div
            style={{ x: imageX, y: imageY }}
            className="relative h-full w-full overflow-hidden rounded-[28px] border border-line bg-surface"
          >
            <img
              src="/srinath-portfolio-digital-marketing/images/profile/hero-portrait.png"
              alt={profile.name}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </motion.div>
          <div className="absolute -inset-3 -z-10 rounded-[32px] border border-signal/20" />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase">
            Scroll
          </span>
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
