import React from 'react'
import HTML from "../assets/html.png"
import Css from "../assets/css.png"
import Javascript from "../assets/javascript.png"
import Hibernate from "../assets/hibernate.png"
import Git from "../assets/git.png"
import Github from "../assets/github.png"
import Spring from "../assets/spring.png"
import SpringBoot from "../assets/springboot.png"
import MySql from "../assets/MySql.png"
import Java from "../assets/java.png"
import Maven from "../assets/maven.jpg"
import Swagger from "../assets/swagger.png"
import Postman from "../assets/postman.png"

function Skills() {
  return (
    <div name="skills" className='bg-[#1f4882] text-gray-300 ' style={{paddingTop:'100px'}}>

      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <div className=''>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>SKILLS</p>
           <p className='py-4'>Technologies that I have worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={HTML} className='w-20 mx-auto' />
            <p className='my-4'>HTML</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Css} className='w-20 mx-auto' />
            <p className='my-4'>CSS</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Javascript} className='w-20 mx-auto' />
            <p className='my-4'>JavaScript</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Java} className='w-20 mx-auto' />
            <p className='my-4'>JAVA</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={MySql} className='w-20 mx-auto' />
            <p className='my-4'>MySQL</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Spring} className='w-20 mx-auto' />
            <p className='my-4'>Spring</p>
          </div>
          
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={SpringBoot} className='w-20 mx-auto' />
            <p className='my-4'>SpringBoot</p>
          </div>
          
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Maven} className='w-20 mx-auto' />
            <p className='my-4'>Maven</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Hibernate} className='w-20 mx-auto' />
            <p className='my-4'>Hibernate</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Swagger} className='w-20 mx-auto' />
            <p className='my-4'>Swagger</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Postman} className='w-20 mx-auto' />
            <p className='my-4'>Postman</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Git} className='w-20 mx-auto' />
            <p className='my-4'>Git</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Github} className='w-20 mx-auto' />
            <p className='my-4'>Github</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Skills