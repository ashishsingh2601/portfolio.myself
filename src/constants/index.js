import {
  // mobile,
  // backend,
  // creator,
  // web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  jobit,
  tripguide,
  threejs,
  paytm,
  jwilliamson,
  threadIt,
  golang,
  clearConnect
} from "../assets";





export const navLinks = [
  {
    id: "resume",
    title: "Resume",
  },
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
    title: "Web Developer",
  },
  {
    title: "Coding Mentor",
  },
  {
    title: "Aspiring Full Stack Developer",
  },
  {
    title: "Content Creator / Blog Writer",
  },
  {
    title: "Competitive Programmer",
  },
  {
    title: "Open Source Contributor",
  },
  {
    title: "Blockchain Enthusiast",
  },
  {
    title: "AI Enthusiast",
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
    name: "Golang",
    icon: golang,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Development Intern",
    company_name: "JWilliamson.INC",
    icon: jwilliamson,
    iconBg: "#383E56",
    date: "March 2021 - July 2021",
    points: [
      "UI Development: React.js, AntDesign",
      "Twitch Extention Development: React.js, Node.js, Express.js, Twitch Developer Rig, Ngrok",
      "Built Discord Bots: Using Python",
      "Worked With AWS",
      "Got familiar with Docker, K8S Architecture and workflow"
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Paytm",
    icon: paytm,
    iconBg: "#E6DEDD",
    date: "April 2022 - July 2022",
    points: [
      "Worked with BO team on NAGAD Wallet Project",
      "Tech Used: React.js, TypeScript, Redux",
    ]
  },
  {
    title: "Software Engineer",
    company_name: "Paytm",
    icon: paytm,
    iconBg: "#383E56",
    date: "July 2022 - Present",
    points: [
      "Working on NAGAD Wallet project",
      "Build Complex modules like USER TYPE, Cashback Reversal, Limit Heads, Onboarding logic and components",
      "Wrote validations with all the edge cases",
      "Wrote readable, resusable code",
      "Built common components that are used throughout the application",
      "Tech Used: React.js, TypeScript, Material UI, Redux, React Hook Form",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ThreadIt",
    description:
      "Reddit clone built with communities in mind, used modern technologies and libraries to make ThreadIt.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "shadcn-ui",
        color: "green-text-gradient",
      },
      {
        name: "tanStack-query",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "blue-text-gradient",
      },
      {
        name: "oAuth2.0",
        color: "pink-text-gradient",
      },
    ],
    image: threadIt,
    source_code_link: "https://github.com/ashishsingh2601/ThreadIt",
    live_project_link: "https://thread-it-rust.vercel.app/"
  },
  {
    name: "ClearConnect",
    description:
      "Real-time video chat application build for seamless communication from anywhere round the globe.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
      {
        name: "WebRTC",
        color: "green-text-gradient",
      },
      {
        name: "Socket.IO",
        color: "pink-text-gradient",
      },
      {
        name: "Peer.js",
        color: "blue-text-gradient",
      },
    ],
    image: clearConnect,
    source_code_link: "https://github.com/ashishsingh2601/ClearConnect",
    live_project_link: "https://clearconnect.netlify.app/"
  },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
