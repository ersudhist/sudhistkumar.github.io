import React from 'react'
import { useState } from 'react'
import {FaBars, FaTimesCircle,FaGithub,FaLinkedin, FaTwitter} from "react-icons/fa"
import {SiGmail} from 'react-icons/si'

import {BsFillPersonLinesFill} from 'react-icons/bs' 
import Profile from "../assets/pic.jpg"
import {Link} from "react-scroll"
import SUDHIST from "../assets/SUDHIST.pdf"

const Navbar = () => {
    const [nav,setNav]=useState(false)
    const handleClick=()=>setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0e2342] text-gray-300 z-1'>

    <div  className='w-[50px]'>
    <img src={Profile} alt="LOGO"  style={{marginTop:'0px'}} className=' rounded-3xl '/>
    </div>
    {/* MMMMMMMMMMEEEEEEEEEENNNNNNNNNUUUUUUU */}
    
        <ul className='hidden md:flex'>
            <li>
            <Link to="home" smooth={true} duration={500} >
            Home
        </Link>
            </li>
            <li>
            <Link to="about" smooth={true} duration={500} >
            About
        </Link>
            </li>
            <li>
            <Link to="summary" smooth={true} duration={500} >
            Stats
        </Link>
            </li>
            <li> <Link to="skills" smooth={true} duration={500} >
            Skills
        </Link></li>
            <li> <Link to="project" smooth={true} duration={500} >
            Projects
        </Link></li>
        <li >
                <a className='flex justify-between items-center' 
                href={SUDHIST} download>
                Resume 
                </a>
            </li>
            <li> <Link to="contact" smooth={true} duration={500} >
            Contact Me
        </Link></li>
        </ul>
   
    {/* MMmmmmmmmmmeeeeeeeeenu eeeeeenddddssssss */}
    {/* MMMObile menu */}
    <div onClick={handleClick} className='md:hidden z-10 ' >
        {!nav?<FaBars className='hover:bg-white hover:text-black p:3' />:<FaTimesCircle className='hover:bg-white hover:text-black p:3' />}
    </div>
        <ul className={!nav ?'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li  className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500} >
            Home
        </Link></li>
            <li className='py-6 text-4xl'> <Link onClick={handleClick} to="about" smooth={true} duration={500} >
            About
        </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500} >
            Skills
        </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="project" smooth={true} duration={500} >
            Projects
        </Link></li>
        <li className='py-6 text-4xl'>
        <a className='flex justify-between items-center' 
                href={SUDHIST} download>
                Resume 
                </a>
            </li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500} >
            Contact Me
        </Link></li>
        </ul>
{/* social icons */}
    <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li className='w-[140px] h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] bg-blue-900 duration-300'>
                <a className='flex justify-between items-center w-full text-gray-300' 
                href='https://www.linkedin.com/in/sudhist-kumar/'>
                Linkedin <FaLinkedin size={30} />
                </a>
            </li>
            <li className='w-[140px] h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] bg-black duration-300'>
                <a className='flex justify-between items-center w-full text-white' 
                href='https://github.com/ersudhist'>
                Github <FaGithub size={30} />
                </a>
            </li>
            
            <li className='w-[140px] h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] bg-red-700 duration-300'>
                <a className='flex justify-between items-center w-full text-gray-300' 
                href='mailto: kumarsudhist@gmail.com'>
                Mail <SiGmail size={30} />
                </a>
            </li>
            <li className='w-[140px] h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] bg-yellow-400 duration-300'>
                <a className='flex justify-between items-center w-full text-black' 
                href={SUDHIST} download>
                Resume <BsFillPersonLinesFill size={30} />
                </a>
            </li>
        </ul>

    </div>
    </div>
  )
}

export default Navbar