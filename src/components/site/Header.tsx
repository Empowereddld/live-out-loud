import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, siteConfig } from "@/data/site";
import { CTAButton, Logo } from "./ui";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <>
    <header className={cn("sticky top-0 z-40 border-b border-transparent bg-background/95 backdrop-blur transition-all", scrolled ? "border-border py-2" : "py-4")}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#gift" aria-label="Live Out Loud home"><Logo /></a>
        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-navy hover:text-rose">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <CTAButton href={siteConfig.signupUrl} external className="px-4 text-xs sm:px-6 sm:text-sm">Get my free gift</CTAButton>
          <button type="button" onClick={() => setOpen(true)} aria-label="Open menu" className="inline-flex size-11 items-center justify-center rounded-full text-navy lg:hidden focus-visible:ring-2 focus-visible:ring-ring">
            <Menu />
          </button>
        </div>
      </div>
    </header>
      <div className={cn("fixed inset-0 z-50 lg:hidden", open ? "" : "pointer-events-none")} aria-hidden={!open}>
        <div className={cn("absolute inset-0 bg-navy/40 transition-opacity", open ? "opacity-100" : "opacity-0")} onClick={() => setOpen(false)} />
        <nav aria-label="Mobile" className={cn("absolute right-0 top-0 flex h-full w-72 flex-col gap-2 bg-background p-6 shadow-soft transition-transform", open ? "translate-x-0" : "translate-x-full")}>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" tabIndex={open ? 0 : -1} className="mb-4 inline-flex size-11 items-center justify-center self-end rounded-full text-navy">
            <X />
          </button>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} className="py-3 font-display text-2xl text-navy hover:text-rose">{l.label}</a>
          ))}
        </nav>
      </div>
    </>
  );
}
