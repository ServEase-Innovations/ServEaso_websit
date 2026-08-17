import { motion } from "framer-motion";

export default function NannyAnimation() {
  return (
    <div className="relative w-12 h-12 mb-6 text-purple-400">
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
        {/* Baby Carriage Body */}
        <motion.path
          d="M20 50 A 30 30 0 0 1 80 50 L80 70 A 10 10 0 0 1 70 80 L30 80 A 10 10 0 0 1 20 70 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          animate={{ rotate: [-4, 4, -4], x: [-3, 3, -3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ originX: 0.5, originY: 0.8 }}
        />
        
        {/* Carriage Handle */}
        <motion.path 
          d="M80 65 Q 95 65 95 45" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="6" 
          strokeLinecap="round"
          animate={{ rotate: [-4, 4, -4], x: [-3, 3, -3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ originX: 0.5, originY: 0.8 }}
        />

        {/* Wheels */}
        <motion.circle 
          cx="35" cy="85" r="8" 
          fill="none" stroke="currentColor" strokeWidth="5"
          animate={{ x: [-3, 3, -3], rotate: [-20, 20, -20] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle 
          cx="65" cy="85" r="8" 
          fill="none" stroke="currentColor" strokeWidth="5"
          animate={{ x: [-3, 3, -3], rotate: [-20, 20, -20] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Hearts / Sleep Zzz */}
        {[0, 1].map((i) => (
          <motion.path
            key={i}
            d={`M${40 + i * 20} 35 Q${35 + i * 20} 25 ${40 + i * 20} 20 Q${45 + i * 20} 25 ${40 + i * 20} 35`}
            fill="currentColor"
            animate={{
              y: [0, -20],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 1,
              ease: "easeOut"
            }}
          />
        ))}
      </svg>
    </div>
  );
}
