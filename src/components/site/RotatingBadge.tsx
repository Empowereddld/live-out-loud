import { site } from "@/data/site";
import { cn } from "@/lib/utils";

/** Circular text badge that slowly turns. */
const RotatingBadge = ({ className }: { className?: string }) => {
  const text = `${site.brandName} ✦ ${site.brandName} ✦ `.toUpperCase();
  return (
    <div
      className={cn(
        "relative grid size-28 place-items-center rounded-full bg-rose text-white shadow-xl sm:size-32",
        className,
      )}
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 size-full animate-spin-slow"
        aria-hidden
      >
        <defs>
          <path id="badge-circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
        </defs>
        <text className="fill-current font-sans text-[8.6px] font-semibold tracking-[0.18em]">
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </svg>
      <span className="font-display text-2xl italic text-soft-rose" aria-hidden>
        L
      </span>
    </div>
  );
};

export default RotatingBadge;
