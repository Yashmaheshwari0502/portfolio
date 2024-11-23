import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full-stack developer with a strong foundation in machine learning and web development. I specialize in creating robust and scalable web applications while integrating machine learning to deliver intelligent and innovative solutions. With expertise in front-end technologies like React and Next.js, and back-end technologies such as Node.js, MySQL, PostgreSQL, and MongoDB, I aim to craft applications that enhance user experiences and drive business growth.`;

export const ABOUT_TEXT = `I am a passionate Full Stack Developer with a strong foundation in React, Machine Learning, and Deep Learning. With 5 years of experience, I specialize in creating intuitive, high-performance web applications using React and other modern technologies. My journey in tech has also led me to dive deep into Machine Learning and Deep Learning, where I focus on leveraging data and algorithms to build intelligent systems. I thrive in dynamic environments where I can solve complex problems and continuously grow my skill set. Outside of coding, I enjoy exploring new technologies, contributing to open-source projects, and staying active.`;

export const EXPERIENCES = [
  {
    year: "October 2024 - Present",
    role: "Frontend Developer",
    company: "Barracks Buddy",
    description: `Developed a responsive React.js-based website for Barracks Buddy, a platform supporting defense aspirants. Focused on creating an intuitive user interface, implementing responsive design, and integrating secure APIs for authentication.`,
    responsibilities: [
      "Developed a responsive React website for Barracks Buddy, ensuring it supports defense aspirants.",
      "Integrated login and signup APIs for secure user authentication.",
      "Optimized the UI for seamless user interaction across devices.",
      "Collaborated on API integration for various features, ensuring smooth backend communication.",
      "Designed and implemented scalable components for maintainability.",
      "Deployed the website live at https://barracksbuddy.com/ and the Vercel deployment live at https://barracks-buddy.vercel.app/"
    ],
    technologies: ["React.js", "JavaScript", "CSS", "Node.js", "REST APIs","Payment Gateway "],
  },
  {
    year: "July 2023 - October 2023",
    role: "Flutter Developer Intern",
    company: "Ricoz",
    description: `Developed a comprehensive travel hub application as part of my internship at Ricoz. The app included features for booking flights, hotels, and rental cars, and utilized real-time APIs for travel data and payment processing.`,
    responsibilities: [
      "Developed a comprehensive travel hub application during an internship at Ricoz.",
      "Implemented features such as booking flights, hotels, and rental cars.",
      "Integrated APIs for real-time travel data and secure payment processing.",
      "Ensured high performance and responsiveness of the application.",
      "Collaborated with a team to design and develop user-friendly interfaces."
    ],
    technologies: ["Flutter", "Dart", "APIs", ],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "New Delhi , India",
  phoneNo: "+91 9650700225",
  email: "yashmaheshwari0502@gmail.com",
};
