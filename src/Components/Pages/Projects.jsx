import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  const projects = [
    {
      projectTitle: "Quiz App",
      projectImage: "/quiz app.png",
      projectDesc:
        "Created this quiz app using react.js. Learned about Props passing, state management, and logic building.",
      projectLink: "https://yagnesh-react-quiz.netlify.app"
    },

    {
      projectTitle: "Weather App",
      projectImage: "/Weather app.png",
      projectDesc:
        "Created this weather app using react.js. Learned about Props passing, state management, and logic building, API integrarion, etc...",
      projectLink: "https://yagnesh-react-weather.netlify.app/"
    },

    {
      projectTitle: "Landing page ",
      projectImage: "/Billwale.png",
      projectDesc:
        "Created this quiz app using react.js. Learned about Props passing, state management, and logic building",
      projectLink: "https://yagnesh-billwale.netlify.app/"
    },
    {
      projectTitle: "World Atlas site",
      projectImage: "/world atlas.png",
      projectDesc:
        "Created this quiz app using react.js. Learned about Props passing, state management, and logic building",
      projectLink: "https://world-atlas-react-site.netlify.app/"
    },
  ];

  return (
    <div className="mt-20">
      <h1 className='text-slate-100   text-3xl  text-center font-semibold  h-20 heading flex justify-center items-center"'>
        My Projects
      </h1>

      {projects.map((project) => (
        <div className="mb-16  max-[400px]:flex flex-col gap-4 py-3 bg-gray-800 shadow-md shadow-slate-300 max-[400px]:w-[90%] w-9/12 m-auto rounded-xl" key={project.projectTitle}>
          <h1
            htmlFor=""
            className="text-slate-100 text-3xl text-center font-bold border-b py-2"
          >
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  `${project.projectLink}`,
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              {project.projectTitle}
            </Link>
          </h1>

          <div className="w-11/12 flex  max-md:flex-wrap justify-center items-center gap-3 p-5 h-fit   mx-auto">
            <Link
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  `${project.projectLink}`,
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              <img
                src= {project.projectImage}
                alt=""
                className="w-[650px] max-[400px]:h-[150px] max-[400px]:w-[100%%] h-80 m-auto  rounded-lg text-center "
              />
            </Link>
            <p className="text-xl text-white font-semibold text-center self-start w-2/5 max-md:w-4/5 max-[400px]:w-[95%]">
              {project.projectDesc}
            </p>
          </div>
        </div>
      ))}

      
      
    </div>
  );
}

export default Projects;
