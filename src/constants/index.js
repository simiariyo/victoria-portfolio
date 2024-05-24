//importing all the media needed for the design 
import {
    // mobile,
    // backend,
    // creator,
    web,
    javascript,
    // typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    // nodejs,
    // mongodb,
    git,
    github3D,
    phone,
    mail,
    location,
    linkedin,
    figma,
    edustat,
    edublog,
    waecadmin,
    youthplusmini,
    // docker,
    // meta,
    // starbucks,
    // tesla,
    sidmach,
    // shopify,
    carrent,
    // jobit,
    // tripguide,
    threejs,
  } from "../assets";

  //creating nav links object to map through
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "roles",
      title: "Roles",
    },
    {
      id: "works",
      title: "Works",
    },
    {
      id: "contact",
      title: "Contact",
    },
   
  ];
  const socials =[
    {
      name: "linkedIn",
      icon: linkedin,
      site_link: "https://www.linkedin.com/in/victoria-ariyo/",
      
    },
    {
      name: "github",
      icon: github3D,
      site_link: "https://github.com/simiariyo/",
      
    },

  ];
  const contact =[
    {
      title: "mobile",
      icon: phone,
      text: "+2348107384199",
      
    },
    {
      title: "Email",
      icon: mail,
      text: "simiariyo@gmail.com",
      
    },
    {
      title: "Location",
      icon: location,
      text: "Lagos-Nigeria",
      
    },
  ];
  
  //creating services objects to map through
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: reactjs,
    },
    // {
    //   title: "Backend Developer",
    //   icon: backend,
    // },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
  ];
  
  //creating technology tools object to map through
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
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
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
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
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Sidmach Technologies Nigeria Limited",
      icon: sidmach,
      iconBg: "#383E56",
      date: "December 2021 - Date",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
        title: "Developer Intern",
        company_name: "Sidmach Technologies Nigeria Limited",
        icon: sidmach,
        iconBg: "#383E56",
        date: "December 2020 - December 2021",
        points: [
          "Developing and maintaining web applications using HTML, CSS, and JavaScript ",
          "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
          "Implementing responsive design and ensuring cross-browser compatibility.",
          "Used critical thinking to break down problems, evaluate solutions, and make decisions",
        ],
      },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Victoria proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Victoria does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Victoria optimized our website, our traffic increased by 50%. We can't thank her enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Waec-Edustat ",
      description:
        "data analytics and visualization platform that provides a number of insights and reports regarding the examination data of one of the biggest examination bodies in West Africa, WAEC.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "material ui",
          color: "blue-text-gradient",
        },
        {
          name: "reactbootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "antdesign",
          color: "blue-text-gradient",
        },
      ],
      image: edustat,
      site_link: "https://waec.edustat.ng/",
    },
    {
      name: "Edustat Blog ",
      description:
        "A mini blog web-site for creating uploadig and viewing article contents about Waec Edustat.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
            name: "reactbootstrap",
            color: "blue-text-gradient",
        },
      ],
      image: edublog,
      site_link: "https://waec.edustat.ng/blog",
    },
    {
      name: "Edustat Admin",
      description:
        "An admin app that provides stakeholders access to admin dashboards and creates a centralized platform for data visualization for streamlined management and effortless control",
      tags: [
        {
          name: "chatjs",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
            name: "react-bootstrap",
            color: "blue-text-gradient",
        },
      ],
      image: waecadmin,
      site_link: "https://waecadmin.edustat.ng/",
    },
    {
        name: "Sidmach CSP ",
        description:
          "An e-commerce CSP platform that provides a listing of all digital products and software that Sidmach is engaged with selling.​ The products include custom Sidmach Solutions as well as OEM products which are being re-sold.it also serves as a central place for customers to manage their Microsoft licenses.",
        tags: [
          {
            name: "react",
            color: "blue-text-gradient",
          },
          {
            name: "material ui",
            color: "blue-text-gradient",
          },
          {
            name: "bootstrap",
            color: "blue-text-gradient",
          },
          {
            name: "redux",
            color: "blue-text-gradient",
          },
        ],
        image: carrent,
        site_link: "currently not available online",
      },
      {
        name: "YouthPlus",
        description:
          "A web platform that addresses the informational, educational, career, and transformational needs of all categories of youths, youth organizations, youth administrators, and other stakeholders by availing them of relevant, accessible opportunities and essential services.",
        tags: [
          {
            name: "react",
            color: "blue-text-gradient",
          },
          {
            name: "material ui",
            color: "blue-text-gradient",
          },
          {
            name: "react-bootstrap",
            color: "blue-text-gradient",
          },
          {
            name: "antd",
            color: "blue-text-gradient",
          },
        ],
        image: youthplusmini,
        site_link: "https://nysc.youthplus.ng/",
      }, 
  ];
  
  export {contact, socials, services, technologies, experiences, projects,  testimonials };