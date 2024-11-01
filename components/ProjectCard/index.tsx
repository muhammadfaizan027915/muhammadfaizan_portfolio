import { cn } from "@/utils";
import Image from "next/image";

type ProjectCardProps = {
  containerClasses?: string;
  heading?: string;
  description?: string;
  imageUrl?: string;
  techStack?: string[];
};

export default async function ProjectCard({
  containerClasses,
  imageUrl,
  heading,
  description,
  techStack,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "text-white rounded-3xl overflow-hidden p-px bg-gradient-to-r from-[#6971A266] to-[#272A3C80]",
        containerClasses
      )}
    >
      <div
        className={cn(
          "w-full rounded-3xl bg-gradient-to-r from-[#161A31] to-[#06091F] relative overflow-hidden p-6 md:p-8"
        )}
      >
        <div className="relative h-56">
          {imageUrl && heading ? (
            <Image src={imageUrl} alt={heading} fill />
          ) : null}
        </div>
        <div className="mt-6">
          <h3 className="text-2xl font-bold">{heading}</h3>
          <p className="text-sm text-blue-100">{description}</p>
        </div>
        <div className="mt-4">
          {techStack?.map((tech, index) => (
            <span
              key={index}
              className="rounded-full border border-gray-700 bg-gradient-to-r from-[#04071D] to-[#0C0E23] h-10 w-10 inline-flex items-center justify-center mr-2"
            >
              <Image
                src={tech}
                alt={`tech_stack_${index}`}
                width={20}
                height={20}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
