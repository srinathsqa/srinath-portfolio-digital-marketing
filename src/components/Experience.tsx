"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-28 md:py-36 border-t border-line">
      <div className="section-shell">
        <div className="mb-16 max-w-lg">
          <p className="eyebrow mb-4">Work Experience</p>
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight">
            Where the strategy met execution.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-line hidden sm:block" />

          <div className="space-y-14">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative flex flex-col sm:flex-row gap-6 sm:gap-10 sm:pl-[76px]"
              >
                <div className="absolute left-0 top-1 hidden sm:flex h-14 w-14 items-center justify-center rounded-xl bg-white/95 overflow-hidden p-2">
                  <Image
                    src={job.logo}
                    alt={`${job.company} logo`}
                    width={44}
                    height={44}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="flex-1 rounded-2xl border border-line bg-surface p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl text-paper">
                      {job.role}
                    </h3>
                    <span className="font-mono text-xs text-signal">
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted flex items-center gap-2">
                    <Image
                      src={job.logo}
                      alt=""
                      width={16}
                      height={16}
                      className="sm:hidden h-4 w-4 object-contain rounded bg-white/95 p-0.5"
                    />
                    {job.company}
                  </p>
                  {job.location && (
                    <p className="mt-0.5 text-xs text-muted/70">{job.location}</p>
                  )}

                  {job.summary && (
                    <p className="mt-4 text-sm text-muted leading-relaxed">
                      {job.summary}
                    </p>
                  )}

                  {job.highlights && job.highlights.length > 0 && (
                    <ul className="mt-5 space-y-2">
                      {job.highlights.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2.5 text-sm text-muted leading-relaxed"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {job.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}