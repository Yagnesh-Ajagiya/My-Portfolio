import React from "react";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <>
      <div className="mt-20  max-[400px]:mt-0  max-[400px]:mb-20">
        <h1 className="text-slate-100  text-3xl  text-center font-semibold  h-32 heading flex justify-center items-center">
          <Typewriter
            options={{
              strings: ["Welcome to Yagnesh Portfolio"],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </h1>

        <div className="flex justify-evenly flex-wrap gap-4 lg:mt-20  ">
          <div className="relative w-[350px] h-[350px] bg-neutral-200 overflow-hidden rounded-full  flex items-end max-[400px]:w-[200px] max-[400px]:h-[200px]">
            <img src="/Photo.png" className=" max-w-[300px] max-[400px]:max-w-[160px] left-6 absolute " alt="" />
          </div>

          <div className="w-2/4 para max-[765px]:w-5/6 " >
            <h1 className="text-white text-5xl text-center max-[651px]:text-4xl max-[500px]:text-2xl mb-10">
              {"<"}About Me{" />"}
            </h1>
            <p className="text-white text-lg font-semibold mt-6 text-justify max-[500px]:text-base">
              Final-year Computer Science and Engineering student with an
              interest in web development, particularly MERN stack. 
            </p>
            <p className="text-white text-lg font-semibold mt-6 text-justify max-[500px]:text-base">
            passionate
              about front-end interfaces and eager to enhance backend skills;
              dedicated to creating exceptional user experiences and staying
              current with technology trends; exploring various career
              opportunities in tech. 
            </p>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
