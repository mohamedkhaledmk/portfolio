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
        {/* <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-xl shadow-xl p-4 bg-gray-200 w-full h-auto group flex relative justify-center items-center shadow-gray-400 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <img
              className="rounded-xl group-hover:opacity-20"
              src="/assets/dashboard.PNG"
              alt="ETQAN"
            />
            <div className="hidden absolute group-hover:block ">
              <h3 className="text-2xl text-white font-bold tracking-widest">
                ETQAN assessment tool
              </h3>
              <p className="text-white text-center">MERN stack</p>
              <Link href={"/"}>
                <p className="text-white text-center">More Info</p>
              </Link>
            </div>
          </div>
        </div> */}
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder"
            backgroundImg="/assets/dashboard.PNG"
            projectUrl="/property"
            tech="React JS"
          />
          {/* <ProjectItem
            title="Crypto App"
            backgroundImg={cryptoImg}
            projectUrl="/crypto"
            tech="React JS"
          />
          <ProjectItem
            title="Netflix App"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
            tech="React JS"
          />
          <ProjectItem
            title="Twitch UI"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
            tech="Next JS"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
