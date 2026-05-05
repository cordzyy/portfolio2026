export const heroData = {
  greeting: "Hey there, I'm",
  name: "Joshua Corda",
  title: "Front-End Developer",
  subtitle: "& UI/UX Designer",
  description:
    "I craft high-performance web interfaces and visually driven digital experiences — from pixel-perfect WordPress sites to modern React (NextJs) apps. Currently building at Quanby Solutions Inc.",
  cta: {
    primary: { label: "View My Work", href: "#projects" },
    secondary: { label: "Get in Touch", href: "#contact" },
  },
  stats: [
    { value: "2+", label: "Years Experience" },
    { value: "10+", label: "Projects Shipped" },
    { value: "2", label: "Companies" },
  ],
  avatarUrl: "/avatar.jpg",
  socialLinks: [
    { label: "LinkedIn", href: "https://linkedin.com/in/joshuacorda", icon: "Linkedin" },
    { label: "GitHub", href: "https://github.com/cordzyy", icon: "Github" },
    { label: "Facebook", href: "https://www.facebook.com/corda.juswa", icon: "Facebook" },
    { label: "Instagram", href: "https://www.instagram.com/crdajswa/", icon: "Instagram" },
  ],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const projectsData = [
  {
    id: "proj-2",
    title: "Content Management System",
    description:
      "A custom CMS platform built with Next.js and TypeScript, enabling content editors to manage pages, media, and structured data through a clean, intuitive admin interface with real-time preview.",
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "REST API"],
    liveUrl: "/cms-demo/login",
    githubUrl: "#",
    featured: true,
    year: "2026",
    category: "Enterprise · Confidential",
  },
  {
    id: "proj-1",
    title: "Learning Management System",
    description:
      "A full-featured LMS built for enterprise use — covering course management, student enrollment, progress tracking, and role-based access control. Led front-end development and acted as project lead managing client deliverables.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop",
    tags: ["Angular", "TypeScript", "HTML5", "CSS3", "Responsive Design"],
    liveUrl: "/lms-demo",
    githubUrl: "#",
    featured: true,
    year: "2025",
    category: "Enterprise · Confidential",
  },
  {
    id: "proj-3",
    title: "Queue Management System",
    description:
      "A real-time queuing and service flow management system built with Angular. Features ticket generation, live queue display, staff-side dashboard, and service analytics to streamline client-facing operations.",
    image:
      "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=800&h=500&fit=crop",
    tags: ["Angular", "TypeScript", "HTML5", "CSS3", "Real-time"],
    liveUrl: "/qms-demo/login",
    githubUrl: "#",
    featured: false,
    year: "2024",
    category: "Enterprise · Confidential",
  },
  {
    id: "proj-4",
    title: "Organic Pili – Natural Wellness E-Commerce",
    description:
      "A clean, minimalist WordPress site built with Elementor to showcase high-end wellness products. Integrated a visually driven WooCommerce product catalog with high-fidelity imagery and a luxurious 'liquid gold' brand aesthetic, hosted on WP Engine.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop",
    tags: ["WordPress", "Elementor", "WooCommerce", "WP Engine", "CSS"],
    liveUrl: "https://organicpili.com/",
    githubUrl: "https://github.com/cordzyy",
    featured: false,
    year: "2024",
    category: "E-Commerce",
  },
  {
    id: "proj-5",
    title: "Corporate Services Portal",
    description:
      "Designed and architected a comprehensive professional services platform. Engineered a complex information architecture, built a high-conversion careers portal, and optimized for performance and 100% mobile responsiveness.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop",
    tags: ["WordPress", "Elementor", "SEO", "WP Engine", "UI/UX", "Yoast SEO"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    year: "2024",
    category: "Enterprise · Confidential",
  },
];

export const skillsData = {
  categories: [
    {
      name: "Frontend",
      icon: "Layers",
      skills: [
        { name: "HTML5 / CSS3", level: 95 },
        { name: "JavaScript / TypeScript", level: 85 },
        { name: "React (NextJs)", level: 85 },
        { name: "Angular", level: 80 },
        { name: "Tailwind CSS", level: 88 },
        { name: "PHP", level: 65 },
      ],
    },
    {
      name: "WordPress & SEO",
      icon: "Globe",
      skills: [
        { name: "Elementor (Expert)", level: 97 },
        { name: "WooCommerce", level: 90 },
        { name: "WP Engine", level: 85 },
        { name: "Yoast / RankMath SEO", level: 88 },
        { name: "Google Analytics (GA4)", level: 80 },
      ],
    },
    {
      name: "Design & Creative",
      icon: "Palette",
      skills: [
        { name: "Figma (UI/UX)", level: 90 },
        { name: "Adobe Photoshop", level: 85 },
        { name: "Adobe Illustrator", level: 80 },
        { name: "Canva", level: 95 },
        { name: "Wireframing & Prototyping", level: 88 },
      ],
    },
  ],
};

export const experienceData = [
  {
    id: "exp-1",
    role: "Software Engineer 1 / Front-End Developer",
    company: "Quanby Solutions Inc.",
    location: "Philippines",
    period: "October 2024 – Present",
    type: "Full-time",
    description:
      "Designing and implementing user interfaces for enterprise system software using Angular. Acting as project lead — managing timelines and collaborating directly with clients to ensure requirements and goals are met.",
    highlights: [
      "Led UI/UX development for multi-module Angular enterprise systems",
      "Acted as project lead, managing client communication and delivery",
      "Translated wireframes and mockups into functional, high-vibe digital interfaces",
      "Developed and executed QA test plans, test cases, and automated test scripts",
    ],
    logo: "https://ui-avatars.com/api/?name=Quanby&size=100&background=6d28d9&color=fff&bold=true",
    techStack: ["React", "Next.js", "Angular", "TypeScript", "PostgreSQL", "Express", "Drizzle", "Postman", "HTML5", "CSS3", "Figma"],
  },
  {
    id: "exp-2",
    role: "Web Designer (WordPress)",
    company: "Intelliwork Outsourcing Phils. Inc.",
    location: "Philippines (Remote)",
    period: "July 2024 – Present",
    type: "Part-time (Previously Full-time)",
    description:
      "Building WordPress websites from scratch using Elementor with a focus on custom layouts and visual storytelling. Managing WooCommerce setups, product design mockups, and marketing labels to drive conversions.",
    highlights: [
      "Built WordPress sites from scratch using Elementor with custom CSS/JS styling",
      "Managed WooCommerce product catalog design and marketing labels",
      "Maintained site health via WP Engine — updates, bug fixes, performance tuning",
      "Implemented advanced SEO with Yoast/RankMath and tracked via GA4",
    ],
    logo: "https://ui-avatars.com/api/?name=Intelliwork&size=100&background=4f46e5&color=fff&bold=true",
    techStack: ["WordPress", "Elementor", "WooCommerce", "CSS", "JavaScript", "WP Engine"],
  },
  {
    id: "exp-3",
    role: "UI & UX Designer",
    company: "Quanby IT Solutions",
    location: "Philippines",
    period: "November 2023 – January 2024",
    type: "Contract",
    description:
      "Designed the application layout and full user experience for a Speech Lab system. Collaborated with developers to produce wireframes, prototypes, and a cohesive design system.",
    highlights: [
      "Designed end-to-end UX flow for a Speech Lab application",
      "Produced wireframes and high-fidelity prototypes in Figma",
      "Established visual design language and component library",
    ],
    logo: "https://ui-avatars.com/api/?name=Quanby+IT&size=100&background=7c3aed&color=fff&bold=true",
    techStack: ["Figma", "UI/UX Design", "Prototyping"],
  },
  {
    id: "exp-4",
    role: "Co-Founder & Software Engineer",
    company: "Uswagon Creative Solutions",
    location: "Philippines (Remote)",
    period: "2024 – Present",
    type: "Freelance",
    description:
      "Co-founded Uswagon CS — a dynamic freelancing group of passionate developers and designers delivering Web Development, Software Engineering, UI/UX Design, and Creative Solutions to help businesses grow through tailored, high-quality digital services.",
    highlights: [
      "Co-founded and helped establish the freelancing group's brand and online presence",
      "Delivered web development and UI/UX design services to clients",
      "Collaborated with a cross-functional team across software engineering and design",
      "Built responsive, high-performance web solutions for diverse client needs",
    ],
    logo: "https://uswagoncs.vercel.app/assets/ogol1.png",
    techStack: ["Angular", "TypeScript", "Figma", "WordPress", "UI/UX Design"],
  },
];

export const contactData = {
  heading: "Let's Work Together",
  subheading:
    "I'm open to new opportunities — whether it's a full-time role, freelance project, or just a chat about design and code. Drop me a message!",
  email: "joshuabombitacorda@gmail.com",
  phone: "09063568707",
  location: "Cabagaan, Tabaco City, Philippines",
  responseTime: "Replies within 24 hours",
  availability: "Open to opportunities",
};
