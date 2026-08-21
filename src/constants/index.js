import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  python,
  socket,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  iocl,
  codec,
  threejs,
  FireSmoke,
  SnapTalk,
  KinetixAI,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Full Stack Applications",
    icon: mobile,
  },
  {
    title: "AI & Machine Learning",
    icon: backend,
  },
  {
    title: "Software & Problem Solving",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
    {
    name: "Python",
    icon: python,
  },
  {
    name: "Socket.io",
    icon: socket,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "AI/ML Intern",
    company_name: "Indian Oil Corporation Limited (IOCL)",
    icon: iocl,
    iconBg: "white",
    date: "6th July 2026-5th August 2026",
    points: [
      "Developed an AI/ML-based fire and smoke detection system using computer vision.",
      "Trained and evaluated a YOLO-based object detection model to detect fire and smoke in images and video.",
      "Prepared and organized datasets, performed model training, and analyzed detection performance.",
      "Worked on the concept of a monitoring dashboard for visualizing real-time detection results.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Codec Technologies India",
    icon: codec,
    iconBg: "#0A0A0A",
    date: "1st July 2025-31st July 2025",
    points: [
      "Developed a full-stack e-commerce application using React, Node.js, Express, and MongoDB.",
      "Built a real-time chat application with user authentication, messaging, and Socket.io-based communication.",
      "Implemented REST APIs, database operations, authentication, and responsive user interfaces.",
      "Worked with Git and modern web development tools while debugging and improving application functionality.",
    ],
  },
];

const projects = [
  {
    name: "KinetixAI",
    description:
      "An AI-powered fitness platform designed to help users build personalized workout and nutrition plans through an interactive experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "convex",
        color: "green-text-gradient",
      },
      {
        name: "gemini",
        color: "pink-text-gradient",
      },
    ],
    image: KinetixAI,
    source_code_link: "https://github.com/Bishal-20/Kinetix-AI",
  },

  {
    name: "Fire & Smoke Detection",
    description:
      "An AI-based computer vision system that detects fire and smoke from images and video using a YOLO object detection model, with a dashboard concept for monitoring detection results.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "yolo",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
    ],
    image: FireSmoke,
    source_code_link: "https://github.com/Bishal-20/AI-based-Fire-Smoke-Detection",
  },

  {
    name: "SnapTalk",
    description:
      "A real-time chat application that enables users to communicate instantly with authentication, persistent messaging, and real-time updates powered by Socket.io.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "socketio",
        color: "pink-text-gradient",
      },
    ],
    image: SnapTalk,
    source_code_link: "https://github.com/Bishal-20/SnapTalk",
  },
];

export { services, technologies, experiences,projects };