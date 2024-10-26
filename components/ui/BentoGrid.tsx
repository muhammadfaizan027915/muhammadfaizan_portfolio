import { cn } from "@/utils";

type BentoGridProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function BentoGrid({ className, children }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[16rem] grid- grid-cols-1 lg:grid-cols-5 gap-y-6 lg:gap-x-6 max-w-7xl mx-auto w-full",
        className
      )}
    >
      {children}
    </div>
  );
}

type BentoGridItemProps = {
  className?: string;
  children?: React.ReactNode;
  containerClasses?: string;
};

export function BentoGridItem({
  className,
  children,
  containerClasses,
}: BentoGridItemProps) {
  return (
    <div
      className={cn(
        "text-white rounded-3xl overflow-hidden p-px bg-gradient-to-r from-[#6971A266] to-[#272A3C80]",
        containerClasses
      )}
    >
      <div
        className={cn(
          "w-full rounded-3xl bg-gradient-to-r from-[#161A31] to-[#06091F] relative overflow-hidden h-64 md:h-full",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
