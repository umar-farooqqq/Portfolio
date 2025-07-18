import { assets, workData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { GithubIcon } from "lucide-react";
import Link from "next/link";

const ProjectCard = () => {
  return (
    <div
      id="projects"
      className="w-full px-[12%] py-10 scroll-mt-20 text-black"
    >
      <p className="text-center text-5xl font-mono">Projects</p>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 ">
        Welcome to my Web Development Portfolio! Explore a collection of
        projects showcasing my expertise in Front-End Development
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-5">
        {workData.map((project, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-xs text-gray-700 text-justify line-clamp-5 mr-4">
                  {project.description}
                </p>
                <p className="text-sm mt-0.5">
                  <span className="font-bold">Tools Used:</span> {project.tools}
                </p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] hover:bg-lime-300 transition">
                <Link href={project.link} target="_blank">
                  {<GithubIcon className="w-6" />}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
