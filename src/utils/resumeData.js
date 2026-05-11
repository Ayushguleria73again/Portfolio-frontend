// Resume data structure - centralized source of truth
export const resumeData = {
  personal: {
    name: "Ayush Guleria",
    title: "Full Stack Software Engineer",
    email: "Ayushguleria73@gmail.com",
    location: "Himachal Pradesh, India",
    phone: "+91 8580523265", // Update with actual number
    website: "https://portfolio-frontend-gilt-omega.vercel.app/",
    linkedin: "https://www.linkedin.com/in/ayush-guleria-162a83206/",
    github: "https://github.com/Ayushguleria73again"
  },

  summary: "Full Stack Software Engineer with expertise in building scalable web applications using React, Node.js, and MongoDB. Passionate about creating intuitive user experiences and solving complex problems with elegant solutions. Currently exploring 3D Web Design and Server-Side Rendering.",

  experience: [
    {
      company: "Boffin Blocks",
      role: "Full Stack Developer Intern",
      period: "2026 - Present",
      location: "Remote",
      description: [
        "Developing scalable web applications using React and Node.js",
        "Enhancing user interfaces with modern frontend technologies",
        "Collaborating with cross-functional teams to deliver high-quality software solutions"
      ]
    }
  ],

  education: [
    {
      institution: "NEWUS, Dharamshala",
      degree: "Full Stack Software Engineering Crash Course",
      period: "2024 - 2025",
      description: "Intensive training in React, Next.js, Node.js, Express, MongoDB, REST APIs, authentication systems, and scalable backend architectures with hands-on project experience."
    },
    {
      institution: "IGNOU",
      degree: "Bachelor of Computer Applications (BCA)",
      period: "2022 - 2023 (Drop Out)",
      description: "Pursued foundational computer science coursework before pivoting to practical software development."
    },
    {
      institution: "GSSS Model Senior Secondary School, Mathalar",
      degree: "12th Grade (Mathematics)",
      period: "2018 - 2019(Drop Out)",
      description: "Completed senior secondary education with focus on Mathematics."
    }
  ],

  skills: {
    frontend: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    tools: ["Git", "Docker", "VS Code", "Vite", "Next.js"],
    other: ["Responsive Design", "UI/UX Design", "Problem Solving", "Team Collaboration"]
  },

  projects: [
    {
      name: "AI Interview Platform",
      description: "An advanced, real-time AI-driven platform that conducts structured voice-based screening interviews. Features natural conversations using ElevenLabs Conversational AI, real-time translation, and strict answer evaluation.",
      tech: ["Next.js", "Prisma", "Tailwind", "Socket.io", "PostgreSQL"],
      link: "#"
    },
    {
      name: "Rank Predictor Platform",
      description: "A high-performance automated rank prediction system that leverages scalable data processing and asynchronous job queues (BullMQ/Redis) to deliver real-time competitive analytics.",
      tech: ["Next.js", "Express", "MongoDB", "Redis", "BullMQ"],
      link: "https://hprankchecker.in/"
    },
    {
      name: "King Customs",
      description: "A premium, ultra-sophisticated landing page and management system for a luxury painting & restoration brand. Features a glassmorphic UI, dynamic interactions, and an optimized image gallery.",
      tech: ["React", "Vite", "Express", "MongoDB", "Tailwind"],
      link: "https://kingcpd.ca/"
    },
    {
      name: "Drifto",
      description: "An immersive, high-octane automotive showcase. Built with Next.js, it uses Lenis for buttery-smooth scrolling and Framer Motion for cinematic transitions between dynamic galleries.",
      tech: ["Next.js", "Framer Motion", "Lenis", "Tailwind CSS"],
      link: "https://drift-lake-sigma.vercel.app/"
    },
  ]
};
