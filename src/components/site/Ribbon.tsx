import { site } from "@/data/site";

/** Slow scrolling band of the brand name between the hero and About. */
const Ribbon = () => {
  const items = Array.from({ length: 10 });
  const Row = ({ hidden }: { hidden?: boolean }) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden}>
      {items.map((_, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6 font-display text-2xl italic text-cream sm:text-3xl">
            {site.brandName}
          </span>
          <span className="text-gold">✦</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="relative overflow-hidden bg-rose py-4 sm:py-5">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
};

export default Ribbon;
