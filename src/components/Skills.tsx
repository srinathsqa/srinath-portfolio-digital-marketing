"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36 border-t border-line">
      <div className="section-shell">
        <div className="mb-14 max-w-lg">
          <p className="eyebrow mb-4">My Skills</p>
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight">
            The stack behind every campaign.
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill, i) => {
            const Icon =
              (Icons as unknown as Record<string, Icons.LucideIcon>)[skill.icon] ??
              Icons.Sparkles;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 10) * 0.04 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-signal/40"
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(120px circle at 50% 0%, rgba(198,255,5,0.12), transparent 70%)",
                  }}
                />
                <Icon
                  size={26}
                  className="text-signal transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.6}
                />
                <p className="mt-4 text-sm text-paper leading-snug">
                  {skill.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
