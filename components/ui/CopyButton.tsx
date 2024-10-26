"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { COPIED_RETURN_TIME } from "@/utils/constants";
import toast from "react-hot-toast";
import Button from "./Button";

type CopyButtonProps = {
  title?: string;
  copyText: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function CopyButton({
  title,
  copyText,
  ...props
}: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  function handleCopyText() {
    navigator.clipboard.writeText(copyText);
    setIsCopied(true);
    toast.success("Copied!", { position: "bottom-center" });
    setTimeout(() => setIsCopied(false), COPIED_RETURN_TIME);
  }

  return (
    <Button
      {...props}
      title={title}
      position="start"
      icon={isCopied ? <Check size="1rem" /> : <Copy size="1rem" />}
      onClick={handleCopyText}
    />
  );
}
