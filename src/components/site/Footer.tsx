import { siteConfig } from "@/data/site";
import { CTAButton, Logo } from "./ui";

const socials = [
  { url: siteConfig.instagram, label: "Live Out Loud on Instagram (@liveoutloud.now)", name: "Instagram" },
  { url: siteConfig.tiktok, label: "Live Out Loud on TikTok (@liveoutloud.now)", name: "TikTok" },
  { url: siteConfig.youtube, label: "Live Out Loud on YouTube", name: "YouTube" },
  { url: siteConfig.pinterest, label: "Live Out Loud on Pinterest", name: "Pinterest" },
].filter((s) => s.url);

export function Footer() {
  return (
    <footer className="bg-navy px-5 py-16 text-center text-primary-foreground">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6">
        <span className="rounded-full bg-background px-6 py-3"><Logo /></span>
        <p className="font-display text-xl italic leading-relaxed">{siteConfig.mission}</p>
        <ul className="flex gap-6">
          {socials.map((s) => (
            <li key={s.name}>
              <a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground underline-offset-4 hover:underline">{s.name}</a>
            </li>
          ))}
        </ul>
        <CTAButton href={siteConfig.signupUrl} external className="px-5 text-xs">Get my free gift</CTAButton>
        <div className="space-y-1 text-xs text-primary-foreground/80">
          <p>© 2026 Live Out Loud. All rights reserved.</p>
          <p>Live Out Loud is a registered business name in Ontario, Canada.</p>
        </div>
      </div>
    </footer>
  );
}
