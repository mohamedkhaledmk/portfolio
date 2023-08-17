import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaFacebook } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Html from "../public/assets/skills/html.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log(nav);
    console.log("sss");
  };

  const handleAboutClick = (name) => {
    const aboutStart = document.getElementById(`${name}-start`);
    if (aboutStart) {
      const offsetTop = aboutStart.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Image src={Html} width="64px" height="64px" alt="/" />

      <div className="fixed w-full h-20 shadow-xl z-[100]">
        <div className="flex justify-between items-center h-full w-full">
          {/* <Image src={"/../public/logo.png"} width="160" height="100" /> */}
          <div className="flex w-full">
            <ul className="flex w-full justify-end mr-[5%] ">
              <button onClick={() => handleAboutClick("home")}>
                <li className="ml-10 text-sm uppercase hover:border-b-2 border-blue-700">
                  Home
                </li>
              </button>
              <button onClick={() => handleAboutClick("about")}>
                <li className="ml-10 text-sm uppercase hover:border-b-2 border-blue-700">
                  About
                </li>
              </button>
              <button onClick={() => handleAboutClick("skills")}>
                <li className="ml-10 text-sm uppercase hover:border-b-2 border-blue-700">
                  Skills
                </li>
              </button>
              <button onClick={() => handleAboutClick("projects")}>
                <li className="ml-10 text-sm uppercase hover:border-b-2 border-blue-700">
                  Projects
                </li>
              </button>
              <button onClick={() => handleAboutClick("contact")}>
                <li className="ml-10 text-sm uppercase hover:border-b-2 border-blue-700">
                  Contact
                </li>
              </button>
            </ul>
            <div className=" cursor-pointer ">
              <AiOutlineMenu onClick={handleNav} size={25} className="mr-4" />
            </div>
          </div>{" "}
        </div>

        <div
          className={
            nav ? `fixed left-0 top-0 w-full h-screen bg-black/70 ` : ``
          }
        >
          <div
            className={
              nav
                ? `fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500`
                : `fixed left-[-100%] top-0 p-10 ease-in duration-500`
            }
          >
            <div className="flex w-full items-center justify-between">
              <Image src={"/logo.PNG"} width="200" height="50" alt="/" />
              <div className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer">
                {" "}
                <AiOutlineClose onClick={handleNav} size={25} />{" "}
              </div>
            </div>
            <div className="border-b border-gray-400 my-4">
              <p className="w-[80%] md:w-[60%] py-4">
                Let's build something legendary together
              </p>
            </div>
            <div className="flex flex-col">
              {" "}
              <ul className="">
                <button
                  className="w-full text-left"
                  onClick={() => handleAboutClick("home")}
                >
                  <li className="ml-10 my-2 text-sm uppercase hover:border-b-2 border-blue-700">
                    Home
                  </li>
                </button>
                <button
                  className="w-full text-left"
                  onClick={() => handleAboutClick("about")}
                >
                  <li className="ml-10 my-2 text-sm uppercase hover:border-b-2 border-blue-700">
                    About
                  </li>
                </button>
                <button
                  className="w-full text-left"
                  onClick={() => handleAboutClick("skills")}
                >
                  <li className="ml-10 my-2 text-sm uppercase hover:border-b-2 border-blue-700">
                    Skills
                  </li>
                </button>
                <button
                  className="w-full text-left"
                  onClick={() => handleAboutClick("projects")}
                >
                  <li className="ml-10 my-2 text-sm uppercase hover:border-b-2 border-blue-700">
                    Projects
                  </li>
                </button>
                <button
                  className="w-full text-left"
                  onClick={() => handleAboutClick("contact")}
                >
                  <li className="ml-10 my-2 text-sm uppercase hover:border-b-2 border-blue-700">
                    Contact
                  </li>
                </button>
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  Let's connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                    <FaFacebook />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
