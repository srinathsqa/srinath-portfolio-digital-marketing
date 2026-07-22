import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { profile } from "@/lib/data";

const links = [
  { icon: FaLinkedin, href: profile.socials.linkedin, label: "LinkedIn" },
  { icon: FaInstagram, href: profile.socials.instagram, label: "Instagram" },
  { icon: FaGithub, href: profile.socials.github, label: "GitHub" },
  { icon: MdEmail, href: `mailto:${profile.email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="section-shell flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg">{profile.name}</p>
          <p className="text-sm text-muted">{profile.title}</p>
        </div>

        <div className="flex items-center gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={l.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-paper hover:border-signal hover:text-signal transition-colors duration-200"
            >
              <l.icon size={16} />
            </a>
          ))}
        </div>

        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
