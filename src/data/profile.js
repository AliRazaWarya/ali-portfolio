const assetBase = import.meta.env.BASE_URL;

// ============================================================
// ALL YOUR SITE CONTENT LIVES HERE.
// Edit this one file to update anything on the website —
// name, bio, projects, skills, experience, links, etc.
// No design/animation code down here, just your data.
// ============================================================

export const profile = {
  name: "Ali Raza",
  initials: "AR",
  role: "AI & Data Science Engineer",
  location: "Muzaffargarh, Punjab, Pakistan",
  email: "alirazawarya7172@gmail.com",
  phone: "+92 300 5145272",
  tagline:
    "I build deep learning systems, OCR pipelines, and full-stack products — then run the operations that ship them.",
  heroWords: ["Deep Learning", "LLMs", "Computer Vision", "Full-Stack Web", "Data Analytics"],
  summary:
    "A specialized Computing student and Data Scientist with a strong foundation in Deep Learning, LLMs, and full-stack web development. Expert in data analytics and web scraping, with a proven ability to build advanced CNN models, OCR systems, and automated data pipelines. Six years of operations leadership in retail and events bridge the gap between technical build and business execution.",
  photo: `${assetBase}profile.jpg`, // drop your photo in /public as profile.jpg
  resumeFile: "/Ali_Raza_CV.pdf", // drop your CV PDF in /public with this name

  social: {
    github: "https://github.com/AliRazaWarya",
    linkedin: "https://www.linkedin.com/in/ali-raza-warya-70363a287/",
    x: "https://x.com/alirazawarya110",
    kaggle: "https://www.kaggle.com/aliraza512",
    instagram: "https://www.instagram.com/ali_raza_warya/",
  },

  stats: [
    { label: "Projects Completed", value: 15, suffix: "+", icon: "layers" },
    { label: "AI Models Built", value: 10, suffix: "+", icon: "brain" },
    { label: "Years Leading Teams", value: 6, suffix: "+", icon: "clock" },
    { label: "Technologies", value: 20, suffix: "+", icon: "chip" },
    { label: "Dedication", value: 100, suffix: "%", icon: "spark" },
  ],

  // Shown as a small "in progress" banner on the Skills page — edit or remove freely.
  currentlyBuilding: {
    title: "AI-Powered Resume & Interview Assistant",
    description:
      "Exploring an LLM-driven tool that screens resumes and preps candidates for interviews.",
    status: "In Progress",
  },

  // Placeholder posts for the Blog page — swap in your real writing whenever you're ready.
  blogPosts: [
    {
      category: "AI/ML",
      readTime: "5 min read",
      title: "What I Learned Building My First CNN",
      excerpt:
        "Notes from training a handwritten digit classifier from scratch — the mistakes and the fixes.",
    },
    {
      category: "Career",
      readTime: "4 min read",
      title: "From Managing a Venue to Managing Models",
      excerpt:
        "How six years of operations leadership actually made me better at shipping AI projects.",
    },
    {
      category: "Data Science",
      readTime: "6 min read",
      title: "Web Scraping Without Getting Blocked",
      excerpt:
        "Practical lessons from building automated scraping pipelines with Selenium and BeautifulSoup.",
    },
  ],

  education: [
    {
      degree: "BS Computer Science",
      school: "Virtual University of Pakistan, Muzaffargarh",
      period: "2022 – 2026",
      note: "Overall marks: 61.36%",
    },
    {
      degree: "B.Sc — Computer Science, Economics, Geography",
      school: "BZU, Multan",
      period: "2020 – 2022",
      note: "1st Division",
    },
    {
      degree: "Intermediate (Pre-Engineering)",
      school: "Govt. Post Graduate College, Muzaffargarh",
      period: "2017 – 2019",
      note: "2nd Division",
    },
    {
      degree: "Matriculation (Science)",
      school: "Punjab Academy, Muzaffargarh",
      period: "2015 – 2017",
      note: "1st Division",
    },
  ],

  skillGroups: [
    {
      title: "AI & Data Science",
      skills: [
        "Deep Learning (CNN)",
        "LLM Architecture",
        "Sentiment Analysis",
        "Image Segmentation",
        "OCR Models",
        "Predictive Modeling",
        "R Programming",
        "Image Augmentation",
      ],
    },
    {
      title: "Data Engineering",
      skills: [
        "Web Scraping (Selenium, BeautifulSoup)",
        "Data Cleaning",
        "Global Dataset Analysis",
        "Data Mining",
      ],
    },
    {
      title: "Web & Software",
      skills: ["PHP", "HTML5", "CSS3", "JavaScript", "Flask", "Python", "C++"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "SQLite Studio", "DBeaver", "Microsoft Access", "SQL Server"],
    },
    {
      title: "Tools",
      skills: [
        "Power BI",
        "VS Code",
        "Jupyter Notebook",
        "Dreamweaver",
        "XAMPP",
        "MS Project",
        "RapidMiner",
      ],
    },
    {
      title: "Productivity",
      skills: ["MS Word", "Excel (Advanced)", "PowerPoint"],
    },
  ],

  projects: [
    {
      title: "Smart School Management System",
      description:
        "Final year project — a complete web application built with PHP and MySQL, featuring secure, role-based portals for admins, teachers, and students.",
      tags: ["PHP", "MySQL", "Web App"],
      image: `${assetBase}projects/school.jpg`,
      link: "",
    },
    {
      title: "Deep Learning Suite",
      description:
        "CNN models trained for MNIST handwritten digit recognition and alphabetic letter classification.",
      tags: ["CNN", "Deep Learning", "Python"],
      image: `${assetBase}projects/deeplearning.jpg`,
      link: "",
    },
    {
      title: "Computer Vision & OCR Toolkit",
      description:
        "Custom OCR software, AI text extractors, and facial gender prediction models built with OpenCV.",
      tags: ["OpenCV", "OCR", "Computer Vision"],
      image: `${assetBase}projects/ocr.jpg`,
      link: "",
    },
    {
      title: "Sentiment Analysis Lab",
      description:
        "A multilingual tool that analyzes sentiment from YouTube comments, CSV files, and website links.",
      tags: ["NLP", "Sentiment Analysis", "Python"],
      image: `${assetBase}projects/sentiment.jpg`,
      link: "",
    },
    {
      title: "Predictive Analytics Models",
      description:
        "Weather prediction, house and mobile price regression models, and the classic Titanic survival ML analysis.",
      tags: ["Regression", "Machine Learning"],
      image: `${assetBase}projects/predictive.jpg`,
      link: "",
    },
    {
      title: "Programmer's Den — Software House Website",
      description:
        "A professional, responsive website designed and shipped for a software house.",
      tags: ["Web Design", "Responsive"],
      image: `${assetBase}projects/softwarehouse.jpg`,
      link: "https://programmerden1214.web.app/",
    },
  ],

  experience: [
    {
      role: "Manager",
      company: "Royal Palace Marquee, Muzaffargarh",
      period: "2019 – 2024 · 5 years",
      description:
        "Led operations for a premier event venue — managing staff and using data-driven insights to optimize event logistics and customer satisfaction.",
    },
    {
      role: "Manager",
      company: "Royal Brand, Muzaffargarh",
      period: "2023 – 2024 · 1 year",
      description:
        "Managed sales teams and inventory for a leading clothing brand, applying retail analytics to drive business growth.",
    },
    {
      role: "AI & Machine Learning Intern",
      company: "IAXON, Rahimyar Khan",
      period: "2025 – 2026 · 1 year",
      description:
        "Completed a year-long internship in AI & ML fundamentals, focused on data preprocessing, model training, and optimization.",
    },
  ],

  certifications: [
    "Data Analyst Specialization — Advanced Analytics & Visualization (3 months)",
    "Deep Learning & LLM Certification — Neural Networks & Large Language Models (1 year)",
    "Web Development Certificate — Programmer's Den, Bahawalpur (1 month)",
    "Computer Course Certificate — Infotech Training Institute, Muzaffargarh (6 months)",
    "Management Certificate — Royal Palace Marquee (5 years)",
    "Manager Certificate — Royal Brand, Muzaffargarh (1 year)",
  ],

  languages: ["English", "Urdu", "Punjabi", "Saraiki"],
};
