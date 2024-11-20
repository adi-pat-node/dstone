import { useRef } from "react";

import { PROJECTS } from "../constants";
const Projects = () => {
  const projectRef = useRef(null);
  return (
    <section id="projects" className="pt-16" rel={projectRef}>
      <div className="px-4">
        <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
          Projects
        </h2>
        <div className="flex flex-wrap justify-center">
          {PROJECTS.map((project) => (
            <div
              className="flex w-full flex-col p-4 md:w-1/2 lg:w-1/3"
              key={project.id}
            >
              <div className="flex-grow overflow-hidden rounded-lg border border-purple-300/20">
                <a href={project.link} target="_blank" className="">
                  <img
                    src={project.imgSrc}
                    alt=""
                    className="h-60 w-full object-cover"
                  />
                </a>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-medium lg:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mb-4">{project.description}</p>
                  <div className="mb-4">
                    <strong> Tech Stack:</strong>

                    <ul>
                      {project.techStack.map((tech, index) => (
                        <li
                          key={index}
                          className=" mt-[10px] mr-2 inline-block rounded-full border-2 border-pink-500/30 px-3 py-1 text-sm font-semibold"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
