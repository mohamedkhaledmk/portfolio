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
          <p className="py-2 text-gray-600">
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript,
            React and Next, I am a quick learner and can pick up new tech stacks
            as needed. I believe that being a great developer is not using one
            specific tool, but choosing the best tool for the job.
          </p>
          <p className="py-2 text-gray-600">
            Throughout my educational career, I have been driven by a passion
            for science, technology, engineering, and mathematics (STEM). I laid
            the foundation for my academic journey at Dakahlia STEM Schools,
            where I had the privilege of honing my skills in these critical
            disciplines. It was at this esteemed institution that I cultivated a
            deep appreciation for research and developed the necessary skills to
            explore the frontiers of knowledge. Now, as I stand at the
            culmination of my university journey, I am proud to have achieved a
            "very good with honors" cumulative grade and received an "excellent"
            evaluation for my Graduation project. I am eager to apply the
            knowledge and research skills I have acquired to contribute to
            innovative projects and make a significant impact in the field of
            computer engineering.
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
