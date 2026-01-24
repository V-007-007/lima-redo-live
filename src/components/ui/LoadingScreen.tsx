"use client";

import { motion } from "framer-motion";

type LoadingScreenProps = {
  title?: string;
};

export default function LoadingScreen({ title }: LoadingScreenProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-center"
      >
        <div className="text-4xl font-bold tracking-widest mb-2">
          LIMA
        </div>

        {title && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-sm uppercase tracking-wide text-neutral-300"
          >
            {title}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
