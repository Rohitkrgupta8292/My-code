import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)]">
      <div className="mx-auto flex justify-between px-5 h-[50px]  items-center sm:max-w-[70%] md:max-w-[70%] lg:max-w-[70%] xl:max-w-[60%] 2xl:max-w-[60%]">
        <div className="logo text-[18px] font-bold transition ease-in-out  hover:scale-105">
          <a href="/">
         <span className="text-green-400">&lt;</span>
           Pass 
          <span className="text-green-400">OP/&gt;</span>
          </a>
        </div> 
        <ul className="flex justify-between w-[230px] font-semibold text-white">
          <li className="transition ease-in-out  hover:scale-105 hover:text-green-400">
            <a href="#">About</a>
          </li>
          <li className="transition ease-in-out hover:scale-105 hover:text-green-400">
            <a href="#">Contact</a>
          </li>
          <li className="transition  ease-in-out hover:scale-105 hover:text-green-400">
            <a className="flex gap-1" href="#"><img className="invert github" src="icons/github.svg" alt="Github" /><span>Github</span></a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
