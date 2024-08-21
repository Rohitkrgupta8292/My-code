import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)]">
      <div className="mx-auto flex justify-between px-5 h-[60px]  items-center sm:max-w-[70%] md:max-w-[70%] lg:max-w-[70%] xl:max-w-[60%] 2xl:max-w-[60%]">
        <div className="logo text-[18px] font-bold transition ease-in-out  hover:scale-105">
          <a href="/">
         <span className="text-green-400">&lt;</span>
           Pass 
          <span className="text-green-400">OP/&gt;</span>
          </a>
        </div> 
        <ul className="flex justify-between w-[100px] font-semibold text-white">
          {/* <li className="transition ease-in-out  hover:scale-105 hover:text-green-400">
            <a href="#">About</a>
          </li>
          <li className="transition ease-in-out hover:scale-105 hover:text-green-400">
            <a href="#">Contact</a>
          </li> */}
          <li className="transition ease-in-out hover:scale-105 border-[2px] border-green-700 rounded-full bg-slate-600">
            <a className="flex gap-[6px] github px-[5px] py-[3px]" href="https://github.com/Rohitkrgupta8292/My-code" target="_blank"><img width={25} className="invert" src="icons/github.png" alt="Github" /><span>Github</span></a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
