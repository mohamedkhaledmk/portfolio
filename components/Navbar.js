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
      <div className="fixed w-full h-20 shadow-xl z-[100]">
        <div className="flex justify-between items-center h-full w-full px-4">
          <Image
            src={"/logo.png"}
            width="160"
            height="100"
            alt="/"
            className="hidden md:block"
          />
          <div className="flex w-full">
            <ul className="hidden md:flex w-full justify-end mr-[5%]">
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
            <div className="flex md:hidden items-center">
              <AiOutlineMenu onClick={handleNav} size={25} className="mr-4" />
            </div>
          </div>
          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 h-full w-[75%] bg-white shadow-lg transform ${
              nav ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out md:hidden`}
          >
            <div className="flex justify-between items-center p-4">
              <Image src={"/logo.png"} width="120" height="80" alt="Logo" />
              <AiOutlineClose onClick={handleNav} size={25} />
            </div>
            <ul className="flex flex-col items-start p-4">
              <button onClick={() => handleAboutClick("home")}>
                <li className="my-4 text-sm uppercase hover:border-b-2 border-blue-700">
                  Home
                </li>
              </button>
              <button onClick={() => handleAboutClick("about")}>
                <li className="my-4 text-sm uppercase hover:border-b-2 border-blue-700">
                  About
                </li>
              </button>
              <button onClick={() => handleAboutClick("skills")}>
                <li className="my-4 text-sm uppercase hover:border-b-2 border-blue-700">
                  Skills
                </li>
              </button>
              <button onClick={() => handleAboutClick("projects")}>
                <li className="my-4 text-sm uppercase hover:border-b-2 border-blue-700">
                  Projects
                </li>
              </button>
              <button onClick={() => handleAboutClick("contact")}>
                <li className="my-4 text-sm uppercase hover:border-b-2 border-blue-700">
                  Contact
                </li>
              </button>
            </ul>
          </div>
        </div>

        <div
          className={
            nav ? `fixed left-0 top-0 w-full h-screen bg-black/70 ` : `hidden`
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
              <Image src={"/logo.png"} width="200" height="50" alt="/" />
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
                    <FaLinkedinIn href="https://www.linkedin.com/in/mohamed-khaled-0264571a3/" />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                    <AiOutlineMail href="mailto:khaled25256@gmail.com" />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                    <FaGithub href="https://github.com/mohamedkhaledmk" />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                    <FaFacebook href="" />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                    <BsFillPersonLinesFill href="https://drive.google.com/file/d/1RRIgDRI99IISiu4g8fMuouVca4HAUGd8/view" />
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
