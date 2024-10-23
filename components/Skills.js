import React from "react";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Node from "../public/assets/skills/node.png";
import Mongo from "../public/assets/skills/mongo.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import Git from "../public/assets/skills/git.png";
import NextJS from "../public/assets/skills/nextjs.png";
import Image from "next/image";

const Skills = () => {
  return (
    <>
      {" "}
      <div id="skills-start" className="w-full p-2">
        <div className="w-[74%] m-auto">
          {" "}
          <h1 className="uppercase text-xl tracking-widest text-[#5651e5]">
            Skills
          </h1>
          <h1 className="py-4 font-bold text-2xl">What Can I Do</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 shadow-xl hover:scale-110 ease-in-out duration-300">
              <div className="grid grid-cols gap-4 justify-center items-center">
                <div className="m-auto">
                  {" "}
                  <Image src={Html} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="font-bold">HTML</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl hover:scale-110 ease-in duration-300">
              <div className="grid grid-cols gap-4 justify-center items-center">
                <div className="m-auto">
                  {" "}
                  <Image src={Css} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="font-bold">CSS</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl hover:scale-110 ease-in duration-300">
              <div className="grid grid-cols gap-4 justify-center items-center">
                <div className="m-auto">
                  {" "}
                  <Image src={Javascript} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="font-bold">JavaScript</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl hover:scale-110 ease-in duration-300">
              <div className="grid grid-cols gap-4 justify-center items-center">
                <div className="m-auto">
                  {" "}
                  <Image src={Node} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="font-bold">Node</h3>
                </div>
              </div>
            </div>{" "}
            <div className="p-6 shadow-xl hover:scale-110 ease-in duration-300">
              <div className="grid grid-cols gap-4 justify-center items-center">
                <div className="m-auto">
                  {" "}
                  <Image src={Mongo} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="font-bold">Mongo DB</h3>
                </div>
              </div>
            </div>{" "}
            <div className="p-6 shadow-xl hover:scale-110 ease-in duration-300">
              <div className="grid grid-cols gap-4 justify-center items-center">
                <div className="m-auto">
                  {" "}
                  <Image src={ReactImg} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="font-bold">React</h3>
                </div>
              </div>
            </div>{" "}
            <div className="p-6 shadow-xl hover:scale-110 ease-in duration-300">
              <div className="grid grid-cols gap-4 justify-center items-center">
                <div className="m-auto">
                  {" "}
                  <Image src={NextJS} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="font-bold">Next</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl hover:scale-110 ease-in duration-300">
              <div className="grid grid-cols gap-4 justify-center items-center">
                <div className="m-auto">
                  {" "}
                  <Image src={Github} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="font-bold">Github</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl hover:scale-110 ease-in duration-300">
              <div className="grid grid-cols gap-4 justify-center items-center">
                <div className="m-auto">
                  {" "}
                  <Image src={Git} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="font-bold">Git</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl hover:scale-110 ease-in duration-300">
              <div className="grid grid-cols gap-4 justify-center items-center">
                <div className="m-auto">
                  {" "}
                  <Image src={Tailwind} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="font-bold">Tailwind</h3>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Skills;
