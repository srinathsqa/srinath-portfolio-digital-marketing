"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { profile } from "@/lib/data";

const contactLinks = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone}` },
  { icon: MapPin, label: profile.location, href: undefined },
];

const socialLinks = [
  { icon: FaLinkedin, href: profile.socials.linkedin, label: "LinkedIn" },
  { icon: FaInstagram, href: profile.socials.instagram, label: "Instagram" },
  { icon: FaGithub, href: profile.socials.github, label: "GitHub" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36 border-t border-line">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl border border-line bg-surface p-10 md:p-16 text-center"
        >
          <p className="eyebrow mb-4">Contact</p>
          <h2 className="font-display text-3xl sm:text-5xl tracking-tight max-w-2xl mx-auto">
            Let&apos;s Build Something Amazing
          </h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {contactLinks.map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-2 text-sm text-muted"
              >
                <item.icon size={16} className="text-signal" />
                {item.href ? (
                  <a href={item.href} className="hover:text-paper transition-colors">
                    {item.label}
                  </a>
                ) : (
                  item.label
                )}
              </span>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-paper hover:border-signal hover:text-signal transition-colors duration-200"
              >
                <s.icon size={17} />
              </a>
            ))}
          </div>

          <a
            href={`mailto:${profile.email}`}
            className="mt-12 inline-flex items-center gap-2 rounded-full bg-signal px-8 py-4 text-sm font-medium text-black transition-transform duration-200 hover:scale-[1.03]"
          >
            Start a Conversation
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
