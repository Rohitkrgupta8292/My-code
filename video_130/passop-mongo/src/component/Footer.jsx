import React from "react";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="bg-slate-800 text-white flex flex-col items-center justify-center gap-1 py-3">
        <div className="logo text-[18px] font-bold transition ease-in-out  hover:scale-105">
          <a href="/">
            <span className="text-green-400">&lt;</span>
            Pass
            <span className="text-green-400">OP/&gt;</span>
          </a>
        </div>
        <div className="flex gap-1 font-semibold">
          <span> Created with</span>
          <img width={21} src="icons/heart.png" alt="heart" />
          <span>by CodeWithRohit</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
