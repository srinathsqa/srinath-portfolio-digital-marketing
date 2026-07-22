"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { clients } from "@/lib/data";
import { basePath } from "@/lib/basePath";

export default function Clients() {
  return (
    <section className="py-28 md:py-36 border-t border-line">
      <div className="section-shell">
        <div className="mb-14 max-w-lg">
          <p className="eyebrow mb-4">Freelance Clients</p>
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight">
            Premium Link Building&apos; Authority Build and GMB.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-signal/40"
            >
              <div className="flex h-14 w-full items-center justify-start rounded-xl bg-white/95 px-4">
                  <img
                    src={`${basePath}${client.logo}`}
                    alt={`${client.name} logo`}
                    className="h-9 w-auto max-w-[140px] object-contain"
                  />
                </div>
              <h3 className="mt-6 font-display text-lg">{client.name}</h3>
              <p className="mt-2 text-sm text-muted">{client.services}</p>
              <button className="mt-6 inline-flex items-center gap-1.5 text-sm text-signal">
                Reports
                <ArrowUpRight size={15} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
