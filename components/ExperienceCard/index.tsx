import Image from "next/image";
import { cn } from "@/utils";

type ExperienceCardProps = {
  containerClasses?: string;
  iconUrl?: string;
  heading?: string;
  company?: string;
  description?: string;
};

export default function ExperienceCard({
  containerClasses,
  iconUrl,
  heading,
  company,
  description,
}: ExperienceCardProps) {
  return (
    <div
      className={cn(
        "text-white rounded-3xl overflow-hidden p-px pt-1 bg-gradient-to-r from-[#272A3C80] to-[#6971A266]",
        containerClasses
      )}
    >
      <div
        className={cn(
          "w-full rounded-3xl bg-gradient-to-r from-[#06091F] to-[#161A31] relative overflow-hidden p-6 md:p-8",
          "flex gap-8 flex-col md:flex-row items-center"
        )}
      >
        <div className="relative w-24 h-24">
          {iconUrl ? <Image src={iconUrl} alt="" fill /> : null}
        </div>
        <div className="w-full text-center md:text-left">
          <h2 className="font-bold text-2xl">{heading}</h2>
          <p className="text-md mb-1 italic">{company}</p>
          <p className="text-sm text-blue-100">{description}</p>
        </div>
      </div>
    </div>
  );
}
