import { motion } from "framer-motion";

export default function MaidAnimation() {
  return (
    <div className="relative w-12 h-12 mb-6">
      <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-400 overflow-visible">
        {/* Sweeping Broom/Wand */}
        <motion.path
          d="M30 80 L70 20 M60 10 L80 30 M65 15 L75 25"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          animate={{ 
            rotate: [-15, 15, -15], 
            x: [-10, 10, -10] 
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ originX: 0.3, originY: 0.8 }}
        />
        {/* Dust turning into Sparkles */}
        {[0, 1, 2, 3].map((i) => (
          <motion.path
            key={i}
            d={`M${50 + i * 15} ${60 - i * 10} L${52 + i * 15} ${62 - i * 10} M${52 + i * 15} ${58 - i * 10} L${50 + i * 15} ${60 - i * 10}`}
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            animate={{
              scale: [0, 2, 0],
              opacity: [0, 1, 0],
              y: [0, -20],
              rotate: [0, 90, 180]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeOut"
            }}
          />
        ))}
      </svg>
    </div>
  );
}
