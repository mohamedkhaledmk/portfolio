import React from "react";
import ProjectItem from "./ProjectItem";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "ETQAN ASSESSMENT Tool",
    backgroundImg: "assets/dashboard.PNG",
    projectUrl: "/graduationproject",
    tech: "React JS, Next JS, Tailwind CSS",
  },
  {
    id: 2,
    title: "Doctor Appointment Booking",
    backgroundImg: "/assets/doctor.PNG",
    projectUrl: "https://doctor-appointment-booking-gold.vercel.app/",
    tech: "React JS, Next JS, Tailwind CSS",
  },
  {
    id: 3,
    title: "TaskHub",
    backgroundImg: "/assets/task2.png",
    projectUrl: "https://taskhub-task-management-app.vercel.app/",
    tech: "React JS, Mongo DB, Node JS, Express",
  },
  {
    id: 4,
    title: "Lawyer App",
    backgroundImg: "/assets/lawyer.png",
    projectUrl: "https://youtu.be/o2fhsjcRwNM",
    tech: "React JS, Mongo DB, Node JS, Express",
  },
  {
    id: 5,
    title: "Food APP",
    backgroundImg: "/assets/food.png",
    projectUrl: "https://food-app-using-react-tau.vercel.app/",
    tech: "React JS",
  },
  {
    id: 6,
    title: "Town Website",
    backgroundImg: "/assets/town.jpg",
    projectUrl: "https://town-website-using-html-and-css.vercel.app/",
    tech: "HTML & CSS",
  },
  {
    id: 7,
    title: "Node Farm",
    backgroundImg: "/assets/overview.png",
    projectUrl: "https://node-js-farm.onrender.com/overview",
    tech: "Node JS",
  },
];

const Projects = () => {
  return (
    <div id="projects-start" className="w-full">
      <div className="w-[74%] m-auto pt-32">
        {" "}
        <h1 className="uppercase text-xl tracking-widest text-[#5651e5]">
          Projects
        </h1>
        <h1 className="py-4 font-bold text-2xl">What I've Built</h1>
        <div className="grid md:grid-cols-3 gap-16">
          {projects.map((project) => (
            <ProjectItem
              key={project.id}
              title={project.title}
              backgroundImg={project.backgroundImg}
              projectUrl={project.projectUrl}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
