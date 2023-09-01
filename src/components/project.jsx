import React from 'react'
import Myntra from '../assets/myntra.png';
import Olx from '../assets/olx.png';
import Student from '../assets/student.png';
import Car from '../assets/Car.png';
import Covid from '../assets/Covid.png';

const projects = [
  {
    id: 1,
    src: Olx,
    title: "OLX Clone",
    techStack: "HTML | CSS | JavaScript",
    desc1: [
      "Free classifieds in India, Buy and Sell for free anywhere in India with RBS Online Classified Advertising.",
    ],
    desc2: [
      "Individual project created in 5 days.",
    ],
    link: "https://jocular-druid-6e03e3.netlify.app/",
    repo: "https://github.com/ersudhist/-composed-linen-9715",
  },
  {
    id: 2,
    src: Myntra,
    title: "Myntra Clone",
    techStack: "HTML | CSS | JavaScript",
    desc1: [
      "Fashntra is an E-Commerce brand bussines website funtioning in India where user can order fashion and lifestyle products and get deliver at doorstep",
    ],
    desc2: [
      "Collaborative project created in 5 days by a team of 4 members.",
    ],
    link: "https://dashing-monstera-1cd591.netlify.app/",
    repo: "https://github.com/ersudhist/-nauseating-fowl-3676",
  },

  {
    id: 3,
    src: Student,
    title: "Automated Student Registration System",
    techStack: "Java | JDBC | MySQL",
    desc1: [
      "This is a backend project of Automated Student Registration System portal.",
      "This portal performs all the fundamental CRUD operations of a Student registration platform with user and admin validation at every step.",
    ],
    desc2: [
      "Individual project created in 5 days.",
    ],
    link: "https://drive.google.com/drive/folders/1GXRCZEriYmCH2pyUrD9Kdv85yVZrBYaj?usp=sharing",
    repo: "https://github.com/ersudhist/spotless-lunch-6777/tree/main/Automated-Student-Registration-System",
  },
  {
    id: 4,
    src: Car,
    title: "Car Rental Services",
    techStack: "Java | Hibernate | Maven | MySQL",
    desc1: [
      "Develop a Java-based Car Rental System to facilitate customers in searching, reserving, modifying, and canceling car reservations.",
      "Providing administrative tools for car and customer management, as well as generating usage and revenue reports.",
    ],
    desc2: [
      "Individual project created in 5 days.",
    ],
    link: "https://drive.google.com/drive/folders/1NzC4bCMfj8fmeENFIfFXoWBcsxTtRpFf?usp=sharing",
    repo: "https://github.com/ersudhist/gamy-rate-5438/tree/main",
  },
  {
    id: 5,
    src: Covid,
    title: "Covid-19 Vaccination",
    techStack: "JAVA | Spring Boot | MySQL | Spring Security | STS | Hibernate | Maven | HTML | CSS | JavaScript",
    desc1: [
      "This application aims to make it easier and more convenient for citizens to get vaccinated against Covid-19.",
      "It provides an online platform to register and schedule vaccination appointments.",
      "The application also includes user and admin validation and authentication.",
    ],
    desc2: [
      "Collaborative project created in 5 days by a team of 4 members.",
    ],
    link: "https://drive.google.com/file/d/1hVSBWRQKnZTwstLyzmOk3JcQAqHV88_c/view?usp=sharing",
    repo: "https://github.com/Sawantaviraj2/honest-wing-5796/tree/main",
  },
  
];

const Project = () => {
  return (
    <div name="project" className="w-full h-100 bg-gradient-to-l text-gray-300 bg-[#0a192f]">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Projects</p>
          <p className="py-6">Checkout my Projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, link, repo, title, desc1, desc2, techStack }) => (
            <div key={id} className="shadow-md shadow-gray-600 bg-black rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105 h-60 w-full"
              />
              <div className="text-2xl text-slate-300 text-center">{title}</div>
              <div className="mt-2 p-4 text-slate-300 text-lg">
                {desc1.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                <br /> {/* One-line gap */}
                {desc2.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <p className="text-center pt-4 text-slate-300	font-medium	text-xl	">
                Tech Stack: {techStack}
              </p>

              <div className="flex items-center justify-center">
                <button
                  className="w-24 padding-left: 1.5rem padding-right: 1.5rem/ pl-4  padding-top: 0.75rem
                  padding-bottom: 0.75rem m-4 duration-200 hover:scale-105 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => window.open(link, "_blank")}
                >
                  Demo
                </button>
                <button
                  className="w-24 px-6 py-3 m-4 duration-200 hover:scale-105 bg-blue-500 hover:bg-blue-700 text-white font-bold padding-top: 0.5rem padding-bottom: 0.5rem padding-left: 1rem padding-right: 1rem rounded"
                  onClick={() => window.open(repo, "_blank")}
                >
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
