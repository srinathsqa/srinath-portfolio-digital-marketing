"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download } from "lucide-react";
import { profile } from "@/lib/data";
import { basePath } from "@/lib/basePath";

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36">
      <div className="section-shell grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] w-full max-w-md mx-auto md:mx-0"
        >
          
          <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-line bg-surface">
            <img
              src={`${basePath}/images/profile/about-portrait.png`}
              alt={`${profile.name} — ${profile.title}`}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <p className="eyebrow mb-4">About Me</p>
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight mb-6">
            Data-driven marketing, built on real results.
          </h2>
          <p className="text-muted leading-relaxed">{profile.about}</p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
            <div>
              <p className="font-mono text-2xl text-signal">{profile.experience}</p>
              <p className="mt-1 text-xs text-muted">Experience</p>
            </div>
            <div>
              <p className="font-mono text-2xl text-signal">15+</p>
              <p className="mt-1 text-xs text-muted">Core Skills</p>
            </div>
            <div>
              <p className="font-mono text-2xl text-signal">5+</p>
              <p className="mt-1 text-xs text-muted">Industries</p>
            </div>
          </div>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-signal px-7 py-3.5 text-sm font-medium text-black transition-transform duration-200 hover:scale-[1.03]"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
