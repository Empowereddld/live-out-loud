import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import type { Journal } from "@/data/journals";

export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  // PLACEHOLDER: logo slot — set siteConfig.logoUrl to swap in the uploaded logo file.
  if (siteConfig.logoUrl)
    return <img src={siteConfig.logoUrl} alt="Live Out Loud" width={120} height={48} className={cn("h-10 w-auto", className)} />;
  return (
    <span className={cn("whitespace-nowrap font-display text-base font-semibold uppercase leading-none tracking-[0.15em] sm:text-lg sm:tracking-[0.25em]", light ? "text-primary-foreground" : "text-navy", className)}>
      Live Out Loud
    </span>
  );
}

export function Label({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("text-xs font-semibold uppercase tracking-[0.3em] text-rose", className)}>{children}</p>;
}

export function SectionHeading({ children, label, className }: { children: ReactNode; label?: string; className?: string }) {
  return (
    <div className={className}>
      {label && <Label className="mb-3">{label}</Label>}
      <h2 className="font-display text-4xl leading-tight text-navy md:text-5xl">{children}</h2>
    </div>
  );
}

export function Accent({ children }: { children: ReactNode }) {
  return <em className="font-display italic text-rose">{children}</em>;
}

type CTAProps = { href?: string; children: ReactNode; variant?: "primary" | "secondary"; external?: boolean; disabled?: boolean; className?: string };
export function CTAButton({ href, children, variant = "primary", external, disabled, className }: CTAProps) {
  const cls = cn(
    "inline-flex min-h-11 items-center justify-center rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    variant === "primary" ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
    disabled && "pointer-events-none opacity-60",
    className,
  );
  if (disabled || !href) return <span aria-disabled="true" className={cls}>{children}</span>;
  return (
    <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}
    </a>
  );
}

export function PageDivider() {
  return (
    <div className="mx-auto flex max-w-xs items-center gap-3 py-2" aria-hidden="true">
      <span className="h-px flex-1 bg-gold" />
      <span className="size-2 rotate-45 bg-gold" />
      <span className="h-px flex-1 bg-gold" />
    </div>
  );
}

export function ComingSoon() {
  return <span className="inline-block rounded-full bg-rose px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground">Coming soon</span>;
}

export function FadeUp({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { setShown(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={cn("fade-up", shown && "is-visible", className)}>{children}</div>;
}

export function ImageSlot({ src, alt, label, className, width, height }: { src: string; alt: string; label: string; className?: string; width: number; height: number }) {
  if (src) return <img src={src} alt={alt} width={width} height={height} loading="lazy" className={cn("rounded-2xl object-cover", className)} />;
  return (
    <div role="img" aria-label={alt} className={cn("flex items-center justify-center rounded-2xl bg-soft-rose p-6 text-center", className)}>
      <span className="font-display text-xl text-navy">{label}</span>
    </div>
  );
}

export function JournalCard({ journal }: { journal: Journal }) {
  const href = journal.amazonUrl || siteConfig.amazonAuthorUrl;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group block rounded-2xl bg-card p-3 shadow-soft transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      {/* PLACEHOLDER: set journal.cover in src/data/journals.ts */}
      <ImageSlot src={journal.cover} alt={`${journal.title} journal cover`} label={journal.title} width={300} height={400} className="aspect-[3/4] w-full" />
      <h3 className="mt-3 text-center font-display text-lg text-navy group-hover:text-rose">{journal.title}</h3>
    </a>
  );
}

export function ServiceCard({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-3xl bg-card p-8 shadow-soft md:p-12", className)}>{children}</div>;
}

export function EmailSignup({ label = "Get my free gift" }: { label?: string }) {
  return (
    <div>
      {/* BEEHIIV EMBED GOES HERE — replace the button below with beehiiv's embed code */}
      <CTAButton href={siteConfig.signupUrl} external>{label}</CTAButton>
    </div>
  );
}
