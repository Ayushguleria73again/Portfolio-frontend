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
      name: "my-luxe-store",
      description: "A sophisticated e-commerce solution featuring real-time inventory management, advanced analytics, and seamless payment integration.",
      tech: ["React", "Node.js (WIP)", "MongoDB"],
      link: "https://my-luxe-store.vercel.app/"
    },
    {
      name: "Task Management System",
      description: "Collaborative workspace with real-time synchronization, advanced filtering, and drag-and-drop interface.",
      tech: ["React", "Node.js (WIP)", "MongoDB"],
      link: "https://task-manager-plum-zeta.vercel.app/"
    },
    {
      name: "Thread & Timber",
      description: "A premium e-commerce platform for handcrafted artisan apparel and sustainable fashion.",
      tech: ["Next.js", "TypeScript", "Express.js", "MongoDB", "Tailwind CSS"],
      link: "https://thread-and-timber-mror.vercel.app/"
    },
    {
      name: "Bunai From The Hills",
      description: "An e-commerce website for a Himalayan knitting brand.",
      tech: ["React", "Vite", "Express.js", "MongoDB"],
      link: "https://bunai-from-hills.vercel.app/"
    },
    {
      name: "MyOnlineTools",
      description: "A collection of free online productivity tools including converters and generators.",
      tech: ["React", "Vite", "JavaScript"],
      link: "https://myonlinetools.site/"
    }
  ]
};
