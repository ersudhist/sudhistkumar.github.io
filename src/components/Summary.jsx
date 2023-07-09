import React from "react";
import GitHubCalendar from "react-github-calendar";

const Stats = () => {
  return (
    <div name="summary" className="bg-[#0a192f] text-gray-300" style={{paddingTop:'100px'}} >
                        <div className='sm:text-center pb-8 pl-4 '>
                              <p className='text-4xl font-bold inline  text-center text-gray-100  border-b-4 border-pink-500'>My Stats  </p>
                          </div>
    <div >
      <div class="max-w-7xl px-4 sm:px-6 lg:px-8"   style={{margin:"auto",width:"fit-content" }}>
        <a href="https://github.com/ersudhist">

          <img
             align="center"
            src="https://github-readme-streak-stats.herokuapp.com/?user=ersudhist&theme=horizon"
          />
        </a>
      </div>
      <br/>
      <div class="max-w-7xl px-4 sm:px-6 lg:px-8"   style={{margin:"auto",width:"fit-content" }}>
      <GitHubCalendar username="ersudhist" />
      </div>
      <br />
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        style={{
          width: "fit-content",
          height: "300px",
          display: "flex",
          paddingTop:"10px",
          margin: "auto",
          gap:"20px",
          
        }}
      >
        <a href="https://github.com/ersudhist">  
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=ersudhist&custom_title=Most_language_Used&theme=cobalt"  //launguages
          />
        </a>
        <a href="https://github.com/ersudhist">
          <img
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=ersudhist&count_private=true&show_icons=true&theme=cobalt" //stats
          />
        </a> 
        
      </div>
         
    </div>
    </div>
  );
};

export default Stats;