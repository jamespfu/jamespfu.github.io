"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const DirectionAwareHover = ({
  imageUrl,
  children,
  childrenClassName,
  imageClassName,
  className,
}: {
  imageUrl: string;
  children: React.ReactNode | string;
  childrenClassName?: string;
  imageClassName?: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      className={cn(
        "bg-black/80 rounded-lg overflow-hidden relative group",
        className
      )}
      whileHover="hover" // Trigger both image and text animations on hover
    >
      {/* Background image with smooth blur effect on hover */}
      <motion.div
        className="relative h-full w-full bg-black/80 dark:bg-black z-10"
        variants={{
          hover: { filter: "blur(8px)" },
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Image
          alt="image"
          className={cn(
            "h-full w-full object-cover scale-[1.15] transition duration-500",
            imageClassName
          )}
          width="1000"
          height="1000"
          src={imageUrl}
        />
        <div className="absolute inset-0 bg-black opacity-65"></div> 

      </motion.div>

      {/* Text overlay with upward movement on hover */}
      <motion.div
        className={cn(
          "text-white absolute bottom-4 left-4 z-20",
          childrenClassName
        )}
        variants={{
          hover: { y: -20 }, // Moves text up by 20px on hover
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
