import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import Wordmark from "./Wordmark";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "enter-drop sticky top-0 z-40 transition-all duration-500",
        scrolled
          ? "border-b border-navy/10 bg-cream/80 shadow-[0_10px_30px_-20px_rgba(43,58,87,0.35)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div
        className={cn(
          "container flex items-center justify-between transition-all duration-500",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <Wordmark className={cn("transition-all duration-500", scrolled ? "size-12" : "size-16")} />
        <nav className="hidden gap-9 text-[13px] font-medium tracking-wide text-navy/75 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline transition-colors hover:text-navy"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#free-gift"
          className="btn-sheen inline-flex min-h-10 items-center rounded-full bg-rose px-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-rose-dark md:hidden"
        >
          {site.nav[0]?.label}
        </a>
      </div>
    </header>
  );
};

export default Header;
