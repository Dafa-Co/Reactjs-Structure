"use client";

import { motion, AnimatePresence, MotionProps } from "framer-motion";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  options: MotionProps;
  className?: string;
};

export default function Transition({ children, options, className }: Props) {
  return (
    <AnimatePresence>
      <motion.div {...options} className={className}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
