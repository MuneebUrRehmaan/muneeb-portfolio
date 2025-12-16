import yo from '../assets/yo.mp4'
import profile from '../assets/profile.png'
import profile2 from '../assets/profile2.png'
import avater from '../assets/avater.png'
import bghero from '../assets/herobg.png'
import pj1 from '../assets/pj1.png'
import pj2 from '../assets/pj2.png'
import pj3 from '../assets/pj3.png'
import pj4 from '../assets/pj4.png'
import pj5 from '../assets/pj5.png'
import pj6 from '../assets/pj6.png'
import pj7 from '../assets/pj7.png'
import pj8 from '../assets/pj8.png'
import ws1 from '../assets/ws1.png'
import ws2 from '../assets/ws2.png'
import ws3 from '../assets/ws3.png'
import ws4 from '../assets/ws4.png'
import ws5  from '../assets/ws5.png'
import ws6  from '../assets/ws6.png'
import ppi from '../assets/ppi.png'

// Navigation Links
export const nav_links = [
  { label: 'Home', href: 'muneeb-portfolio/' },
  { label: 'Works', href: 'muneeb-portfolio/projects' },
  { label: 'About', href: 'muneeb-portfolio/about' },
  
];

// Hero Section Data
export const hero = {
  name: 'Madison.',
  greeting: 'Hey, there',
  mainTitle: 'I AM MADISON',
  roleTitle: 'DIGITAL PRODUCT DESIGNER',
  availability: 'Available for new opportunities',
  description: 'Specialized in Web Design, UX/UI, Webflow, and Front End Development.',
};

export const logos = [

  { name: "Figma", icon: "figma" },
  { name: "React", icon: "atom" },
  { name: "Next js", icon: "next" },
  { name: "Mongo db", icon: "mango" },
  { name: "Node js", icon: "node" },
  { name: "Webflow", icon: "webflow" },
  { name: "Miro", icon: "miro" },
  { name: "Relume", icon: "relume" }
];


// Projects
export const projects = [
  {
    id: 1,
    title: "Novashop",
    category: "E Commerce",
    image: pj1,
    link: "https://muneeburrehmaan.github.io/NovaShop.co/",
    code: 'https://github.com/muneeburrehmaan/NovaShop.co'
  },
  {
    id: 2,
    title: "Aurelia A Luxery Hotel",
    category: "Hotel Managment",
    image: pj2,
    link: "https://muneeburrehmaan.github.io/Aurelia/",
    code: 'https://github.com/muneeburrehmaan/Aurelia'
  },
  {
    id: 3,
    title: "Weather Web",
    category: "Weather Website",
    image: pj3,
    link: "https://muneeburrehmaan.github.io/weatherapp/",
    code: 'https://github.com/muneeburrehmaan/Nikey-Shoes-Web'
  },
  {
    id: 4,
    title: "Gallery",
    category: "Gallery project",
    image: pj5,
    link: "https://muneeburrehmaan.github.io/gallery-project/",
    code: 'https://github.com/muneeburrehmaan/gallery-project'
  },
  {
    id: 5,
    title: "Portfolio",
    category: "Mobile Application",
    image: pj4,
    link: "https://muneeburrehmaan.github.io/portfolio/"
  },
  {
    id: 6,
    title: "Nikey Shoes Web",
    category: "Shoe Commerce",
    image: pj6,
    link: "https://muneeburrehmaan.github.io/Nikey-Shoes-Web/"
  },
  {
    id: 7,
    title: "Image Gallery",
    category: "Gallery",
    image: pj7,
    link: "https://muneeburrehmaan.github.io/Gaallery/"
  },
  {
    id: 8,
    title: "Lead Wave ",
    category: "Agency website",
    image:pj8,
    link: "https://muneeburrehmaan.github.io/Lead-Wave-/"
  }
];

// About Section
export const about = {
  title: "What I Do",
  subtitle: "My Journey",
  description:
    "With a deep passion for the MERN stack, I've dedicated my career to building scalable, high-performance web applications. My journey began with a curiosity for how things work on the web and evolved into a full-blown obsession with React, Node.js, and modern UI architecture. I love turning complex problems into simple, beautiful, and intuitive interface designs.",
  stats: [
    { label: "Years Experience", value: "05+" },
    { label: "Projects Done", value: "42+" },
    { label: "Hours Worked", value: "8K+" }
  ],
  videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-typing-on-mechanical-keyboard-4249-large.mp4",
};

// Experience Section
export const experience = [
  {
    period: "2020-24",
    role: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS"]
  },
  {
    period: "2021-24",
    role: "Backend & Database",
    skills: ["PHP", "MySQL", "Node.js", "Express"]
  },
  {
    period: "2023-24",
    role: "MERN Stack Journey",
    skills: ["MongoDB", "Express", "React", "Node.js"]
  }
];

// Services Section
export const service = [
  {
    id: "01",
    title: "Website Development",
    description:
      "I build responsive, fast, and modern websites using HTML, CSS, JavaScript, and React, delivering pixel-perfect and user-friendly designs."
  },
  {
    id: "02",
    title: "MERN Stack Applications",
    description:
      "I create full-stack applications using the MERN stack, including authentication, dashboards, APIs, and seamless UI/UX."
  },
  {
    id: "03",
    title: "Backend & API Development",
    description:
      "From PHP & MySQL to Express APIs, I develop scalable backend systems with clean architecture and smooth performance."
  }
];

// Workstation Images
export const workstation = [
  {
    id: 1,
    image: ws1,
    alt: "Clean Frontend Developer Desk Setup"
  },
  {
    id: 2,
    image: ws2,
    alt: "React & JavaScript Coding Desk"
  },
  {
    id: 3,
    image: ws3,
    alt: "MERN Stack Dual Monitor Setup"
  },
  {
    id: 4,
    image: ws4,
    alt: "Minimal Laptop Setup for Coding"
  },
  {
    id: 5,
    image: ws5,
    alt: "Team Collaboration Workspace"
  },
  {
    id: 6,
    image: ws6,
    alt: "Developer Desk with Macbook"
  }
];

export const social = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'GitHub', href: '#' }
];

export const contact = {
  email: 'muneebrahman28185'
};

export const faq_data = [
  {
    question: "What is your current role?",
    answer:
      "I am a Frontend & MERN Stack Developer, working with HTML, CSS, JavaScript, PHP, React, Node.js, and MongoDB to create modern and scalable web applications."
  },
  {
    question: "How much does it cost to build a website or web app?",
    answer:
      "Pricing depends on the features, timeline, and complexity. I provide clear fixed-price packages for simple websites and custom pricing for MERN stack applications."
  },
  {
    question: "How long does a project take from start to finish?",
    answer:
      "A typical website takes 2–6 weeks, while MERN stack apps take 4–10 weeks depending on pages, APIs, dashboards, and special features."
  },
  {
    question: "Are you available for full-time opportunities?",
    answer:
      "Yes, I am open to full-time roles or long-term projects, especially in React or MERN stack development."
  }
];



export{
  yo,
  profile,
  profile2,
  avater,
  bghero,
  pj1,
  ppi,
  ws1,
  ws2,
  ws3,
  ws4,
  ws5,
  ws6
}
