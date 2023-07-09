import React from "react";
import GitHubCalendar from "react-github-calendar";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4 ml-120px ">
            <p className="text-4xl font-bold inline border-b-4 border-pink-500 text-left ">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-6">
          <div className="sm:text-right text-4xl font-bold ">
            <p>Hi, I am Sudhist Kumar. May I borrow a moment!</p>
          </div>
          <div>
            <p>
              I am very passionate about coding. I have been doing FULL-TIME
              course with Masai School.There I am learning Data Structures and
              Algorithm, JavaScript, Java etc.There I have been doing 1100+ hrs
              of coding.I have build some of the Projects. Feel Free to checkout
              those!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
