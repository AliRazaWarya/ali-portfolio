import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

export default function StatCounter({ value, suffix = "", label, icon: Icon }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      {Icon && (
        <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center icon-box">
          <Icon className="text-lg" />
        </div>
      )}
      <div className="font-display text-3xl md:text-4xl font-bold" style={{ color: "var(--text)" }}>
        {display}
        <span style={{ color: "var(--accent)" }}>{suffix}</span>
      </div>
      <div className="mt-1 text-sm" style={{ color: "var(--muted)" }}>{label}</div>
    </motion.div>
  );
}
