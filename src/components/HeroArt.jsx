import { motion } from "framer-motion";

export default function HeroArt() {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      <motion.div
        className="absolute inset-0 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(108,92,231,0.35), transparent 70%)" }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <svg viewBox="0 0 400 400" className="relative w-full h-full">
        <defs>
          <linearGradient id="skyline" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="node" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--accent-light)" />
            <stop offset="100%" stopColor="var(--accent)" />
          </linearGradient>
        </defs>

        {/* skyline silhouette */}
        <g fill="url(#skyline)">
          <rect x="20" y="260" width="30" height="100" />
          <rect x="55" y="230" width="24" height="130" />
          <rect x="84" y="280" width="26" height="80" />
          <rect x="300" y="250" width="26" height="110" />
          <rect x="330" y="290" width="30" height="70" />
          <rect x="270" y="300" width="22" height="60" />
        </g>

        {/* orbiting ring */}
        <motion.circle
          cx="200" cy="190" r="120"
          fill="none" stroke="var(--line)" strokeWidth="1" strokeDasharray="2 6"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 190px" }}
        />

        {/* neural network lines */}
        <g stroke="var(--accent)" strokeOpacity="0.35" strokeWidth="1.2">
          <line x1="140" y1="150" x2="200" y2="110" />
          <line x1="140" y1="150" x2="200" y2="190" />
          <line x1="140" y1="220" x2="200" y2="190" />
          <line x1="140" y1="220" x2="200" y2="250" />
          <line x1="200" y1="110" x2="260" y2="150" />
          <line x1="200" y1="190" x2="260" y2="150" />
          <line x1="200" y1="190" x2="260" y2="220" />
          <line x1="200" y1="250" x2="260" y2="220" />
        </g>

        {/* nodes */}
        {[
          [140, 150], [140, 220], [200, 110], [200, 190], [200, 250], [260, 150], [260, 220],
        ].map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx} cy={cy} r={i === 3 ? 9 : 6}
            fill="url(#node)"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
          />
        ))}
      </svg>

      <motion.div
        className="absolute top-4 right-6 w-3 h-3 rounded-full"
        style={{ background: "var(--accent-light)" }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-4 w-2 h-2 rounded-full"
        style={{ background: "var(--accent)" }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
