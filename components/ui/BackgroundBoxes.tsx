"use client";

import { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils";

type BackgroundBoxProps = {
  className?: string;
};

function BackgroundBoxes({ className }: BackgroundBoxProps) {
  const [rows, setRows] = useState<string[]>([]);
  const [columns, setColumns] = useState<string[]>([]);

  useEffect(() => {
    if (window) {
      setRows(new Array(Math.ceil(window?.innerWidth / 96)).fill("$row"));
      setColumns(
        new Array(Math.floor(window?.innerHeight / 96)).fill("$column")
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cn("absolute left-0 top-0 flex  w-full h-full", className)}>
      {rows.map((_, index) => (
        <motion.div
          key={_ + index}
          className="w-24 h-24 border-l  border-[#272a3c3d] relative"
        >
          {columns.map((_, i) => (
            <motion.div
              whileHover={{
                backgroundColor: `#272A3C80`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={_ + i}
              className="w-24 h-24  border-r border-t border-[#272a3c3d] relative"
            />
          ))}
        </motion.div>
      ))}
    </div>
  );
}

export default memo(BackgroundBoxes);
