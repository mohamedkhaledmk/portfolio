import ETQANImg from "../public/assets/dashboard.PNG";
import React from "react";
import ProjectItem from "./ProjectItem";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div id="projects-start" className="w-full">
      <div className="w-[74%] m-auto pt-32">
        {" "}
        <h1 className="uppercase text-xl tracking-widest text-[#5651e5]">
          Projects
        </h1>
        <h1 className="py-4 font-bold text-2xl">What I've Built</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Food APP"
            backgroundImg="/assets/food.png"
            projectUrl="https://food-app-using-react-tau.vercel.app/"
            tech="React JS"
          />
          <ProjectItem
            title="Node Farm"
            backgroundImg="/assets/overview.pngg"
            projectUrl="https://node-js-farm.onrender.com/overview"
            tech="Node JS"
          />
          <ProjectItem
            title="ETQAN ASSESSMENT Tool"
            backgroundImg="/assets/dashboard.PNG"
            projectUrl="/"
            tech="Next.js , Node.js"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
