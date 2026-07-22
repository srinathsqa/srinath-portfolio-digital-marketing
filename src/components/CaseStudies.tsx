"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/data";
import AnimatedCounter from "@/components/AnimatedCounter";
import { basePath } from "@/lib/basePath";

export default function CaseStudies() {
  return (
    <section id="projects" className="py-28 md:py-36 border-t border-line">
      <div className="section-shell">
        <div className="mb-16 max-w-lg">
          <p className="eyebrow mb-4">Case Studies</p>
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight">
            Strategy, executed. Results, measured.
          </h2>
        </div>

        <div className="space-y-8">
          {caseStudies.map((study, i) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: i * 0.06 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl border border-line bg-surface"
            >
              <div className="relative aspect-[16/10] lg:aspect-auto">
                  <img
                    src={`${basePath}${study.image}`}
                    alt={study.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-6">
                  <h3 className="font-display text-2xl">{study.title}</h3>
                  {study.period && (
                    <span className="font-mono text-xs text-signal shrink-0">
                      {study.period}
                    </span>
                  )}
                </div>

                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-signal">
                      Challenge
                    </dt>
                    <dd className="mt-1 text-muted">{study.challenge}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-signal">
                      Strategy
                    </dt>
                    <dd className="mt-1 text-muted">{study.strategy}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-signal">
                      Execution
                    </dt>
                    <dd className="mt-1 text-muted">{study.execution}</dd>
                  </div>
                </dl>

                {study.highlights && study.highlights.length > 0 && (
                  <ul className="mt-5 space-y-2">
                    {study.highlights.map((point) => (
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

                {study.tools && study.tools.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {study.tools.map((tool) => (
                      <li
                        key={tool}
                        className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-line pt-6">
                  {study.results.map((r) => (
                    <div key={r.label}>
                      <p className="text-2xl text-paper">
                        <AnimatedCounter value={r.value} suffix={r.suffix} />
                      </p>
                      <p className="mt-1 text-xs text-muted">{r.label}</p>
                    </div>
                  ))}
                </div>

                                                {study.link && (
                                <a
                                  href={study.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="mt-8 inline-flex items-center gap-1.5 self-start text-sm text-signal"
                                >
                                  View LinkedIn Post
                                  <ArrowUpRight size={15} />
                                </a>
                              )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}