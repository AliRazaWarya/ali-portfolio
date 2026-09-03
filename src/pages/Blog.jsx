import { useState } from "react";
import { Link } from "react-router-dom";
import { profile } from "../data/profile";
import Reveal from "../components/Reveal";
import { FiArrowRight } from "react-icons/fi";

const categories = ["All", "AI/ML", "Career", "Data Science"];

export default function Blog() {
  const [active, setActive] = useState("All");
  const posts =
    active === "All" ? profile.blogPosts : profile.blogPosts.filter((p) => p.category === active);

  return (
    <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-16 text-left">
      <Reveal>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
          My AI <span className="text-gradient">Journal</span>
        </h1>
        <p className="max-w-xl mb-10" style={{ color: "var(--muted)" }}>
          Thoughts, experiments, and lessons from my journey in AI and data science.
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="flex flex-wrap justify-start gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className="text-sm px-4 py-2 pill transition-colors"
              style={{
                background: active === c ? "var(--accent)" : "transparent",
                color: active === c ? "#fff" : "var(--muted)",
                borderColor: active === c ? "var(--accent)" : "var(--line)",
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6 text-left">
        {posts.map((post, idx) => (
          <Reveal key={post.title} delay={idx * 0.06}>
            <div className="card p-6 h-full flex flex-col">
              <p className="text-xs font-mono mb-3" style={{ color: "var(--accent)" }}>
                {post.category.toUpperCase()} · {post.readTime}
              </p>
              <h3 className="font-display text-lg font-semibold mb-3">{post.title}</h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm mt-5 font-medium" style={{ color: "var(--accent)" }}>
                Read Article <FiArrowRight />
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="card p-10 mt-16">
          <p className="font-semibold mb-5">Curious about what I'm building?</p>
          <Link to="/projects" className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-medium">
            Explore my projects <FiArrowRight />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
