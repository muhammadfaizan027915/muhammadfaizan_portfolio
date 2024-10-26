import { cn } from "@/utils";

export default function TextArea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(
        "px-4 py-3 outline-none border border-[#6971A266] rounded-xl resize-none bg-gradient-to-r from-[#161A31] to-[#06091F] text-white",
        className
      )}
    />
  );
}
