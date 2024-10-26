import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="mt-20">
      <h1 className='text-slate-100   text-3xl  text-center font-semibold max-[400px]:text-xl h-20 heading flex justify-center items-center"'>
        Here are my Projects
      </h1>

      <div className="mt-16">
        <h1
          htmlFor=""
          className="text-slate-100 text-3xl text-center font-bold"
        >

          <Link
            to="#"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://yagnesh-react-quiz.netlify.app",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            Quiz App
          </Link>

        </h1>
        <div className="w-11/12 flex  max-md:flex-wrap justify-center items-center gap-3 p-5 h-fit   mx-auto">
          <Link
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://yagnesh-react-quiz.netlify.app",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            
            <img
              src="/quiz app.png"
              alt=""
              className="w-[650px] h-80 m-auto  rounded-lg text-center "
            />
            
          </Link>
          <p className="text-xl text-white font-semibold text-justify self-start w-2/5 max-md:w-4/5">
            Created this quiz app using react.js. Learned about Props passing,
            state management, and logic building{" "}
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h1
          htmlFor=""
          className="text-slate-100 text-3xl text-center font-bold"
        >
          <Link
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://yagnesh-react-weather.netlify.app",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            Weather App
          </Link>
        </h1>
        <div className="w-11/12 flex flex-row-reverse max-md:flex-wrap  justify-center items-center gap-3 p-5 h-fit  mx-auto">
          <Link
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://yagnesh-react-weather.netlify.app",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            <img
              src="/Weather app.png"
              alt=""
              className="w-[650px] h-80 m-auto  rounded-lg text-center object-fill"
            />
          </Link>
          <p className="text-xl text-white font-semibold text-justify self-start w-2/5 max-md:w-4/5">
            Created this weather app using react.js. Learned about Props
            passing, state management, and logic building, API integrarion,
            etc... n
          </p>
        </div>
      </div>


      <div className="mt-16">
        <h1
          htmlFor=""
          className="text-slate-100 text-3xl text-center font-bold"
        >

          <Link
            to="#"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://yagnesh-billwale.netlify.app",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            Landing page 
          </Link>

        </h1>
        <div className="w-11/12 flex max-md:flex-wrap justify-center items-center gap-3 p-5 h-fit   mx-auto">
          <Link
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://yagnesh-billwale.netlify.app",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            
            <img
              src="/Billwale.png"
              alt=""
              className="w-[650px] h-80 m-auto  rounded-lg text-center object-fill"
            />
            
          </Link>
          <p className="text-xl text-white font-semibold text-justify self-start w-2/5 max-md:w-4/5">
            Created this quiz app using react.js. Learned about Props passing,
            state management, and logic building{" "}
          </p>
        </div>
      </div>

    </div>
  );
}

export default Projects;
