import { cn } from "@/utils";

export default function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        "px-4 py-3 outline-none border border-[#6971A266] rounded-xl bg-gradient-to-r from-[#161A31] to-[#06091F] text-white",
        className
      )}
    />
  );
}
