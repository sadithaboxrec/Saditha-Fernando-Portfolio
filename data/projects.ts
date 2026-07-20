export type ProjectCategory = "All" | "Springboot" | "Flask" | "AI/ML" | "Testing" | "For FinTech";

export type Project = {
  title: string;
  description: string;
  stack: string[];
  category: Exclude<ProjectCategory, "All">;
  github?: string;
  demo?: string;
};

export const projectFilters: ProjectCategory[] = [
  "All",
  "Springboot",
  "Flask",
  "AI/ML",
  "Testing",
  "For FinTech",
];

export const projects: Project[] = [

  // {
  //   title: "AI Image Generator Web App",
  //   description: "Application that generates images using Stability AI API with a Spring Boot backend.",
  //   stack: ["Spring Boot", "Stability AI API"],
  //   category: "AI/ML",
  //   github: "https://github.com/sadithaboxrec/AI-image-generator-web"
  // },
  {
    title: "Flask Task Management App",
    description: "Task management system with a React frontend and Flask backend for handling user tasks and workflows.",
    stack: ["React", "Flask"],
    category: "Flask",
    github: "https://github.com/sadithaboxrec/Flask-Task-Manage"
  },
  {
    title: "Spring Boot Authentication System",
    description: "Secure authentication system implementing JWT and OTP-based email verification.",
    stack: ["Spring Boot", "Spring Security", "JWT"],
    category: "Springboot",
    github: "https://github.com/sadithaboxrec/SpringBoot-Authentication-System"
  },
  {
    title: "Flask Flutter Role Management",
    description: "Role-based management system with a Flutter dashboard and Flask backend for controlled user access.",
    stack: ["Flutter", "Flask"],
    category: "Flask",
    github: "https://github.com/sadithaboxrec/Flask-Flutter-Role-Management"
  },
  {
    title: "Warehouse Management System",
    description: "Backend application built with Java Servlets for managing warehouse inventory and stock operations.",
    stack: ["Java", "Servlets"],
    category: "Springboot",
    github: "https://github.com/sadithaboxrec/WarehouseProject"
  },

  // {
  //   title: "Project Management Web Application",
  //   description: "Web-based system for managing projects and tasks with secure authentication and role-based access control.",
  //   stack: ["Angular", "Tailwind CSS", "Spring Boot", "Spring Security"],
  //   category: "Springboot",
  //   github: "https://github.com/sadithaboxrec/Task-Management-WebApplication"
  // },

  {
    title: "Employee Management System with Testing",
    description: "Spring Boot application with integrated Spring Security and React frontend, validated through unit testing with JUnit and end-to-end testing using Selenium.",
    stack: ["Spring Boot", "React", "JUnit", "Selenium"],
    category: "Testing",
    github: "https://github.com/sadithaboxrec/spring-crud-employee-management"
  },
  {
    title: "Society Website",
    description: "React-based website showcasing events with dynamic content updates via GitHub data files.",
    stack: ["React"],
    category: "Flask",
    github: "https://github.com/sadithaboxrec/AIS-web"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js and Tailwind CSS, featuring responsive design and contact integration.",
    stack: ["Next.js", "Tailwind CSS"],
    category: "Flask",
    github: "https://github.com/sadithaboxrec/saditha-fernando-portfolio"
  },
  {
    title: "Olympic Medal Prediction",
    description: "Machine learning project predicting Olympic medal counts by country using historical data.",
    stack: ["Python", "Machine Learning"],
    category: "AI/ML",
    github: "https://github.com/sadithaboxrec/Olympic_Medal-Preiction"
  },
  {
    title: "Student Score Prediction App",
    description: "Machine learning application with Flutter frontend and Flask backend to predict student performance.",
    stack: ["Flutter", "Flask", "Machine Learning"],
    category: "AI/ML",
    github: "https://github.com/sadithaboxrec/Score-Predict-APP-simple-"
  },


  // for fintech to check

  {
    title: "Financial Manager Application",
    description:
        "Personal finance management platform with income and expense tracking, dashboard analytics, JWT authentication, email verification, and Cloudinary integration.",
    stack: [
      "Spring Boot",
      "JWT",
      "MySQL",
      "Cloudinary",
    ],
    category: "For FinTech",
    github: "https://github.com/sadithaboxrec/Money-Manager-Web",
  },
  {
    title: "BookMart - Ecommerce Bookshop Backend",
    description:
        "Spring Boot backend for an e-commerce platform featuring JWT authentication, guest cart merging, seller dashboard, Cloudinary image uploads, and Razorpay payment integration.",
    stack: [
      "Spring Boot",
      "MongoDB",
      "JWT",
      "Razorpay",
      "Cloudinary",
    ],
    category: "For FinTech",
    github: "https://github.com/sadithaboxrec/BookMart-Web",
  },
  {
    title: "URL Shortener Platform",
    description:
        "Scalable FastAPI application with PostgreSQL, Redis rate limiting, session authentication, Docker deployment, QR code generation, and role-based access.",
    stack: [
      "FastAPI",
      "React",
      "PostgreSQL",
      "Redis",
      "Docker",
      "SQLAlchemy",
    ],
    category: "For FinTech",
    github: "https://github.com/sadithaboxrec/Url-Shortener-App",
  },
  {
    title: "AI Image Generator Web Application",
    description:
        "Spring Boot REST API integrating Stability AI for AI-powered image generation from text prompts and images.",
    stack: [
      "Spring Boot",
      "Stability AI API",
      "REST API",
    ],
    category: "For FinTech",
    github: "https://github.com/sadithaboxrec/AI-image-generator-web",
  },
  {
    title: "Project Management Web Application",
    description:
        "Project and task management application with Spring Boot, Angular, Spring Security, and role-based access control.",
    stack: [
      "Spring Boot",
      "Angular",
      "Spring Security",
      "Tailwind CSS",
    ],
    category: "For FinTech",
    github: "https://github.com/sadithaboxrec/Task-Management-WebApplication",
  },
  {
    title: "Mental Healthcare Mobile Application",
    description:
        "Flutter and Flask application with AI-based patient monitoring, real-time chat, push notifications, and multi-role access for patients, guardians, and doctors.",
    stack: [
      "Flutter",
      "Flask",
      "MVC",
      "AI",
    ],
    category: "For FinTech",
    github: "https://github.com/sadithaboxrec/Mental-HealthCare-Application_Project",
  },

];