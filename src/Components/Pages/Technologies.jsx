import React from "react";

function Technologies() {
  const techItems = [
    {
      imgSource: "/HTML logo.png",
      title: "HTML 5",
      desc: "The latest version of the Hypertext Markup Language, HTML5 is essential for structuring web content. It includes semantic elements and multimedia support, making it easier to build modern, responsive websites.",
    },
    {
      imgSource: "/CSS logo.png",
      title: "CSS 3",
      desc: "Cascading Style Sheets (CSS) enable styling and layout control over web pages. CSS allows you to create visually appealing designs, responsive layouts, and animations, enhancing the user experience across devices.",
    },
    {
      imgSource: "/Tailwind logo.png",
      title: "Tailwind CSS",
      desc: "A utility-first CSS framework that simplifies styling with pre-defined classes. Tailwind enables quick, consistent design while offering flexibility for custom designs, making it ideal for rapid prototyping and scalable projects.",
    },
    {
      imgSource: "/React logo.png",
      title: "React js",
      desc: "A popular JavaScript library for building user interfaces, particularly single-page applications. React’s component-based architecture promotes reusability, efficient updates, and a responsive UI, making it an excellent choice for modern web development.",
    },
    {
      imgSource: "/Javascript logo.png",
      title: "Javascript",
      desc: "A powerful scripting language that enables dynamic, interactive content on websites. JavaScript powers essential features like form validation, animations, and API integrations, allowing for a seamless and engaging user experience.",
    },
  ];

  return (
    <div className="mt-20">
      <h1 className='text-slate-100 text-3xl text-center font-semibold   heading flex justify-center  items-center'>
        I worked on these technologies
      </h1>

      <div className="container mt-16 max-w-[80%] h-4/6 flex gap-6 justify-between max-[1400px]:justify-center max-lg:justify-center m-auto flex-wrap">
        {techItems.map((item) => (
          <section
            key={item.title}
            className="w-64 h-max border-2 border-white flex flex-col rounded-lg gap-3 py-3 items-center cursor-pointer"
          >
            <img src={item.imgSource} alt={`${item.title} logo`} className="w-40 h-40" />
            <h1 className="text-2xl font-semibold text-white  ">{item.title}</h1>
            <p className="text-center px-4 text-white">{item.desc}</p>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
