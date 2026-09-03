import { motion } from "framer-motion";

export default function NightArt() {
  return (
    <svg viewBox="0 0 500 400" className="absolute inset-0 w-full h-full opacity-70" preserveAspectRatio="xMidYMax slice">
      <defs>
        <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent-light)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--accent-light)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="380" cy="70" r="70" fill="url(#moonGlow)" />
      <motion.circle
        cx="380" cy="70" r="34" fill="var(--surface-2)" stroke="var(--accent-light)" strokeWidth="1.5"
        animate={{ opacity: [0.85, 1, 0.85] }} transition={{ duration: 4, repeat: Infinity }}
      />
      <g fill="var(--surface-2)" opacity="0.9">
        <rect x="0" y="260" width="60" height="140" />
        <rect x="65" y="220" width="45" height="180" />
        <rect x="115" y="280" width="50" height="120" />
        <rect x="170" y="240" width="40" height="160" />
        <rect x="215" y="300" width="55" height="100" />
      </g>
      {[...Array(20)].map((_, i) => (
        <motion.circle
          key={i}
          cx={20 + (i * 23) % 480}
          cy={20 + ((i * 37) % 180)}
          r={1.4}
          fill="var(--accent-light)"
          animate={{ opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </svg>
  );
}
