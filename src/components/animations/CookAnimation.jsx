import { motion } from "framer-motion";

export default function CookAnimation() {
  return (
    <div className="relative w-16 h-16 mb-6">
      <svg viewBox="0 0 100 100" className="w-full h-full text-[#38bdf8] overflow-visible">
        {/* Pan Handle & Base */}
        <motion.path
          d="M30 65 L65 65 A10 10 0 0 0 75 55 L75 45 L20 45 L20 55 A10 10 0 0 0 30 65 Z M75 50 L95 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ rotate: [-3, 6, -3] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ originX: 0.3, originY: 0.6 }}
        />
        {/* Tossing Food (Pancake/Omelette) */}
        <motion.path
          d="M40 40 Q45 35 55 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ originX: 0.5, originY: 0.5 }}
        />
        {/* Sizzling Stars/Spices */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            cx={35 + i * 15}
            cy={25 - (i % 2) * 10}
            r="2"
            fill="currentColor"
            animate={{
              y: [0, -15],
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeOut"
            }}
          />
        ))}
      </svg>
    </div>
  );
}
