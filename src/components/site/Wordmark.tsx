import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

// Kalenéa's logo (cream circle, gold ring). Other options are in src/assets/logo-options.
const Wordmark = ({ className }: { className?: string }) => (
  <a
    href="#top"
    className={cn(
      "inline-block shrink-0 transition-transform duration-500 hover:rotate-[-6deg]",
      className,
    )}
  >
    <img
      src={logo}
      alt={site.brandName}
      width={246}
      height={246}
      className="h-full w-full drop-shadow-[0_6px_14px_rgba(43,58,87,0.18)]"
    />
  </a>
);

export default Wordmark;
