"use client";

import { cn } from "@/utils";
import { Fragment } from "react";
import { useFormStatus } from "react-dom";

type ButtonProps = {
  title?: string;
  icon?: React.ReactNode;
  position?: "start" | "end";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  title,
  icon,
  position,
  ...props
}: ButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      {...props}
      className={cn([
        "text-white w-fit rounded-lg md:rounded-xl overflow-hidden p-px bg-gradient-to-r from-[#6971A266] to-[#272A3C80]",
        props.className,
      ])}
      disabled={pending}
    >
      <span className="rounded-lg md:rounded-xl bg-gradient-to-r from-[#161A31] to-[#06091F] inline-flex py-2 px-4 md:py-3 md:px-6 gap-2 justify-center items-center">
        {pending ? (
          <span>Submitting ...</span>
        ) : (
          <Fragment>
            {position === "start" && icon}
            <span>{title}</span>
            {position === "end" && icon}
          </Fragment>
        )}
      </span>
    </button>
  );
}
