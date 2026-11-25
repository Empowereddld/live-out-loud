import { cn } from "@/lib/utils";

const GoldRule = ({ className }: { className?: string }) => (
  <span aria-hidden className={cn("block h-px w-16 bg-gold", className)} />
);

export default GoldRule;
