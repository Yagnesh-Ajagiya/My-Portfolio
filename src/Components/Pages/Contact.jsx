import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {

    const socialData = [
      {
        imgSource: "/Instagram Logo.png",
        title: "Instagram",
        to: "https://www.instagram.com/_yagnesh_2004/",
      },
      {
        imgSource: "/Linkedin logo.png",
        title: "LinkedIn",
        to: "https://www.linkedin.com/in/yagnesh2004/",
      },
      {
        imgSource: "/Gmail logo.png",
        title: "Gmail",
        to: "https://www.yagneshajagiya29@gmail.com",
      },
      {
        imgSource: "/Github logo.png",
        title: "Github",
        to: "https://www.github.com/Yagnesh-Ajagiya",
      }
    ]

  return (
    <div className='mt-20'>
      <h1 className='text-center text-3xl text-white'>Connect Me On Social Media</h1>

      <div className="container m-auto mt-10 w-full flex flex-col gap-5">

        {
          socialData.map((item)=> (

            <Link to={item.to} key={item.title}>
            <section   className='w-96 gap-5 m-auto h-28 border-2 flex justify-start text-center px-14 max-[400px]:px-5 items-center border-white rounded-lg overflow-hidden cursor-pointer max-[400px]:w-[280px] '>
              <img src={item.imgSource} alt="" className='w-16' />
              <h1 className='text-3xl text-white'>{item.title}</h1>
            </section>
            </Link>
          ))
        }

        

      </div>
    </div>
  )
}

export default Contact