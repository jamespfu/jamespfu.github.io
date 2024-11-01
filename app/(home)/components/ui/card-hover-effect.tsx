"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useMemo } from "react";
import { IconType } from "react-icons"; // Icon type from react-icons

// Define the colors array
const ringColors = [
  "#a6d189",
  "#81c8be",
  "#e78284",
  "#c6d0f5",
  "#626880",
  "#dc8a78",
  "#dd7878",
  "#8caaee",
  "#ca9ee6",
  "#f5a97f",
];

// Function to randomly select a color for each item initially
const getRandomColors = (length: number): string[] => // Specify return type as string[]
  Array.from({ length }, () => ringColors[Math.floor(Math.random() * ringColors.length)]);

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    text: string;
    Icon: IconType;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Generate a fixed color for each item on mount
  const itemRingColors = useMemo(() => getRandomColors(items.length), [items.length]);

  return (
    <div
      className={cn(
        "grid grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => {
        const Icon = item.Icon;
        const ringColor = itemRingColors[idx]; // Assign precomputed color for each item

        return (
          <div
            key={idx}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-lg"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div
              className="rounded-md w-full p-4 overflow-hidden bg-black group-hover:ring-2 relative z-20 transition-all duration-500 cursor-pointer"
              style={{ boxShadow: hoveredIndex === idx ? `0 0 0 2px ${ringColor}` : "none" }}
            >
              <div className="py-10 z-50 relative space-y-5">
                <Icon className="w-8 h-8 mx-auto" /> {/* Icon component */}
                <p className="text-lg font-bold text-center text-gray-300">
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
