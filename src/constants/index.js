import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full-stack developer with a strong foundation in machine learning and web development. I specialize in creating robust and scalable web applications while integrating machine learning to deliver intelligent and innovative solutions. With expertise in front-end technologies like React and Next.js, and back-end technologies such as Node.js, MySQL, PostgreSQL, and MongoDB, I aim to craft applications that enhance user experiences and drive business growth.`;

export const ABOUT_TEXT = `I am a passionate Full Stack Developer with a strong foundation in React, Machine Learning, and Deep Learning. With 5 years of experience, I specialize in creating intuitive, high-performance web applications using React and other modern technologies. My journey in tech has also led me to dive deep into Machine Learning and Deep Learning, where I focus on leveraging data and algorithms to build intelligent systems. I thrive in dynamic environments where I can solve complex problems and continuously grow my skill set. Outside of coding, I enjoy exploring new technologies, contributing to open-source projects, and staying active.`;

export const EXPERIENCES = [
  {
    year: "October 2024 - December 2024",
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
    title: "Barrack Buddy Website",
    image: project1, // Replace with the actual image path
    description:
      "Developed a responsive React website for Barrack’s Buddy, a platform supporting defense aspirants, with features like user authentication, API integration, and responsive UI design.",
    technologies: ["React.js", "JavaScript", "REST APIs"],

    githubLink: "https://github.com/Yashmaheshwari0502/Barracks-BUDDY", // Optional: Add GitHub link for the repository
  },
  {
    title: "Handwritten Digit Recognition",
    image: project2, // Replace with the actual image path
    description:
      "Developed a handwritten digit recognition system using the MNIST dataset with TensorFlow and Keras, achieving an accuracy of over 98%.",
    technologies: ["TensorFlow", "Keras", "Python"],
    githubLink: "https://github.com/Yashmaheshwari0502/Handwritten-Digit-Recoginition", // Optional: Add GitHub link
  },
  {
    title: "California Housing Price Prediction",
    image: project3, // Replace with the actual image path
    description:
      "Created a machine learning model to predict housing prices in California based on various features, optimizing the model using multiple regression algorithms and cross-validation.",
    technologies: ["Scikit-learn", "Python", "Pandas"],
    githubLink: "https://github.com/Yashmaheshwari0502/House-Price-Prediction", // Optional: Add GitHub link
  },
  {
    title: "Travel Hub App",
    image: project4, // Replace with the actual image path
    description:
      "Developed a comprehensive travel hub application during an internship at Ricoz, integrating features like flight, hotel, and rental car bookings, real-time travel data, and secure payment processing.",
    technologies: ["Flutter", "Dart"],
    githubLink: "https://github.com/Yashmaheshwari0502/ricoz_company_travel_app", // Optional: Add GitHub link
  },
];



export const CONTACT = {
  address: "New Delhi , India",
  phoneNo: "+91 9650700225",
  email: "yashmaheshwari0502@gmail.com",
};
