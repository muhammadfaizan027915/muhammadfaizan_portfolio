import Image from "next/image";
import { cn } from "@/utils";

type SkillCardProps = {
  containerClasses?: string;
  iconUrl?: string;
  title?: string;
};

export default function SkillCard({
  containerClasses,
  iconUrl,
  title,
}: SkillCardProps) {
  return (
    <div
      className={cn(
        "text-white rounded-3xl overflow-hidden p-px bg-gradient-to-r from-[#272A3C80] to-[#6971A266]",
        containerClasses
      )}
    >
      <div
        className={
          "w-full rounded-3xl bg-gradient-to-r from-[#06091F] to-[#161A31] relative overflow-hidden p-6"
        }
      >
        <div className="relative w-24 h-24">
          {iconUrl ? <Image priority src={iconUrl} alt="" fill /> : null}
        </div>
        <h2 className="font-bold text-md text-center mt-4">{title}</h2>
      </div>
    </div>
  );
}
