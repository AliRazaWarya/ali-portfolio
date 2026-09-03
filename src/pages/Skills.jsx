import Reveal from "../components/Reveal";
import { motion } from "framer-motion";
import {
  SiPython, SiJavascript, SiCplusplus, SiMysql, SiPostgresql, SiSqlite, SiMongodb,
  SiScikitlearn, SiTensorflow, SiPytorch, SiPandas, SiNumpy,
  SiFastapi, SiFlask, SiStreamlit, SiGit, SiDocker,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaDatabase, FaChartBar, FaLink, FaChartPie } from "react-icons/fa6";
import { HiOutlineRocketLaunch, HiOutlineCpuChip } from "react-icons/hi2";

const iconCategories = [
  {
    title: "Languages",
    items: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "SQL", icon: FaDatabase, color: "#F29111" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
    ],
  },
  {
    title: "AI / ML",
    items: [
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "XGBoost", icon: HiOutlineCpuChip, color: "#6c5ce7" },
    ],
  },
  {
    title: "Data Science",
    items: [
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
      { name: "Matplotlib", icon: FaChartBar, color: "#11557C" },
      { name: "Seaborn", icon: FaChartBar, color: "#4C72B0" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "SQLite", icon: SiSqlite, color: "#003B57" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    title: "Tools & Frameworks",
    items: [
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Flask", icon: SiFlask, color: "#FFFFFF" },
      { name: "Streamlit", icon: SiStreamlit, color: "#FF4B4B" },
      { name: "LangChain", icon: FaLink, color: "#1C3C3C" },
    ],
  },
  {
    title: "Others",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Power BI", icon: FaChartPie, color: "#F2C811" },
    ],
  },
];

function AtomGraphic() {
  return (
    <div className="relative w-48 h-48 mx-auto md:mx-0 opacity-90">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <ellipse cx="100" cy="100" rx="70" ry="28" fill="none" stroke="#6c5ce7" strokeWidth="1.5" opacity="0.6" />
          <ellipse cx="100" cy="100" rx="70" ry="28" fill="none" stroke="#6c5ce7" strokeWidth="1.5" opacity="0.6" transform="rotate(60 100 100)" />
          <ellipse cx="100" cy="100" rx="70" ry="28" fill="none" stroke="#6c5ce7" strokeWidth="1.5" opacity="0.6" transform="rotate(120 100 100)" />
        </svg>
      </motion.div>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-8 h-8 rounded-full"
          style={{ background: "radial-gradient(circle, #a996ff 0%, #6c5ce7 70%)", boxShadow: "0 0 30px #6c5ce7" }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-16">
      <div className="grid lg:grid-cols-[0.9fr_1.5fr] gap-10 lg:gap-14 items-start mb-10">
        <Reveal>
          <p className="text-xs font-mono tracking-wide mb-3" style={{ color: "var(--accent)" }}>MY EXPERTISE</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h1>
          <p className="max-w-sm mb-10" style={{ color: "var(--muted)" }}>
            Here are the technologies and tools I use to build intelligent solutions and innovative applications.
          </p>
          <AtomGraphic />
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-4">
          {iconCategories.map((cat, idx) => (
            <Reveal key={cat.title} delay={idx * 0.05}>
              <motion.div
                className="card p-4 h-full"
                whileHover={{ y: -3, boxShadow: "0 12px 30px rgba(108,92,231,0.12)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h2 className="text-sm font-semibold mb-3" style={{ color: "var(--muted)" }}>
                  {cat.title}
                </h2>
                <div className="grid grid-cols-2 gap-2">
                  {cat.items.map((it) => (
                    <div key={it.name} className="flex items-center gap-2.5 p-1.5 rounded-lg">
                      <div
                        className="w-9 h-9 flex items-center justify-center rounded-lg text-lg shrink-0"
                        style={{
                          background: `${it.color}22`,
                          color: it.color,
                          boxShadow: `0 0 0 1px ${it.color}40`,
                        }}
                      >
                        <it.icon />
                      </div>
                      <span className="text-xs font-medium leading-tight">{it.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={0.1}>
        <motion.div
          className="card p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
          style={{ borderColor: "var(--accent)", background: "linear-gradient(135deg, rgba(108,92,231,0.08), transparent)" }}
        >
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 flex items-center justify-center icon-box shrink-0">
              <HiOutlineRocketLaunch className="text-xl" />
            </div>
            <div>
              <p className="font-semibold mb-1">What's Next?</p>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                Currently developing <strong>AgriVision AI</strong>, a real-time AI Crop Disease Recognizing system powered by custom ML models and Online Gemini LLM.
              </p>
            </div>
          </div>
          <span className="text-xs font-mono px-3 py-1.5 pill shrink-0 self-start md:self-center" style={{ color: "var(--accent)" }}>
            IN PROGRESS
          </span>
        </motion.div>
      </Reveal>
    </div>
  );
}
