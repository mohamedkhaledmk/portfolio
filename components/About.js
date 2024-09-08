import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div
      id="about-start"
      className="w-full md:h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h1 className="py-4 font-bold text-2xl">Who I Am</h1>
          {/* <p className="py-2 text-gray-600">
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript,
            React and Next, I am a quick learner and can pick up new tech stacks
            as needed. I believe that being a great developer is not using one
            specific tool, but choosing the best tool for the job.
          </p> */}
          <p className="py-2 text-gray-600">
            A highly motivated junior software developer with a strong academic
            background in computer science and hands-on experience in the MERN
            stack. Eager to contribute my skills in full-stack development to a
            dynamic organization that values growth and innovation. With a
            passion for solving complex problems and developing scalable web
            applications, I aim to leverage my technical expertise to deliver
            solutions that align with company objectives and drive success.
          </p>
          {/* <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link> */}
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
