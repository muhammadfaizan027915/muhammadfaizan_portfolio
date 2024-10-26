"use client";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils";
import Link from "next/link";

type NavigationItem = {
  name: string;
  hash: string;
};

type FloatingNavbarProps = {
  className?: string;
  navigation: NavigationItem[];
};

export default function FloatingNavbar({
  navigation,
  className,
}: FloatingNavbarProps) {
  const [hash, setHash] = useState("");
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.005) {
        setVisible(false);
      } else {
        setVisible(direction > 0);
      }
    }
  });

  function handleChangeHash(hash: string) {
    return () => setHash(hash);
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "max-w-fit fixed top-10 inset-x-0 mx-auto text-white rounded-xl overflow-hidden p-px bg-gradient-to-r from-[#6971A266] to-[#272A3C80] z-[9999]",
          className
        )}
      >
        <div className="flex rounded-xl bg-gradient-to-r from-[#161A31] to-[#06091F] py-3 px-6 md:py-4 md:px-8 items-center justify-center space-x-8">
          {navigation.map((navItem) => (
            <div key={`link_${navItem.hash}`}>
              <Link
                href={navItem.hash}
                onClick={handleChangeHash(navItem.hash)}
              >
                <span className="block text-sm">{navItem.name}</span>
              </Link>
              <div
                className={cn(
                  "bg-white w-1 h-1 rounded  mx-auto",
                  hash === navItem.hash ? "visible" : "invisible"
                )}
              ></div>
            </div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
