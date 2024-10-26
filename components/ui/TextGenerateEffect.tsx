"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils";

type TextGenerateEffectProps = {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
};

export default function TextGenerateEffect({
  words,
  className,
  filter = true,
  duration = 0.5,
}: TextGenerateEffectProps) {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope.current]);

  return (
    <motion.div ref={scope} className={cn("text-2xl", className)}>
      {wordsArray.map((word, index) => (
        <motion.span
          key={word + index}
          className="text-inherit opacity-0"
          style={{ filter: filter ? "blur(10px)" : "none" }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );
}
