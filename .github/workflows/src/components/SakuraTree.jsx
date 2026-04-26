import React from 'react'
import { motion } from 'framer-motion'

const SakuraTree = () => {
  return (
    <div className="relative w-[400px] h-[500px] md:w-[500px] md:h-[600px]">
      <svg
        viewBox="0 0 500 600"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 20px 40px rgba(255, 182, 193, 0.2))' }}
      >
        <motion.path
          d="M250 580 C250 580, 240 500, 245 450 C250 400, 230 350, 220 300 C210 250, 200 200, 210 150 C215 120, 220 100, 230 80 L250 50 L270 80 C280 100, 285 120, 290 150 C300 200, 290 250, 280 300 C270 350, 260 400, 255 450 C260 500, 250 580, 250 580Z"
          fill="url(#trunkGradient)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />

        <motion.path
          d="M250 300 Q180 250, 120 200"
          stroke="url(#branchGradient)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        />
        <motion.path
          d="M250 250 Q320 200, 380 150"
          stroke="url(#branchGradient)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
        />
        <motion.path
          d="M250 200 Q200 150, 150 100"
          stroke="url(#branchGradient)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.4 }}
        />
        <motion.path
          d="M250 220 Q300 170, 350 120"
          stroke="url(#branchGradient)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.3 }}
        />
        <motion.path
          d="M120 200 Q80 180, 60 160"
          stroke="url(#branchGradient)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        />
        <motion.path
          d="M380 150 Q420 130, 440 110"
          stroke="url(#branchGradient)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
        />

        {[
          { cx: 250, cy: 50, r: 45, delay: 1.8 },
          { cx: 230, cy: 70, r: 35, delay: 1.9 },
          { cx: 270, cy: 65, r: 38, delay: 2.0 },
          { cx: 250, cy: 85, r: 30, delay: 2.1 },
          { cx: 120, cy: 200, r: 40, delay: 2.0 },
          { cx: 100, cy: 180, r: 32, delay: 2.1 },
          { cx: 140, cy: 185, r: 35, delay: 2.2 },
          { cx: 110, cy: 210, r: 28, delay: 2.3 },
          { cx: 60, cy: 160, r: 30, delay: 2.2 },
          { cx: 80, cy: 150, r: 25, delay: 2.3 },
          { cx: 380, cy: 150, r: 42, delay: 2.0 },
          { cx: 360, cy: 135, r: 35, delay: 2.1 },
          { cx: 400, cy: 140, r: 33, delay: 2.2 },
          { cx: 440, cy: 110, r: 28, delay: 2.3 },
          { cx: 420, cy: 100, r: 25, delay: 2.4 },
          { cx: 150, cy: 100, r: 35, delay: 2.2 },
          { cx: 170, cy: 90, r: 28, delay: 2.3 },
          { cx: 350, cy: 120, r: 32, delay: 2.2 },
          { cx: 330, cy: 110, r: 26, delay: 2.3 },
          { cx: 200, cy: 150, r: 25, delay: 2.4 },
          { cx: 300, cy: 160, r: 28, delay: 2.4 },
          { cx: 250, cy: 130, r: 30, delay: 2.5 },
        ].map((blossom, i) => (
          <motion.circle
            key={i}
            cx={blossom.cx}
            cy={blossom.cy}
            r={blossom.r}
            fill={`url(#blossomGradient${i % 3})`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.85 }}
            transition={{ 
              duration: 0.8, 
              delay: blossom.delay,
              type: "spring",
              stiffness: 100
            }}
          />
        ))}

        {[
          { cx: 180, cy: 220, rx: 8, ry: 5, rot: 30 },
          { cx: 320, cy: 180, rx: 7, ry: 4, rot: -20 },
          { cx: 200, cy: 280, rx: 6, ry: 4, rot: 45 },
          { cx: 300, cy: 240, rx: 8, ry: 5, rot: -40 },
          { cx: 160, cy: 130, rx: 7, ry: 4, rot: 60 },
          { cx: 340, cy: 200, rx: 6, ry: 4, rot: -30 },
          { cx: 220, cy: 110, rx: 8, ry: 5, rot: 15 },
          { cx: 280, cy: 90, rx: 7, ry: 4, rot: -50 },
        ].map((petal, i) => (
          <motion.ellipse
            key={`petal-${i}`}
            cx={petal.cx}
            cy={petal.cy}
            rx={petal.rx}
            ry={petal.ry}
            fill="#ffb7c5"
            opacity="0.6"
            transform={`rotate(${petal.rot} ${petal.cx} ${petal.cy})`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2.5 + i * 0.1, duration: 0.5 }}
          />
        ))}

        <defs>
          <linearGradient id="trunkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5d4037" />
            <stop offset="50%" stopColor="#795548" />
            <stop offset="100%" stopColor="#4e342e" />
          </linearGradient>
          <linearGradient id="branchGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6d4c41" />
            <stop offset="100%" stopColor="#5d4037" />
          </linearGradient>
          <radialGradient id="blossomGradient0" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#ffdde4" />
            <stop offset="50%" stopColor="#ffb7c5" />
            <stop offset="100%" stopColor="#ff9eb3" stopOpacity="0.8" />
          </radialGradient>
          <radialGradient id="blossomGradient1" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#ffe4e9" />
            <stop offset="50%" stopColor="#ffc2cf" />
            <stop offset="100%" stopColor="#ff8fa3" stopOpacity="0.8" />
          </radialGradient>
          <radialGradient id="blossomGradient2" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#fff0f3" />
            <stop offset="50%" stopColor="#ffdde4" />
            <stop offset="100%" stopColor="#ffb7c5" stopOpacity="0.8" />
          </radialGradient>
        </defs>
      </svg>

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-sakura-300/40"
          style={{
            left: `${20 + i * 12}%`,
            top: `${10 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, -10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  )
}

export default SakuraTree