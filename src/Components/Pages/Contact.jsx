import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {

    const socialData = [
      {
        imgSource: "/Instagram logo.png",
        title: "Instagram",
        to: "https://www.instagram.com/_yagnesh_2004/",
      },
      {
        imgSource: "/Linkedin logo.png",
        title: "LinkedIn",
        to: "https://www.linkedin.com/in/yagnesh2004/",
      }
    ]

    

  return (
    <div className='mt-20'>
      <h1 className='text-center text-3xl text-white'>Connect Me On Social Media</h1>

      <div className="container m-auto mt-10 w-full flex flex-col gap-5">

        {
          socialData.map((item)=> (

            <Link to={item.to} key={item.title}>
            <section   className='w-1/4 gap-5 m-auto h-28 border-2 flex justify-center items-center border-white rounded-lg overflow-hidden cursor-pointer '>
              <img src={item.imgSource} alt="" className='h-full' />
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