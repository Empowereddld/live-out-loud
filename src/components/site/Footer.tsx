import { site } from "@/data/site";
import { Instagram } from "lucide-react";
import Wordmark from "./Wordmark";
import Reveal from "./Reveal";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="size-4">
    <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.6 2.6 0 0 1-2.59-2.6 2.6 2.6 0 0 1 3.37-2.48V9.66a5.69 5.69 0 0 0-.78-.05 5.73 5.73 0 0 0-5.73 5.73A5.73 5.73 0 0 0 9.86 21a5.73 5.73 0 0 0 5.73-5.73V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.3 4.3 0 0 1-3.29-1.48Z" />
  </svg>
);

const Footer = () => {
  const { footer } = site;
  const socials = [
    { label: "Instagram", icon: <Instagram className="size-4" />, ...footer.instagram },
    { label: "TikTok", icon: <TikTokIcon />, ...footer.tiktok },
  ];
  return (
    <footer className="relative overflow-hidden bg-navy py-20 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 size-[520px] -translate-x-1/2 rounded-full bg-rose/20 blur-3xl"
      />
      <Reveal className="container relative flex flex-col items-center gap-7 text-center">
        <Wordmark className="size-24" />
        <span aria-hidden className="block h-px w-12 bg-gold" />
        <ul className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/85 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-white"
              >
                {s.icon}
                <span className="sr-only">{s.label}:</span>
                {s.handle}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs tracking-[0.15em] text-white/55">{footer.copyright}</p>
      </Reveal>
    </footer>
  );
};

export default Footer;
